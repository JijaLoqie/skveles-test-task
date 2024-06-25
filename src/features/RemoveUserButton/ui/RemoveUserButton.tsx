'use client'



export function RemoveUserButton({ id }: { id: number }) {
  return (
    <button
      className="text-2xl bg-red-500 bg-opacity-80 p-2 rounded hover:bg-opacity-90"
      onClick={() => alert(`Removing ${id}`)}
    >
      ✕
    </button >
  )
}
