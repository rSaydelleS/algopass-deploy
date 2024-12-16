import genPasswod from "../controllers/genPassword.js";
import passwordEncryptor from "../controllers/cripto.js";

const routes = (fastify, options, done) => {
  fastify.get("/", (req, reply) => {
    return reply.status(201).send({ data: "Conectado ao algopass!" });
  });

  fastify.put("/update", async (req, reply) => {
    const { password } = req.body;

    try {
      const updatedPassword = await passwordEncryptor(password);
      return reply.status(201).send({
        data: updatedPassword,
        message: "Senha atualizada com sucesso",
      });
    } catch (error) {
      return reply.status(400).send({
        message: "Erro ao atualizar senha",
      });
    }
  });

  fastify.post("/cripto", async (req, reply) => {
    const { password } = req.body;
    try {
      const newPassword = await passwordEncryptor(password);
      return reply.status(200).send({
        data: newPassword,
        message: "Senha criada com sucesso",
      });
    } catch (error) {}
  });

  fastify.post("/password", (req, reply) => {
    const { length, digits, special } = req.body;

    if (!length) {
      return reply
        .status(400)
        .send({ message: "O tamanho da senha não foi fornecido." });
    }
    const password = genPasswod(length, digits, special);

    return reply.send({
      messag: "Senha criada com sucesso",
      data: password,
    });
  });

  done();
};

export default routes;
