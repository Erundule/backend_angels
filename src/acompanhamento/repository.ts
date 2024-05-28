const { prisma } = require("../prisma/service.ts");

// buscar por id
export const getById = async (id: number) => {
  const acompanhamento = await prisma.acompanhamento.findUnique({
    where: {
      id,
    },
  });

  return acompanhamento;
};

// buscar todos
export const getAll = async () => {
  const acompanhamentos = await prisma.acompanhamento.findMany();

  return acompanhamentos;
};

// criar entidade
export const createAcompanhamento = async (data: object) => {
  const acompanhamento = await prisma.acompanhamento.create({
    data,
  });

  return acompanhamento;
};

// deletar entidade
export const deleteAcompanhamento = async (id: number) => {
  const acompanhamento = await prisma.acompanhamento.delete({
    where: {
      id,
    },
  });

  return acompanhamento;
};
