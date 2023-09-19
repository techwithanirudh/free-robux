import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ClaimHandler } from "./claim-handler";

interface RobuxCardProps {
  amount: number;
  description: string;
}

export function RobuxCard({ amount, description }: RobuxCardProps) {
  return (
    <Card className="w-full md:w-[350px]">
      <CardHeader>
        <CardTitle>Buy {amount} Robux</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Content can be added here if needed */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <ClaimHandler amount={amount} />
      </CardFooter>
    </Card>
  );
}
