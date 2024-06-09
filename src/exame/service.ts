import * as repository from './repository';
import { validation } from './validation';

export const getById = async (id: number) => {
  try {
    const exame = await repository.getExameById(id);
    return exame;
  } catch (error) {
    console.log('Could not get exame: ', error);
    throw error;
  }
};

export const getAll = async () => {
  try {
    const exames = await repository.getExameAll();
    return exames;
  } catch (error) {
    console.log('Could not get exame: ', error);
    throw error;
  }
};

export const create = async (exame: any) => {
    try{
        const data = validation.parse(exame);
        const exameCreated = await repository.createExame(data);
        return exameCreated;
    } catch (error) {
        console.log('Could not create exame: ', error);
        throw error;
    }
};

export const deleteById = async (id: number) => {
    try {
        const exame = await repository.deleteExame(id);
        console.log('Deleted exame: ', exame);
        return exame;
    } catch (error) {
        throw error;
    }
};