import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const CardGrid = ({ children }: CardProps) => {
  return (
    <div
      className={`
      hover:cursor-pointer hover:bg-white/50 transition
      text-white
      w-[200px]
      h-[200px]
      rounded-lg 
      backdrop-blur 
      bg-gray-500/50 
      my-4 
      flex flex-col justify-around p-2 items-center`}
    >
      {children}
    </div>
  );
};
