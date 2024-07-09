'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'


const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src='/icons/hamburger.svg'
                        alt='menu'
                        width={30}
                        height={30}
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent>
                    <Link
                        href='/'
                        className='cursor-pointer items-center gap-1 flex px-4'
                    >
                        <Image
                            src={'/icons/logo.svg'}
                            alt='Horizon logo'
                            width={34}
                            height={34}
                        />
                        <h1 className='text-26 font-ibm-plex-serif text-black-1'>Horizon</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild >
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((item) => {

                                    const isActive =
                                        pathname === item.route || pathname.startsWith(`${item.route}/`)
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close', { 'bg-bank-gradient': isActive })}>
                                                <div className="relative size-6">
                                                    <Image width={20} height={20} className={cn({ 'brightness-[3] invert-0': isActive })} src={item.imgURL} alt={item.label}></Image>
                                                </div>
                                                <p className={cn('text-16 font-semibold text-black-2', {
                                                    'text-white': isActive
                                                })}></p>
                                                {item.label}
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                USER
                            </nav>
                        </SheetClose>
                        Footer
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav
