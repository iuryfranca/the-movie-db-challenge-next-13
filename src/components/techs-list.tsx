'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteTechs } from '@/config/site'
import { Icons } from './icons'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'

export function TechsList() {
  return (
    <>
      <span className='text-md md:text-1xl font-bold leading-tight tracking-tighter lg:text-2xl lg:leading-[1.1]'>
        techs utilizadas
      </span>
      <div className='grid max-w-[980px] grid-cols-1 items-center justify-items-center gap-8 xs:justify-start sm:grid-cols-2'>
        {siteTechs.map((tech, index) => {
          return (
            <Link
              href={tech.link}
              target='_blank'
              rel='noreferrer'
              className='flex h-40 w-80 items-center'
              key={index}
            >
              <Tilt>
                <div className='z-50 w-80 rounded-md border border-slate-200 bg-white p-4 shadow-md outline-none animate-in zoom-in-90 dark:border-slate-800 dark:bg-slate-800'>
                  <div className='flex justify-between space-x-4'>
                    <Avatar>
                      <AvatarImage src={tech.image} alt='Logos techs' />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className='w-56 space-y-1'>
                      <span className='text-sm font-semibold'>{tech.name}</span>{' '}
                      <br />
                      <span className='text-sm'>{tech.description}</span>
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
