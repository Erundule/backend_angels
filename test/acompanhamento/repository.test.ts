import { expect, test } from "vitest";
import * as repository from "../../src/acompanhamento/repository";
import { prismaMock } from "../singleton";

test("should create new acompanhamento", async () => {
  const mockacompanhamento = {
    id: Math.floor(Math.random() * 2147483647),
    gestacaoId: 1,
    data_acompanhamento: new Date("2023-06-01"),
    realizado_por: "doutor",
    peso_atual: 70,
    idade_gestacional: 32,
    pressao_arterial: "18/12",
    batimentos_cardiacos: 123,
    altura_uterina: 34,
    tipo: "abc",
  };

  prismaMock.acompanhamento.create.mockResolvedValue(mockacompanhamento);

  await expect(
    repository.createAcompanhamento(mockacompanhamento),
  ).resolves.toEqual(mockacompanhamento);
});

test("should get acompanhamento by id", async () => {
  const mockacompanhamento = {
    id: Math.floor(Math.random() * 2147483647),
    gestacaoId: 1,
    data_acompanhamento: new Date("2023-06-01"),
    realizado_por: "doutor",
    peso_atual: 70,
    idade_gestacional: 32,
    pressao_arterial: "18/12",
    batimentos_cardiacos: 123,
    altura_uterina: 34,
    tipo: "abc",
  };

  await repository.createAcompanhamento(mockacompanhamento);

  prismaMock.acompanhamento.findUnique.mockResolvedValue(mockacompanhamento);
  await expect(
    repository.getAcompanhamentoById(mockacompanhamento.id),
  ).resolves.toEqual(mockacompanhamento);
});

test("should delete acompanhamento by id", async () => {
  const mockacompanhamento = {
    id: Math.floor(Math.random() * 2147483647),
    gestacaoId: 1,
    data_acompanhamento: new Date("2023-06-01"),
    realizado_por: "doutor",
    peso_atual: 70,
    idade_gestacional: 32,
    pressao_arterial: "18/12",
    batimentos_cardiacos: 123,
    altura_uterina: 34,
    tipo: "abc",
  };

  await repository.createAcompanhamento(mockacompanhamento);

  prismaMock.acompanhamento.delete.mockResolvedValue(mockacompanhamento);
  await expect(
    repository.deleteAcompanhamento(mockacompanhamento.id),
  ).resolves.toEqual(mockacompanhamento);
});
