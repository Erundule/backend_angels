import express from "express";
import { gestanteRoutes } from "./gestante/routes";

module.exports = (app: express.Application) => {
  gestanteRoutes(app);
};
