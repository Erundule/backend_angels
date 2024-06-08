import { describe, it, expect, vi } from "vitest";
import * as repository from "../../src/gestante/repository";
import * as service from "../../src/gestante/service";
import { gestanteValidation } from "../../src/gestante/validation";

vi.mock("../../src/gestante/repository");

describe("Service tests", () => {
  const mockGestante = {
    id: 1,
    nome: "Jane Doe",
    dataNascimento: new Date(),
    cpf: "12345678901",
  };

  it("should get gestante by id", async () => {
    repository.getById.mockResolvedValue(mockGestante);
    const result = await service.getById(1);
    expect(result).toEqual(mockGestante);
    expect(repository.getById).toHaveBeenCalledWith(1);
  });

  it("should get all gestantes", async () => {
    repository.getAll.mockResolvedValue([mockGestante]);
    const result = await service.getAll();
    expect(result).toEqual([mockGestante]);
    expect(repository.getAll).toHaveBeenCalled();
  });

  it("should create a new gestante", async () => {
    const validateSpy = vi
      .spyOn(gestanteValidation, "parse")
      .mockReturnValue(mockGestante);
    repository.createGestante.mockResolvedValue(mockGestante);
    const result = await service.createGestante(mockGestante);
    expect(result).toEqual(mockGestante);
    expect(repository.createGestante).toHaveBeenCalledWith(mockGestante);
    validateSpy.mockRestore();
  });

  it("should delete a gestante by id", async () => {
    repository.deleteGestante.mockResolvedValue(mockGestante);
    const result = await service.deleteGestante(1);
    expect(result).toEqual(mockGestante);
    expect(repository.deleteGestante).toHaveBeenCalledWith(1);
  });
});
