import { Carousel } from 'keep-react'


import { FaLongArrowAltRight } from "react-icons/fa";

const boxes = [
  // { id: 0, image: "mydolife.png", url: "https://github.com/paulino-app/mydo-life", alt: "Mydo life",},
  { id: 1, image: "fnaf-CJ.webp", url: "https://gamejolt.com/games/clouded_judgment/830459", alt: "FNAF Clouded Judgment"},
  { id: 2, image: "NahualAttack.png", url: "https://gx.games/es/games/gct7ed/nahual-attack/", alt: "Nahual Attack"},
  { id: 3, image: "too.png", url: "https://strawberrychar.itch.io/too-much-perverts", alt: "Too much perverts"},
  { id: 4, image: "Light.png", url: "https://realdash64.itch.io/the-way-of-the-light", alt: "The way of the light"},
  { id: 5, image: "Extreme.png", url: "https://github.com/Dash6464/Reto-2", alt: "Extreme Speed"}
]

const CarouselProjects = () => {
  const listBoxes = boxes.map(box => 
        <div key={box.id} className=' md:w-[80%] w-full z-10  relative'>
          <img src={`./images/carousel/${box.image}`} alt={`${box.alt}`} className='w-full -z-10 h-full'/>
          <a href={`${box.url}`} className='bg-blue absolute bottom-12 lg:px-12 px-7 rounded-full' target='blank'><FaLongArrowAltRight className='text-white lg:text-5xl text-3xl'/></a>
        </div>)
  return (
      <Carousel slideInterval={5000} showControls={true} indicators={true} slide={true} indicatorsType={'bar'} indicatorsTypeColors={"slate"}>
        {
          listBoxes
        }
      </Carousel>
  )
}

export default CarouselProjects