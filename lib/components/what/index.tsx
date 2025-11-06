"use client"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import { useState } from "react"

export default function What() {
  const [page, setPage] = useState(1)

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white h-full w-full border border-black rounded-4xl">
      {page === 1 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col gap-y-15 h-10/12 w-full items-center justify-center mb-5">
            <p className="text-black font-mono font-bold">
              All about Vectors {"(:"}
            </p>
            <p className="text-black font-mono font-bold">
              A vector is a mathematical object characterized by four key
              properties: <br />
              Magnitude (Length) - the size or strength of the vector,
              represented by the length of the arrow <br />
              Direction - the line along which the vector acts (e.g.,
              horizontal, vertical, diagonal) <br />
              Sense (Orientation) - the specific way the vector points along
              that direction (e.g., left vs right, up vs down), indicated by the
              arrowhead <br />
              Point of Application - the starting point where the vector
              originates Vectors are typically represented as arrows, where the
              arrow's length shows the magnitude, and the arrowhead indicates
              the sense of direction.
            </p>
          </div>
          <div className="flex h-2/12 w-full items-center justify-end">
            <button
              className="flex flex-row border hover:bg-[#afafaf] border-black px-2 rounded-3xl"
              onClick={() => setPage((p) => p + 1)}
            >
              Page <ArrowBigRight />
            </button>
          </div>
        </div>
      )}
      {page === 2 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 w-full items-center justify-center mb-5">
            <p className="text-black font-mono font-bold">
              Example 1: <br />
            </p>
            <div>
              <img src="/small.png" />
            </div>
            <p className="text-black font-mono font-bold">
              We can represent the vector like this. [x,y] (where x is the
              horizontal and y the vertical) (also depends on dimensions) A 3D
              vector would be [x,y,z]
              <br />
              This particular vector would be [3i,4j]*
              <br />
              *i,j,k are the unit vectors that depend on your chosen unit
              length.
            </p>
          </div>
          <div className="flex  h-2/12 w-full items-center justify-center">
            <div className="flex w-full items-center justify-start">
              <button
                className="flex flex-row border hover:bg-[#afafaf] border-black px-2 rounded-3xl"
                onClick={() => setPage((p) => p - 1)}
              >
                <ArrowBigLeft /> Page
              </button>
            </div>
            <div className="flex w-full items-center justify-end">
              <button
                className="flex flex-row border hover:bg-[#afafaf] border-black px-2 rounded-3xl"
                onClick={() => setPage((p) => p + 1)}
              >
                <ArrowBigRight /> Page
              </button>
            </div>
          </div>
        </div>
      )}
      {page === 3 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 w-full items-center justify-center mb-5">
            <p className="text-black font-mono font-bold">
              Example 2: <br />
            </p>
            <div>
              <img src="/v2.png" />
            </div>
            <p className="text-black font-mono font-bold">
              Here we can see two vectors with the same magnitude but different
              directions
            </p>
          </div>
          <div className="flex  h-2/12 w-full items-center justify-center">
            <div className="flex w-full items-center justify-start">
              <button
                className="flex flex-row border hover:bg-[#afafaf] border-black px-2 rounded-3xl"
                onClick={() => setPage((p) => p - 1)}
              >
                <ArrowBigLeft /> Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
