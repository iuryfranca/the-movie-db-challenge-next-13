import { siteConfig } from '@/config/site'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function SiteFooter() {
  return (
    <footer className='container'>
      <div className='flex flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-5 dark:border-t-slate-700 md:h-24 md:flex-row md:py-0'>
        <div className='flex w-full flex-col items-center justify-between gap-4 px-8 text-center text-sm text-slate-600 dark:text-slate-400 md:flex-row md:gap-2 md:px-0 md:text-left'>
          <span className='flex items-center gap-1 rounded border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-800'>
            Feito com 💚 por{' '}
            <a
              href={siteConfig.links.linkedin}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Iury França
            </a>
          </span>
          <span className='text-xs'>
            Usando o layout de{' '}
            <a
              href={siteConfig.links.twitterShadcn}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              shadcn
            </a>{' '}
            como base.
          </span>
        </div>
      </div>
    </footer>
  )
}
