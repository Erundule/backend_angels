const { prisma } = require("../prisma/service.ts");

//buscar por id
export const getById = async (id: number) => {
  const gestacao = await prisma.gestacao.findUnique({
    where: {
      id,
    },
  });

  return gestacao;
};

//buscat todos 
export const getAll = async () => {
  const gestacao = await prisma.gestacao.findMany();

  return gestacao;
};

//criar 
export const createGestante = async (data: object) => {
  const gestacao = await prisma.gestacao.create({
    data,
  });

  return gestacao;
};

//delete
export const deleteGestante = async (id: number) => {
  const gestacao = await prisma.gestacao.delete({
    where: {
      id,
    },
  });

  return gestacao;
};


