import { RemoveUserButton } from "~/features/RemoveUserButton";
import type { User } from "../lib/types";


export function Card({ user, onRemove }: { user: User, onRemove: () => void }) {
  const {
    name,
  } = user

  const userInfo = Object.entries(user)
    .filter(([key, value]) => key !== 'id' && key !== 'address' && key !== 'company' && key !== 'name')
    .map(([key, value]) => (
      {
        key: key,
        value: value
      }
    ))

  return (
    <div className="bg-white rounded text-black p-4 flex min-h-[210px]" >
      <div className="flex flex-col w-full">
        < p className="text-4xl align-baseline" > {name}</p >
        <div className="flex gap-4 flex-wrap">
          {userInfo.map(({ key, value }) => (
            <p key={key}>
              {key}: {value.toString()}
            </p>
          ))}
        </div>
      </div >
      <RemoveUserButton onRemove={onRemove} />
    </div >
  )
}
