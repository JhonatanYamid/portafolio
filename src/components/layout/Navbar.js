import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import { responsiveNavbar } from '../helper';

const Navbar = () => {
    return (
        <nav className="flex justify-between flex-wrap px-10 pt-2 items-center text-xs font-bold text-slate-700 bg-slate-100 " id="navbar">
            <Link href="/">
                <a className=''>
                    <Image
                        src="/images/firma.png"
                        width={80}
                        height={54}
                        alt="logotipo"
                    />
                </a>
            </Link>
            <div className="block lg:hidden">
                <button
                    id="button-menu"
                    onClick={() => responsiveNavbar()}
                    className="flex items-center px-3 py-2 border rounded">
                    <svg
                        className="fill-current w-5"
                        viewBox="0 0 20 20"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                id="menu"
                className="md:flex hidden py-5 md:py-0">
                <div className='flex items-center flex-row space-x-7'>
                    <Link href="/">
                        <a className="nav-item text-red-500">
                            INICIO
                        </a>
                    </Link>
                    <a className="nav-item" href='#about'>
                        ACERCA DE
                    </a>
                    {/* <Link href="/about">
                    <a className="nav-item">
                        EXPERIENCIA
                    </a>
                </Link> */}
                    <a className="nav-item" href='#portafolio'>
                        PORTAFOLIO
                    </a>
                    <a className="nav-item btn-primary text-xs" href='https://api.whatsapp.com/send?phone=5744334016&text=Hola%20buen%20d%C3%ADa' target="_blank" rel="noopener noreferrer">
                        CONTACTO
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;