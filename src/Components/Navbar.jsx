import React, { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [dropmenu, setDropMenu] = useState(false);

  return (
    <div className="bg-yellow pt-0.5 border-b border-black">
      <nav className="container py-2 flex flex-wrap justify-between w-[75%] mx-auto items-center">
        <div>
          <a href="./life/HojadevidaDanielAriza.pdf" target="blank">
            <h1 className="text-blue font-Oswald text-4xl transition transform hover:scale-110 hover:-translate-y-1 ">
              Dash64.dev
            </h1>
          </a>
        </div>
        <button
          className="text-xl lg:hidden inline-flex items-center justify-center border border-blue h-10 w-10 outline-none focus:outline-none rounded-md text-blue ml-auto"
          onClick={() => {
            setNavbar(!navbar);
          }}
        >
          <HiBars3 />
        </button>
        <div
          className={`lg:inline-flex justify-between lg:w-auto mt-2 lg:mt-0 w-full ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:w-auto lg:space-x-8 lg:space-y-0">
            <li>
              <a href="#inicio">
                <h1 className="font-Khand flex lg:px-4 py-2 text-blue text-2xl transition transform hover:scale-110 hover:-translate-y-1">
                  Inicio
                </h1>
              </a>
            </li>
            <div className="group">
              <li className="relative">
                <button
                  className=" font-Khand flex lg:px-4 py-2 text-blue text-2xl items-center transition transform group-hover:scale-110 group-hover:-translate-y-1"
                  onClick={() => {
                    setDropMenu(!dropmenu);
                  }}
                >
                  Proyectos{' '}
                  <IoMdArrowDropdown
                    className={`text-2xl ml-1 transition transform duration-500 ${
                      dropmenu ? 'rotate-180 ' : 'rotate-0'
                    }`}
                  />
                </button>
                <div
                  className={`bg-blue lg:absolute rounded-md right-0 p-2 transition-opacity duration-500 ease-linear border border-white ${
                    dropmenu
                      ? 'lg:animate-fadeIn block'
                      : 'lg:animate-fadeOut hidden'
                  }`}
                >
                  <ul className="space-y-1">
                    <li>
                      <a href="#projectsweb">
                        <h1 className="font-Khand flex lg:px-4 py-2 text-yellow text-2xl transition transform hover:scale-110 lg:hover:translate-x-2 hover:translate-x-5">
                          Web
                        </h1>
                      </a>
                    </li>
                    <li>
                      <a href="#projectsgames">
                        <h1 className="font-Khand flex lg:px-4 py-2 text-yellow text-2xl transition transform hover:scale-110 lg:hover:translate-x-2 hover:translate-x-5">
                          Videojuegos
                        </h1>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
            <li>
              <a href="#contact">
                <h1 className="font-Khand flex lg:px-4 py-2 text-blue text-2xl transition transform hover:scale-110 hover:-translate-y-1 ">
                  Contacto
                </h1>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
