import React from "react";
import { useState, FC } from "react";
import Package from "../jornada/page";

type Package = {
  id: string;
  address: string;
  city: string;
  status: string;
};

type PendingProps = {
  packages: Package[];
};

export const Pendientes: FC<PendingProps> = ({ packages }) => {
  return (
    <div>
      <div>
        <div>
          <div></div>
          <div>
            <div></div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
