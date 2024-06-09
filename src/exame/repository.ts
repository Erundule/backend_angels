const { prisma } = require("../prisma/service.ts");

// buscar por id
export const getExameById = async (id: number) => {
  return await prisma.exame.findUnique({
    where: {
      id,
    },
  });
};

// buscar todos
export const getExameAll = async () => {
  return await prisma.exame.findMany();

};

// criar entidade
export const createExame = async (data: object) => {
  return await prisma.exame.create({
    data,
  });
};

// deletar entidade
export const deleteExame = async (id: number) => {
  return await prisma.exame.delete({
    where: {
      id,
    },
  });
};

