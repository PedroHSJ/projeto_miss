import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  center?: boolean;
}

export const Card = ({ children, center }: CardProps) => {
  return (
    <div
      className={`
      min-w-full
      text-white
      p-4 rounded-lg backdrop-blur bg-white/50 max-w-lg text-left my-4 flex flex-col ${
        center ? "items-center" : ""
      }`}
    >
      {children}
    </div>
  );
};
