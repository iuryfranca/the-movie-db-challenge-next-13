import { Skeleton } from '../skeleton'

export function CardMovieSkeleton() {
  return (
    <div className='flex w-full sm:w-48 sm:flex-col'>
      {/* <Skeleton className='h-36 w-36 rounded-l-md rounded-b-none rounded-r-none border-4 border-slate-900 dark:border-white dark:bg-slate-400 sm:h-48 sm:w-full sm:rounded-b-none sm:rounded-t-md md:h-64' /> */}
      <Skeleton className='h-36 w-36 rounded-l-md rounded-b-none rounded-r-none dark:bg-slate-400 sm:h-48 sm:w-full sm:rounded-b-none sm:rounded-t-md md:h-64' />
      <div className='relative flex h-36 w-full flex-col items-center justify-between gap-2 rounded-b-md rounded-r-md rounded-l-none bg-slate-900 p-2 pt-5 dark:bg-white sm:h-24 sm:rounded-t-none sm:rounded-b-md sm:pt-8'>
        <div className='absolute left-1 -top-6 z-20 hidden h-11 w-11 animate-pulse rounded-full bg-slate-100 dark:bg-slate-300 sm:flex' />
        <div className='absolute  left-1 -top-6 z-10 hidden h-11 w-11 rounded-full bg-slate-50 sm:flex' />
        <div className='flex h-full w-full flex-col gap-2'>
          <Skeleton className='h-6 rounded-sm dark:bg-slate-400' />
          <Skeleton className='h-4 rounded-sm dark:bg-slate-400' />
        </div>
        <Skeleton className='flex h-24 rounded-sm dark:bg-slate-400 sm:hidden' />
      </div>
    </div>
  )
}
