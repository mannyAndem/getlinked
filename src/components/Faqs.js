import faqsImg from "../assets/cwok_casual_21 1.png";
import Accordion from "./Accordion";

const Faqs = () => {
  return (
    <section className="p-5 lg:p-32 flex items-center justify-between gap-12 text-white">
      <div className="w-full lg:w-1/2">
        <h2 className="text-[2rem] font-bold">Frequently Asked Questions</h2>
        <p>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <Accordion></Accordion>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={faqsImg} alt="Frequently asked questions." />
      </div>
    </section>
  );
};

export default Faqs;
