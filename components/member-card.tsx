import React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface TeamMemberCardProps {
  name: string
  role: string
  description: string
}

export function TeamMemberCard({
  name,
  role,
  description,
}: TeamMemberCardProps) {
  return (
    <Card className="w-full md:w-[350px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
