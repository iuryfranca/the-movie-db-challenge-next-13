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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Avatar, AvatarImage } from './ui/avatar'
import type { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { UserAuthForm } from './user-auth-form'

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user?: Pick<User, 'name' | 'image' | 'email'>
}

export function AuthToggle({ user }: UserAccountNavProps) {
  const [openAuthDialog, setOpenAuthDialog] = React.useState(false)
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {!user ? (
            <Button variant='ghost' size='sm'>
              <Icons.userCog className='text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100' />
              <span className='sr-only'>Perfil</span>
            </Button>
          ) : (
            <Button variant='ghost' size='sm'>
              <Avatar>
                <AvatarImage src={user.image} alt={user.name} />
              </Avatar>
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem
            className='flex'
            onClick={() => setOpenAuthDialog(true)}
            disabled={!!user}
          >
            <LogIn className='mr-2 h-4 w-4' />
            <span>Login</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={!user}
            onClick={() => (user ? signOut() : null)}
          >
            <LogOut className='mr-2 h-4 w-4' />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={openAuthDialog} onOpenChange={setOpenAuthDialog}>
        <DialogContent className='sm:w-80'>
          <DialogHeader>
            {/* <DialogTitle>Are you sure absolutely sure?</DialogTitle> */}
            <DialogDescription className='flex items-center justify-center'>
              <UserAuthForm className='w-56' />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
