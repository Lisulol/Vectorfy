"use client"
import { useState } from "react"

type AlertProps = {
  type: string
  message: string
  onSubmit?: (n: number) => void
  onCancel?: () => void
}

export default function Alert({
  type,
  message,
  onSubmit,
  onCancel,
}: AlertProps) {
  const isPrompt = type === "prompt"
  const [value, setValue] = useState<number | undefined>(undefined)

  function submit() {
    if (value === undefined || Number.isNaN(value)) {
      onSubmit?.(Number.NaN)
    } else {
      onSubmit?.(value)
    }
  }

  return (
    <div className="items-center justify-center bg-white border-2 border-black p-4 m-4 rounded-4xl ">
      {isPrompt ? (
        <div>
          <p>{message}</p>
          <input
            type="number"
            className="border-2 border-black rounded-2xl p-2 m-2"
            value={value ?? ""}
            onChange={(e) =>
              setValue(
                e.target.value === "" ? undefined : Number(e.target.value)
              )
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") submit()
              if (e.key === "Escape") onCancel?.()
            }}
          />
          <div className="flex gap-2 mt-2">
            <button
              className="px-3 py-1 border rounded bg-white hover:bg-[#afafaf]"
              onClick={() => submit()}
            >
              Submit
            </button>
            <button
              className="px-3 py-1 border rounded bg-white hover:bg-[#afafaf]"
              onClick={() => onCancel?.()}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  )
}
