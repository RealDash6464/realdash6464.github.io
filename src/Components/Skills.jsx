import React from 'react';
import { GoBrowser } from 'react-icons/go';
import { GoServer } from 'react-icons/go';
import { GoDatabase } from 'react-icons/go';
import { FaReact } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { FaPhp } from "react-icons/fa";
import { FaPython } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';

const Skills = () => {
  return (
    <div className="mx-auto mt-16 mb-10">
      <h1
        className="text-yellow font-Khand lg:text-6xl md:text-5xl text-3xl text-center "
        data-aos="fade-up"
      >
        Habilidades
      </h1>
      <div className="mt-9 flex lg:flex-row flex-col justify-evenly">
        <div
          className="text-yellow flex flex-col items-center lg:mt-0 mt-4"
          data-aos="fade-right"
          data-aos-delay={900}
        >
          <GoBrowser className="text-7xl md:text-8xl text-white" />
          <h1 className="font-Khand text-center mt-6 lg:text-4xl md:text-5xl text-3xl">
            Frontend
          </h1>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <FaReact className="lg:text-7xl md:text-7xl text-5xl " fill="#00D8FF"/>
            <FaBootstrap className="lg:text-7xl md:text-7xl text-5xl " fill="#7E13F8"/>
            <SiTailwindcss className="lg:text-7xl md:text-7xl text-5xl " fill="#44a8b3"/>
            <FaVuejs className="lg:text-7xl md:text-7xl text-5xl " fill="#41B883"/>
          </div>
        </div>
        <div
          className="text-yellow flex flex-col items-center lg:mt-0 mt-14"
          data-lg-aos="fade-up"
          data-aos="fade-left"
          data-aos-delay={900}
        >
          <GoServer className="text-7xl md:text-8xl text-white"/>
          <h1 className="font-Khand text-center mt-6 lg:text-4xl md:text-5xl text-3xl">
            Backend
          </h1>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <FaPhp className="lg:text-7xl md:text-7xl text-5xl " fill="#8993be"/>
            <FaPython className="lg:text-7xl md:text-7xl text-5xl " fill='#5A9FD4'/>
          </div>
        </div>
        <div
          className="text-yellow flex flex-col items-center lg:mt-0 mt-7"
          data-lg-aos="fade-left"
          data-aos="fade-right"
          data-aos-delay={900}
        >
          <GoDatabase className="text-7xl md:text-8xl text-white" />
          <h1 className="font-Khand text-center mt-6 lg:text-4xl md:text-5xl text-3xl">
            DataBase
          </h1>
          <div className="grid grid-cols-1 gap-2 mt-4">
            <DiMysql className="lg:text-7xl md:text-7xl text-5xl " fill="#0ab2fa"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
