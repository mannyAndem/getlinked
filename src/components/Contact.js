import instagram from "../assets/mdi_instagram.png";
import facebook from "../assets/Vector (4).png";
import twitter from "../assets/Vector (3).png";
import linkedin from "../assets/ri_linkedin-fill.png";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="text-white p-5 lg:p-32 flex justify-between items-center">
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <h2 className="text-purple text-[2rem]">Get in touch</h2>
        <span>Contact Information</span>
        <span>27,Alara Street Yaba 100012 Lagos State</span>
        <span>Call Us : 07067981819</span>
        <span>we are open from Monday-Friday 08:00am - 05:00pm</span>
        <span className="text-purple ">Share on</span>
        <div className="flex gap-4 items-center">
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-5 lg:p-16 bg-nearlyTransparentWhite rounded-xl shadow-md shadow-nearlyTransparentBlack">
        <span className="text-xl font-semibold text-purple block">
          Questions or need assistance?
        </span>
        <span className="text-xl font-semibold text-purple block">
          Let us know about it
        </span>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
