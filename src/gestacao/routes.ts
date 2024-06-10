import express from "express";
import { getById, getAll, createGestacao, deleteGestacao} from "./controller";

export const gestacaoRoutes = (app: express.Application) => {
  app.get("/gestacao", getAll);
  app.get("/gestacao/:id", getById);
  app.post("/gestacao", createGestacao);
  app.delete("/gestacao/:id", deleteGestacao);
};
