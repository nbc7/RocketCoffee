import { useState } from 'react';
import { BurgerClose } from './BurgerClose';
import { BurgerOpen } from './BurgerOpen';
import { Button } from './Button';
import { Divider } from './Divider';
import { Logo } from './Logo';
import { LogoMobile } from './LogoMobile';
import { MenuLink } from './MenuLink';

export function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-evenly pt-[37px] md:pt-[52px]">
      <div className="hidden md:block px-16">
        <Logo />
      </div>

      <div className="w-full h-[58.5px] flex flex-col md:hidden justify-between">
        <div className="flex justify-between items-center px-[25px]">
          <LogoMobile />

          <div onClick={() => setMenu(!menu)} className="h-6 w-6 flex justify-center items-center">
            {menu ? <BurgerClose /> : <BurgerOpen />}
          </div>
        </div>

        <Divider />
      </div>

      <div
        className={`${
          !menu && 'hidden'
        } h-[calc(100vh-95.5px)] w-full md:h-auto md:w-auto absolute md:relative top-[95.5px] md:top-0 bg-black z-10 md:flex gap-8`}
      >
        <MenuLink href="#" title="Home" active />
        <MenuLink href="#" title="Menu" />
        <MenuLink href="#" title="Recompensas" />
        <MenuLink href="#" title="Gift Cards" />
        <MenuLink href="#" title="Lojas" />
        {/* <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Recompensas</a>
        <a href="#">Gift Cards</a>
        <a href="#">Lojas</a> */}
      </div>

      <div className="hidden md:inline-block">
        <Button />
      </div>
    </div>
  );
}
