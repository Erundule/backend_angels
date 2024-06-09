const { prisma } = require("../prisma/service.ts");

// buscar por id
export const getAcompanhamentoById = async (id: number) => {
  return await prisma.acompanhamento.findUnique({
    where: {
      id,
    },
  });

};

// buscar todos
export const getAcomapanhamentoAll = async () => {
  return await prisma.acompanhamento.findMany();

};

// criar entidade
export const createAcompanhamento = async (data: object) => {
  return await prisma.acompanhamento.create({
    data,
  });
};

// deletar entidade
export const deleteAcompanhamento = async (id: number) => {
  return await prisma.acompanhamento.delete({
    where: {
      id,
    },
  });

};
