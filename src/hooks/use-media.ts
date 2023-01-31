'use client'
import { createUseMedia } from 'react-use-media'

export function useMedia() {
  return {
    xs: createUseMedia({ minWidth: 430 })(),
    sm: createUseMedia({ minWidth: 580 })(),
    md: createUseMedia({ minWidth: 768 })(),
    lg: createUseMedia({ minWidth: 1024 })(),
    xl: createUseMedia({ minWidth: 1280 })(),
    '2xl': createUseMedia({ minWidth: 1536 })(),
  }
}
