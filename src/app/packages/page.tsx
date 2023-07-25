"use client";
import NavbarLayout from "app/layoutContainer";
import PackageCard from "../components/packageInfo";
import React from "react";

interface PackageInfo {
  address: string;
  city: string;
  quantity: number;
}

export default function packages() {
  const packages: PackageInfo[] = [
    {
      address: "Amenabar 2356",
      city: "CABA",
      quantity: 2,
    },
    {
      address: "Av Carabobo y Rivadavia",
      city: "CABA",
      quantity: 4,
    },
    {
      address: "Melian 1242",
      city: "CABA",
      quantity: 1,
    },
    {
      address: "Castillo 670",
      city: "CABA",
      quantity: 1,
    },
    {
      address: "Gorriti 4595",
      city: "CABA",
      quantity: 3,
    },
    {
      address: "Av. Gral. Mosconi 1056",
      city: "CABA",
      quantity: 1,
    },
    {
      address: "Tacuarí 1797",
      city: "CABA",
      quantity: 1,
    },
  ];
  return (
    <div className="bg-white">
      <NavbarLayout title={"Obtener paquetes"}>
        <div className="w-full h-full flex flex-col gap-4 p-4 rounded-lg">
          {packages.map((packageInfo, index) => (
            <PackageCard key={index} packageInfo={packageInfo} />
          ))}
        </div>
      </NavbarLayout>
    </div>
  );
}
