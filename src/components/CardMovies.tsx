import Image from 'next/image'
import Pie from '@/components/Pie'
import { cn } from '@/lib/utils'
import clsx from 'clsx'

interface CardMovie {}

export function CardMovie() {
  const percentage = 30
  return (
    <div className='flex w-full text-slate-50 dark:text-slate-900 sm:w-48 sm:flex-col'>
      <div className='relative h-36 w-36 rounded-l-md rounded-b-none rounded-r-none sm:h-56 sm:w-full sm:rounded-b-none sm:rounded-t-md md:h-64'>
        <Image
          src='https://www.atoupeira.com.br/wp-content/uploads/2022/06/o-gato-de-botas-2-novo-poster-150622.jpg'
          alt='imagem'
          fill
          className='rounded-t-md'
        />
      </div>
      <div className='relative flex h-36 w-full flex-col items-center justify-between gap-2 rounded-b-md rounded-r-md rounded-l-none bg-slate-900 p-2 pt-5 dark:bg-white sm:h-28 sm:rounded-t-none sm:rounded-b-md sm:pt-10'>
        <div className='absolute left-1  -top-6 z-20 hidden items-center justify-center rounded-full bg-slate-300  text-slate-50 dark:bg-slate-900 sm:flex'>
          <Pie
            percentage={percentage}
            color={clsx({
              '#991b1b': percentage >= 0 && percentage < 25,
              '#f97316': percentage >= 25 && percentage < 40,
              '#fbbf24': percentage >= 40 && percentage < 60,
              '#bef264': percentage >= 60 && percentage < 70,
              '#22c55e': percentage >= 70,
            })}
          />
          <div className='absolute flex h-full w-full flex-row items-center justify-center py-4'>
            <p className='text-sm font-semibold'>{percentage}</p>
            <p className='self-start text-[10px]'>%</p>
          </div>
        </div>
        <div className='flex h-full w-full flex-col gap-2'>
          <p className='text-base font-semibold'>Title</p>
          <p className='text-sm'>Title and subtilte</p>
        </div>
        <div className='flex h-24 w-full justify-start rounded-sm sm:hidden'>
          Descrição
        </div>
      </div>
    </div>
  )
}
