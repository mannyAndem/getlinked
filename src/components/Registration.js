import registrationImg from "../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import person1 from "../assets/1f6b6-2640.png";
import person2 from "../assets/image_processing20200511-10310-13mnlsx.png";
import congratulationImg from "../assets/congratulation.png";

import RegistrationForm from "./RegistrationForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

const Registration = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div>
      {/* registration successful modal */}
      {isRegistered && (
        <div className="z-50 text-white text-center border-purple border bg-transparent fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-4 px-8 flex flex-col items-center">
          <img src={congratulationImg} />
          <h2 className="text-[2rem] font-semibold ">
            Congratulations you have successfully Registered!
          </h2>
          <span className="text-sm font-semibold">
            Yes, it was easy and you did it! check your mail box for next step
          </span>
          <div
            className="self-stretch flex flex-col items-stretch"
            onClick={() => setIsRegistered(false)}
          >
            <Button>Back</Button>
          </div>
        </div>
      )}

      <div
        className={`text-white p-5 lg:p-16 flex lg:flex-row flex-col justify-between items-center ${
          isRegistered && "opacity-10"
        }`}
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <img src={registrationImg} />
        </div>
        <div className="w-full lg:w-1/2 p-5 lg:p-16 bg-nearlyTransparentWhite rounded-xl shadow-md shadow-nearlyTransparentBlack">
          <h2 className="mb-10 text-[2rem] font-semibold text-purple block">
            Register
          </h2>
          <div className="flex items-end gap-3">
            <span className="text-sm">Be part of this movement!</span>
            <div className="self-center flex items-center border-b border-dashed border-purple">
              <img src={person1} />
              <img src={person2} />
            </div>
          </div>
          <span className="block mt-4 text-2xl">CREATE YOUR ACCOUNT</span>

          <RegistrationForm setIsRegistered={setIsRegistered} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
