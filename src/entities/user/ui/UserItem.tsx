import type { User } from "../lib/types";

export function UserItem({ user }: { user: User }) {
  const { id, name } = user

  return (
    <div className="bg-white bg-opacity-30 rounded text-black p-4 flex justify-between">
      <p>name: {name}</p>
      <p>id: {id}</p>
    </div>
  );
}
