"use client"
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background"
import Alert from "@/lib/components/alert"
import Konva from "konva"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Stage, Layer, Arrow, Line, Text } from "react-konva"

type Vector = {
  id: string
  x: number
  y: number
  dx: number
  dy: number
  stroke?: string
  strokeWidth?: number
}

export default function DrawPage() {
  const [shapes, setShapes] = useState<Vector[]>([])
  const [preview, setPreview] = useState<Vector | null>(null)
  const [mode, setMode] = useState<"none" | "draw" | "erase" | "select">("none")
  const [snapToGrid, setSnapToGrid] = useState(true)
  const [isDrawing, setIsDrawing] = useState(false)
  const stageRef = useRef<Konva.Stage | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLDivElement | null>(null)
  const [stagesize, setStagesize] = useState({ width: 800, height: 600 })
  const [showsmthing, setShowsomething] = useState(false)
  const [result, setResult] = useState<Vector | null>(null)
  const [showMessage, setShowMessage] = useState(false)
  const [type, setType] = useState("")
  const [message, setMessage] = useState("")
  const promptHandlerRef = useRef<((n: number) => void) | null>(null)

  const gridSpacing = 50
  const gridStroke = "#e5e7eb"
  const axisStroke = "#9ca3af"

  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 })
  const [hoverInfo, setHoverInfo] = useState<{
    length: number
    angle: number
    tail: { x: number; y: number }
    head: { x: number; y: number }
  } | null>(null)

  const [selected, setSelected] = useState<Vector[]>([])

  useEffect(() => {
    function handleResize() {
      const el = canvasRef.current || containerRef.current
      if (!el) return
      const rect = (el as HTMLElement).getBoundingClientRect()
      setStagesize({
        width: Math.max(0, Math.round(rect.width)),
        height: Math.max(0, Math.round(rect.height)),
      })
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function toggleSnap() {
    setSnapToGrid((s) => !s)
  }

  function pointerToWorld() {
    const stage = stageRef.current
    if (!stage) return { x: 0, y: 0 }
    const pointer = stage.getPointerPosition() || { x: 0, y: 0 }
    const scale = stage.scaleX() || 1
    const pos = stage.position()
    const worldX = (pointer.x - pos.x) / scale
    const worldY = (pointer.y - pos.y) / scale
    return { x: worldX, y: worldY }
  }

  function snapX(v: number) {
    const centerX = stagesize.width / 2
    return centerX + Math.round((v - centerX) / gridSpacing) * gridSpacing
  }

  function snapY(v: number) {
    const centerY = stagesize.height / 2
    return centerY + Math.round((v - centerY) / gridSpacing) * gridSpacing
  }

  function handlePointerDown(e?: any) {
    const stage = stageRef.current
    if (mode === "erase") {
      const pos = stage?.getPointerPosition()
      if (stage && pos) {
        const hit = stage.getIntersection(pos)
        const hitId = hit?.name()
        if (hitId) {
          setShapes((s) => s.filter((sh) => sh.id !== hitId))
          setSelected((sel) => sel.filter((it) => it.id !== hitId))
          return
        }
      }
    }

    if (mode === "draw") {
      const startRaw = pointerToWorld()
      const bypass = e?.evt?.shiftKey === true
      const start =
        snapToGrid && !bypass
          ? { x: snapX(startRaw.x), y: snapY(startRaw.y) }
          : startRaw
      setPreview({
        id: "preview",
        x: start.x,
        y: start.y,
        dx: 0,
        dy: 0,
        stroke: "#000",
        strokeWidth: 2,
      })
      setIsDrawing(true)
    }

    document.body.style.overflow = "hidden"
  }

  function handlePointerMove(e?: any) {
    if (!isDrawing || !preview) return
    const curRaw = pointerToWorld()
    const bypass = e?.evt?.shiftKey === true
    const cur =
      snapToGrid && !bypass
        ? { x: snapX(curRaw.x), y: snapY(curRaw.y) }
        : curRaw
    setPreview((prev) =>
      prev ? { ...prev, dx: cur.x - prev.x, dy: cur.y - prev.y } : prev
    )

    const stage = stageRef.current
    const pointer = stage?.getPointerPosition()
    if (stage && pointer) setHoverPos({ x: pointer.x, y: pointer.y })
  }

  function handlePointerUp(e?: any) {
    if (preview && Math.hypot(preview.dx, preview.dy) > 4) {
      const bypass = e?.evt?.shiftKey === true
      const tail = { x: preview.x, y: preview.y }
      const head = { x: preview.x + preview.dx, y: preview.y + preview.dy }
      const tailSnapped =
        snapToGrid && !bypass ? { x: snapX(tail.x), y: snapY(tail.y) } : tail
      const headSnapped =
        snapToGrid && !bypass ? { x: snapX(head.x), y: snapY(head.y) } : head
      const newShape: Vector = {
        id: crypto?.randomUUID?.() || String(Date.now()),
        x: tailSnapped.x,
        y: tailSnapped.y,
        dx: headSnapped.x - tailSnapped.x,
        dy: headSnapped.y - tailSnapped.y,
        stroke: preview.stroke,
        strokeWidth: preview.strokeWidth,
      }
      setShapes((s) => [...s, newShape])
    }
    setPreview(null)
    setIsDrawing(false)
    document.body.style.overflow = ""
  }

  function handleHoverEnter(e: any, shape: Vector) {
    const stage = stageRef.current
    const pointer = stage?.getPointerPosition()
    if (stage && pointer) setHoverPos({ x: pointer.x, y: pointer.y })
    setHoveredId(shape.id)
    const len = Math.hypot(shape.dx, shape.dy)
    const angle = (Math.atan2(shape.dy, shape.dx) * 180) / Math.PI
    setHoverInfo({
      length: len,
      angle,
      tail: { x: shape.x, y: shape.y },
      head: { x: shape.x + shape.dx, y: shape.y + shape.dy },
    })
  }

  function handleHoverMove(e: any) {
    const stage = stageRef.current
    const pointer = stage?.getPointerPosition()
    if (stage && pointer) setHoverPos({ x: pointer.x, y: pointer.y })
  }
  function handleHoverLeave() {
    setHoveredId(null)
    setHoverInfo(null)
  }
  useEffect(() => {
    if (mode == "select") {
      if (selected.length >= 1) {
        setShowsomething(true)
      } else {
        setShowsomething(false)
      }
    } else {
      if (selected.length > 0) setSelected([])
      setShapes((s) => {
        const hasResult = s.some((sh) => sh.id === "result")
        if (!hasResult) return s
        return s.filter((sh) => sh.id !== "result")
      })
      setShowsomething(false)
    }
  }, [mode, selected])

  function handleShapeClick(e: any, shape: Vector) {
    if (mode === "erase") {
      setShapes((s) => s.filter((sh) => sh.id !== shape.id))
      setSelected((sel) => sel.filter((it) => it.id !== shape.id))
      return
    }

    if (mode === "select") {
      const shift = e?.evt?.shiftKey === true
      setSelected((prev) => {
        const exists = prev.some((p) => p.id === shape.id)
        if (exists) {
          return prev.filter((p) => p.id !== shape.id)
        }

        if (shift) {
          if (prev.length < 2) return [...prev, shape]
          return [prev[1], shape]
        }

        return [shape]
      })
    }
  }
  function handleadd() {
    if (selected.length == 2) {
      const v1 = selected[0]
      const v2 = selected[1]
      const newVector: Vector = {
        id: "result",
        x: v1.x,
        y: v1.y,
        dx: v1.dx + v2.dx,
        dy: v1.dy + v2.dy,
        stroke: "#ff0000",
        strokeWidth: 2,
      }
      setShapes((s) => [...s, newVector])
      setSelected([])
    }
  }
  function handlemessageshow() {
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 2000)
  }
  function constmutliply() {
    if (selected.length == 1) {
      const vector = selected[0]

      promptHandlerRef.current = (n: number) => {
        if (Number.isNaN(n)) {
          handlemessageshow()
          setType("message")
          setMessage("Invalid number")
          return
        }
        const newVector: Vector = {
          id: "result",
          x: vector.x,
          y: vector.y,
          dx: vector.dx * n,
          dy: vector.dy * n,
          stroke: "#ff0000",
          strokeWidth: 2,
        }
        setShapes((s) => [...s.filter((sh) => sh.id !== "result"), newVector])
        setResult(newVector)
        setSelected([])
      }
      setType("prompt")
      setMessage("Enter scalar to multiply by:")
      setShowMessage(true)
    }
  }
  function handlePromptSubmit(n: number) {
    if (promptHandlerRef.current) {
      promptHandlerRef.current(n)
      promptHandlerRef.current = null
    }
    setShowMessage(false)
    setType("")
    setMessage("")
  }

  function handlePromptCancel() {
    promptHandlerRef.current = null
    setShowMessage(false)
    setType("")
    setMessage("")
  }
  function handledotproduct() {
    if (selected.length == 2) {
      const v1 = selected[0]
      const v2 = selected[1]
      const result = v1.dx * v2.dx + v1.dy * v2.dy
      handlemessageshow()
      setType("message")
      setMessage(`Dot product: ${result}`)
      setSelected([])
    }
  }

  return (
    <AuroraBackground>
      <div
        ref={containerRef}
        className="relative z-10 gap-5 h-screen w-screen items-center justify-center flex flex-row"
      >
        <div className="absolute top-4 left-4 z-30">
          <Link
            className="bg-white border text-4xl items-center justify-center flex p-2 rounded hover:bg-[#afafaf]"
            href="/start"
          >
            {"<"}
          </Link>
        </div>
        {showMessage && (
          <div
            className="fixed inset-0 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.4)", zIndex: 9999 }}
          >
            <Alert
              type={type}
              message={message}
              onSubmit={handlePromptSubmit}
              onCancel={handlePromptCancel}
            />
          </div>
        )}
        {showsmthing && (
          <div className="text-black flex flex-col gap-10  items-center justify-center font-mono h-4/5 w-20 bg-white border border-black rounded-4xl p-4">
            <div
              onClick={handleadd}
              className="bg-white border border-black rounded-2xl flex text-2xl font-bold items-center justify-center hover:bg-[#afafaf] hover:cursor-pointer h-15 w-20"
            >
              +
            </div>
            <div
              onClick={handledotproduct}
              className="bg-white border border-black rounded-2xl flex text-2xl font-bold items-center justify-center hover:bg-[#afafaf] hover:cursor-pointer h-15 w-20"
            >
              .
            </div>
            <div
              onClick={constmutliply}
              className="bg-white border border-black rounded-2xl flex text-2xl font-bold items-center justify-center hover:bg-[#afafaf] hover:cursor-pointer h-15 w-20"
            >
              C
            </div>
          </div>
        )}
        <div className="flex h-full w-full flex-col items-center justify-center gap-5">
          <div className="w-5/6 gap-10 h-1/12 border border-black rounded-4xl items-center flex justify-center bg-white">
            <div
              onClick={() => setMode((p) => (p === "erase" ? "none" : "erase"))}
              className={`h-20 w-20 border rounded-2xl flex items-center justify-center hover:bg-[#afafaf] hover:cursor-pointer ${
                mode === "erase"
                  ? "bg-blue-200 ring-2 ring-blue-500"
                  : "bg-white"
              }`}
            >
              Erase
            </div>
            <div
              onClick={() => setMode((p) => (p === "draw" ? "none" : "draw"))}
              className={`h-20 w-20 border rounded-2xl flex items-center justify-center hover:bg-[#afafaf] hover:cursor-pointer ${
                mode === "draw"
                  ? "bg-blue-200 ring-2 ring-blue-500"
                  : "bg-white"
              }`}
            >
              Draw
            </div>
            <div
              onClick={() =>
                setMode((p) => (p === "select" ? "none" : "select"))
              }
              className={`h-20 w-20 border rounded-2xl flex items-center justify-center hover:bg-[#afafaf] hover:cursor-pointer ${
                mode === "select"
                  ? "bg-blue-200 ring-2 ring-blue-500"
                  : "bg-white"
              }`}
            >
              Select
            </div>
            <div
              onClick={() => setMode("none")}
              className={`h-20 w-20 border rounded-2xl flex items-center justify-center hover:bg-[#afafaf] hover:cursor-pointer ${
                mode === "none"
                  ? "bg-blue-200 ring-2 ring-blue-500"
                  : "bg-white"
              }`}
            >
              None
            </div>
            <div
              onClick={toggleSnap}
              className={`h-20 w-32 border rounded-2xl flex items-center justify-center hover:bg-[#afafaf] hover:cursor-pointer ${
                snapToGrid ? "bg-blue-200 ring-2 ring-blue-500" : "bg-white"
              }`}
            >
              Snap: {snapToGrid ? "On" : "Off"}
            </div>
            <div
              onClick={() => setShapes([])}
              className={`h-20 w-32 border rounded-2xl flex items-center justify-center hover:bg-[#afafaf] hover:cursor-pointer 
                
                `}
            >
              Erase all
            </div>
          </div>

          <div
            ref={canvasRef}
            className="relative h-5/6 w-5/6 bg-white border items-center justify-center border-black flex rounded-4xl"
            style={{
              cursor: mode === "erase" ? "crosshair" : undefined,
              overflow: "hidden",
            }}
          >
            <Stage
              width={stagesize.width}
              height={stagesize.height}
              ref={stageRef}
              onMouseDown={handlePointerDown}
              onMouseMove={handlePointerMove}
              onMouseUp={handlePointerUp}
              onTouchStart={handlePointerDown}
              onTouchMove={handlePointerMove}
              onTouchEnd={handlePointerUp}
            >
              <Layer key="grid">
                {(() => {
                  const centerX = stagesize.width / 2
                  const leftCount = Math.ceil(centerX / gridSpacing)
                  const rightCount = Math.ceil(
                    (stagesize.width - centerX) / gridSpacing
                  )
                  const centerY = stagesize.height / 2
                  const topCount = Math.ceil(centerY / gridSpacing)
                  const bottomCount = Math.ceil(
                    (stagesize.height - centerY) / gridSpacing
                  )
                  const nodes: any[] = []

                  for (let k = -leftCount; k <= rightCount; k++) {
                    const x = Math.round(centerX + k * gridSpacing)
                    nodes.push(
                      <Line
                        key={`v-${k}`}
                        points={[x, 0, x, stagesize.height]}
                        stroke={k === 0 ? axisStroke : gridStroke}
                        strokeWidth={1}
                      />
                    )
                  }
                  for (let k = -topCount; k <= bottomCount; k++) {
                    const y = Math.round(centerY + k * gridSpacing)
                    nodes.push(
                      <Line
                        key={`h-${k}`}
                        points={[0, y, stagesize.width, y]}
                        stroke={k === 0 ? axisStroke : gridStroke}
                        strokeWidth={1}
                      />
                    )
                  }

                  ;[-1, 1].forEach((k) => {
                    const vx = Math.round(centerX + k * gridSpacing)
                    nodes.push(
                      <Line
                        key={`axis-v-tick-near-${k}`}
                        points={[vx, centerY - 6, vx, centerY + 6]}
                        stroke={axisStroke}
                        strokeWidth={1}
                      />
                    )
                    nodes.push(
                      <Text
                        key={`axis-v-label-near-${k}`}
                        x={vx + 6}
                        y={centerY + 6}
                        text={`${k * gridSpacing}`}
                        fontSize={12}
                        fontFamily="monospace"
                        fill="#111"
                      />
                    )

                    const hy = Math.round(centerY + k * gridSpacing)
                    nodes.push(
                      <Line
                        key={`axis-h-tick-near-${k}`}
                        points={[centerX - 6, hy, centerX + 6, hy]}
                        stroke={axisStroke}
                        strokeWidth={1}
                      />
                    )
                    nodes.push(
                      <Text
                        key={`axis-h-label-near-${k}`}
                        x={centerX + 8}
                        y={hy - 8}
                        text={`${k * gridSpacing}`}
                        fontSize={12}
                        fontFamily="monospace"
                        fill="#111"
                      />
                    )
                  })

                  return nodes
                })()}
              </Layer>

              <Layer key="shapes">
                {shapes.map((shape) => {
                  const isSelected = selected.some((s) => s.id === shape.id)
                  return (
                    <Arrow
                      key={shape.id}
                      name={shape.id}
                      points={[
                        shape.x,
                        shape.y,
                        shape.x + shape.dx,
                        shape.y + shape.dy,
                      ]}
                      stroke={isSelected ? "#2563eb" : shape.stroke || "#000"}
                      fill={isSelected ? "#2563eb" : shape.stroke || "#000"}
                      strokeWidth={
                        (shape.strokeWidth || 2) + (isSelected ? 2 : 0)
                      }
                      pointerLength={10}
                      pointerWidth={8}
                      onClick={(e) => handleShapeClick(e, shape)}
                      onTap={(e) => handleShapeClick(e, shape)}
                      onMouseEnter={(e) => handleHoverEnter(e, shape)}
                      onMouseMove={handleHoverMove}
                      onMouseLeave={handleHoverLeave}
                    />
                  )
                })}
              </Layer>

              <Layer key="preview">
                {preview && (
                  <Arrow
                    points={[
                      preview.x,
                      preview.y,
                      preview.x + preview.dx,
                      preview.y + preview.dy,
                    ]}
                    stroke={preview.stroke}
                    fill={preview.stroke}
                    strokeWidth={preview.strokeWidth}
                    pointerLength={10}
                    pointerWidth={8}
                    dash={[6, 4]}
                  />
                )}
              </Layer>
            </Stage>

            {hoveredId && hoverInfo && (
              <div
                style={{
                  position: "absolute",
                  left: hoverPos.x + 12,
                  top: hoverPos.y + 12,
                  pointerEvents: "none",
                  background: "white",
                  border: "1px solid black",
                  padding: 8,
                  borderRadius: 8,
                  zIndex: 9999,
                }}
              >
                <div className="text-sm font-mono">
                  <div>
                    Tail: [{hoverInfo.tail.x.toFixed(0)},
                    {hoverInfo.tail.y.toFixed(0)}]
                  </div>
                  <div>
                    Head: [{hoverInfo.head.x.toFixed(0)},
                    {hoverInfo.head.y.toFixed(0)}]
                  </div>
                  <div>Len: {hoverInfo.length.toFixed(2)}</div>
                  <div>Angle: {hoverInfo.angle.toFixed(1)}°</div>
                  <div>
                    <p>
                      {"["}
                      {(hoverInfo.head.x - hoverInfo.tail.x).toFixed(0)},
                      {(hoverInfo.head.y - hoverInfo.tail.y).toFixed(0)}
                      {"]"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
}
