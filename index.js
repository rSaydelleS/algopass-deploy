import Fastify from "fastify";
const app = Fastify({ logger: true });
const PORT = process.env.PORT || 8080;
import Rotas from "./src/routes/routes.js";
import dotenv from "dotenv";
import fastifyCors from "@fastify/cors";
dotenv.config();

app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
  preflight: true,
});
app.register(Rotas, { prefix: "pass" });
app.get("/", async (req, reply) => {
  reply.send({ message: "Bem-vindo ao servidor do sistema!" });
});

try {
  app.listen({ port: PORT }, () => {
    console.log(`servidor operacional na porta: ${PORT}`);
  });
} catch (error) {
  console.error(error);
}
