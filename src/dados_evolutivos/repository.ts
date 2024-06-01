const { prisma } = require("../prisma/service.ts");

async function getDadosEvolutivos() {
  return await prisma.dadosEvolutivos.findMany();
}

async function getDadosEvolutivosById(id: number) {
  return await prisma.dadosEvolutivos.findUnique({
    where: {
      id,
    },
  });
}

async function createDadosEvolutivos(data: object) {
  return await prisma.dadosEvolutivos.create({
    data,
  });
}

async function deleteDadosEvolutivos(id: number) {
  return await prisma.dadosEvolutivos.delete({
    where: {
      id,
    },
  });
}

