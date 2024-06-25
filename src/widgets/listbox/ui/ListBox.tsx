import { Card, UserItem } from "~/entities/user";
import type { User } from "~/entities/user/";


const users: User[] = [
  {
    id: 1,
    name: "John",
    email: "j@j.com",
  },
  {
    id: 2,
    name: "Jane",
    email: "j@j2.com",
  },
  {
    id: 3,
    name: "Bob",
    email: "j@j3.com",
  },
]

export function ListBox() {
  return (
    <div className="bg-white bg-opacity-10 p-4 h-5/6 w-1/3 rounded flex flex-col gap-4">
      <h1 className="text-8xl">ListBox</h1>

      <Card user={users[0]} />

      {
        users.slice(1).map((user) => (
          <UserItem key={user.id} user={user} />
        ))
      }
    </div>
  )
}
