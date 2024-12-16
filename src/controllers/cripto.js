import bcrypt from "bcrypt";

const saltRounds = parseInt(process.env.NUMERO_DE_SALTS) || 10;

// Função para criptografar uma senha.
// @param {string} senha - A senha a ser criptografada.
// @returns {Promise<string>} - Retorna a senha criptografada.

const passwordEncryptor = async (password) => {
  try {
    const senhaCriptografada = await bcrypt.hash(password, saltRounds);
    console.log(senhaCriptografada);
    return senhaCriptografada;
  } catch (erro) {
    console.error("Erro ao criptografar a senha:", erro);
    throw new Error("Erro ao processar a senha.");
  }
};

export default passwordEncryptor;
