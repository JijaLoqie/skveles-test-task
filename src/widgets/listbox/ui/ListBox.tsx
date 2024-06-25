'use client'


import { useEffect, useState } from "react";

import { Card, UserItem } from "~/entities/user";
import type { User } from "~/entities/user/";


export function ListBox() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div className="bg-white bg-opacity-10 p-4 h-5/6 w-1/3 rounded flex flex-col gap-4">
      <h1 className="text-8xl">ListBox</h1>

      {
        users.length > 0 ? (
          <>
            <Card user={users[0]} onRemove={() => { setUsers(was => was.slice(1)) }} />
            <div className="flex flex-col gap-4 overflow-y-auto p-4">
              {
                users.slice(1).map((user) => (
                  <UserItem key={user.id} user={user} />
                ))
              }
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-3xl">No users</p>
            <p className="text-3xl">😔</p>
          </div>
        )
      }
    </div>
  )
}
