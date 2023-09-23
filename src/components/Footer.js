import instagram from "../assets/mdi_instagram.png";
import facebook from "../assets/Vector (4).png";
import twitter from "../assets/Vector (3).png";
import linkedin from "../assets/ri_linkedin-fill.png";
import phoneIcon from "../assets/Group.png";
import locationIcon from "../assets/Vector (5).png";

const Footer = () => {
  return (
    <footer className="p-32 bg-veryDark text-white">
      <div className="flex justify-between">
        <div className="w-1/2">
          <a href="#" className="text-4xl font-bold">
            <span className="text-white">get</span>
            <span className="text-purple">linked</span>
          </a>
          <p className="text-sm">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="text-sm">
          <span className="text-purple font-semibold mb-4">Useful Links</span>
          <ul className="flex flex-col gap-3">
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
            <li className="flex items-center gap-2 text-purple">
              Follow us
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={linkedin} alt="linkedin" />
            </li>
          </ul>
        </div>
        <div>
          <span className="text-purple font-semibold mb-4">Contact Us</span>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-4">
              <img src={phoneIcon} alt="phone" />
              +234 6707653444
            </li>
            <li className="flex items-start gap-4">
              <img src={locationIcon} alt="location" />
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </li>
          </ul>
        </div>
      </div>
      <div className="py-16 flex justify-center text-sm">
        All rights reserved &copy; getlinked Ltd.
      </div>
    </footer>
  );
};

export default Footer;
