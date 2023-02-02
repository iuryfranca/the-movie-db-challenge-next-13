import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatLongDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('pt-br', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatShortDate(input: string | number): string {
  const date = new Date(input)

  return new Intl.DateTimeFormat('pt-br').format(date)
}
