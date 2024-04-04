'use client'

import { Icon } from "@/components/Logo";
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import {
    AuthCredentialsValidator,
    TAuthCredentials,
  } from "@/lib/validators/account-credentials-validators";
import { trpc } from '@/trpc/client'
import { toast } from 'sonner'
import { ZodError } from 'zod'
import { useRouter, useSearchParams } from 'next/navigation'

const Page = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const isSeller = searchParams.get('as') === 'seller'
  const origin = searchParams.get('origin')

  const continueAsSeller = () => {
    router.push('?as=seller')
  }

  const continueAsBuyer = () => {
    router.replace('/sign-in', undefined)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentials>({
    resolver: zodResolver(AuthCredentialsValidator),
  })

  const { mutate: signIn, isLoading } =
    trpc.auth.signIn.useMutation({
      onSuccess: async () => {
        toast.success('Has iniciado sesión')

        router.refresh()

        if (origin) {
          router.push(`/${origin}`)
          return
        }

        if (isSeller) {
          router.push('/sell')
          return
        }

        router.push('/')
      },
      onError: (err) => {
        if (err.data?.code === 'UNAUTHORIZED') {
          toast.error('Email o contraseña invalidos')
        }
      },
    })

  const onSubmit = ({
    email,
    password,
  }: TAuthCredentials) => {
    signIn({ email, password })
  }

  return (
    <>
      <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <Icon.logo className='h-20 w-20' />
            <h1 className='text-2xl font-semibold tracking-tight'>
              Inicia sesión en tu {isSeller ? 'seller' : ''}{' '}
              cuenta
            </h1>

            <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5',
              })}
              href='/sign-up'>
              Tienes una cuenta?
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>

          <div className='grid gap-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    {...register('email')}
                    className={cn({
                      'focus-visible:ring-red-500':
                        errors.email,
                    })}
                    placeholder='you@example.com'
                  />
                  {errors?.email && (
                    <p className='text-sm text-red-500'>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className='grid gap-1 py-2'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    {...register('password')}
                    type='password'
                    className={cn({
                      'focus-visible:ring-red-500':
                        errors.password,
                    })}
                    placeholder='Password'
                  />
                  {errors?.password && (
                    <p className='text-sm text-red-500'>
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  Iniciar sesión
                </Button>
              </div>
            </form>

            <div className='relative'>
              <div
                aria-hidden='true'
                className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  or
                </span>
              </div>
            </div>

            {isSeller ? (
              <Button
                onClick={continueAsBuyer}
                variant='secondary'
                disabled={isLoading}>
                Continuar como cliente
              </Button>
            ) : (
              <Button
                onClick={continueAsSeller}
                variant='secondary'
                disabled={isLoading}>
                Continuar como vendedor
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page