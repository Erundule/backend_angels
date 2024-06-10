import { describe, it, expect, vi } from "vitest";
import * as service from "../../src/gestacao/service";
import * as repository from "../../src/gestacao/repository";
import { gestacaoValidation } from "../../src/gestacao/validation";



vi.mock("../../src/gestacao/repository");

describe("Service tests", () => {
    const mockGestacao = {
        gestante_id: 1275350671,
        consumo_alcool: true,
        frequencia_uso_alcool: 2,
        data_ultima_menstruacao: new Date("2023-01-01"),
        data_inicio_gestacao: 1,
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

  it("should get gestacao by id", async () => {
    repository.getById.mockResolvedValue(mockGestacao);
    const result = await service.getById(mockGestacao.gestante_id);
    expect(result).toEqual(mockGestacao);
    expect(repository.getById).toHaveBeenCalledWith(
        mockGestacao.gestante_id,
    );
  });

  it("should get all gestacao", async () => {
    repository.getAll.mockResolvedValue([mockGestacao]);
    const result = await service.getAll();
    expect(result).toEqual([mockGestacao]);
    expect(repository.getAll).toHaveBeenCalled();
  });

  it("should create a new gestacao", async () => {
    const validateSpy = vi
      .spyOn(gestacaoValidation, "parse")
      .mockReturnValue(mockGestacao);
    repository.createGestacao.mockResolvedValue(mockGestacao);
    const result = await service.createGestacao(mockGestacao);
    expect(result).toEqual(mockGestacao);
    expect(repository.createGestacao).toHaveBeenCalledWith(
        mockGestacao,
    );
    validateSpy.mockRestore();
  });

  it("should delete a gestacao by id", async () => {
    repository.deleteGestacao.mockResolvedValue(mockGestacao);
    const result = await service.deleteGestacao(mockGestacao.gestante_id);
    expect(result).toEqual(await service.deleteGestacao(mockGestacao.gestante_id));
    expect(repository.deleteGestacao).toHaveBeenCalledWith(
        mockGestacao.gestante_id,
    );
  });
});
