
import { SiGamemaker } from 'react-icons/si';
import { FaUnity } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const projects = [
  { id:0, name: "Nahual Attack", url: "https://gx.games/es/games/gct7ed/nahual-attack/", image: "NahualAttack.png", rol: "Diseñador", engine: "GM", git: false, zoom: "zoom-in-right", git_url: null },
  { id:1, name: "Too much perverts", url: "https://strawberrychar.itch.io/too-much-perverts", image: "too.png", rol: "Desarrollador", engine: "GM", git: false, zoom: "zoom-in-left", git_url: null },
  { id:2, name: "The way of the light", url: "https://realdash64.itch.io/the-way-of-the-light", image: "Light.png", rol: "Desarrollador", engine: "Unity", git: true, zoom: "zoom-in-right", git_url: "https://github.com/Dash6464/Reto-2" },
  { id:3, name: "FNAF Cloud Judment", url: "https://gamejolt.com/games/clouded_judgment/830459", image: "fnaf-CJ.webp", rol: "Desarrollador", engine: "Unity", git: false, zoom: "zoom-in-left", git_url: null }
];

const ProjectsGames = () => {
  const listprojects = projects.map(project =>
    <div
          key={project.id}
          className="bg-[#F8FBFE] lg:w-72 pb-8 md:w-72 w-56 h-full lg:mt-0 mt-5 md:mb-16 mb-10 rounded-lg group"
          data-aos={`${project.zoom}`}
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
              {project.name}
            </h1>
            <a
              href={`${project.url}`}
              target="blank"
            >
              <img
                src={`./images/carousel/${project.image}`}
                alt={project.name}
                className="w-60 h-48 group-hover:animate-pulse group-hover:animate-infinite group-hover:animate-duration-[3000ms] group-hover:animate-ease-in"
              />
            </a>
            <h1 className="font-Antonio text-center mt-6 lg:text-4xl md:text-4xl text-2xl">
              {project.rol}
            </h1>
            <div className="mt-11 flex items-center">
              {project.engine == "GM" ? <SiGamemaker className="text-black lg:text-5xl md:text-5xl text-4xl" /> : <FaUnity className="text-black lg:text-5xl md:text-5xl text-4xl" />}
            </div>
            {project.git ? 
            <div className="mt-11">
              <a href={`${project.git_url}`} target="blank">
                <FaGithub className="text-black lg:text-5xl md:text-5xl text-4xl transition transform hover:scale-110 hover:-translate-y-1" />
              </a>
            </div>
          : null  
          }
          </div>
        </div>
  )
  return (
    <div className="mx-auto mt-16 mb-20">
      <h1
        className=" text-blue font-Antonio lg:text-6xl md:text-5xl text-3xl text-center "
        data-aos="zoom-in"
      >
        Proyectos videojuegos
      </h1>
      <div className="mt-9 flex lg:flex-row flex-col justify-evenly items-center lg:items-start">
        {listprojects[0]}
        {listprojects[1]}
      </div>
      <div className="mt-9 flex lg:flex-row flex-col justify-evenly items-center lg:items-start">
        {listprojects[2]}
        {listprojects[3]}
      </div>
    </div>
  );
};

export default ProjectsGames;
