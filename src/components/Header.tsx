import { Logo } from './Logo';

export function Header() {
  return (
    <div className="w-full flex items-center justify-evenly pt-[52px]">
      <div className="px-16">
        <Logo />
      </div>

      <div className="text-white text-sm flex gap-8 font-medium tracking-wide">
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Recompensas</a>
        <a href="#">Gift Cards</a>
        <a href="#">Lojas</a>
      </div>

      <button className="py-[11px] px-[38px] text-white text-xs font-extrabold uppercase tracking-wide rounded-md border border-purple-500 drop-shadow-md hover:bg-purple-500">
        Pegar meu café
      </button>
    </div>
  );
}
