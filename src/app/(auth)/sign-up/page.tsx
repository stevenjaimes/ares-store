"use client";

import { Icon } from "@/components/Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AuthCredentialsValidator,
  TAuthCredentials,
} from "@/lib/validators/account-credentials-validators";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";
import { ZodError } from "zod";
import { useRouter } from "next/navigation";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentials>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const router = useRouter()

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({
 
    onError: (error) => {
      if (error.data?.code === "CONFLICT") {
        toast.error(
          "Este correo ya se encuentra registrado. Por favor inicia sesión"
        );
        return;
      }

      if (error instanceof ZodError) {
        toast.error(error.issues[0].message);
        return;
      }

      toast.error("Ocurrio un error inesperado. Por favor intenta de nuevo");
    },

    onSuccess: ({sentToEmail}) => {
      toast.success(`El correo de verificación se envió  a ${sentToEmail}`)
      router.push('/verify-email?to=' + sentToEmail)
    }





  });

  const onSubmit = ({ email, password }: TAuthCredentials) => {
    mutate({ email, password });

    console.log(email, password);
  };

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icon.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold ">Crear una cuenta</h1>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-in"
            >
              Listo para tener una cuenta? Iniciar Sesion
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2 ">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="Tu Email"
                  />

                  {errors?.email && (
                    <p className="px-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2 ">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    type="password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="Contraseña"
                  />
                  {errors?.password && (
                    <p className="px-1 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button> Iniciar sesión</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
