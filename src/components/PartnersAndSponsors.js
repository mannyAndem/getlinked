import libertyAssuredLogo from "../assets/Liberty company logo white colour.png";
import libertyPayLogo from "../assets/Liberty company logo white.png";
import winwiseLogo from "../assets/Winwise logo White colour 1.png";
import whispersmsLogo from "../assets/wisper logo white.png";
import payboxLogo from "../assets/Paybox.png";
import vuzualLogo from "../assets/Vuzual Plus.png";

const PartnersAndSponsors = () => {
  return (
    <section className="p-32 text-white text-center">
      <h2 className="text-[2rem] font-bold">Partners and Sponsors</h2>
      <p className="text-sm">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <div className="grid grid-cols-3 gap-8  mt-16">
        <div className=" py-8 flex justify-center items-center border-b-4 border-purple">
          <img src={libertyAssuredLogo} />
        </div>
        <div className=" px-8  border-x-4 border-purple">
          {/* This div is present foe the grid's aesthethics */}
          <div className="flex justify-center items-center h-full border-b-4 border-purple">
            <img src={libertyPayLogo} />
          </div>
        </div>
        <div className=" py-8 flex justify-center items-center border-b-4  border-purple">
          <img src={winwiseLogo} />
        </div>
        <div className=" py-8 flex justify-center items-center border-purple">
          <img src={whispersmsLogo} />
        </div>
        <div className=" py-8 flex justify-center items-center border-x-4 border-purple">
          <img src={payboxLogo} />
        </div>
        <div className=" py-8 flex justify-center items-center  border-purple">
          <img src={vuzualLogo} />
        </div>
      </div>
    </section>
  );
};

export default PartnersAndSponsors;
