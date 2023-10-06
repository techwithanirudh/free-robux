"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import ReactPlayer from 'react-player/lazy';

interface ClaimHandlerProps {
  amount: number
}

export function ClaimHandler({ amount }: ClaimHandlerProps) {
  const [modal, setModal] = useState<"none" | "claim" | "rickroll">("none")

  const handleClaimSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setModal("rickroll")
  }

  return (
    <div className="w-full">
      {modal === "claim" && (
        <ClaimModal
          onOpenChange={() => setModal("none")}
          onSubmit={handleClaimSubmit}
          amount={amount}
        />
      )}
      {modal === "rickroll" && (
        <RickRollModal onOpenChange={() => setModal("none")} />
      )}
      <Button onClick={() => setModal("claim")} className="w-full">
        Claim Now
      </Button>
    </div>
  )
}

interface ModalProps {
  onOpenChange: () => void
}

function ClaimModal({
  onOpenChange,
  onSubmit,
  amount,
}: ModalProps & { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void, amount: number }) {
  return (
    <Dialog open={true} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Claim</DialogTitle>
          <DialogDescription>
            Enter your Roblox Username to claim {amount} Robux.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="mb-4 gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              placeholder="Enter your username"
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Confirm</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function RickRollModal({ onOpenChange }: ModalProps) {
  return (
    <Dialog open={true} onOpenChange={onOpenChange}>
      <DialogContent className="m-0 max-h-screen max-w-screen-2xl overflow-y-scroll p-0">
        <ReactPlayer 
          className="h-screen w-full"
          src="rickroll.mp4"
        />
      </DialogContent>
    </Dialog>
  )
}
