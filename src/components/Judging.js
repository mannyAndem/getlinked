import judgingImg from "../assets/8046554 1.png";
import Button from "./Button";

const Judging = () => {
  return (
    <section className="px-5 lg:px-32 gap-12 text-white flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img src={judgingImg} className="w-full" />
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-[2rem] font-bold mb-4">
          Judging Criteria Key Attributes
        </h2>
        <ul className="flex flex-col gap-7">
          <li className="text-sm">
            <span className="text-purple">Functionality:</span> Assess how well
            the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </li>
          <li className="text-sm">
            <span className="text-purple">Impact and Relevance:</span> Determine
            the potential impact of the solution in the real world. Does it
            address a significant problem, and is it relevant to the target
            audience? Judges would assess the potential social, economic, or
            environmental benefits.
          </li>
          <li className="text-sm">
            <span className="text-purple">Technical Complexity:</span> Evaluate
            the technical sophistication of the solution. Judges would consider
            the complexity of the code, the use of advanced technologies or
            algorithms, and the scalability of the solution.
          </li>
          <li className="text-sm">
            <span className="text-purple">Adherence to Hackathon Rules:</span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </li>
        </ul>
        <Button>Read More</Button>
      </div>
    </section>
  );
};

export default Judging;
