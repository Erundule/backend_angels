import * as controller from "./controller";
import express from "express";

export const exameRoutes = (app: express.Application) => {
  app.get("/exame", controller.getAll);
  app.get("/exame/:id", controller.getById);
  app.post("/exame", controller.create);
  app.delete("/exame/:id", controller.deleteById);
};