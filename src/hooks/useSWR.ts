import useSWR from 'swr'
import { User } from '../payload-types'
import { getServerSideUser } from '@/lib/payload-utils'
import { cookies as getCookies } from 'next/headers'

export const useUser = () => {
  const cookies = getCookies()
  const token = cookies.get('payload-token')?.value

  const { data, error } = useSWR<User | null>(
    token ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me` : null,
    async (url: any) => {
      const res = await fetch(url, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })

      if (!res.ok) {
        throw new Error('Failed to fetch user data')
      }

      return res.json()
    }
  )

  const user = data

  return {
    user,
    isLoading: !data && !error,
    isError: error,
  }
}