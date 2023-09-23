import rulesImg from "../assets/7450159 1.png";

const Rules = () => {
  return (
    <section className="px-5 lg:px-32 gap-12 text-white flex flex-col lg:flex-row items-center justify-between">
      <div>
        <h2 className="text-[2rem] font-bold mb-4">Rules and Guidelines</h2>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <img src={rulesImg} />
    </section>
  );
};

export default Rules;
