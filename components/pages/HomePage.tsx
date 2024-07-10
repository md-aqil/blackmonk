
import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import InfoSection from "../components/InfoSection";
import PrivateSale from "../components/PrivateSale";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <div className="flex flex-col items-center px-5 mt-28 w-full max-w-[1285px] max-md:mt-10 max-md:max-w-full">
        <InfoSection
          title="BlackMonk as DeFI"
          subtitle="Passively saving $UNI for holders"
          description="Unira DeFi protocol works for UNIRA community to save Uniswap ($UNI) tokens passively throughout the year. It is based on a tax economy just like the governments work in countries. There's a 6% fixed tax on every transaction of UNIRA token."
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0dd04be8cc5244e20e05c7f7dcaa5943d2b4095c7d6629b8a50f24a658d7fb44?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          imageAlt="BlackMonk as DeFI illustration"
        />
        <InfoSection
          title="BlackMonk as Business DAO"
          subtitle="Passively saving $UNI for holders"
          description="Unira DeFi protocol works for UNIRA community to save Uniswap ($UNI) tokens passively throughout the year. It is based on a tax economy just like the governments work in countries. There's a 6% fixed tax on every transaction of UNIRA token."
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0dd04be8cc5244e20e05c7f7dcaa5943d2b4095c7d6629b8a50f24a658d7fb44?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          imageAlt="BlackMonk as Business DAO illustration"
          reverse={true}
        />
        <PrivateSale />
      </div>
    </Layout>
  );
};

export default HomePage;
