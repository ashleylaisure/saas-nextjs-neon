import React, { ReactNode } from 'react'

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className="min-h-screen flex-center flex-col">
            {children}
        </div>
    )
}

export default AuthLayout
