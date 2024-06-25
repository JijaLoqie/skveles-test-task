import { Card, User } from "~/entities/user";
import { UserItem } from "~/entities/user/ui/UserItem";


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
    <div>
      <h1>ListBox</h1>
      {
        users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))
      }
    </div>
  )
}
