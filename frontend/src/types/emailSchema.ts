import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().email(),
});

export type EmailSchema = z.infer<typeof emailSchema>;
