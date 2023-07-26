import React from "react";

interface ButtonProps {
  customStyle?: string;
  children: string;
}

export const Button: React.FC<ButtonProps> = ({ customStyle, children }) => {
  return (
    <button
      className={`bg-secondary text-primary py-2 w-72 rounded-3xl mt-4 mx-auto block ${customStyle}`}
      type="button"
    >
      {children}
    </button>
  );
};
