import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import { responsiveNavbar, changeNavbackground } from '../helper';

const Navbar = () => {
    return (
        <nav className="flex justify-between px-10 pt-2 items-center text-xs font-bold text-slate-700 bg-slate-100 " id="navbar">
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
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                id="menu"
                className="lg:flex hidden space-x-7 items-center">
                <Link href="/">
                    <a className="nav-item text-red-500">
                        INICIO
                    </a>
                </Link>
                <Link href="/shop">
                    <a className="nav-item">
                        ACERCA DE
                    </a>
                </Link>
                <Link href="/about">
                    <a className="nav-item">
                        EXPERIENCIA
                    </a>
                </Link>
                <Link href="/help">
                    <a className="nav-item">
                        PORTAFOLIO
                    </a>
                </Link>
                <Link href="/help">
                    <a className="nav-item btn-primary text-xs">
                        CONTACTO
                    </a>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;