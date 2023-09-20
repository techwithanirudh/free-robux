import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { TeamMemberCard } from "@/components/member-card"

export default function AboutPage() {
  return (
    <div>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            About {siteConfig.productName}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Welcome to the {siteConfig.productName}. Our platform is dedicated
            to providing a space where generous users can donate Robux to those
            who can&apos;t afford them. We believe in the power of community and
            the spirit of giving.
          </p>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Founded in 2023, our team has worked tirelessly to create a safe,
            reliable, and user-friendly tool that brings joy and opportunities
            to players worldwide. We are proud of the impact we&rsquo;ve made
            and are excited for the future.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/" className={buttonVariants()}>
            Home
          </Link>
          <Link
            href="#contact"
            className={buttonVariants({ variant: "outline" })}
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="container mt-10">
        <h2 className="mb-6 text-2xl font-bold">Our Team</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <TeamMemberCard
            name="Jeff Burritos"
            role="Founder"
            description="Jeffrey Preston Burritos is an American taco magnate, salsa proprietor, and guacamole enthusiast. Burritos is the founder and executive chairman of Amazin', having previously served as chairman, president and CEO of the salsa club."
          />
          <TeamMemberCard
            name="Sundae Popsicle"
            role="CEO"
            description="Sundae Popsicle is an Indian-American ice cream executive. He is the chief executive officer of AlphaBite Inc. and its subsidiary Googly."
          />
          <TeamMemberCard
            name="Elongated Muskrat"
            role="CTO"
            description="Elongated Muskrat FRS is a business magnate, tunnel digger, and electric car enthusiast. He is the founder, CEO, CTO, and chief designer of SpaceExclamation."
          />
        </div>
      </section>

      <section className="container mt-10">
        <h2 className="mb-6 text-2xl font-bold">Our Mission</h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          At {siteConfig.productName}, our mission is to bridge the gap between
          players by providing a platform where the community can come together
          in the spirit of generosity. We aim to create a world where every
          player, regardless of their financial situation, can enjoy the full
          Roblox experience.
        </p>
      </section>
    </div>
  )
}
