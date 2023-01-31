import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { Skeleton } from '../skeleton'

export function FilterSkeleton() {
  return (
    <div className='flex flex-col justify-center gap-4 rounded-lg border-2 border-slate-900 p-5 shadow-md dark:border-slate-400 '>
      <div>
        <Accordion type='multiple'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='pb-2'>Ordenar</AccordionTrigger>
            <AccordionContent>
              <p className='py-2'>Ordenar resultados por</p>
              <DropdownMenu>
                <DropdownMenuTrigger className='group' asChild>
                  <Button
                    variant='outline'
                    className='w-full justify-between border-2 border-slate-900 dark:border-slate-400 '
                  >
                    selecione
                    <ChevronDown
                      className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
                      aria-hidden='true'
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-52'>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Skeleton />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Skeleton />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Skeleton />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Skeleton />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Skeleton />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Skeleton />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Skeleton />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Skeleton />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Skeleton />
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>{' '}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='pb-2'>Filtrar</AccordionTrigger>
            <AccordionContent>
              <p className='py-2'>Selecione os gêneros</p>
              <div className='grid grid-cols-[70px_1fr] gap-2'>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
              <div className='mt-2 grid grid-cols-[1fr_40px] gap-2'>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
              <div className='mt-2 grid grid-cols-[1fr_1fr] gap-2'>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Button
          variant='subtle'
          className='w-full bg-slate-900 text-slate-50 hover:bg-slate-700'
        >
          Pesquisar
        </Button>
      </div>
    </div>
  )
}
