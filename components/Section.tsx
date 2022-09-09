import { HTMLAttributes } from "react";
import { StarIcon } from "./StarIcon";

type SectionProps = HTMLAttributes<HTMLElement> & {
  hideIcon?: boolean;
  header?: string;
  noPadding?: boolean;
  description?: string;
};

export function Section({
  children,
  hideIcon,
  title,
  description,
  noPadding,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={`${noPadding ? "" : "py-24"} ${className}`} {...props}>
      <div className="container mx-auto max-w-5xl p-6">
        <div className="flex flex-col items-center mb-8">
          {!hideIcon && <StarIcon className="text-red-600 mb-6" />}
          {title && <h2 className="font-bold text-5xl mb-3">{title}</h2>}
          {description && <p className="font-medium text-lg">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
