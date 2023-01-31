'use client'

import Link from 'next/link'
import React from 'react'
import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { AuthToggle } from '@/components/auth-toggle'
import { Button, buttonVariants } from '@/components/ui/button'
import { useMedia } from '@/hooks/use-media'
import { LogIn } from 'lucide-react'
import { User } from 'next-auth'

interface SiteHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  isPresentation?: boolean
  user?: Pick<User, 'name' | 'image' | 'email'>
}

export function SiteHeader({ isPresentation, user }: SiteHeaderProps) {
  const media = useMedia()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <header className='sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900'>
      <div className='container flex h-16 items-center space-x-4 px-6 sm:justify-between sm:space-x-0'>
        {isPresentation ? (
          <Link href='/movies'>
            <Button>
              <span className='font-semibold'>
                {!media.sm ? 'Vamos lá!' : 'Conheça essa aplicação!'}
              </span>
              <LogIn className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        ) : (
          <MainNav />
        )}
        <div className='flex flex-1 items-center justify-end space-x-4'>
          {isPresentation && (
            <pre className='hidden h-10 items-center justify-between space-x-2 overflow-x-auto rounded-lg border border-slate-100 bg-slate-200 pr-2 pl-6 dark:border-slate-700 dark:bg-zinc-900 lg:flex'>
              <code className='font-mono text-sm font-semibold text-slate-900 dark:text-slate-50'>
                https://github.com/iuryfranca/the-movie-db-challenge-next-13
              </code>
              <Link
                href='https://github.com/iuryfranca/the-movie-db-challenge-next-13'
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
                  <Icons.externalLink className='h-4 w-4 ' />
                </div>
              </Link>
            </pre>
          )}
          <nav className='flex items-center space-x-1'>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                <Icons.gitHub
                  height='1.25rem'
                  width='1.25rem'
                  className='text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                />
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
                })}
              >
                <Icons.linkedin
                  height='1.25rem'
                  width='1.25rem'
                  fill='currentColor'
                  className='text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                />
                <span className='sr-only'>Linkedin</span>
              </div>
            </Link>
            <ThemeToggle />
            <AuthToggle
              user={
                user
                  ? {
                      name: user.name,
                      image: user.image,
                      email: user.email,
                    }
                  : null
              }
            />
          </nav>
        </div>
      </div>
    </header>
  )
}
