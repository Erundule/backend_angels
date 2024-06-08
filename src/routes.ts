import express from "express";
import { gestanteRoutes } from "./gestante/routes";
import { dadosEvolutivosRoutes } from "./dados_evolutivos/routes";

module.exports = (app: express.Application) => {
  gestanteRoutes(app);
  dadosEvolutivosRoutes(app);
};
