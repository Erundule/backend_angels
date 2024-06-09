import express from "express";
import * as controller from "./controller";

export const acompanhamentoRoutes = (app: express.Application) => {
  app.get("/acompanhamento", controller.getAll);
  app.get("/acompanhamento/:id", controller.getById);
  app.post("/acompanhamento", controller.create);
  app.delete("/acompanhamento/:id", controller.deleteById);
};