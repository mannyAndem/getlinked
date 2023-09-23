import trophyImg from "../assets/9486889 1.png";
import goldMedal from "../assets/gold_medal 1.png";
import silverMedal from "../assets/silver_medal 1.png";
import bronzeMedal from "../assets/bronze_medal 1.png";

const Prizes = () => {
  return (
    <section className="p-32 text-white">
      <div className="flex justify-end w-full">
        <div>
          <h2 className="text-[2rem] ml-auto font-bold">Prizes and Rewards</h2>
          <p className="text-sm ml-auto">
            Highlight of the prizes or rewards for winners and participants
          </p>
        </div>
      </div>
      <div className="self-end flex items-center mt-24">
        <img src={trophyImg} className="w-1/2" />
        <div className="w-1/2 flex gap-8 items-center">
          <div className="relative flex flex-col justify-end items-center min-h-[296px] p-6 bg-darkTransparentPurple border-purple rounded-lg border ">
            <img
              src={silverMedal}
              className="absolute top-0 transform -translate-y-1/2"
            />
            <span className="text-[2rem] font-bold">2nd</span>
            <span className="text-2xl font-semibold">Runner</span>
            <span className="text-[2rem] text-purple font-bold">N300,000</span>
          </div>
          <div className="mt-12 relative flex flex-col justify-end items-center min-h-[296px] p-6 bg-lightTransparentPurple border-darkPurple rounded-lg border ">
            <img
              src={goldMedal}
              className="absolute top-0 transform -translate-y-1/2"
            />
            <span className="text-[2rem] font-bold">1st</span>
            <span className="text-2xl font-semibold">Runner</span>
            <span className="text-[2rem] text-darkPurple font-bold">
              N400,000
            </span>
          </div>
          <div className="relative flex flex-col justify-end items-center min-h-[296px] p-6 bg-darkTransparentPurple border-purple rounded-lg border ">
            <img
              src={bronzeMedal}
              className="absolute top-0 transform -translate-y-1/2"
            />
            <span className="text-[2rem] font-bold">3rd</span>
            <span className="text-2xl font-semibold">Runner</span>
            <span className="text-[2rem] text-purple font-bold">N150,000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
