import { expect, test } from "vitest";
import * as repository from "../../src/exame/repository";
import { prismaMock } from "../singleton";

test("should create new exame", async () => {
  const mockexame = {
    id: Math.floor(Math.random() * 2147483647),
    acompanhamentoId : 1,
    tipo : "sangue",
    resultado : "AB+",
    observacao : "nada a declarar",
    gestacaoId : 1,
  };

  prismaMock.exame.create.mockResolvedValue(mockexame);

  await expect(
    repository.createExame(mockexame),
  ).resolves.toEqual(mockexame);
});

test("should get exame by id", async () => {
  const mockexame = {
    id: Math.floor(Math.random() * 2147483647),
    acompanhamentoId : 1,
    tipo : "sangue",
    resultado : "AB+",
    observacao : "nada a declarar",
    gestacaoId : 1,
  };

  await repository.createExame(mockexame);

  prismaMock.exame.findUnique.mockResolvedValue(mockexame);
  await expect(
    repository.getExameById(mockexame.id),
  ).resolves.toEqual(mockexame);
});

test("should delete exame by id", async () => {
  const mockexame = {
    id: Math.floor(Math.random() * 2147483647),
    acompanhamentoId : 1,
    tipo : "sangue",
    resultado : "AB+",
    observacao : "nada a declarar",
    gestacaoId : 1,
  };

  await repository.createExame(mockexame);

  prismaMock.exame.delete.mockResolvedValue(mockexame);
  await expect(
    repository.deleteExame(mockexame.id),
  ).resolves.toEqual(mockexame);
});
