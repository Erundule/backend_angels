import express from "express";
import { gestanteRoutes } from "./gestante/routes";
import { dadosEvolutivosRoutes } from "./dados_evolutivos/routes";
import { acompanhamentoRoutes } from "./acompanhamento/routes";
import { exameRoutes } from "./exame/routes";
import {gestacaoRoutes} from "./gestacao/routes"

module.exports = (app: express.Application) => {
  gestanteRoutes(app);
  dadosEvolutivosRoutes(app);
  acompanhamentoRoutes(app);
  exameRoutes(app);
  gestacaoRoutes(app)
};
