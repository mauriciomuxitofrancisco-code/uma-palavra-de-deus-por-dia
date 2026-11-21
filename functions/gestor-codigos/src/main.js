export default async ({ req, res, log, error }) => {
  try {
    const required = [
      "APPWRITE_API_KEY",
      "APPWRITE_FUNCTION_API_ENDPOINT",
      "APPWRITE_FUNCTION_PROJECT_ID",
      "DATABASE_ID",
      "TABLE_ID"
    ];

    const missing = required.filter(
      name => !process.env[name]
    );

    log("Gestor de Códigos iniciado.");

    return res.json({
      sucesso: true,
      mensagem: "A função está a funcionar.",
      runtime: process.version,
      variaveisEmFalta: missing
    });
  } catch (e) {
    error(e.message);
    return res.json({
      sucesso: false,
      erro: e.message
    }, 500);
  }
};
