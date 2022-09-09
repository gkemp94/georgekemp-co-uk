import Image from "next/image";
import { Layout } from "../../components";

export default function BlogPost({}) {
  return (
    <Layout title="OfferReady HubSpot Application">
      <div className="flex items-center text-center gap-6 flex-col max-w-2xl mx-auto p-6">
        <h1 className="font-bold text-5xl">Offer Ready HubSpot Integration</h1>
        <div className="flex flex-col w-full md:w-auto md:flex-row font-medium text-sm gap-2 md:gap-6">
          <div className="border flex justify-center items-center border-gray-900 px-6 py-3">
            HubSpot Integration
          </div>
          <div className="border flex justify-center items-center border-gray-900 px-6 py-3">
            September 2nd, 2022
          </div>
          <div className="border flex justify-center items-center gap-2 border-gray-900 px-6 py-3">
            <Image src="/avatar_tiny.png" height={24} width={24} />
            George Kemp
          </div>
        </div>
        <div className="text-left prose">
          <h2>Overview</h2>
          <p>
            We recently joined forces with Offer-Ready, an Austrian based IT
            software's company our first Marketplace listed application. While
            we've built several HubSpot integrations in the past, this will be
            our first application verified and listed on the app marketplace.
          </p>
          <h2>What is Offer Ready?</h2>
          <p></p>
        </div>
      </div>
    </Layout>
  );
}
