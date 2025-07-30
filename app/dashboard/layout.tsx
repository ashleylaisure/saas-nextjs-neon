import NavBar from '@/components/NavBar/NavBar'
import React, { ReactNode } from 'react'

const DashboardLayout = ({children} : {children: ReactNode}) => {
    return (
        <div className="min-h-screen bg-primary-100/60">
            <NavBar />
            <div className="container py-6">
                {children}
            </div>
            
        </div>
    )
}

export default DashboardLayout
