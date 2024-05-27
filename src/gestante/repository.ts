const { prisma } = require("../prisma/service.ts");

//buscar por id
export const getById = async (id: number) => {
  const gestante = await prisma.gestante.findUnique({
    where: {
      id,
    },
  });

  return gestante;
};

//buscat todos 
export const getAll = async () => {
  const gestantes = await prisma.gestante.findMany();

  return gestantes;
};

//criar 
export const createGestante = async (data: object) => {
  const gestante = await prisma.gestante.create({
    data,
  });

  return gestante;
};

//delete
export const deleteGestante = async (id: number) => {
  const gestante = await prisma.gestante.delete({
    where: {
      id,
    },
  });

  return gestante;
};


