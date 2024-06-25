import { SwitchThemeButton } from "~/features/SwitchThemeButton"
export function Header() {
  return (
    <header className="p-4 flex align justify-between bg-black bg-opacity-25 fixed w-full">
      <p className="text-3xl font-bold text-white hover:underline align text-align">
        <a href="https://github.com/JijaLoqie/skveles-test-task" className="cursor-pointer"> Kraskovskiy: User List </a>
      </p>
      <SwitchThemeButton />
    </header>
  )
}
