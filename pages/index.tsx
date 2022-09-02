import Image from "next/image";
import Layout from "../components/Layout";
import { OutlineButton } from "../components/Header";
import { Form } from "../components/Form";
import { useCallback, useState } from "react";
import { Section } from "../components/Section";

const useContactForm = () => {
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = useCallback((data: any) => {
    setLoading(true);
    setError("");
    fetch("/api/sendgrid", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setComplete(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    complete,
    error,
    loading,
    submit,
  };
};

export default function Home() {
  const { submit, loading, error, complete } = useContactForm();
  return (
    <Layout>
      <Section id="hero" hideIcon noPadding>
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
            <OutlineButton label={"Let's Talk"} href="#contact" />
          </div>
          <div className="col-span-12 md:col-span-6 px-6">
            <Image
              src="/avatar_small.png"
              layout="responsive"
              width={1328}
              height={1482}
            />
          </div>
        </div>
      </Section>
      <Section
        className="bg-[#fff]"
        id="contact"
        hideIcon
        title="Get in touch"
        description="Got a question or a project idea? Fill out the form below and let's get talking"
      >
        <div className="max-w-xl mx-auto py-6">
          {complete ? (
            <p className="text-center text-semibold">
              Thanks for reaching out, I'll reply as soon as possible
            </p>
          ) : (
            <Form onSubmit={submit} error={error} loading={loading} />
          )}
        </div>
      </Section>
      {/* <Section title="Previous Clients">Hello World!</Section> */}
    </Layout>
  );
}
