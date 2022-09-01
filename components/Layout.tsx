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
        <title>{title ? `${title} | George Kemp` : "George Kemp"}</title>
        <meta
          name="description"
          content={description || "Personal Portfolio of George Kemp"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
