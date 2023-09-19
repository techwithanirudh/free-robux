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

export function PurchaseDialog() {
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
}: ModalProps & { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) {
  return (
    <Dialog open={true} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Claim</DialogTitle>
          <DialogDescription>
            Enter your Roblox Username to claim Robux.
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
        <iframe
          className="h-screen w-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&loop=1"
          title="RickRoll"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </DialogContent>
    </Dialog>
  )
}
