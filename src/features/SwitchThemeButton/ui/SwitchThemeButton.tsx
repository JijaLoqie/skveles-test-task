'use client'

import { useEffect, useState } from "react"

export function SwitchThemeButton() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    console.log('darkMode', darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])

  return (
    <div className="cursor-pointer bg-white bg-opacity-10 p-2 rounded hover:bg-opacity-20">
      <button
        onClick={() => setDarkMode(was => !was)}
        className="text-2xl"
      >
        {darkMode ? '🌚' : '🌞'}
      </button>
    </div>
  )
}
