import { User } from '../payload-types'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { NextRequest } from 'next/server'

export const getServerSideUser = async (cookies: NextRequest['cookies'] | ReadonlyRequestCookies) => {
  try {
        
    const token = cookies.get('payload-token')?.value;

    const meRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    if (!meRes.ok) {
      // Maneja códigos de estado distintos a 2xx (por ejemplo, lanza un error o devuelve null)
      throw new Error(`Error en la API: ${meRes.status}`);
    }

    const { user } =(await meRes.json()) as { user: User | null };

    return { user };

  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
    // Maneja el error de forma controlada en tu aplicación (por ejemplo, devuelve null)
    return { user: null };
  }
};