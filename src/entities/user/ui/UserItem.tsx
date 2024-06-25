import type { User } from "../lib/types";

export function UserItem({ user }: { user: User }) {
  const { id, name } = user

  return (
    <div>
      <h1>UserItem</h1>
      <p>id: {id}</p>
      <p>name: {name}</p>
    </div>
  );
}
