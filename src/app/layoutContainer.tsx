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
    <div className="text-primary font-poppins z-10 bg-customGreen rounded-lg">
      <div className="w-200 h-200rounded-t-lg">
        <div className="absolute items-center">
          <IconContext.Provider
            value={{
              color: "#3D1DF3",
              size: "20px",
            }}
          >
            <BsArrowLeftCircle />
          </IconContext.Provider>
        </div>
        <h1 className="font-bold justify-center text-center">{title}</h1>
      </div>
      <div className="bg-white z-50 rounded-lg p-2 mt-2">{children}</div>
    </div>
  );
};

export default LayoutContainer;
