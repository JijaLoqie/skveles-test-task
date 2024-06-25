import type { User } from "../lib/types";


export function Card({ user }: { user: User }) {
  const { id, name } = user

  return (
    <div>
      <h1>Card</h1>
      <p>id: {id}</p>
      <p>name: {name}</p>
    </div>
  )
}
