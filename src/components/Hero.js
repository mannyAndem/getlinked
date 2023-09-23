import heroImg from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import chain from "../assets/chain-9365116-7621444.png";
import Button from "./Button";
import arc from "../assets/Vector 4 (1).png";

const Hero = () => {
  return (
    <section className="px-5 lg:pl-32 pb-32 text-white hero">
      <span className="block lg:mr-14 mb-10 text-center lg:text-right text-2xl lg:text-4xl font-bold italic">
        Igniting a revolution in
        <span className="inline-flex flex-col">
          HR innovation
          <img src={arc} />
        </span>
      </span>
      <div className="w-full lg:w-3/5">
        <h1 className="text-[5rem] font-bold">
          getLinked Tech
          <br />
          Hackathon <span className="text-purple">1.0</span>
        </h1>
        <p className="text-xl">
          Participate in getlinked tech Hackathon 2023 stand <br />a chance to
          win a Big prize
        </p>
        <Button>Register</Button>
        <div className="flex items-center gap-6">
          <span className="text-[4rem]">
            00<span className="text-sm">H</span>
          </span>
          <span className="text-[4rem]">
            00<span className="text-sm">M</span>
          </span>
          <span className="text-[4rem]">
            00<span className="text-sm">S</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
