import { describe, it, expect, vi } from "vitest";
import * as repository from "../../src/acompanhamento/repository";
import * as service from "../../src/acompanhamento/service";
import { validation } from "../../src/acompanhamento/validation";

vi.mock("../../src/acompanhamento/repository");

describe("Service tests", () => {
  const mockAcompanhamento = {
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

  it("should get acompanhamento by id", async () => {
    repository.getAcompanhamentoById.mockResolvedValue(mockAcompanhamento);
    const result = await service.getById(mockAcompanhamento.id);
    expect(result).toEqual(mockAcompanhamento);
    expect(repository.getAcompanhamentoById).toHaveBeenCalledWith(
      mockAcompanhamento.id,
    );
  });

  it("should get all acompanhamento", async () => {
    repository.getAcomapanhamentoAll.mockResolvedValue([mockAcompanhamento]);
    const result = await service.getAll();
    expect(result).toEqual([mockAcompanhamento]);
    expect(repository.getAcomapanhamentoAll).toHaveBeenCalled();
  });

  it("should create a new acompanhamento", async () => {
    const validateSpy = vi
      .spyOn(validation, "parse")
      .mockReturnValue(mockAcompanhamento);
    repository.createAcompanhamento.mockResolvedValue(mockAcompanhamento);
    const result = await service.create(mockAcompanhamento);
    expect(result).toEqual(mockAcompanhamento);
    expect(repository.createAcompanhamento).toHaveBeenCalledWith(
      mockAcompanhamento,
    );
    validateSpy.mockRestore();
  });

  it("should delete a acompanhamento by id", async () => {
    repository.deleteAcompanhamento.mockResolvedValue(mockAcompanhamento);
    const result = await service.deleteById(mockAcompanhamento.id);
    expect(result).toEqual(await service.deleteById(mockAcompanhamento.id));
    expect(repository.deleteAcompanhamento).toHaveBeenCalledWith(
      mockAcompanhamento.id,
    );
  });
});
