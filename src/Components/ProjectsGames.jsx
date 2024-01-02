import React from 'react';
import { SiGamemaker } from 'react-icons/si';
import { FaUnity } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const ProjectsGames = () => {
  return (
    <div className="mx-auto mt-16 mb-20">
      <h1
        className="text-yellow font-Antonio lg:text-6xl md:text-5xl text-3xl text-center "
        data-aos="zoom-in"
      >
        Proyectos videojuegos
      </h1>
      <div className="mt-9 flex lg:flex-row flex-col justify-evenly items-center lg:items-start">
        <div
          class="bg-[#F8FBFE] lg:w-72 pb-8 md:w-72 w-56 h-full lg:mt-0 mt-5 md:mb-16 mb-10 rounded-lg group"
          data-aos="zoom-in-right"
          data-aos-delay={900}
        >
          <div class="flex p-2 gap-1">
            <div class="circle">
              <span class="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-yellow inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <a
              href="https://gx.games/es/games/gct7ed/nahual-attack/"
              target="blank"
            >
              <img
                src={'./images/carousel/NahualAttack.png'}
                alt="Nahaul Attack"
                className="w-60 h-48 group-hover:animate-pulse group-hover:animate-infinite group-hover:animate-duration-[3000ms] group-hover:animate-ease-in"
              />
            </a>
            <h1 className="font-Antonio text-center mt-6 lg:text-4xl md:text-4xl text-2xl">
              Nahual Attack
            </h1>
            <h1 className="font-Antonio text-center mt-6 lg:text-4xl md:text-4xl text-2xl">
              Diseñador
            </h1>
            <div className="mt-11 flex items-center">
              <SiGamemaker className="text-black lg:text-5xl md:text-5xl text-4xl" />
            </div>
          </div>
        </div>
        <div
          class="bg-[#F8FBFE] lg:w-72 pb-8 md:w-72 w-56 h-full lg:mt-0 mt-5 md:mb-16 mb-10 rounded-lg group"
          data-aos="zoom-in-left"
          data-aos-delay={900}
        >
          <div class="flex p-2 gap-1">
            <div class="circle">
              <span class="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-yellow inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <a
              href="https://strawberrychar.itch.io/too-much-perverts"
              target="blank"
            >
              <img
                src={'./images/carousel/too.png'}
                alt="Too much Pervets"
                className="w-60 h-48 group-hover:animate-pulse group-hover:animate-infinite group-hover:animate-duration-[3000ms] group-hover:animate-ease-in"
              />
            </a>
            <h1 className="font-Antonio text-center mt-6 lg:text-4xl md:text-4xl text-2xl">
              Too much perverts
            </h1>
            <h1 className="font-Antonio text-center mt-6 lg:text-4xl md:text-4xl text-2xl">
              Desarrollador
            </h1>
            <div className="mt-11 flex items-center">
              <SiGamemaker className="text-black lg:text-5xl md:text-5xl text-4xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 flex lg:flex-row flex-col justify-evenly items-center lg:items-start">
        <div
          class="bg-[#F8FBFE] lg:w-72 pb-8 md:w-72 w-56 h-full lg:mt-0 mt-5 md:mb-16 mb-10 rounded-lg group"
          data-aos="zoom-in-right"
          data-aos-delay={900}
        >
          <div class="flex p-2 gap-1">
            <div class="circle">
              <span class="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-yellow inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img
              src={'./images/carousel/Light.png'}
              alt="The way of the light"
              className="w-60 h-48"
            />
            <h1 className="font-Antonio text-center mt-6 lg:text-4xl md:text-4xl text-2xl">
              The way of the light
            </h1>
            <h1 className="font-Antonio text-center mt-6 lg:text-4xl md:text-4xl text-2xl">
              Desarrollador
            </h1>
            <div className="mt-11 flex items-center">
              <FaUnity className="text-black lg:text-5xl md:text-5xl text-4xl" />
            </div>
            <div className="mt-11">
              <a href="https://github.com/Dash6464/Nacho_Reto_1" target="blank">
                <FaGithub className="text-black lg:text-5xl md:text-5xl text-4xl transition transform hover:scale-110 hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
        <div
          class="bg-[#F8FBFE] lg:w-72 pb-8 md:w-72 w-56 h-full lg:mt-0 mt-5 md:mb-16 mb-10 rounded-lg group"
          data-aos="zoom-in-left"
          data-aos-delay={900}
        >
          <div class="flex p-2 gap-1">
            <div class="circle">
              <span class="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-yellow inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img
              src={'./images/carousel/Extreme.png'}
              alt="Extreme Speed"
              className="w-60 h-48"
            />
            <h1 className="font-Antonio text-center mt-6 lg:text-4xl md:text-4xl text-2xl">
              Extreme Speed
            </h1>
            <h1 className="font-Antonio text-center mt-6 lg:text-4xl md:text-4xl text-2xl">
              Desarrollador
            </h1>
            <div className="mt-11 flex items-center">
              <FaUnity className="text-black lg:text-5xl md:text-5xl text-4xl" />
            </div>
            <div className="mt-11">
              <a href="https://github.com/Dash6464/Reto-2" target="blank">
                <FaGithub
                  className="text-black lg:text-5xl md:text-5xl text-4xl transition transform hover:scale-110 hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGames;
