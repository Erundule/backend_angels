import { z } from "zod";

export const gestacaoValidation = z.object({
  gestante_id: z.number(), 
  consumo_alcool: z.boolean(), 
  frequencia_uso_alcool: z.number(), 
  data_ultima_menstruacao: z.date(), 
  data_inicio_gestacao: z.number(),
  fator_rh: z.number(), 
  fuma: z.boolean(), 
  quantidade_cigarros_dia: z.number(), 
  uso_drogas: z.number(),
  gravidez_planejada: z.boolean(), 
  grupo_sanguineo: z.number(),
  peso_antes_gestacao: z.any(), 
  risco_gestacional: z.number(),
  vacina_hepatite_b: z.boolean(), 
  situacao_gestacional: z.number(), 
});
