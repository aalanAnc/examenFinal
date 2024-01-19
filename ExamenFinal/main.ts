import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "npm:mongoose@8.0.0";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import express from "npm:express@4.17.1";

const env = await load();
const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

try {
  // Conexion con mongo DB
  MONGO_URL ? await mongoose.connect(MONGO_URL) : null;
  console.log("Conexión exitosa a MongoDB");
} catch (error) {
  console.error("Error al conectar a MongoDB:", error);
}
const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.info("Server started on port 8000");
});
