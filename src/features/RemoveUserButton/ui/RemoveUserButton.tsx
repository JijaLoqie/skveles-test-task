export function RemoveUserButton({ onRemove }: { onRemove: () => void }) {
  return (
    <button
      className="text-2xl bg-opacity-80 p-2 rounded hover:bg-opacity-90 mb-auto hover:bg-red-400 transition-colors"
      onClick={onRemove}
    >
      ❌
    </button >
  )
}
