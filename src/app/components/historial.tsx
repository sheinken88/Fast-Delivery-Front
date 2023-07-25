import React from "react";
import { useState, FC } from "react";
import Package from "../jornada/page";

type Package = {
  id: string;
  address: string;
  city: string;
  status: string;
};

type DeliveredProps = {
  packages: Package[];
};

export const Historial: FC<DeliveredProps> = ({ packages }) => {
  return (
    <div>
      {packages.map((pkg) => (
        <div key={pkg.id}>
          <h2>Package ID: {pkg.id}</h2>
        </div>
      ))}
    </div>
  );
};
