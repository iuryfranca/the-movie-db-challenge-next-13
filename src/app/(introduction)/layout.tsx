import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getCurrentUser } from '@/lib/session'

interface IntroductionLayoutProps {
  children: React.ReactNode
}

export default async function IntroductionLayout({
  children,
}: IntroductionLayoutProps) {
  const userSession = await getCurrentUser()

  return (
    <div className='flex min-h-screen flex-col'>
      <header>
        <SiteHeader user={userSession} isPresentation />
      </header>
      <main className='container flex-1'>{children}</main>
    </div>
  )
}
