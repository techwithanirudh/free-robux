"use client"

import React, { useEffect, useState } from "react"

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

import "../styles/loader.css"

interface ClaimHandlerProps {
  amount: number
}

export function ClaimHandler({ amount }: ClaimHandlerProps) {
  const [modal, setModal] = useState<"none" | "claim" | "rickroll">("none")

  const handleClaimSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    document.documentElement.requestFullscreen();
    setModal("rickroll");
  }

  const closeRickroll = () => {
    if (typeof window !== "undefined") {
      window.open("/close");
    }
    // setModal("none")
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
      {modal === "rickroll" && <RickRollModal onOpenChange={closeRickroll} />}
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
}: ModalProps & {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  amount: number
}) {
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
  const [loading, setLoading] = useState(true)

  return (
    <Dialog open={true} onOpenChange={onOpenChange}>
      <DialogContent className="m-0 max-h-screen max-w-screen-2xl overflow-y-scroll p-0">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div id="floatingCirclesG">
              <div className="f_circleG" id="frotateG_01"></div>
              <div className="f_circleG" id="frotateG_02"></div>
              <div className="f_circleG" id="frotateG_03"></div>
              <div className="f_circleG" id="frotateG_04"></div>
              <div className="f_circleG" id="frotateG_05"></div>
              <div className="f_circleG" id="frotateG_06"></div>
              <div className="f_circleG" id="frotateG_07"></div>
              <div className="f_circleG" id="frotateG_08"></div>
            </div>
            Adding Robux...
          </div>
        )}
        <video
          autoPlay
          className="h-screen w-full"
          loop
          onLoadedData={() => setLoading(false)}
        >
          <source
            src="https://shattereddisk.github.io/rickroll/rickroll.mp4"
            type="video/mp4"
          />
        </video>
      </DialogContent>
    </Dialog>
  )
}
