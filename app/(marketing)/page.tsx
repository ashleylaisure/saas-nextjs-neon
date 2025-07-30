import { Button } from '@/components/ui/button'
import { SignUpButton } from '@clerk/nextjs'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { NeonIcon } from './_icons/Neon'
import { ClerkIcon } from './_icons/Clerk'
import { subscriptionTiersInOrder } from '../../constants/SubscriptionTiers'
import PricingCard from '@/components/cards/PricingCard'

const HomePage = () => {
  return (
    <>
      <section className="min-h-screen flex-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold m-4 tracking-tight">Price Smarter, Sell Bigger</h1>
        <p className="text-lg lg:text-3xl">Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic pricing</p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2 bg-primary-600 hover:bg-primary-500 text-light-100">
              Get Started for Free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>

      <section className="bg-foreground text-primary-foreground flex-center">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">
            Trusted by the top modern companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xlg:grid-cols-5 gap-16">
            <Link href="https://clerk.com" >
              <ClerkIcon/>
            </Link>
            <Link href="https://neon.tech" >
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com" >
              <ClerkIcon/>
            </Link>
            <Link href="https://neon.tech" >
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com" >
              <ClerkIcon/>
            </Link>
            <Link href="https://neon.tech" >
              <NeonIcon />
            </Link>
            <Link href="https://neon.tech" className="md:max-xl:hidden">
              <NeonIcon />
            </Link>
          </div>
        </div>
      </section>
      <section id="pricing" className="py-16 px-8 bg-light-700 md:px-16 w-full">

        <h2 className="text-4xl text-center text-balance font-semibold">
          Pricing Software which pays for itself 20x over
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
