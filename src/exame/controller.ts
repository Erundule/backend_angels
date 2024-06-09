import * as service from './service';
import { Request, Response } from 'express';

export const getAll = async (req: Request, res: Response) => {
  try {
    const exame = await service.getAll();
    res.status(200).send(exame);
    } catch (error) {
    console.log('Could not get exame: ', error);
    res.status(400).send({ message: 'Could not get exame', errors: error });
    }
}

export const getById = async (req: Request, res: Response) => {
  try {
    const exame = await service.getById(parseInt(req.params.id));
    res.status(200).send(exame);
    } catch (error) {
    console.log('Could not get exame: ', error);
    res.status(400).send({ message: 'Could not get exame', errors: error });
    }
}

export const create = async (req: Request, res: Response) => {
  try {
    const exame = await service.create(req.body);
    res.status(201).send(exame);
    } catch (error) {
    console.log('Could not create exame: ', error);
    res.status(400).send({ message: 'Could not create exame', errors: error });
    }
}

export const deleteById = async (req: Request, res: Response) => {
  try {
    const exame = await service.deleteById(parseInt(req.params.id));
    console.log('Deleted exame: ', exame);
    res.status(200).send();
    } catch (error) {
    res.status(404).send();
    }
}
