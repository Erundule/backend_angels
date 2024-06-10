import express from "express";

import * as gestanteService from "./service";

export const getById = async (req: express.Request, res: express.Response) => {
  try {
    const gestacao = await gestanteService.getById(Number(req.params.id));
    res.status(200).send(gestacao);
  } catch (error) {
    console.log("Error while getting gestacao: ", error);
    res.status(400).send(error);
  }
};

export const getAll = async (req: express.Request, res: express.Response) => {
  try {
    const gestantes = await gestanteService.getAll();
    res.status(200).send(gestantes);
  } catch (error) {
    console.log("Error while getting all gestantes: ", error);
    res.status(400).send(error);
  }
};

export const createGestacao = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const gestante = await gestanteService.createGestacao(req.body);
    res.status(200).send(gestante);
  } catch (error) {
    console.log("Error while creating gestante: ", error);
    res.status(400).send(error);
  }
};

export const deleteGestacao = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    await gestanteService.deleteGestacao(Number(req.params.id));
    res.status(200).send();
  } catch (error) {
    console.log("Error while deleting gestante: ", error);
    res.status(400).send(error);
  }
};
