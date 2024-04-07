import { AuthCredentialsValidator } from "../lib/validators/account-credentials-validators";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient();

      //comprobar si el usuario ya existe

      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });

      if (users.length !== 0)
        throw new TRPCError({ code: 'CONFLICT', message: 'El usuario ya existe' });

        await payload.create({
        collection: 'users',
        data: {
            email,
            password,
            role: 'user',
        },
        })

    return { success: true, sentToEmail: email }
  }),


  verifyEmail: publicProcedure.input (z.object({
    token: z.string(),
  })).query(async ({ input }) => {
    const payload = await getPayloadClient();
    const { token } = input;

    const isVerified = await payload.verifyEmail({
      collection: 'users',
      token,
    })

    if(!isVerified) 
      throw new TRPCError({ code: 'UNAUTHORIZED' })

    return { success: true }
  }),

  signIn: publicProcedure
  .input(AuthCredentialsValidator)
  .mutation(async ({ input, ctx }) => {
    const { email, password } = input
    const { res } = ctx

    const payload = await getPayloadClient()

    try {
      await payload.login({
        collection: 'users',
        data: {
          email,
          password,
        },
        res,
      })

      return { success: true }
    } catch (err:any) {
      if (err.code=== 'INVALID_CREDENTIALS') {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Credenciales inválidas' });
      } else if (err.code === 'USER_NOT_FOUND') {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Usuario no encontrado' });
      } else {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Error interno del servidor' });
      }
    }
  }),

});
