'use client'

import * as React from 'react'
import Link from 'next/link'
import logoShort from '../../public/blue_short.svg'

import { useSelectedLayoutSegment } from 'next/navigation'
import { MainNavItem } from 'types/nav'

import { docsConfig } from '@/config/docs'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Globe, Mic } from 'lucide-react'
import Image from 'next/image'

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  return (
    <div className='flex gap-6 md:gap-10'>
      <Link href='/' className='hidden items-center space-x-2 md:flex'>
        <Image
          src={logoShort?.src}
          alt='Logo Short'
          height={logoShort?.height}
          width={logoShort?.width / 2}
        />
      </Link>
      <Menubar className='rounded-none border-b border-none dark:bg-slate-900'>
        <MenubarMenu>
          <MenubarTrigger className='font-bold'>Filmes</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Populares</MenubarItem>
            <MenubarItem>Em cartaz</MenubarItem>
            <MenubarItem>Próximas Estreias</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className='relative'>Séries</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Populares</MenubarItem>
            <MenubarItem>Em exibição hoje</MenubarItem>
            <MenubarItem>Na TV</MenubarItem>
            <MenubarItem>Bem avaliada</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Pesoas</MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>
              Cut <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Copy <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Paste <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Select All <MenubarShortcut>⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Deselect All <MenubarShortcut>⇧⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Smart Dictation...{' '}
              <MenubarShortcut>
                <Mic className='h-4 w-4' />
              </MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Emoji & Symbols{' '}
              <MenubarShortcut>
                <Globe className='h-4 w-4' />
              </MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Show Lyrics</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset disabled>
              Show Status Bar
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
            <MenubarItem disabled inset>
              Enter Full Screen
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Account</MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarLabel inset>Switch Account</MenubarLabel>
            <MenubarSeparator />
            <MenubarRadioGroup value='benoit'>
              <MenubarRadioItem value='andy'>Andy</MenubarRadioItem>
              <MenubarRadioItem value='benoit'>Benoit</MenubarRadioItem>
              <MenubarRadioItem value='Luis'>Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Manage Famliy...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Account...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
