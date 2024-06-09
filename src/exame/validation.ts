import z from 'zod';

export const validation = z.object({
    acompanhamentoId : z.number(),
    tipo : z.string(),
    resultado : z.string(),
    observacao : z.string(),
    gestacaoId : z.number(),
});