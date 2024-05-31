import { z } from "zod";

export const gestanteValidation = z.object({
  nome: z.string(),
  dataNascimento: z.date(),
  cpf: z.string().min(11).max(11),
});
