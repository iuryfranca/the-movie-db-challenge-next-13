import { TechsList } from '@/components/techs-list'

export default function IndexPage() {
  return (
    <>
      <section className='grid items-center gap-6 pt-6 pb-8 md:py-10'>
        <div className='flex max-w-[980px] flex-col items-start gap-2'>
          <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]'>
            Projeto criado para testar <br className='hidden sm:inline' />
            minhas habilidades Front-End
          </h1>
          <p className='max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl'>
            O desafio consiste em consultar a{' '}
            <a
              href='https://www.themoviedb.org/documentation/api'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4 font-semibold'
            >
              themoviedb API
            </a>
            <br className='hidden sm:inline' />e criar uma aplicação focada em
            desempenho.
          </p>
        </div>
      </section>
      <section>
        {/* <AppleMusicDemo /> */}
        <TechsList />
      </section>
    </>
  )
}
