import { expect, test } from "vitest";
import * as repository from "../../src/gestacao/repository";
import { prismaMock } from "../singleton";


test("should create new gestao", async () => {
  const mockGestacao = {
    id: Math.floor(Math.random() * 2147483647),
    gestanteId: 1,
    consumo_alcool: true,
    frequencia_uso_alcool: 2,
    data_ultima_menstruacao: new Date("2023-01-01"),
    data_inicio_gestacao: new Date("2023-01-01"),
    fator_rh: 1,
    fuma: false,
    quantidade_cigarros_dia: 0,
    uso_drogas: 0,
    gravidez_planejada: true,
    grupo_sanguineo: 2,
    peso_antes_gestacao: 60.5,
    risco_gestacional: 0,
    vacina_hepatite_b: true,
    situacao_gestacional: 1,
  };

  prismaMock.dadosEvolutivos.create.mockResolvedValue(mockGestacao);

  await expect(
    repository.createGestacao(mockGestacao),
  ).resolves.toEqual(mockGestacao);
});

test("should get gestao by id", async () => {
  const mockGestacao = {
    id: Math.floor(Math.random() * 2147483647),
    gestanteId: 1,
    consumo_alcool: true,
    frequencia_uso_alcool: 2,
    data_ultima_menstruacao: new Date("2023-01-01"),
    data_inicio_gestacao: new Date("2023-01-01"),
    fator_rh: 1,
    fuma: false,
    quantidade_cigarros_dia: 0,
    uso_drogas: 0,
    gravidez_planejada: true,
    grupo_sanguineo: 2,
    peso_antes_gestacao: 60.5,
    risco_gestacional: 0,
    vacina_hepatite_b: true,
    situacao_gestacional: 1,
  };

  await repository.createGestacao(mockGestacao);

  prismaMock.dadosEvolutivos.findUnique.mockResolvedValue(mockGestacao);
  await expect(
    repository.getById(mockGestacao.id),
  ).resolves.toEqual(mockGestacao);
});

test("should delete gestao by id", async () => {
  const mockGestacao = {
    id: Math.floor(Math.random() * 2147483647),
    gestanteId: 1,
    consumo_alcool: true,
    frequencia_uso_alcool: 2,
    data_ultima_menstruacao: new Date("2023-01-01"),
    data_inicio_gestacao: new Date("2023-01-01"),
    fator_rh: 1,
    fuma: false,
    quantidade_cigarros_dia: 0,
    uso_drogas: 0,
    gravidez_planejada: true,
    grupo_sanguineo: 2,
    peso_antes_gestacao: 60.5,
    risco_gestacional: 0,
    vacina_hepatite_b: true,
    situacao_gestacional: 1,
  };

  await repository.createGestacao(mockGestacao);

  prismaMock.dadosEvolutivos.delete.mockResolvedValue(mockGestacao);
  await expect(
    repository.deleteGestacao(mockGestacao.id),
  ).resolves.toEqual(mockGestacao);
});





















