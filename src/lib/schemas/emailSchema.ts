import { z } from "zod";

export const emailZodSchema = z.object({
  email: z.string().email(),
});

export type Email = z.infer<typeof emailZodSchema>;
