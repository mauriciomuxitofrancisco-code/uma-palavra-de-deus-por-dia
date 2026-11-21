import { Client, TablesDB, Query } from "node-appwrite";

const allowedOrigin =
  "https://mauriomuxitofrancisco-code.github.io";

export default async ({ req, res, log, error }) => {
  const headers = {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };

  if (req.method === "OPTIONS") {
    return res.empty(204, headers);
  }

  if (req.method !== "POST") {
    return res.json({ erro: "Método não permitido." }, 405, headers);
  }

  try {
    const codigo = String(req.bodyJson?.codigo || "")
      .trim()
      .toUpperCase();

    if (!codigo) {
      return res.json({ erro: "Introduz o código." }, 400, headers);
    }

    const client = new Client()
      .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);

    const db = new TablesDB(client);

    const resultado = await db.listRows({
      databaseId: process.env.DATABASE_ID,
      tableId: process.env.TABLE_ID,
      queries: [
        Query.equal("codigo", [codigo]),
        Query.limit(1)
      ]
    });

    if (!resultado.rows.length) {
      return res.json({ valido: false, mensagem: "Código não encontrado." }, 200, headers);
    }

    const pulseira = resultado.rows[0];
    const expirou = new Date(pulseira.validade).getTime() <= Date.now();

    if (pulseira.estado !== "ativo" || expirou) {
      return res.json({
        valido: false,
        mensagem: "O teu acesso terminou."
      }, 200, headers);
    }

    return res.json({
      valido: true,
      mensagem: "Acesso autorizado.",
      validade: pulseira.validade
    }, 200, headers);

  } catch (e) {
    error(e.message);
    return res.json({ erro: "Não foi possível validar o código." }, 500, headers);
  }
};
