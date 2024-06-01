import express from "express";

import * as gestanteService from "./service";

export const getById = async (req: express.Request, res: express.Response) => {
  try {
    const gestante = await gestanteService.getById(Number(req.params.id));
    res.status(200).send(gestante);
  } catch (error) {
    console.log("Error while getting gestante: ", error);
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

export const createGestante = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const gestante = await gestanteService.createGestante(req.body);
    res.status(200).send(gestante);
  } catch (error) {
    console.log("Error while creating gestante: ", error);
    res.status(400).send(error);
  }
};

export const deleteGestante = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    await gestanteService.deleteGestante(Number(req.params.id));
    res.status(200).send();
  } catch (error) {
    console.log("Error while deleting gestante: ", error);
    res.status(400).send(error);
  }
};
