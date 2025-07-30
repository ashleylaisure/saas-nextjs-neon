import Link from 'next/link'
import React from 'react'
import BrandLogo from '../BrandLogo'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

const NavBar = () => {
    return (
        <header className=" hero-container shadow-xl fixed top-0 w-full z-50 bg-background-light-100 dark:bg-background-dark-100">
            <nav className="flex-between gap-10 w-full">
                <div className="mr-auto">
                    <BrandLogo />
                </div>
                <ul className="flex items-center gap-6">
                    <li>
                        <Link href="#" className="text-primary-600 hover:text-primary-500">Features</Link>
                    </li>
                    <li>
                        <Link href="#pricing" className="text-primary-600 hover:text-primary-500">Pricing</Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-primary-600 hover:text-primary-500">About</Link>
                    </li>
                </ul>

                <span className="text-lg">
                    <SignedIn>
                        <Link href="/dashboard" className="text-primary-600 hover:text-primary-500">Dashboard</Link>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton><p className="text-primary-600 hover:text-primary-500">Log In</p></SignInButton>
                    </SignedOut>
                </span>
            </nav>
        </header>
    )
}

export default NavBar
