import * as service from './service';
import { Request, Response } from 'express';

export const getAll = async (req: Request, res: Response) => {
  try {
    const acompanhamento = await service.getAll();
    res.status(200).send(acompanhamento);
  } catch (error) {
    console.log('Could not get acompanhamento: ', error);
    res.status(400).send({ message: 'Could not get acompanhamento', errors: error });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const acompanhamento = await service.getById(parseInt(req.params.id));
    res.status(200).send(acompanhamento);
  } catch (error) {
    console.log('Could not get acompanhamento: ', error);
    res.status(400).send({ message: 'Could not get acompanhamento', errors: error });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const acompanhamento = await service.create(req.body);
    res.status(201).send(acompanhamento);
  } catch (error) {
    console.log('Could not create acompanhamento: ', error);
    res.status(400).send({ message: 'Could not create acompanhamento', errors: error });
  }
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    const acompanhamento = await service.deleteById(parseInt(req.params.id));
    console.log('Deleted acompanhamento: ', acompanhamento);
    res.status(200).send();
  } catch (error) {
    res.status(404).send();
  }
};

