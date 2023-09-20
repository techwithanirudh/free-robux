import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { RobuxCard } from "@/components/robux-card"

export default function IndexPage() {
  return (
    <div>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            {siteConfig.productName} for the Community{" "}
            <br className="hidden sm:inline" />
            Empowering players, one Robux at a time.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Our mission is to provide a platform where generous users can donate
            Robux to those who can&rsquo;t afford them. This tool is built with
            the aim of bringing joy and opportunities to players worldwide.
            Remember, it&rsquo;s not about the Robux, but the spirit of giving
            and community.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/about" className={buttonVariants()}>
            About Us
          </Link>
          <Link href="#main" className={buttonVariants({ variant: "outline" })}>
            Get Started
          </Link>
        </div>
      </section>
      <section className="container mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <RobuxCard amount={400} description="A starter pack for new users." />
        <RobuxCard amount={800} description="Perfect for regular players." />
        <RobuxCard
          amount={1200}
          description="Dive deeper into the Roblox world."
        />
        <RobuxCard
          amount={1700}
          description="Best value for dedicated gamers."
        />
        <RobuxCard
          amount={2300}
          description="Expand your horizons in Roblox."
        />
        <RobuxCard
          amount={3000}
          description="For the ambitious Roblox player."
        />
        <RobuxCard
          amount={4000}
          description="Elevate your gaming experience."
        />
        <RobuxCard
          amount={5000}
          description="Step up your game with this pack."
        />
        <RobuxCard amount={6500} description="For those aiming for the top." />
        <RobuxCard
          amount={8000}
          description="The premium choice for Roblox enthusiasts."
        />
        <RobuxCard amount={10000} description="Master the Roblox universe." />
        <RobuxCard
          amount={12500}
          description="For the ultimate Roblox champion."
        />
      </section>
    </div>
  )
}
