'use client'
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import InfoSection from "../components/InfoSection";
import PrivateSale from "../components/PrivateSale";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { toast } from "react-toastify";

const HomePage: React.FC = () => {
  const [provider, setProvider] = useState<any>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [accounts, setAccounts] = useState([]);

  async function initWeb3(){
    const ethereumProvider: any = await detectEthereumProvider();
    if (!ethereumProvider) return toast.error("Please install MetaMask!");
    const web3Instance = new Web3(ethereumProvider);
    setProvider(ethereumProvider);
    setWeb3(web3Instance);
  }

  async function connect(){
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    setAccounts(accounts);
  }

  useEffect(() => {
    initWeb3()
  }, []);
  return (
    <Layout accounts={accounts} onConnect={connect}>
      <Hero  />
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
        <PrivateSale accounts={accounts} web3={web3}  />
      </div>
    </Layout>
  );
};

export default HomePage;
