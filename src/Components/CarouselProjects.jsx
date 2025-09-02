import { Carousel } from 'keep-react'


import { FaLongArrowAltRight } from "react-icons/fa";

const CarouselProjects = () => {
  return (
      <Carousel slideInterval={5000} showControls={true} indicators={true} slide={true} indicatorsType={'bar'} indicatorsTypeColors={"slate"}>
        <div className=' md:w-[80%] w-full z-10  relative'>
          <img src={"./images/carousel/mydolife.png"} alt='Mydo life' className='w-full -z-10 h-full'/>
          <a href="https://github.com/paulino-app/mydo-life" className='bg-blue absolute bottom-12 lg:px-12 px-7 rounded-full' target='blank'><FaLongArrowAltRight className='text-white lg:text-5xl text-3xl'/></a>
        </div>
        <div className=' md:w-[80%] w-full z-10  relative'>
          <img src={"./images/carousel/Isem.png"} alt='Isem' className='w-full -z-10 h-full'/>
          <a href="http://isem-prueba.000webhostapp.com" className='bg-blue absolute bottom-12 lg:px-12 px-7 rounded-full' target='blank'><FaLongArrowAltRight className='text-white lg:text-5xl text-3xl'/></a>
        </div>
        <div className=' md:w-[80%] w-full z-10  relative'>
          <img src={"./images/carousel/NahualAttack.png"} alt='Nahaul Attack' className='w-full -z-10 h-full'/>
          <a href="https://gx.games/es/games/gct7ed/nahual-attack/" className='bg-blue absolute bottom-12 lg:px-12 px-7 rounded-full' target='blank'><FaLongArrowAltRight className='text-white lg:text-5xl text-3xl'/></a>
        </div>
        <div className=' md:w-[80%] w-full z-10  relative'>
          <img src={"./images/carousel/too.png"} alt='Too much Pervets' className='w-full -z-10 h-full'/>
          <a href="https://strawberrychar.itch.io/too-much-perverts" className='bg-blue absolute bottom-12 lg:px-12 px-7 rounded-full' target='blank'><FaLongArrowAltRight className='text-white lg:text-5xl text-3xl'/></a>
        </div>
        <div className=' md:w-[80%] w-full z-10  relative'>
          <img src={"./images/carousel/Light.png"} alt='The way of the light' className='w-full -z-10 h-full'/>
          <a href="https://realdash64.itch.io/the-way-of-the-light" className='bg-blue absolute bottom-12 lg:px-12 px-7 rounded-full' target='blank'><FaLongArrowAltRight className='text-white lg:text-5xl text-3xl'/></a>
        </div>
        <div className=' md:w-[80%] w-full z-10  relative'>
          <img src={"./images/carousel/Extreme.png"} alt='Extreme Speed' className='w-full -z-10 h-full'/>
          <a href="#" className='bg-blue absolute bottom-12 lg:px-12 px-7 rounded-full' target='blank'><FaLongArrowAltRight className='text-white lg:text-5xl text-3xl'/></a>
        </div>
      </Carousel>
  )
}

export default CarouselProjects