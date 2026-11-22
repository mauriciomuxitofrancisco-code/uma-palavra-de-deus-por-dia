import * as sdk from "node-appwrite";
import { randomBytes } from "node:crypto";

export default async ({ req, res, log, error }) => {
  log("Execução iniciada");
  log("Método: " + req.method);
  log("Pedido recebido");
  try {
    const env = process.env;

    const required = [
      "APPWRITE_API_KEY",
      "APPWRITE_FUNCTION_API_ENDPOINT",
      "APPWRITE_FUNCTION_PROJECT_ID",
      "DATABASE_ID",
      "TABLE_ID",
      "ADMIN_TOKEN"
    ];

    const missing = required.filter(k => !env[k]);
    if (missing.length) {
      return res.json({
        sucesso: false,
        erro: "Variáveis em falta: " + missing.join(", ")
      }, 500);
    }

    const token = req.headers["x-admin-token"];
    if (token !== env.ADMIN_TOKEN) {
      return res.json({ sucesso: false, erro: "Acesso não autorizado." }, 401);
    }

    const body = typeof req.body === "string"
      ? JSON.parse(req.body || "{}")
      : (req.body || {});

    const action = body.action;
    const client = new sdk.Client()
      .setEndpoint(env.APPWRITE_FUNCTION_API_ENDPOINT)
      .setProject(env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(env.APPWRITE_API_KEY);

    const tablesDB = new sdk.TablesDB(client);
    const databaseId = env.DATABASE_ID;
    const tableId = env.TABLE_ID;

    const findValue = (row, names) => {
      for (const name of names) {
        if (row[name] !== undefined) return row[name];
      }
      return undefined;
    };

    const normalize = value => String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

    const getKey = (row, candidates) => {
      const keys = Object.keys(row);
      return keys.find(key =>
        candidates.some(candidate => normalize(key) === normalize(candidate))
      );
    };

    const getColumns = async () => {
      const result = await tablesDB.listColumns({
        databaseId,
        tableId
      });
      return result.columns || [];
    };

    const columns = await getColumns();

    const codeColumn = columns.find(c =>
      ["codigo", "code"].includes(normalize(c.key || c.name))
    );
    const expiryColumn = columns.find(c =>
      ["validade", "expiry", "expiracao"].includes(normalize(c.key || c.name))
    );
    const stateColumn = columns.find(c =>
      ["estado", "status"].includes(normalize(c.key || c.name))
    );
    const durationColumn = columns.find(c =>
      ["duracaodias", "duracao"].includes(normalize(c.key || c.name))
    );

    if (!codeColumn || !expiryColumn || !stateColumn || !durationColumn) {
      return res.json({
        sucesso: false,
        erro: "Não encontrei todas as colunas necessárias.",
        colunasEncontradas: columns.map(c => ({
          nome: c.name,
          chave: c.key,
          tipo: c.type
        }))
      }, 400);
    }

    const codeKey = codeColumn.key;
    const expiryKey = expiryColumn.key;
    const stateKey = stateColumn.key;
    const durationKey = durationColumn.key;

    const listAll = async () => {
      const result = await tablesDB.listRows({
        databaseId,
        tableId,
        queries: [sdk.Query.limit(500)]
      });
      return result.rows || [];
    };

    const rows = await listAll();

    const publicRow = row => ({
      codigo: row[codeKey],
      validade: row[expiryKey],
      estado: row[stateKey],
      duracaoDias: row[durationKey]
    });

    if (action === "listar") {
      return res.json({
        sucesso: true,
        codigos: rows.map(publicRow)
      });
    }

    if (action === "gerar") {
      const quantidade = Math.max(1, Math.min(500, Number(body.quantidade || 1)));
      const duracaoDias = Math.max(1, Number(body.duracaoDias || 30));
      const criados = [];

      for (let i = 0; i < quantidade; i++) {
        const codigo = randomBytes(5).toString("hex").toUpperCase();
        const validade = new Date(Date.now() + duracaoDias * 86400000).toISOString();

        const row = await tablesDB.createRow({
          databaseId,
          tableId,
          rowId: sdk.ID.unique(),
          data: {
            [codeKey]: codigo,
            [expiryKey]: validade,
            [stateKey]: "Ativo",
            [durationKey]: duracaoDias
          }
        });

        criados.push(publicRow(row));
      }

      return res.json({
        sucesso: true,
        mensagem: `${criados.length} códigos criados.`,
        codigos: criados
      });
    }

    if (["suspender", "reativar", "renovar"].includes(action)) {
      const codigo = String(body.codigo || "").trim().toUpperCase();
      if (!codigo) {
        return res.json({ sucesso: false, erro: "Código não indicado." }, 400);
      }

      const row = rows.find(r =>
        String(r[codeKey] || "").toUpperCase() === codigo
      );

      if (!row) {
        return res.json({ sucesso: false, erro: "Código não encontrado." }, 404);
      }

      let data = {};

      if (action === "suspender") {
        data[stateKey] = "Suspenso";
      }

      if (action === "reativar") {
        data[stateKey] = "Ativo";
      }

      if (action === "renovar") {
        const dias = Math.max(1, Number(body.duracaoDias || 30));
        data[expiryKey] = new Date(Date.now() + dias * 86400000).toISOString();
        data[durationKey] = dias;
        data[stateKey] = "Ativo";
      }

      const updated = await tablesDB.updateRow({
        databaseId,
        tableId,
        rowId: row.$id,
        data
      });

      return res.json({
        sucesso: true,
        mensagem: "Código atualizado com sucesso.",
        codigo: publicRow(updated)
      });
    }

    return res.json({
      sucesso: false,
      erro: "Ação desconhecida."
    }, 400);

  } catch (e) {
    error(e.message);
    return res.json({
      sucesso: false,
      erro: e.message || "Erro interno."
    }, 500);
  }
};
