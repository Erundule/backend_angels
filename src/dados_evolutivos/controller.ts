import express from "express";
import * as service from "./service";

export const getAll = async (req: express.Request, res: express.Response) => {
  try {
    const dadosEvolutivos = await service.getAll();
    res.status(200).send(dadosEvolutivos);
  } catch (error) {
    console.log("Could not get dados evolutivos: ", error);
    res
      .status(400)
      .send({ message: "Could not get dados evolutivos", errors: error });
  }
};

export const getById = async (req: express.Request, res: express.Response) => {
  try {
    const dadosEvolutivos = await service.getById(parseInt(req.params.id));
    res.status(200).send(dadosEvolutivos);
  } catch (error) {
    console.log("Could not get dados evolutivos: ", error);
    res
      .status(400)
      .send({ message: "Could not get dados evolutivos", errors: error });
  }
};

export const create = async (req: express.Request, res: express.Response) => {
  try {
    const dadosEvolutivos = await service.createDadosEvolutivos(req.body);
    res.status(201).send(dadosEvolutivos);
  } catch (error) {
    console.log("Could not create dados evolutivos: ", error);
    res
      .status(400)
      .send({ message: "Could not create dados evolutivos", errors: error });
  }
};

export const deleteById = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const dadosEvolutivos = await service.deleteById(parseInt(req.params.id));
    console.log("Deleted dados evolutivos: ", dadosEvolutivos);
    res.status(200).send();
  } catch (error) {
    res.status(404).send();
  }
};
