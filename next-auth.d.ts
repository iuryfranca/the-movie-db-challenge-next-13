import 'next-auth/jwt'
export * from './core/types'
export type { AuthOptions as NextAuthOptions } from './core/types'
export type {
  RequestInternal,
  ResponseInternal as OutgoingResponse,
} from './core'
export * from './next'
export { default } from './next'

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module 'next-auth/jwt' {
  interface JWT {
    /** The user's role. */
    userRole?: 'admin'
  }
}
