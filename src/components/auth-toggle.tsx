'use client'

import * as React from 'react'
import { LogIn, LogOut } from 'lucide-react'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage } from './ui/avatar'
import type { User } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user?: Pick<User, 'name' | 'image' | 'email'>
}

export function AuthToggle({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {!user ? (
          <Button variant='ghost' size='sm'>
            <Icons.userCog className='hover:text-slate-900 text-slate-700 dark:text-slate-400 dark:hover:text-slate-100' />
            <span className='sr-only'>Perfil</span>
          </Button>
        ) : (
          <Button variant='ghost' size='sm'>
            <Avatar>
              <AvatarImage
                src='https://github.com/iuryfranca.png'
                alt='@iuryfranca'
              />
            </Avatar>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => signIn('google')}>
          <LogIn className='mr-2 h-4 w-4' />
          <span>Login</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className='mr-2 h-4 w-4' />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
