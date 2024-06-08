import * as repository from "./repository";
import { validation } from "./validation";

export const getById = async (id: number) => {
  try {
    const dadosEvolutivos = await repository.getDadosEvolutivosById(id);
    return dadosEvolutivos;
  } catch (error) {
    console.log("Could not get dados evolutivos: ", error);
    throw error;
  }
};

export const getAll = async () => {
  try {
    const dadosEvolutivos = await repository.getDadosEvolutivos();
    return dadosEvolutivos;
  } catch (error) {
    console.log("Could not get dados evolutivos: ", error);
    throw error;
  }
};

export const createDadosEvolutivos = async (dadosEvolutivosData: any) => {
  try {
    const data = validation.parse(dadosEvolutivosData);
    const dadosEvolutivos = await repository.createDadosEvolutivos(data);

    return dadosEvolutivos;
  } catch (error) {
    console.log("Could not create dados evolutivos: ", error);
    throw error;
  }
};

export const deleteById = async (id: number) => {
  try {
    const dadosEvolutivos = await repository.deleteDadosEvolutivos(id);
    console.log("Deleted dados evolutivos: ", dadosEvolutivos);
  } catch (error) {
    console.log("Could not delete gestante: ", error);
    throw error;
  }
};
