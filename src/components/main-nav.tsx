'use client'

import * as React from 'react'
import Link from 'next/link'
import logoShort from '../../public/blue_short.svg'
import logoBlueSquare from '../../public/blue_square_2.svg'

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
  MenubarTrigger,
} from '@/components/ui/menubar'

import { Globe, Mic } from 'lucide-react'
import Image from 'next/image'
import { Icons } from './icons'
import { MobileNav } from './mobile-nav'

export function MainNav() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

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

      <Menubar className='hidden rounded-none border-b border-none dark:bg-slate-900 md:flex'>
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
          <MenubarTrigger>Pessoas</MenubarTrigger>
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

      <button
        className='flex flex-col items-center md:hidden'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          <Icons.close />
        ) : (
          <Image
            src={logoBlueSquare?.src}
            alt='Logo Short'
            height={logoBlueSquare?.height / 5}
            width={logoBlueSquare?.width / 5}
            // className='h=auto w-auto'
          />
        )}
        <span className='text-sm font-bold'>Menu</span>
      </button>
      {showMobileMenu && <MobileNav />}
    </div>
  )
}
