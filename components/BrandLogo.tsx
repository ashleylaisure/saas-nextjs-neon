import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const BrandLogo = () => {
    return (
        <Link href="/" className='flex items-center gap-1'>
            <Image
                src="/images/site-logo.svg"
                alt="DevStack Overflow Logo"
                width={23}
                height={23}
            />
            <p className='h2-bold font-space-grotesk text-dark-100 dark:text-light-900'>
                Dev <span className='text-primary-500'>Flow</span></p>
        </Link>
    )
}

export default BrandLogo
