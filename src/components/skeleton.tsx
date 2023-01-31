import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'h-5 w-full animate-pulse rounded-lg bg-slate-300 dark:bg-slate-100',
        className
      )}
      {...props}
    />
  )
}
