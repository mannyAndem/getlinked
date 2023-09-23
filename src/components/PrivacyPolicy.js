import listIcon from "../assets/list terms.png";
import privacyImg from "../assets/08 1.png";
import Button from "./Button";

const PrivacyPolicy = () => {
  return (
    <section className="p-32 text-white flex items-center">
      <div className="w-1/2">
        <h2 className="text-[2rem]">Privacy Policy and Terms</h2>
        <span className="my-4 text-sm text-grayishWhite">
          Last updated on September 12, 2023
        </span>
        <p className="my-4 text-sm">
          Below are our terms & privacy policy, which outline a lot of goodies.
          it’s our aim to always take care of our participants
        </p>
        <div className="mt-16 px-16 py-12 border border-purple rounded-md flex flex-col items-center gap-6">
          <p className="text-sm">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div className="font-bold self-start">
            <h3 className="text-purple">Licensing Policy</h3>
            <span>Here are terms of our Standard License:</span>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 items-start">
              <img src={listIcon} className="mt-1" /> The Standard License
              grants you a non-exclusive right to navigate and register for our
              event
            </li>
            <li className="flex gap-4 items-start">
              <img src={listIcon} className="mt-1" /> You are licensed to use
              the item available at any free source sites, for your project
              developement
            </li>
          </ul>
          <Button>Read More</Button>
        </div>
      </div>
      <div className="w-1/2 self-stretch flex items-end bg-privacy">
        <img src={privacyImg} alt="Privacy image" />
      </div>
    </section>
  );
};

export default PrivacyPolicy;
