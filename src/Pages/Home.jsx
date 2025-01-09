import React from "react";
import Hero from "../Components/Hero";
import SmallAbout from "../Components/SmallAbout";
import Services from "../Components/Services";
import Policy from "../Components/Policy";
import Latest from "../Components/Latest";
import Contact from "../Components/Contact";
import ScrollAnimationWrapper from "../Components/ScrollAnimationWrapper";

const Home = () => {
  return (
    <div className="space-y-16">
      <ScrollAnimationWrapper>
        <Hero />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <SmallAbout />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Services />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Policy />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Latest />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Contact />
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Home;

