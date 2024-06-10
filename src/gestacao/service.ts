import {
    getById as getByIdRepository,
    getAll as getAllRepository,
    createGestacao as createGestacaoRepository,
    deleteGestacao as deleteGestacaoRepository,
  } from "./repository";

  import { gestacaoValidation } from "./validation";
  
  export const getById = async (id: number) => {
    try {
      const gestacao = await getByIdRepository(id);
      return gestacao;
    } catch (error) {
      console.log("Could not get gestacao: ", error);
      throw error;
    }
  };
  
  export const getAll = async () => {
    try {
      const gestacoes = await getAllRepository();
      return gestacoes;
    } catch (error) {
      console.log("Could not get all gestacao: ", error);
      throw error;
    }
  };
  
  export const createGestacao = async (gestacaoData: any) => {
    try {
      const data = gestacaoValidation.parse(gestacaoData);
      const gestacao = await createGestacaoRepository(data);
      return gestacao;
    } catch (error) {
      console.log("Could not create gestacao: ", error);
      throw error;
    }
  };
  
  export const deleteGestacao = async (id: number) => {
    try {
      const gestante = await deleteGestacaoRepository(id);
      return gestante;
    } catch (error) {
      console.log("Could not delete gestacao: ", error);
      throw error;
    }
  };
  