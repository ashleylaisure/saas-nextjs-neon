import Link  from 'next/link'
import React from 'react'
import BrandLogo from '../BrandLogo'
import { UserButton } from '@clerk/nextjs'

const NavBar = () => {
    return (
        <header className=" hero-container shadow-xl fixed top-0 z-50 bg-primary-100">
            <nav className="flex items-center gap-10 container">
                <Link href="/dashboard" className="mr-auto">
                    <BrandLogo />
                </Link>
                <Link href="/dashboard/products">Products</Link>
                <Link href="/dashboard/analytics">Analytics</Link>
                <Link href="/dashboard/subscription">Subscription</Link>
                <UserButton />
            </nav>
            
        </header>
    )
}

export default NavBar
