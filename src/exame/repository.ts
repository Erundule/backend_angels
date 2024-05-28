const { prisma } = require("../prisma/service.ts");

// buscar por id
export const getById = async (id: number) => {
  const exame = await prisma.exame.findUnique({
    where: {
      id,
    },
  });

  return exame;
};

// buscar todos
export const getAll = async () => {
  const exames = await prisma.exame.findMany();

  return exames;
};

// criar entidade
export const createExame = async (data: object) => {
  const exame = await prisma.exame.create({
    data,
  });

  return exame;
};

// deletar entidade
export const deleteExame = async (id: number) => {
  const exame = await prisma.exame.delete({
    where: {
      id,
    },
  });

  return exame;
};

