"use client"
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background"
import Link from "next/link"
import { useState, ChangeEvent } from "react"

export default function CalcPage() {
  const [showenter, setShowenter] = useState(true)
  const [vector1, setVector1] = useState<number[]>([0, 0, 0])
  const [vector2, setVector2] = useState<number[]>([0, 0, 0])

  const handleV1Change = (idx: number, e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const n = raw === "" ? 0 : Number(raw)
    setVector1((prev) => {
      const copy = [...prev]
      copy[idx] = Number.isNaN(n) ? 0 : n
      return copy
    })
  }

  const handleV2Change = (idx: number, e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const n = raw === "" ? 0 : Number(raw)
    setVector2((prev) => {
      const copy = [...prev]
      copy[idx] = Number.isNaN(n) ? 0 : n
      return copy
    })
  }

  const addVectors = () => vector1.map((v, i) => v + (vector2[i] ?? 0))
  const dotProduct = () =>
    vector1.reduce((acc, v, i) => acc + v * (vector2[i] ?? 0), 0)
  const crossProduct = () => {
    const x1 = vector1[0] ?? 0
    const y1 = vector1[1] ?? 0
    const z1 = vector1[2] ?? 0
    const x2 = vector2[0] ?? 0
    const y2 = vector2[1] ?? 0
    const z2 = vector2[2] ?? 0
    return [y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - y1 * x2]
  }

  return (
    <AuroraBackground>
      <div className="relative z-10 flex items-center justify-center h-screen w-screen">
        <div className="absolute top-4 left-4 z-30">
          <Link
            className="bg-white border text-4xl items-center justify-center flex p-2 rounded hover:bg-[#afafaf]"
            href="/start"
          >
            {"<"}
          </Link>
        </div>
        {showenter && (
          <div className="bg-white fixed inset-0 z-50 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-white border-2 border-black p-6 rounded-4xl max-w-lg">
              <p className="text-black font-mono font-bold mb-4 text-center">
                Welcome to the Calculator Page! Here, you can perform vector
                calculations such as addition, scalar multiplication, and dot
                products. Get started by entering your vectors below.
              </p>
              <button
                className="bg-white border border-black flex rounded items-center justify-center hover:bg-[#afafaf] px-4 py-2 mt-4"
                onClick={() => setShowenter(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
        <div className="bg-white border rounded-4xl border-black w-4/5 h-4/5 p-15">
          <div className="border flex flex-col border-black rounded p-4 mt-5">
            <div className="mb-3">
              <p>Vector 1</p>
              {"["}
              {vector1.map((val, i) => (
                <span key={i} className="mx-1">
                  <input
                    type="number"
                    className="bg-[#f1f1f1] px-2"
                    value={val}
                    onChange={(e) => handleV1Change(i, e)}
                  />
                  {i < vector1.length - 1 ? "," : ""}
                </span>
              ))}
              {"]"}
            </div>

            <div>
              <p>Vector 2</p>
              {"["}
              {vector2.map((val, i) => (
                <span key={i} className="mx-1">
                  <input
                    type="number"
                    className="bg-[#f1f1f1] px-2"
                    value={val}
                    onChange={(e) => handleV2Change(i, e)}
                  />
                  {i < vector2.length - 1 ? "," : ""}
                </span>
              ))}
              {"]"}
            </div>
          </div>
          <div className="mt-4 w-1/4 gap-15 flex flex-col">
            <p className="border rounded-3xl p-10 border-black">
              Sum: [{addVectors().join(", ")}]
            </p>
            <p className="border rounded-3xl p-10 border-black">
              Dot product: {dotProduct()}
            </p>
            <p className="border rounded-3xl p-10 border-black">
              Cross product: [{crossProduct().join(", ")}]
            </p>
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
}
