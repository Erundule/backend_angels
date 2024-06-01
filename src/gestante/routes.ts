import express from "express";
import { getById, getAll, createGestante, deleteGestante } from "./controller";

export const gestanteRoutes = (app: express.Application) => {
  app.get("/gestante", getAll);
  app.get("/gestante/:id", getById);
  app.post("/gestante", createGestante);
  app.delete("/gestante/:id", deleteGestante);
};
