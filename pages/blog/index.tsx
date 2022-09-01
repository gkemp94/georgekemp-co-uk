import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Blog() {
  return (
    <Layout title="Articles">
      <main>
        <div className="section-inner">
          <h2 className="uppercase text-4xl font-bold">Blog</h2>
          <Link href="/blog/typescript-on-mars">
            <article className="mt-6 flex flex-col gap-3 cursor-pointer">
              <Image
                src="/typescript-on-mars.png"
                height={1024}
                width={1792}
                layout="responsive"
              />
              <div className="max-w-2xl">
                <h1 className="text-2xl uppercase font-bold">
                  How HubSpot Brought TypeScript to Its Product Engineers
                </h1>
                <p className="text-slate-500 my-2 text-xs">
                  Published 19 Aug 2022
                </p>{" "}
              </div>
            </article>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
