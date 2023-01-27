'use client'
import { createUseMedia } from 'react-use-media'

export function useMedia() {
  return {
    xs: createUseMedia({ minWidth: 499 })(),
    sm: createUseMedia({ minWidth: 500 })(),
    md: createUseMedia({ minWidth: 640 })(),
    lg: createUseMedia({ minWidth: 768 })(),
    xl: createUseMedia({ minWidth: 1024 })(),
    '2xl': createUseMedia({ minWidth: 1280 })(),
  }
}
