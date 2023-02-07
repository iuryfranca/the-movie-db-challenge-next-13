import { SiteHeader } from '@/components/site-header'
import { MoviesProvider } from '@/core/contexts/movies-context'
import { getCurrentUser } from '@/lib/session'

interface MovieLayoutProps {
  children: React.ReactNode
}

export default async function MovieLayout({ children }: MovieLayoutProps) {
  const userSession = await getCurrentUser()

  return (
    <>
      <SiteHeader user={userSession} />
      <main className='container flex-1'>{children}</main>
    </>
  )
}
