interface TextAreaProps {
  label?: string;
  name?: string;
  [key: string]: any;
}

export default function TextArea({ label, name, ...rest }: TextAreaProps) {
  return (
    <>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
      ) : null}

      <textarea
        id={name}
        rows={4}
        className="mt-1 shadow-sm w-full focus:ring-purple-500 rounded-md border-gray-300 focus:border-purple-500"
        {...rest}
      />
    </>
  );
}
