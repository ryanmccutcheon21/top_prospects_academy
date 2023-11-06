'use client'

import logoImg from '../public/logo_cropped.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { NavLink } from '../types'

const navLinks: NavLink[] = [
    { text: 'Home', link: '/' },
    { text: 'Academy Info', link: '/info' },
    { text: 'About', link: '/about' },
    { text: 'Enroll', link: '/enroll' },
    { text: 'Contact', link: '/contact' },
    { text: 'FAQs', link: '/faqs' },
]

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className='sticky top-0 bg-black z-10'>
            <nav className="flex px-5 py-1 bg-black">
                {/* Hamburger */}
                <div
                    className='absolute h-10 pt-1 hidden md:flex flex-col justify-around md:visible hover:cursor-pointer p-1'
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <div className='w-10 h-1 bg-primary1' />
                    <div className='w-10 h-1 bg-primary1' />
                    <div className='w-10 h-1 bg-primary1' />
                </div>
                {showDropdown && (
                    <ul className='absolute list-none w-[10rem] flex flex-col left-0 top-10 bg-black text-primary1 justify-between p-2 pl-5 font-lead-text' onMouseLeave={() => setShowDropdown(false)}>
                        {navLinks.map(navLink => (
                            <Link key={navLink.text} href={navLink.link} className='text-primary1 no-underline hover:underline hover:text-white' onClick={() => setShowDropdown(false)}>
                                <li>{navLink.text}</li>
                            </Link>
                        ))}
                    </ul>
                )}


                {/* Logo Image */}
                <div className='md:flex md:justify-center md:w-[100%]'>
                    <Link href='/'>
                        <Image
                            src={logoImg}
                            alt='Top Prospects Academy'
                            height={50}
                            width={50}
                        />
                    </Link>
                </div>

                {/* Links */}
                <div className='w-full flex justify-end pr-10 md:hidden'>
                    <ul className='list-none w-[50%] flex justify-between'>
                        {navLinks.map(navLink => (
                            <Link
                                key={navLink.text}
                                href={navLink.link}
                                color='primary'
                                className='text-primary1 font-lead-text no-underline hover:underline hover:text-white'
                            >
                                <li>{navLink.text}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
