import Button from "./Button";
import navOpen from "../assets/Vector (7).png";
import navClose from "../assets/Vector (7).png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className="py-16 px-32 flex justify-between items-center">
      <a href="#" className="text-4xl font-bold">
        <span className="text-white">get</span>
        <span className="text-purple">linked</span>
      </a>
      {/* nav toggle */}
      <div className="lg:hidden">
        <img src={navOpen} className={!expanded ? "block" : "hidden"} />
        <img src={navClose} className={expanded ? "block" : "hidden"} />
      </div>
      <div className="hidden lg:flex gap-24 items-center justify-between">
        <ul className="flex items-center gap-14 text-white">
          <li>
            <Link to="#timeline">Timeline</Link>
          </li>
          <li>
            <Link to="#overview">Overview</Link>
          </li>
          <li>
            <Link to="#faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
