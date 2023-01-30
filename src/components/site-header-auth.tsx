'use client'

import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button, buttonVariants } from '@/components/ui/button'
import { LogIn, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useMedia } from '@/hooks/use-media'
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
export function SiteHeaderAuth() {
  const media = useMedia()

  return (
    <header className='sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900'>
      <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        {/* <MainNav items={docsConfig.mainNav} /> */}
        <Link href='/login'>
          <Button>
            <span className='font-semibold'>
              {(media.sm ? 'Conheça essa aplicação!' : 'Vamos lá!') ||
                'Conheça essa aplicação!'}
            </span>
            <LogIn className='ml-2 h-4 w-4' />
          </Button>
        </Link>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <pre className='hidden lg:flex h-10 items-center justify-between space-x-2 overflow-x-auto rounded-lg border border-slate-100 bg-slate-200 pr-2 pl-6 dark:border-slate-700 dark:bg-zinc-900'>
            <code className='font-mono text-sm font-semibold text-slate-900 dark:text-slate-50'>
              https://github.com/iuryfranca/the-movie-db-challenge-next-13
            </code>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
              aria-label='Acessar perfil github'
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'text-slate-700 dark:text-slate-400',
                })}
              >
                <Icons.externalLink className='h-4 w-4 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100' />
              </div>
            </Link>
          </pre>
          <nav className='flex items-center space-x-1'>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
              className='flex lg:hidden'
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'text-slate-700 dark:text-slate-400',
                })}
              >
                <Icons.gitHub className='h-5 w-5 fill-current text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100' />
                <span className='sr-only'>GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'text-slate-700 dark:text-slate-400',
                })}
              >
                <Icons.linkedin className='h-5 w-5 fill-current text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100' />
                <span className='sr-only'>Linkedin</span>
              </div>
            </Link>
            <ThemeToggle />
            <div
              onClick={() => signOut()}
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
                className: 'text-slate-700 dark:text-slate-400',
              })}
            >
              <LogOut className='h-5 w-5 font-bold text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 cursor-pointer' />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

interface DemoIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function DemoIndicator({ className }: DemoIndicatorProps) {
  return (
    <span
      className={cn(
        'absolute top-1 right-0 flex h-5 w-5 animate-bounce items-center justify-center',
        className
      )}
    >
      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75' />
      <span className='relative inline-flex h-3 w-3 rounded-full bg-sky-500' />
    </span>
  )
}
