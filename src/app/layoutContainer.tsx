"use client";
import React, { ReactNode } from "react";
import { IconContext } from "react-icons";
import { BsArrowLeftCircle } from "react-icons/bs";

interface LayoutContainerProps {
  title: string;
  children: ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({
  title,
  children,
}) => {
  return (
    <div className="text-primary font-poppins z-10 bg-customGreen rounded-lg flex flex-col items-center">
      <div className="flex justify-center w-200 h-200 rounded-t-lg py-4">
        <button
          className="mr-2"
          onClick={() => console.log("Atrás presionado")}
        >
          <IconContext.Provider
            value={{
              color: "#3D1DF3",
              size: "20px",
            }}
          >
            <BsArrowLeftCircle />
          </IconContext.Provider>
        </button>
        <h1 className="flex-1 font-black text-sm text-center">{title}</h1>
      </div>
      <div className="bg-white z-50 rounded-lg p-2 mt-2 w-full">{children}</div>
    </div>
  );
};

export default LayoutContainer;
