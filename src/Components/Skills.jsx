import { FaUnity } from 'react-icons/fa';
import { SiGamemaker } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="mx-auto mt-16 mb-10">
      <h1
        className="text-yellow font-Khand lg:text-6xl md:text-5xl text-3xl text-center "
        data-aos="fade-up"
      >
        Motores utilizados
      </h1>
      <div className="mt-9 flex lg:flex-row flex-col justify-evenly">
        <div
          className="text-yellow flex flex-col items-center lg:mt-0 mt-4"
          data-aos="fade-right"
          data-aos-delay={900}
        >
          <h1 className="font-Khand text-center mt-6 lg:text-4xl md:text-5xl text-3xl">
            Unity Engine
          </h1>
          <div className="grid grid-cols-1 gap-1 mt-4">
            <FaUnity className="text-white lg:text-7xl md:text-7xl text-5xl" />
          </div>
        </div>
        <div
          className="text-yellow flex flex-col items-center lg:mt-0 mt-7"
          data-lg-aos="fade-left"
          data-aos="fade-right"
          data-aos-delay={900}
        >
          <h1 className="font-Khand text-center mt-6 lg:text-4xl md:text-5xl text-3xl">
            Game Maker Studios
          </h1>
          <div className="grid grid-cols-1 gap-1 mt-4">
            <SiGamemaker className="text-white lg:text-7xl md:text-7xl text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
