import { z } from "zod"

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email inválido",
      required_error: "O email é obrigatório",
    })
    .email("Email inválido"),
  password: z
    .string({
      invalid_type_error: "Senha inválida",
      required_error: "A senha é obrigatória",
    })
    .min(1, "A senha é obrigatória"),
})

export type Login = z.infer<typeof LoginSchema>
