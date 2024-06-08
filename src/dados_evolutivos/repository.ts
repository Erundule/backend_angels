const { prisma } = require("../prisma/service.ts");

export async function getDadosEvolutivos() {
  return await prisma.dadosEvolutivos.findMany();
}

export async function getDadosEvolutivosById(id: number) {
  return await prisma.dadosEvolutivos.findUnique({
    where: {
      id,
    },
  });
}

export async function createDadosEvolutivos(data: object) {
  return await prisma.dadosEvolutivos.create({
    data,
  });
}

export async function deleteDadosEvolutivos(id: number) {
  return await prisma.dadosEvolutivos.delete({
    where: {
      id,
    },
  });
}
