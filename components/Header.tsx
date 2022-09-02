const NavigationLink = ({ label }: { label: string }) => {
  return (
    <a className="hover:text-red-600 transition-colors duration-200" href="#">
      {label}
    </a>
  );
};

const HamburgerButton = () => {
  return (
    <button className="invisible bg-gray-900 h-full py-3 border border-gray-900">
      Hello World
    </button>
  );
};

export const OutlineButton = ({
  label,
  href,
}: {
  label: string;
  href?: string;
}) => {
  return (
    <a
      className="px-6 py-3 border w-full md:w-auto flex items-center justify-center border-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white font-medium text-gray-900"
      href={href}
    >
      {label}
    </a>
  );
};

export function Header() {
  return (
    <header>
      <div className="max-w-5xl mx-auto px-6 py-8 container grid  items-center grid-cols-12">
        <div className="col-span-6 md:col-span-4 font-bold text-lg">
          george.kemp
        </div>
        <ul className="col-span-4 font-medium gap-6 w-full justify-center invisible hidden md:flex">
          <li>
            <NavigationLink label="Articles" />
          </li>
          <li>
            <NavigationLink label="Work" />
          </li>
          <li>
            <NavigationLink label="Contact" />
          </li>
        </ul>
        <div className="col-span-6 md:col-span-4 flex gap-4 justify-end items-center">
          <HamburgerButton />
          <OutlineButton href="#contact" label="Let's Talk" />
        </div>
      </div>
    </header>
  );
}
