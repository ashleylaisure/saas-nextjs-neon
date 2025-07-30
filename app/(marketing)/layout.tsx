import NavBar from '@/components/NavBar'
import React, { ReactNode } from 'react'

const MarketingLayout = ({children} : {children: ReactNode}) => {
    return (
        <div className="selection:bg-[hsl(320, 65%, 53%, 20%)]">
            <NavBar />
            {children}
        </div>
    )
}

export default MarketingLayout
