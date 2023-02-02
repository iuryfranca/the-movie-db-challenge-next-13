import Image from 'next/image'
import Pie from '@/components/pie'
import clsx from 'clsx'
import { formatShortDate } from '@/lib/utils'

interface CardMovieProps {
  poster_path?: string
  title?: string
  release_date?: string
  vote_average?: number
  overview?: string
}

export function CardMovie({
  poster_path,
  overview,
  release_date = null,
  title,
  vote_average = 0,
}: CardMovieProps) {
  const percentage = +vote_average.toString().replace('.', '')
  const releaseDateFormatted = formatShortDate(release_date)

  const srcImage = 'https://image.tmdb.org/t/p/w185' + poster_path

  return (
    <div className='flex w-full text-slate-50 dark:text-slate-900 sm:w-44 sm:flex-col'>
      <div className='relative h-36 w-36 sm:h-56 sm:w-full md:h-64'>
        <Image
          src={srcImage}
          priority
          alt={title}
          fill
          className='rounded-b-none rounded-r-none rounded-l-md sm:rounded-b-none sm:rounded-t-md'
          quality={100}
        />
      </div>
      <div className='relative flex h-36 w-full flex-col items-center justify-between gap-2 rounded-b-md rounded-r-md rounded-l-none bg-slate-900 p-2 pt-5 dark:bg-white sm:h-24 sm:rounded-t-none sm:rounded-b-md sm:pt-7'>
        <div className='absolute left-1 -top-6 z-20 hidden items-center justify-center rounded-full bg-slate-300  text-slate-50 dark:bg-slate-900 sm:flex'>
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
        <div className='flex h-full w-full flex-col gap-1 sm:justify-between'>
          <p className='text-sm font-bold line-clamp-2 text-ellipsis whitespace-wrap'>{title}</p>
          <p className='text-xs text-slate-300 dark:text-slate-600'>
            {releaseDateFormatted}
          </p>
        </div>
        <div className='flex h-24 w-full justify-start rounded-sm pb-2 sm:hidden'>
          <span className='text-sm line-clamp-2 text-ellipsis whitespace-wrap'>
            {overview}
          </span>
        </div>
      </div>
    </div>
  )
}
