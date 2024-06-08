import { expect, test } from "vitest";
import {
  getById,
  createGestante,
  deleteGestante,
} from "../../src/gestante/repository";
import { prismaMock } from "../singleton";

test("should create new gestante", async () => {
  const gestante = {
    id: Math.floor(Math.random() * 2147483647),
    nome: "Maria",
    data_nascimento: new Date("2000-05-27"),
    cpf: `${Math.floor(Math.random() * 99999999999)}`,
  };

  prismaMock.gestante.create.mockResolvedValue(gestante);

  await expect(createGestante(gestante)).resolves.toEqual(gestante);
});

test("should get gestante by id", async () => {
  const gestante = {
    id: Math.floor(Math.random() * 2147483647),
    nome: "Maria",
    data_nascimento: new Date("2000-05-27"),
    cpf: `${Math.floor(Math.random() * 99999999999)}`,
  };

  await createGestante(gestante);

  prismaMock.gestante.findUnique.mockResolvedValue(gestante);
  await expect(getById(gestante.id)).resolves.toEqual(gestante);
});

test("should delete gestante by id", async () => {
  const gestante = {
    id: Math.floor(Math.random() * 2147483647),
    nome: "Maria",
    data_nascimento: new Date("2000-05-27"),
    cpf: `${Math.floor(Math.random() * 99999999999)}`,
  };

  await createGestante(gestante);

  prismaMock.gestante.delete.mockResolvedValue(gestante);
  await expect(deleteGestante(gestante.id)).resolves.toEqual(gestante);
});
