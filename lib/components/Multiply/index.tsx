"use client"

import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import { useState } from "react"

export default function Multiply() {
  const [page, setPage] = useState(1)

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white h-full w-full border border-black rounded-4xl">
      {page === 1 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex h-10/12 w-full items-center justify-center">
            <p className="font-bold text-black font-mono">
              Let's talk 2D first.
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
              2D addition <br />
            </p>

            <p className="text-black font-mono font-bold">
              In 2D we can add vectors by adding their respective components.
              <br />
              For example: <br />
              Vector A = [2i,3j] <br />
              Vector B = [4i,1j] <br />A + B = [2i + 4i, 3j + 1j] = [6i,4j]
              ezybuckets
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
              2D Addition(graphic) <br />
            </p>

            <p className="text-black font-mono font-bold">
              We have two methods: <br />
              1. POA method
              <br />
              2. "Chain" method <br />
            </p>
            <p className="text-black font-mono font-bold text-xs">
              Be aware that those are my names for the methods
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
      {page === 4 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              2D Addition(POA) <br />
              So this method involves placing the two vectors such that they
              both start from the same origin point, hence the name. Then, we
              complete the parallelogram and draw the resultant vector from the
              origin to the opposite corner of the parallelogram. Like this,
              where r is the resultant vector:
            </p>
            <img src="/v3.png" />
            <p className="text-black font-mono font-bold">
              I would use this method only if you have 2 vectors to add. Adding
              more can be problematic and annoying
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
      {page === 5 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              2D Addition(Chain) <br />
              This method involves placing the vectors head to tail. The
              resultant is the vector from the start of the first vector to the
              end of the last vector. Forming a "chain" of vectors.
            </p>
            <img src="/v4.jpg" />
            <p className="text-black font-mono font-bold">
              This is the method I would use if adding more than 2 vectors{" "}
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
      {page === 6 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              2D Multiplication
              <br />
              Pretty straightforward. You just multiply each component by the
              scalar value. For example:
            </p>

            <p className="text-black font-mono font-bold">
              Vector a = [2i,3j] <br />
              Scalar k = 3 <br />k * a = 3 * [2i,3j] = [6i,9j]
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
      {page === 7 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              2D Multiplication(dot product)
              <br />
              The dot product of two vectors is a scalar quantity resulting from
              the multiplication of the vectors' corresponding components, or
              the product of their magnitudes and the cosine of the angle
              between them. For example:
            </p>

            <p className="text-black font-mono font-bold">
              Vector a = [2i,3j] <br />
              Vector b = [4i,1j] <br />
              a · b = (2 * 4) + (3 * 1) = 8 + 3 = 11 <br />
              a · b = |a| |b| cosθ <br />
            </p>
            <p className=" font-mono font-black text-xs">
              Where θ is the angle between a and b. <br /> From this formula, we
              can also derive that if the product of the dot is equal to 0, then
              the vectors are perpendicular
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
      {page === 8 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              3D Vectors
              <br />
              This is where it gets tricky
            </p>
            <img src="/v5.png" />
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
      {page === 9 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              3D Addition
              <br />
              Bassicly works the same as 2D addition, but now we have a third
              component, the z component. So a vector in 3D looks like this:
              [ai,bj,ck] where i,j,k are the unit vectors for each axis. For
              example:
            </p>
            <p className="text-black font-mono font-bold">
              Vector A = [2i,3j,4k] <br />
              Vector B = [4i,1j,2k] <br />A + B = [2i + 4i, 3j + 1j, 4k + 2k] =
              [6i,4j,6k]
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
      {page === 10 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              3D Addition(graphic)
              <br />
              Here we also have two methods: POA and Chain method. They work the
              same way as in 2D, but now we have to account for the third
              dimension. For example:
            </p>
            <div className="flex gap-15 flex-row items-center justify-center size-150">
              <img src="/v6.png" />
              <img src="/v7.jpg" />
            </div>
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
      {page === 11 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              3D Multiplication
              <br />
              Here we have something new called the cross product. The rest is
              the same.
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
      {page === 12 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              3D Multiplication
              <br />
              Quick recap of scalar multiplication and dot product in 3D:
            </p>
            <div className="w-full flex flex-row text-black font-mono font-bold">
              <div className="h-full w-1/2 border-r border-black">
                <p>
                  Scalar multiplication:
                  <br />
                  Vector a = [2i,3j,4k] <br />
                  Scalar k = 3 <br />k * a = 3 * [2i,3j,4k] = [6i,9j,12k]
                </p>
              </div>
              <div className="h-full w-1/2 border-l border-black pl-5">
                <p>
                  Dot product:
                  <br />
                  Vector a = [2i,3j,4k] <br />
                  Vector b = [4i,1j,2k] <br />
                  a · b = (2 * 4) + (3 * 1) + (4 * 2) = 8 + 3 + 8 = 19 <br />
                  a · b = |a| |b| cosθ <br />
                </p>
              </div>
            </div>
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
      {page === 13 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              3D Multiplication(cross product)
              <br />
              The cross product of two vectors results in a third vector that is
              perpendicular to the plane formed by the original vectors. The
              magnitude of the cross product vector is given by the product of
              the magnitudes of the original vectors and the sine of the angle
              between them. For example:
            </p>
            <p className="text-black font-mono font-bold">
              Vector a = [2i,3j,4k] <br />
              Vector b = [4i,1j,2k] <br />
            </p>
            <img src="/v8.png" />
            <p className="text-black font-mono font-bold">
              The resulting vector c = a × b = [2i,12j,-10k]
              <p className="text-xs">
                There is also this long formula but i dont remember it lol. So i
                just use the determinant method shown in the image above
              </p>
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
      {page === 14 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              3D Multiplication(cross product)
              <br />
              We got the vector now what about its direction? We can use the
              right hand rule.
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
      {page === 15 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              Right hand rule
              <br />
              Its quite hard to explain this by text and comprehend it too I
              think.* I wouldn't be able* <br />
              So here is a great video explaining it by BraunVideos
            </p>
            <a
              href="https://www.youtube.com/watch?v=zGyfiOqiR4s"
              target="_blank"
              className="font-bold font-mono text-blue-500 underline"
            >
              <p>Link</p>
            </a>
            <img src="/v8.jpg"></img>
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
      {page === 16 && (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-10/12 gap-10 w-full items-center justify-center">
            <p className="text-black font-mono font-bold">
              That's it
              <br />
              After reading this you should have a basic understanding of vector
              addition and multiplication in both 2D and 3D space. <br />
              For more in-depth explanations and visualizations, I recommend
              checking out additional resources and tutorials online.
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
// https://www.youtube.com/watch?v=zGyfiOqiR4s
