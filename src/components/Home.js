import BigIdea from "./BigIdea";
import Faqs from "./Faqs";
import Hero from "./Hero";
import Judging from "./Judging";
import PartnersAndSponsors from "./PartnersAndSponsors";
import PrivacyPolicy from "./PrivacyPolicy";
import Prizes from "./Prizes";
import Rules from "./Rules";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <BigIdea></BigIdea>
      <Rules></Rules>
      <Judging></Judging>
      <Faqs></Faqs>
      <Timeline></Timeline>
      <Prizes></Prizes>
      <PartnersAndSponsors></PartnersAndSponsors>
      <PrivacyPolicy></PrivacyPolicy>
    </>
  );
};

export default Home;
