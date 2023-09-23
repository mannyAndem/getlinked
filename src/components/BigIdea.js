import bigIdeaImg from "../assets/the big idea 1.png";

const BigIdea = () => {
  return (
    <section className="p-5 lg:p-32 flex flex-col lg:flex-row justify-between gap-12 items-center text-white">
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        <img src={bigIdeaImg} alt="light-bulb" />
        <span className="absolute text-2xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          The Big Idea
        </span>
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-[2rem] font-bold mb-4">
          Introduction to getLinked <span>tech Hackathon 1.0</span>
        </h2>
        <p className="text-sm">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </section>
  );
};

export default BigIdea;
