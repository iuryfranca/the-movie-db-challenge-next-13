import * as React from 'react'
import logoShort from '../../public/blue_short.svg'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { useLockBody } from '@/hooks/use-lock-body'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'
import { Globe, Mic } from 'lucide-react'

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

export function MobileNav() {
  useLockBody()

  return (
    <div
      className={cn(
        'fixed inset-0 top-14 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 animate-in slide-in-from-bottom-80 md:hidden'
      )}
    >
      <div className='z-20grid relative gap-6 rounded-md border-2 border-slate-300 bg-white p-4 antialiased shadow-lg dark:border-slate-700 dark:bg-slate-800'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image
            src={logoShort?.src}
            alt='Logo Short'
            height={logoShort?.height}
            width={logoShort?.width / 2}
          />
          <span className='font-bold'>{siteConfig.name}</span>
        </Link>
        {/* <nav className='grid grid-flow-row auto-rows-max text-sm'> */}
        {/* <Menubar className='rounded-none border-b border-none dark:bg-slate-900'> */}
        <Menubar className='className="grid text-sm" grid-flow-row auto-rows-max'>
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
        {/* </nav> */}
      </div>
    </div>
  )
}
