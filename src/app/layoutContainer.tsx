"use client";
import React, { ReactNode } from "react";
import { IconContext } from "react-icons";
import { BsArrowLeftCircle } from "react-icons/bs";

interface LayoutContainerProps {
  title: String;
  children: ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({
  title,
  children,
}) => {
  return (
    <div className="text-primary font-poppins z-10">
      <nav className="bg-customGreen rounded-t-lg px-4 py-2 flex items-center h-14">
        <IconContext.Provider
          value={{
            color: "#3D1DF3",
            size: "20px",
          }}
        >
          <BsArrowLeftCircle />
        </IconContext.Provider>
        <h1 className="ml-2 inline-block text-center">{title}</h1>
      </nav>
      <div className="bg-white z-20 rounded-lg p-2 mt-2">{children}</div>
    </div>
  );
};

export default LayoutContainer;
