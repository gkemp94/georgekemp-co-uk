import React, { InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";

interface FormProps<T> {
  onSubmit: (data: T) => void;
  error: string;
  loading?: boolean;
}

type BaseInputProps = {
  label: string;
  required: boolean;
  name: string;
};

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & BaseInputProps;

type TextAreaInputProps = InputHTMLAttributes<HTMLTextAreaElement> &
  BaseInputProps;

export const BaseInput = ({
  label,
  required,
  name,
  children,
}: BaseInputProps & { children: React.ReactNode }) => {
  return (
    <div>
      <label className="font-semibold block mb-2" htmlFor={name}>
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </label>
      {children}
    </div>
  );
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, name, required, type = "text", ...props }, ref) => {
    return (
      <BaseInput label={label} name={name} required={true}>
        <input
          className="px-4 py-3 border-2 w-full border-gray-900"
          ref={ref}
          name={name}
          required={required}
          type={type}
          {...props}
        />
      </BaseInput>
    );
  }
);

export const TextAreaInput = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaInputProps
>(({ label, name, required, type = "text", ...props }, ref) => {
  return (
    <BaseInput label={label} name={name} required={required}>
      <textarea
        className="px-4 py-3 border-2 w-full border-gray-900"
        required={required}
        name={name}
        ref={ref}
        {...props}
      />
    </BaseInput>
  );
});

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Form({ onSubmit, error, loading }: FormProps<ContactFormData>) {
  const { register, handleSubmit } = useForm<ContactFormData>();
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <TextInput required={true} {...register("name")} label="Name" />
      <TextInput
        required={true}
        {...register("email")}
        label="Email"
        type="email"
      />
      <TextInput required={true} {...register("subject")} label="Subject" />
      <TextAreaInput required={true} {...register("message")} label="Message" />
      <button
        className="flex font-semibold items-center disabled:pointer-events-none justify-center transition-colors duration-200 hover:bg-transparent hover:text-gray-900 px-4 py-3 border-2 border-gray-900 bg-gray-900 text-white"
        disabled={loading}
        type="submit"
      >
        {loading ? (
          <svg
            className="animate-spin h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          "Submit"
        )}
      </button>
      {error ? (
        <p className="text-red-600 text-sm">
          I'm sorry something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}
