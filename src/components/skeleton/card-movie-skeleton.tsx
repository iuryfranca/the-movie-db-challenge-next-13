import { Skeleton } from '../skeleton'

export function CardMovieSkeleton() {
  return (
    <div className='w-44'>
      <Skeleton className='h-48 rounded-t-md rounded-b-none dark:bg-slate-400 md:h-64' />
      <div className='pt- relative flex h-24 flex-col items-center gap-2 rounded-b-md bg-slate-900 p-2 pt-8 dark:bg-white'>
        <div className=' absolute left-1 -top-6 z-20 h-11 w-11 animate-pulse rounded-full bg-slate-100 dark:bg-slate-300' />
        <div className=' absolute left-1 -top-6 z-10 h-11 w-11 rounded-full bg-slate-50' />
        <Skeleton className='h-6 rounded-sm dark:bg-slate-400' />
        <Skeleton className='h-4 rounded-sm dark:bg-slate-400' />
      </div>
    </div>
  )
}
