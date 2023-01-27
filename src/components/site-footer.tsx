import { siteConfig } from '@/config/site'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function SiteFooter() {
  return (
    <footer className='container'>
      <div className='flex  flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-10 dark:border-t-slate-700 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
          <Avatar className='h-6 w-6'>
            <AvatarImage
              src='https://github.com/iuryfranca.png'
              alt='@iuryfranca'
            />
          </Avatar>
          <p className='text-center text-sm leading-loose text-slate-600 dark:text-slate-400 md:text-left'>
            Feito por{' '}
            <a
              href={siteConfig.links.linkedin}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Iury França
            </a>
            . Usando o layout de{' '}
            <a
              href={siteConfig.links.twitterShadcn}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              shadcn
            </a>{' '}
            como base.
          </p>
        </div>
      </div>
    </footer>
  )
}
