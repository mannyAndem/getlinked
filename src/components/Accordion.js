import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const faqs = [
    {
      id: 1,
      question: "Can I work on a project I started before the hackathon",
      answer:
        "The purpose of the hackathon is to enable an innovative environment for solving real-world problems. Have a cool project you just got started with? Bring it on!",
      active: true,
    },
    {
      id: 2,
      question: "What happens if I need help during the hackathon",
      answer:
        "If you ever get stuck, the plethora of mentors, judges and even fellow contestants will be there to get you unstuck.",
      active: false,
    },
    {
      id: 3,
      question: "What happens if I don't have an idea for a project?",
      answer:
        "Getting cool ideas can always be a pain. Not to worry, we've got tons of our own! If you need any help coming up with ideas, we'll be more than happy to help.",
      active: false,
    },
    {
      id: 4,
      question: "What happens if I don't have an idea for a project?",
      answer:
        "We encourage bringing along team members! The best things are created when great minds come together, you know?",
      active: false,
    },
    {
      id: 5,
      question: "What happens after the hackathon ends?",
      answer: "We umm, all move on with our lives?",
      active: false,
    },
    {
      id: 6,
      question: "What do I gain for participating?",
      answer:
        "When you participate in the hackathon, you gain real world experience building innovative products, a conducive environment to network with fellow tech nerds and of course, prizes!",
      active: false,
    },
  ];
  const [accordionState, setAccordionState] = useState(faqs);
  const handleClick = (e) => {
    let id = e.target.id;
    setAccordionState((prevState) => {
      let newState = [...prevState];
      newState.forEach((item) => {
        if (item.id == id) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
      console.log(newState);
      return newState;
    });
  };
  return (
    <ul className="mt-16 w-full">
      {accordionState.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          handleClick={handleClick}
        ></AccordionItem>
      ))}
    </ul>
  );
};

export default Accordion;
