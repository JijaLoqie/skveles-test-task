import { RemoveUserButton } from "~/features/RemoveUserButton";
import type { User } from "../lib/types";


export function Card({ user }: { user?: User }) {
  if (!user) {
    return null
  }

  const { id, name } = user

  return (
    <div className="bg-white rounded text-black p-4 flex justify-between">
      <div>
        <h1 className="text-4xl">Card</h1>
        <p>id: {id}</p>
        <p>name: {name}</p>
      </div>
      <RemoveUserButton userId={id} />
    </div>
  )
}
