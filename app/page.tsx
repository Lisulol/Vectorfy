import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background"
import Link from "next/link"

export default function HomePage() {
  return (
    <AuroraBackground>
      <div className="relative z-10 h-screen w-screen items-center justify-center flex flex-col">
        <div className="items-center justify-center gap-5 flex flex-col text-black font-bold font-mono">
          <p>VECTORFY</p>
          <p>Interactive math learning game with vectors</p>
          <Link href="/start">
            <button className="border hover:bg-[#afafaf] border-black px-2 rounded-3xl">
              Start
            </button>
          </Link>
        </div>
      </div>
    </AuroraBackground>
  )
}
