import z from 'zod';

export const validation = z.object({
           
    gestacaoId: z.number(),          
    data_acompanhamento: z.string(),
    realizado_por: z.string(),        
    peso_atual: z.number(),           
    idade_gestacional: z.number(),    
    pressao_arterial: z.string(),    
    batimentos_cardiacos: z.number(), 
    altura_uterina: z.number(),    
    tipo: z.string(),

});