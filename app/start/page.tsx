import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background"
import { IconArrowUpRightCircle } from "@tabler/icons-react"

export default function StartPage() {
  return (
    <AuroraBackground className="overflow-hidden">
      <div className="relative z-10 h-screen w-screen">
        <div className="items-center justify-center gap-5 flex flex-col text-black font-bold font-mono">
          <p>Start Page</p>
          <p>Get ready to learn about vectors!</p>
        </div>
        <div className="flex gap-10 items-center justify-center h-10/12 w-4/5">
          <div className="flex gap-x-3 p-3 hover:bg-[#afafaf] flex-row font-bold font-mono items-center justify-center h-1/5 w-1/5 border border-black rounded-4xl">
            <p>What are vectors?</p>
            <IconArrowUpRightCircle />
            <p>*</p>
          </div>
          <div className="flex gap-x-3 p-3 hover:bg-[#afafaf] flex-row font-bold font-mono items-center justify-center h-1/5 w-1/5 border border-black rounded-4xl">
            <p>2D Draw</p>
            <IconArrowUpRightCircle />
          </div>
          <div className="flex gap-x-3 p-3 hover:bg-[#afafaf] flex-row font-bold font-mono items-center justify-center h-1/5 w-1/5 border border-black rounded-4xl">
            <p>Learn Addition, Multiplication</p>
            <IconArrowUpRightCircle />
            <p>*</p>
          </div>
          <div className="flex gap-x-3 p-3 hover:bg-[#afafaf] flex-row font-bold font-mono items-center justify-center h-1/5 w-1/5 border border-black rounded-4xl">
            <p>4th box does nothing looks good tho</p>
            <IconArrowUpRightCircle />
          </div>
        </div>
        <div className="flex h-screen w-screen">
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
