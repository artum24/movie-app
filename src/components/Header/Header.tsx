import { Separator } from '@app/components/ui/separator'
import { Fragment } from 'react'
import Link from 'next/link'
import { LogoIcon } from '@app/icons/Logo'
import { headerLinks } from '@app/constants/headerLinks'

export const Header = () => {
  return (
    <header className='mt-2'>
      <div className='flex justify-between px-5 sm:px-10 xl:px-40 border-b-neutral-600 items-center'>
        <Link href='/'>
          <LogoIcon />
        </Link>
        <div className='hidden md:flex gap-5'>
          {headerLinks.map((link, index) => (
            <Fragment key={link.name}>
              <Link href={link.path}>{link.name}</Link>
              {index !== headerLinks.length - 1 && (
                <Separator className='h-8' orientation='vertical' />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <Separator className='mt-2' />
    </header>
  )
}
