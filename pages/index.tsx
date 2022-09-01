import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { OutlineButton } from "../components/Header";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>George Kemp</title>
        <meta name="description" content="Personal Portfolio of George Kemp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="hero">
          <div className="section-inner">
            <div className="grid grid-cols-12 gap-y-12 md:gap-y-0 md:gap-x-12 items-center">
              <div className="col-span-12 md:col-span-6 flex flex-col items-start gap-6">
                <h2 className="text-5xl font-bold uppercase pt-6">
                  Hi, I'm George. A software engineer based in Denver, CO.
                </h2>
                <ul className="flex uppercase gap-2 font-semibold">
                  <li>HubSpot CMS</li>
                  <li className="text-red-600">•</li>
                  <li>Cloud Applications</li>
                  <li className="text-red-600">•</li>
                  <li>NextJS</li>
                </ul>
                <OutlineButton label={"Let's Talk"} />
              </div>
              <div className="col-span-12 md:col-span-6">
                <Image
                  src="/avatar.png"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#fff] py-12" id="contact">
          <div className="section-inner">
            {/* Section Header */}
            <div className="text-center">
              <div className="flex flex-col gap-3">
                <h3 className="text-5xl font-bold">Get in touch</h3>
                <p className="font-medium text-lg">
                  Got a question or a project idea? Fill out the form below
                  let's get talking.
                </p>
              </div>
            </div>
            {/* End Section Header */}
            <div className="text-center text-red-600 text-lg text-semibold">
              Form Coming Soon...
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
