import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoGridProps {
  logos: {
    image: {
      src: string;
      width: number;
      height: number;
      alt: string;
    };
    link: {
      href: string;
    };
  }[];
}

export default function LogoGrid({ logos }: LogoGridProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {logos.map((logo) => (
        <li className="border-gray-900 border-2">
          <Link href={logo.link.href}>
            <Image {...logo.image} layout="responsive" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
