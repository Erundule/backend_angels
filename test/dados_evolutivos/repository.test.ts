import { expect, test } from "vitest";
import * as repository from "../../src/dados_evolutivos/repository";
import { prismaMock } from "../singleton";

test("should create new dadosEvolutivos", async () => {
  const mockDadosEvolutivos = {
    id: Math.floor(Math.random() * 2147483647),
    gestanteId: 1275350671,
    municipio: "Recife",
    diagnostico_desnutricao: "OK",
    energia_eletrica_domicilio: true,
    escolaridade: 2,
    tipo_moradia: 1,
    moradia_rede_esgoto: true,
    renda_familiar: 3000,
    tratamento_agua: true,
    amamentacao: true,
    chefe_familia: false,
    data_ultima_amamentacao: new Date("2023-01-15"),
    em_risco: false,
    estado_civil: 1,
    quantidade_abortos: 0,
    quantidade_filhos_vivos: 2,
    quantidade_gemelares: 0,
    quantidade_gestacao: 3,
    quantidade_nascidos_mortos: 0,
    quantidade_nascidos_vivos: 2,
    quantidade_obitos_semanal: 0,
    quantidade_obitos_apos_semanal: 0,
    quantidade_partos: 2,
    quantidade_partos_cesarios: 1,
    quantidade_partos_vaginais: 1,
    quantidade_rn_peso2500_4000: 2,
    quantidade_rn_peso_maior4000: 0,
    quantidade_rn_peso_menor2500: 0,
    hipertensao: false,
    diabetes: false,
    cirurgia_pelvica: false,
    infeccao_urinaria: false,
    ma_formacao_congenita: false,
    contato: "87981004812",
    contato_emergencia: "87981004815",
    data_atualizacao: new Date("2023-06-01"),
  };

  prismaMock.dadosEvolutivos.create.mockResolvedValue(mockDadosEvolutivos);

  await expect(
    repository.createDadosEvolutivos(mockDadosEvolutivos),
  ).resolves.toEqual(mockDadosEvolutivos);
});

test("should get gestante by id", async () => {
  const mockDadosEvolutivos = {
    id: Math.floor(Math.random() * 2147483647),
    gestanteId: 1275350671,
    municipio: "Recife",
    diagnostico_desnutricao: "OK",
    energia_eletrica_domicilio: true,
    escolaridade: 2,
    tipo_moradia: 1,
    moradia_rede_esgoto: true,
    renda_familiar: 3000,
    tratamento_agua: true,
    amamentacao: true,
    chefe_familia: false,
    data_ultima_amamentacao: new Date("2023-01-15"),
    em_risco: false,
    estado_civil: 1,
    quantidade_abortos: 0,
    quantidade_filhos_vivos: 2,
    quantidade_gemelares: 0,
    quantidade_gestacao: 3,
    quantidade_nascidos_mortos: 0,
    quantidade_nascidos_vivos: 2,
    quantidade_obitos_semanal: 0,
    quantidade_obitos_apos_semanal: 0,
    quantidade_partos: 2,
    quantidade_partos_cesarios: 1,
    quantidade_partos_vaginais: 1,
    quantidade_rn_peso2500_4000: 2,
    quantidade_rn_peso_maior4000: 0,
    quantidade_rn_peso_menor2500: 0,
    hipertensao: false,
    diabetes: false,
    cirurgia_pelvica: false,
    infeccao_urinaria: false,
    ma_formacao_congenita: false,
    contato: "87981004812",
    contato_emergencia: "87981004815",
    data_atualizacao: new Date("2023-06-01"),
  };

  await repository.createDadosEvolutivos(mockDadosEvolutivos);

  prismaMock.dadosEvolutivos.findUnique.mockResolvedValue(mockDadosEvolutivos);
  await expect(
    repository.getDadosEvolutivosById(mockDadosEvolutivos.id),
  ).resolves.toEqual(mockDadosEvolutivos);
});

test("should delete gestante by id", async () => {
  const mockDadosEvolutivos = {
    id: Math.floor(Math.random() * 2147483647),
    gestanteId: 1275350671,
    municipio: "Recife",
    diagnostico_desnutricao: "OK",
    energia_eletrica_domicilio: true,
    escolaridade: 2,
    tipo_moradia: 1,
    moradia_rede_esgoto: true,
    renda_familiar: 3000,
    tratamento_agua: true,
    amamentacao: true,
    chefe_familia: false,
    data_ultima_amamentacao: new Date("2023-01-15"),
    em_risco: false,
    estado_civil: 1,
    quantidade_abortos: 0,
    quantidade_filhos_vivos: 2,
    quantidade_gemelares: 0,
    quantidade_gestacao: 3,
    quantidade_nascidos_mortos: 0,
    quantidade_nascidos_vivos: 2,
    quantidade_obitos_semanal: 0,
    quantidade_obitos_apos_semanal: 0,
    quantidade_partos: 2,
    quantidade_partos_cesarios: 1,
    quantidade_partos_vaginais: 1,
    quantidade_rn_peso2500_4000: 2,
    quantidade_rn_peso_maior4000: 0,
    quantidade_rn_peso_menor2500: 0,
    hipertensao: false,
    diabetes: false,
    cirurgia_pelvica: false,
    infeccao_urinaria: false,
    ma_formacao_congenita: false,
    contato: "87981004812",
    contato_emergencia: "87981004815",
    data_atualizacao: new Date("2023-06-01"),
  };

  await repository.createDadosEvolutivos(mockDadosEvolutivos);

  prismaMock.dadosEvolutivos.delete.mockResolvedValue(mockDadosEvolutivos);
  await expect(
    repository.deleteDadosEvolutivos(mockDadosEvolutivos.id),
  ).resolves.toEqual(mockDadosEvolutivos);
});
