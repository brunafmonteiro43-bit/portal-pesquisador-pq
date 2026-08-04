import { z } from 'zod';

export const agencyEnum = z.enum(['FAPESP', 'CAPES', 'CNPQ', 'UNICAMP']);

export const templateSchema = z.object({
  id: z.string().uuid(),
  agency: agencyEnum,
  title: z.string().min(3, 'O título deve ter pelo menos 3 caracteres'),
  description: z.string().nullable(),
  category: z.string().min(1, 'A categoria é obrigatória'),
  file_url: z.string().url('URL inválida para o arquivo'),
  version: z.string().default('1.0'),
  is_active: z.boolean().default(true),
  updated_at: z.string(),
});

export type Template = z.infer<typeof templateSchema>;
