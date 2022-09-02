import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>
          {title
            ? `${title} | George Kemp`
            : "George Kemp | HubSpot CMS & NextJS Freelancer"}
        </title>
        <meta
          name="description"
          content={
            description ||
            "Unlock the full potential of your web presence. With high quality HubSpot CMS, NextJS and cloud development"
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
