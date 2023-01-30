import * as React from 'react'

export default async function IndexPage() {
  return (
    <>
      <section className='grid items-center gap-6 pt-6 pb-8 md:py-10'>
        <div className='flex max-w-[980px] flex-col items-start gap-2'>
          <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]'>
            LISTAGEM DE FILMES <br className='hidden sm:inline' />
          </h1>
        </div>
      </section>
    </>
  )
}
