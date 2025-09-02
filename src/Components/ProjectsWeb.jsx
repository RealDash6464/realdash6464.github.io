
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FaPhp } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const ProjectsWeb = () => {
  return (
    <div className="mx-auto mt-16 mb-20">
      <h1
        className="text-blue font-Antonio lg:text-6xl md:text-5xl text-3xl text-center "
        data-aos="flip-down"
      >
        Proyectos web
      </h1>
      <div className="mt-9 flex lg:flex-row flex-col justify-evenly items-center lg:items-start">
        <div
          className="bg-[#F8FBFE] lg:w-72 pb-8 md:w-72 w-56 h-full lg:mt-0 mt-5  rounded-lg group"
          data-aos="flip-left"
          data-aos-delay={900}
        >
          <div className="flex p-2 gap-1">
            <div className="circle">
              <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-yellow inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-Antonio text-center mb-6 mt-2 lg:text-4xl md:text-4xl text-2xl">
              Mydo Life
            </h1>
            <a href="https://github.com/paulino-app/mydo-life" target="blank">
              <img
                src={'./images/carousel/mydolife.png'} 
                alt="Mydo life"
                className="w-60 h-48 mt-4 border-black border group-hover:animate-pulse group-hover:animate-infinite group-hover:animate-duration-[1000ms] group-hover:animate-ease-in"
              />
            </a>
            <h1 className="font-Antonio text-center mt-6 lg:text-4xl md:text-4xl text-2xl">
              Desarrollador Frontend
            </h1>
            <div className="mt-11 grid grid-cols-2 gap-x-6 gap-y-4">
              <FaReact
                className="lg:text-5xl md:text-5xl text-4xl"
                fill="#00D8FF"
              />
              <FaBootstrap
                className="lg:text-5xl md:text-5xl text-4xl"
                fill="#7E13F8"
              />
            </div>
            <div className="mt-5">
              <a
                href="https://github.com/Dash6464/mydolife-front"
                target="blank"
              >
                <FaGithub
                  className="lg:text-5xl md:text-5xl text-4xl transition transform hover:scale-110 hover:-translate-y-1"
                  fill="#181616"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="bg-[#F8FBFE] lg:w-72 pb-8 md:w-72 w-56 h-full lg:mt-0 mt-5 md:mb-16 mb-10 rounded-lg group"
          data-aos="flip-right"
          data-aos-delay={900}
        >
          <div className="flex p-2 gap-1">
            <div className="circle">
              <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-yellow inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-Antonio text-center mb-6 mt-2 lg:text-4xl md:text-4xl text-2xl">
              ISEM
            </h1>
            <a href="http://isem-prueba.000webhostapp.com" target="blank">
              <img
                src={'./images/carousel/Isem.png'}
                alt="Isem"
                className="w-60 h-48 mt-4 border-black border group-hover:animate-pulse group-hover:animate-infinite group-hover:animate-duration-[1000ms] group-hover:animate-ease-in"
              />
            </a>
            <h1 className="font-Antonio text-center mt-6 lg:text-4xl md:text-4xl text-2xl">
              Desarrollador Fullstack
            </h1>
            <div className="mt-11 grid grid-cols-3 gap-x-6 gap-y-4">
              <FaHtml5
                className="lg:text-5xl md:text-5xl text-4xl"
                fill="#E44D26"
              />
              <FaCss3Alt
                className="lg:text-5xl md:text-5xl text-4xl"
                fill="#1572B6"
              />
              <DiJavascript1
                className="lg:text-5xl md:text-5xl text-4xl"
                fill="#F0DB4F"
              />
              <FaPhp
                className="lg:text-5xl md:text-5xl text-4xl"
                fill="#8993be"
              />
              <DiMysql
                className="lg:text-5xl md:text-5xl text-4xl"
                fill="#00546B"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsWeb;
