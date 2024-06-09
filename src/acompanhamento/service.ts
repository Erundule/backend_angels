import * as repository from './repository';
import { validation } from './validation';

export const getById = async (id: number) => {
  try {
    const acompanhamento = await repository.getAcompanhamentoById(id);
    return acompanhamento;
  } catch (error) {
    console.log('Could not get dados evolutivos: ', error);
    throw error;
  }
};

export const getAll = async () => {
  try {
    const acompanhamentos = await repository.getAcomapanhamentoAll();
    return acompanhamentos;
  } catch (error) {
    console.log('Could not get dados evolutivos: ', error);
    throw error;
  }
};

export const create = async (acompanhamentoData: any) => {
    try{
        const data = validation.parse(acompanhamentoData);
        const acompanhamentoCreated = await repository.createAcompanhamento(data);
        return acompanhamentoCreated;
    } catch (error) {
        console.log('Could not create dados evolutivos: ', error);
        throw error;
    }
};
  

export const deleteById = async (id: number) => {
    try {
        const acompanhamento = await repository.deleteAcompanhamento(id);
        console.log('Deleted dados evolutivos: ', acompanhamento);
        return acompanhamento;
    } catch (error) {
        throw error;
    }
};
