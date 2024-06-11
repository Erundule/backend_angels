import { describe, it, expect, vi } from "vitest";
import * as repository from "../../src/exame/repository";
import * as service from "../../src/exame/service";
import { validation } from "../../src/exame/validation";

vi.mock("../../src/exame/repository");

describe("Service tests", () => {
  const mockexame = {
    id: Math.floor(Math.random() * 2147483647),
    exameId : 1,
    tipo : "sangue",
    resultado : "AB+",
    observacao : "nada a declarar",
    gestacaoId : 1,
  };

  it("should get exame by id", async () => {
    repository.getExameById.mockResolvedValue(mockexame);
    const result = await service.getById(mockexame.id);
    expect(result).toEqual(mockexame);
    expect(repository.getExameById).toHaveBeenCalledWith(
      mockexame.id,
    );
  });

  it("should get all exame", async () => {
    repository.getExameAll.mockResolvedValue([mockexame]);
    const result = await service.getAll();
    expect(result).toEqual([mockexame]);
    expect(repository.getExameAll).toHaveBeenCalled();
  });

  it("should create a new exame", async () => {
    const validateSpy = vi
      .spyOn(validation, "parse")
      .mockReturnValue(mockexame);
    repository.createExame.mockResolvedValue(mockexame);
    const result = await service.create(mockexame);
    expect(result).toEqual(mockexame);
    expect(repository.createExame).toHaveBeenCalledWith(
      mockexame,
    );
    validateSpy.mockRestore();
  });

  it("should delete a exame by id", async () => {
    repository.deleteExame.mockResolvedValue(mockexame);
    const result = await service.deleteById(mockexame.id);
    expect(result).toEqual(await service.deleteById(mockexame.id));
    expect(repository.deleteExame).toHaveBeenCalledWith(
      mockexame.id,
    );
  });
});
