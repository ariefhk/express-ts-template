import { z, ZodType } from "zod"

export class HelloValidation {
  static readonly CREATE: ZodType = z.object({
    word: z.string().min(1, { message: "Sapaan Harus dimasukan" }),
  })
}
