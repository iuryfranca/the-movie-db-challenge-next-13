'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteTechs } from '@/config/site'
import Link from 'next/link'
import { Icons } from './icons'
import Tilt from 'react-parallax-tilt'

export function TechsList() {
  return (
    <>
      <span className='text-md font-bold leading-tight tracking-tighter md:text-1xl lg:text-2xl lg:leading-[1.1]'>
        techs utilizadas
      </span>
      <div className='grid grid-cols-1 sm:grid-cols-2 max-w-[980px] items-center justify-center gap-2'>
        {siteTechs.map((tech, index) => {
          return (
            <Link
              href={tech.link}
              target='_blank'
              rel='noreferrer'
              className='flex items-center w-80 h-40'
              key={index}
            >
              <Tilt>
                <div className='w-80 z-50 rounded-md border border-slate-200 bg-white p-4 shadow-md outline-none animate-in zoom-in-90 dark:border-slate-800 dark:bg-slate-800'>
                  <div className='flex justify-between space-x-4'>
                    <Avatar>
                      <AvatarImage src={tech.image} alt='Logos techs' />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className='space-y-1 w-56'>
                      <span className='text-sm font-semibold'>{tech.name}</span>
                      <p className='text-sm'>{tech.description}</p>
                    </div>
                    <Icons.externalLink className='h-4 w-4' />
                  </div>
                </div>
              </Tilt>
            </Link>
          )
        })}
      </div>
    </>
  )
}
