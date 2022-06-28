import { Divider } from './Divider';

interface MenuLinkProps {
  title: string;
  href: string;
  active?: boolean;
}

export function MenuLink(props: MenuLinkProps) {
  return (
    <div>
      <div className="flex flex-row">
        <div className={`md:hidden h-14 bg-purple-500 ${props.active ? 'w-[5px]' : ''}`}></div>

        <a
          className={`w-full md:w-auto h-14 md:h-auto flex items-center text-[18px] leading-[25px] font-bold hover:bg-purple-500 hover:text-white hover:md:bg-transparent transition-colors md:text-white md:text-[14px] md:leading-[19px] md:tracking-wide md:font-medium md:pl-0 ${
            props.active ? 'pl-6 text-gray-200' : 'pl-[29px] text-gray-500'
          }`}
          href={props.href}
        >
          {props.title}
        </a>
      </div>

      <div className="md:hidden">
        <Divider />
      </div>
    </div>
  );
}
