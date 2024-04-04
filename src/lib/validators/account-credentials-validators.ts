import { z } from 'zod';

export const AuthCredentialsValidator = z.object({
    email: z.string().email({ message: "El email es obligatorio" }),
    password: z.string().min(8, { message: "La contraseña debe ser al menos de 8 caracteres" }),
})


export type TAuthCredentials = z.infer<typeof AuthCredentialsValidator>

