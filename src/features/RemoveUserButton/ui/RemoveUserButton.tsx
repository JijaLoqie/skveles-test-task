export function RemoveUserButton({ onRemove }: { onRemove: () => void }) {
  return (
    <button
      className="text-2xl bg-red-500 bg-opacity-80 p-2 rounded hover:bg-opacity-90"
      onClick={onRemove}
    >
      ✕
    </button >
  )
}
