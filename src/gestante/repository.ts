const { prisma } = require("../prisma/service.ts");

export const getById = async (id: number) => {
  const gestante = await prisma.gestante.findUnique({
    where: {
      id,
    },
  });

  return gestante;
};

export const getAll = async () => {
  const gestantes = await prisma.gestante.findMany();

  return gestantes;
};

export const createGestante = async (data: object) => {
  const gestante = await prisma.gestante.create({
    data,
  });

  return gestante;
};

export const deleteGestante = async (id: number) => {
  const gestante = await prisma.gestante.delete({
    where: {
      id,
    },
  });

  return gestante;
};
