import LandingNavBar from '@/components/NavBar/LandingNavBar'

import React, { ReactNode } from 'react'

const MarketingLayout = ({children} : {children: ReactNode}) => {
    return (
        <div className="">
            <LandingNavBar />
            {children}
        </div>
    )
}

export default MarketingLayout
