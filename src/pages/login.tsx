import React from "react";
import Image from "next/image";
import Logo from "../../public/Capa_1.svg";

const Login = () => {
  const data = {};
  return (
    <main className="bg-primary p-20 h-screen justify-around">
      <div className="">
        <Image
          src={Logo}
          alt="Fast Delivery Logo"
          className=""
          width={300}
          height={24}
          priority
        />
      </div>
      <div className="flex justify-center items-center">
        <form className="rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email@contraseña.com"
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex-col items-center justify-between text-center">
            <button
              className="bg-secondary text-primary py-2 w-80 rounded-3xl"
              type="button"
            >
              Ingresar
            </button>
            <button
              className="border-2 border-secondary text-white whitespace-nowrap	 py-2 w-80 rounded-3xl mt-4"
              type="button"
            >
              Crear cuenta
            </button>
            <a href="" className="text-white font-extralight">
              OLVIDÉ MI CONTRASEÑA
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
