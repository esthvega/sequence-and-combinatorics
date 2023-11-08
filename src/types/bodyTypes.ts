import { z } from 'zod';

export const sequenceBodySchema = z.object({
  sequence: z.array(z.number()).min(1),
});

export const subsequenceBodySchema = z.object({
  subsequence: z.array(z.array(z.number()).min(1)).min(1),
});
