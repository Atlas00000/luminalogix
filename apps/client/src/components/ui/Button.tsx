import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

// ✅ NAMED export only
export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-white text-black rounded-full hover:bg-gray-200 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
