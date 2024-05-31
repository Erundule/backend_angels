import {
  getById as getByIdRepository,
  getAll as getAllRepository,
  createGestante as createGestanteRepository,
  deleteGestante as deleteGestanteRepository,
} from "./repository";
import { gestanteValidation } from "./validation";

export const getById = async (id: number) => {
  try {
    const gestante = await getByIdRepository(id);
    return gestante;
  } catch (error) {
    console.log("Could not get gestante: ", error);
    throw error;
  }
};

export const getAll = async () => {
  try {
    const gestantes = await getAllRepository();
    return gestantes;
  } catch (error) {
    console.log("Could not get all gestantes: ", error);
    throw error;
  }
};

export const createGestante = async (gestanteData: any) => {
  try {
    const data = gestanteValidation.parse(gestanteData);
    const gestante = await createGestanteRepository(data);
    return gestante;
  } catch (error) {
    console.log("Could not create gestante: ", error);
    throw error;
  }
};

export const deleteGestante = async (id: number) => {
  try {
    const gestante = await deleteGestanteRepository(id);
    return gestante;
  } catch (error) {
    console.log("Could not delete gestante: ", error);
    throw error;
  }
};
