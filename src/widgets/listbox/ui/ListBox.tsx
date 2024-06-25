'use client'


import { useCallback, useEffect, useState } from "react";

import { Card, UserItem } from "~/entities/user";
import type { User } from "~/entities/user/";


export function ListBox() {
  const [users, setUsers] = useState<User[]>([]);

  const fillUsers = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  useEffect(() => {
    fillUsers()
  }, [])

  return (
    <div className="bg-white bg-opacity-10 p-4 h-5/6 w-1/3 rounded flex flex-col gap-4">
      <h1 className="text-8xl text-center">ListBox</h1>

      {
        users.length > 0 && users[0] ? (
          <>
            <Card user={users[0]} onRemove={() => { setUsers(was => was.slice(1)) }} />

            <div className="flex flex-col gap-4 overflow-y-auto p-4 shadow-inner border-2 border-black">
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
            <button onClick={fillUsers} className="bg-white bg-opacity-30 p-2 rounded hover:bg-opacity-40">
              <p className="text-3xl">Add some users</p>
            </button>
          </div>
        )
      }
    </div>
  )
}
