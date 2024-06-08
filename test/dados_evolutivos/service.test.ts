import { describe, it, expect, vi } from "vitest";
import * as repository from "../../src/dados_evolutivos/repository";
import * as service from "../../src/dados_evolutivos/service";
import { validation } from "../../src/dados_evolutivos/validation";

vi.mock("../../src/dados_evolutivos/repository");

describe("Service tests", () => {
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

  it("should get dados evolutivos by id", async () => {
    repository.getDadosEvolutivosById.mockResolvedValue(mockDadosEvolutivos);
    const result = await service.getById(mockDadosEvolutivos.id);
    expect(result).toEqual(mockDadosEvolutivos);
    expect(repository.getDadosEvolutivosById).toHaveBeenCalledWith(
      mockDadosEvolutivos.id,
    );
  });

  it("should get all dados evolutivos", async () => {
    repository.getDadosEvolutivos.mockResolvedValue([mockDadosEvolutivos]);
    const result = await service.getAll();
    expect(result).toEqual([mockDadosEvolutivos]);
    expect(repository.getDadosEvolutivos).toHaveBeenCalled();
  });

  it("should create a new dados evolutivos", async () => {
    const validateSpy = vi
      .spyOn(validation, "parse")
      .mockReturnValue(mockDadosEvolutivos);
    repository.createDadosEvolutivos.mockResolvedValue(mockDadosEvolutivos);
    const result = await service.createDadosEvolutivos(mockDadosEvolutivos);
    expect(result).toEqual(mockDadosEvolutivos);
    expect(repository.createDadosEvolutivos).toHaveBeenCalledWith(
      mockDadosEvolutivos,
    );
    validateSpy.mockRestore();
  });

  it("should delete a dados evolutivos by id", async () => {
    repository.deleteDadosEvolutivos.mockResolvedValue(mockDadosEvolutivos);
    const result = await service.deleteById(mockDadosEvolutivos.id);
    expect(result).toEqual(await service.deleteById(mockDadosEvolutivos.id));
    expect(repository.deleteDadosEvolutivos).toHaveBeenCalledWith(
      mockDadosEvolutivos.id,
    );
  });
});
