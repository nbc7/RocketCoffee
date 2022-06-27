import { Header } from '../components/Header';
import rocketCoffee from '../assets/Img Coffee.png';

export function Home() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat bg-center flex flex-col justify-between">
      <div className="flex justify-center">
        <Header />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <span className="text-white text-[80px] leading-[80px] font-bold tracking-tight drop-shadow-md text-center">Great Coffee</span>
          <span className="text-great-code text-[80px] leading-[80px] font-bold tracking-tight drop-shadow-md text-center">{'<Great Code/>'}</span>
        </div>

        <img src={rocketCoffee} alt="" />
      </div>
    </div>
  );
}
