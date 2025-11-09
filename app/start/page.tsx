"use client"

import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background"
import Multiply from "@/lib/components/Multiply"
import What from "@/lib/components/what"
import { IconArrowUpRightCircle } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"

export default function StartPage() {
  const [isWhat, setIsWhat] = useState(false)
  const [isMultiply, setIsMultiply] = useState(false)

  function handlewhat() {
    setIsWhat(true)
  }
  function handlemult() {
    setIsMultiply(true)
  }

  return (
    <AuroraBackground className="overflow-hidden">
      {isWhat && (
        <div
          onClick={() => setIsWhat(false)}
          className="fixed inset-0 z-99 h-screen w-screen flex items-center justify-center bg-white/60"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center h-4/5 w-4/5"
          >
            <What />
          </div>
        </div>
      )}
      {isMultiply && (
        <div
          onClick={() => setIsMultiply(false)}
          className="fixed inset-0 z-99 h-screen w-screen flex items-center justify-center bg-white/60"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center h-4/5 w-4/5"
          >
            <Multiply />
          </div>
        </div>
      )}
      <div className="relative z-10 h-screen w-screen">
        <div className="items-center justify-center gap-5 flex flex-col text-black font-bold font-mono">
          <p>Start Page</p>
          <p>Get ready to learn about vectors!</p>
        </div>
        <div className="flex gap-10 items-center justify-center h-10/12 w-full">
          <div
            className="flex gap-x-3 p-3 hover:bg-[#afafaf] flex-row font-bold font-mono items-center justify-center h-1/5 w-1/5 border border-black rounded-4xl"
            onClick={handlewhat}
          >
            <p>What are vectors?</p>
            <IconArrowUpRightCircle />
            <p>*</p>
          </div>
          <div className="flex gap-x-3 p-3 hover:bg-[#afafaf] flex-row font-bold font-mono items-center justify-center h-1/5 w-1/5 border border-black rounded-4xl">
            <Link href={"/Draw"} className="flex flex-row">
              <p>2D Draw</p>
              <IconArrowUpRightCircle />
            </Link>
          </div>
          <div
            className="flex gap-x-3 p-3 hover:bg-[#afafaf] flex-row font-bold font-mono items-center justify-center h-1/5 w-1/5 border border-black rounded-4xl"
            onClick={handlemult}
          >
            <p>Learn Addition, Multiplication</p>
            <IconArrowUpRightCircle />
            <p>*</p>
          </div>
          <div className="flex gap-x-3 p-3 hover:bg-[#afafaf] flex-row font-bold font-mono items-center justify-center h-1/5 w-1/5 border border-black rounded-4xl">
            <p>4th box does nothing looks good tho</p>
            <IconArrowUpRightCircle />
          </div>
        </div>
        <div className="flex h-2/12 w-screen">
          <p className="w-100">
            * Be aware that everything here is done with my own knowledge of
            vectors which is not that extensive. Some of the methods here might
            be new to you I just use what my prof taught me. 3D draw coming soon
            "a.k.a never" couse 2D is not that intresting
          </p>
        </div>
      </div>
    </AuroraBackground>
  )
}
