'use client'

import { useState } from "react"

export function SwitchThemeButton() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="cursor-pointer bg-white bg-opacity-10 p-2 rounded hover:bg-opacity-20">
      <button
        onClick={() => setDarkMode(was => !was)}
        className="text-2xl"
      >
        {darkMode ? '🌞' : '🌚'}
      </button>
    </div>
  )
}
