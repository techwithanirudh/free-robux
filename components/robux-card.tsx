import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ClaimHandler } from "./claim-handler";

interface RobuxCardProps {
  amount: number;
  description: string;
}

export function RobuxCard({ amount, description }: RobuxCardProps) {
  return (
    <Card className="mx-auto w-full max-w-[350px] overflow-hidden border bg-card/80 shadow-sm transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Buy {amount} Robux</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent />
      <CardFooter className="flex justify-center">
        <ClaimHandler amount={amount} />
      </CardFooter>
    </Card>
  );
}
