import { Header } from '../components/Header';
import rocketCoffee from '../assets/Img Coffee.png';
import { Button } from '../components/Button';

export function Home() {
  return (
    <div className="min-h-screen bg-blurMobile md:bg-blur bg-cover bg-no-repeat bg-center flex flex-col justify-between">
      <div className="flex justify-center">
        <Header />
      </div>

      <h1 className="md:hidden text-white font-semibold text-[30px] leading-[41px] -tracking-tight text-center mx-7">
        O café que fará seu código decolar para o próximo nível.
      </h1>

      <div className="flex md:hidden justify-center">
        <Button />
      </div>

      <div className="flex flex-col items-center gap-[25px] md:gap-0">
        <div className="flex flex-col">
          <span className="text-white text-[50px] md:text-[80px] leading-[39px] md:leading-[80px] font-bold tracking-tight drop-shadow-md text-center">
            Great Coffee
          </span>
          <span className="text-great-code text-[50px] md:text-[80px] leading-[39px] md:leading-[80px] font-bold tracking-tight drop-shadow-md text-center">
            {'<Great Code/>'}
          </span>
        </div>

        <img src={rocketCoffee} alt="" />
      </div>
    </div>
  );
}
