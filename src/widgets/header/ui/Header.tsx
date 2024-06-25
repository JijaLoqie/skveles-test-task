import { SwitchThemeButton } from "~/features/SwitchThemeButton"
export function Header() {
  return (
    <header className="p-4 flex align justify-between bg-black bg-opacity-25 fixed w-full">
      <p className="text-3xl font-bold text-white hover:underline align text-align"> Users </p>
      <SwitchThemeButton />
    </header>
  )
}
