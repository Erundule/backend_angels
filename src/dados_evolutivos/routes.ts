import express from "express";
import { getAll, getById, create, deleteById } from "./controller";

export const dadosEvolutivosRoutes = (app: express.Application) => {
  app.get("/dadosEvolutivos", getAll);
  app.get("/dadosEvolutivos/:id", getById);
  app.post("/dadosEvolutivos", create);
  app.delete("dadosEvolutivos/:id", deleteById);
};
