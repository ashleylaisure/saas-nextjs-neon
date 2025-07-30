import { subscriptionTiersInOrder } from '@/constants/SubscriptionTiers'
import React, { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { SignUpButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { CheckIcon } from 'lucide-react'

function Feature({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
            <span>{children}</span>
        </div>
    )
}

const PricingCard = ({ 
        name, 
        priceInCents, 
        maxNumberOfProducts, 
        maxNumberOfVisits, 
        canAccessAnalytics, 
        canCustomizeBanner, 
        canRemoveBranding 
    } : (typeof subscriptionTiersInOrder)[number]) => {
    const isMostPopular = name === "Standard"

    return (
        <div>
            <Card className={cn("relative shadow-none rounded-3xl overflow-hidden bg-primary-foreground",
                isMostPopular ? "border-accent border-2" : "border-none"
            )}>
            {isMostPopular && (
                <div className="bg-primary-100 text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
                    Most popular
                </div>
            )}
                <CardHeader>
                    <div className="text-accent font-semibold mb-8">{name}</div>
                    <CardTitle>${priceInCents / 100}</CardTitle>
                    <CardDescription>
                        {maxNumberOfVisits} pricing page Visits per month
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <SignUpButton>
                        <Button className={cn({ 'bg-primary-500': isMostPopular })}>Get Started</Button>
                    </SignUpButton>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 items-start">
                    <Feature className="font-bold">
                        {maxNumberOfProducts}{" "}
                        {maxNumberOfProducts === 1 ? "product" : "products"}
                    </Feature>
                    <Feature>PPP discounts</Feature>
                    {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
                    {canRemoveBranding && <Feature>Remove Easy PPP branding</Feature>}
                    {canCustomizeBanner && <Feature>Banner customization</Feature>}
                </CardFooter>
            </Card>
        </div>
    )
}

export default PricingCard
