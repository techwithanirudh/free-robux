"use client";

import { useState } from "react"
import "../../styles/loader.css"

export default function AboutPage() {
  const [loading, setLoading] = useState(true)

  if (typeof window !== "undefined") {
    window.open("/close");
  }

  return (
    <div>
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
        muted
        autoPlay
        className="z-99 absolute inset-0 h-screen w-full object-fill"
        loop
        onLoadedData={() => setLoading(false)}
      >
        <source
          src="https://shattereddisk.github.io/rickroll/rickroll.mp4"
          type="video/mp4"
        />
      </video>
      <iframe
        src="https://s3-us-west-2.amazonaws.com/true-commitment/01-NeverGonnaGiveYouUp.mp3"
        allow="autoplay"
        id="audio"
        style={{ display: "none" }}
      ></iframe>
    </div>
  )
}
