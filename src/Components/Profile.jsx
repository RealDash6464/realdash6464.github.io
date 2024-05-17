

const Profile = () => {
  return (
    <div className='mt-16 mb-10 mx-auto flex lg:flex-row flex-col justify-evenly' data-aos="fade-up">
      <img src={"./images/Perfil/perfil.jpg"} className='lg:w-64 md:w-60 w-7/12 mx-auto rounded-lg'/>
      <div className='w-1/2 flex flex-col lg:mx-0 mx-auto justify-evenly'>
        <h1 className='text-blue font-Oswald lg:text-6xl md:text-5xl text-3xl lg:text-left text-center lg:m-0 mt-8 mb-12'>¿Quien soy?</h1>
        <div className='text-blue font-Oswald lg:text-3xl md:text-4xl text-2xl text-justify lg:w-2/3 w-full'>
          <p>Desarrollador de aplicaciones web con enfoque en desarrollo Front-end, busco constantemente mejorar mis habilidades y adquirir nuevos conocimientos para destacarme en el entorno laboral</p>
        </div>
      </div>
    </div>
  )
}

export default Profile