import { SiteHeader } from '@/components/site-header'
import { getCurrentUser } from '@/lib/session'

interface MovieLayoutProps {
  children: React.ReactNode
}

export default async function MovieLayout({ children }: MovieLayoutProps) {
  const userSession = await getCurrentUser()

  return (
    <div>
      <header>
        <SiteHeader user={userSession} />
      </header>
      <main className='container flex-1'>{children}</main>
    </div>
  )
}
