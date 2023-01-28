import { siteConfig } from '@/config/site'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function SiteFooter() {
  return (
    <footer className='container'>
      <div className='flex  flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-5 dark:border-t-slate-700 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center justify-between w-full gap-4 px-8 md:flex-row md:gap-2 md:px-0 text-center text-sm text-slate-600 dark:text-slate-400 md:text-left'>
          <span className='flex items-center gap-1 rounded p-1 bg-slate-800'>
            <Avatar className='mr-1'>
              <AvatarImage
                src='https://github.com/iuryfranca.png'
                alt='@iuryfranca'
              />
            </Avatar>
            Feito por
            <a
              href={siteConfig.links.linkedin}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Iury França
            </a>
            com 💚.
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
