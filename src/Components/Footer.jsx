import { useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import ReCAPTCHA from 'react-google-recaptcha';

const Footer = () => {
  const captcha = useRef(null);
  const [user, setUser] = useState(false);

  const checkBot = () => {
    if (captcha.current.getValue()) {
      setUser(true);
    } else {
      setUser(false);
    }
  };

  return (
    <div className="mt-12 overflow-y-hidden">
      <h1
        className="text-blue font-Oswald lg:text-6xl md:text-5xl text-3xl mb-16 text-center"
        data-aos="fade-up"
      >
        Contacto
      </h1>
      <div
        className="mx-auto flex justify-center lg:mb-12 md:mb-12 mb-14 mt-6"
        data-aos="fade-up"
      >
        <ReCAPTCHA
          sitekey="6Ldz6EEpAAAAALEk3HffwaT7rQDEfblF5cUjSlRR"
          ref={captcha}
          onChange={checkBot}
        />
      </div>
      <div
        className="flex justify-center items-center"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-3 gap-x-12">
          <a
            href="https://github.com/RealDash6464"
            target="blank"
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
              }
            }}
            className={`text-black lg:text-5xl md:text-5xl text-4xl transition transform ${
              user
                ? 'hover:scale-110 hover:-translate-y-1 opacity-100'
                : 'hover:cursor-default opacity-60'
            }`}
          >
            <FaGithub />
          </a>
          <a
            href="https://co.linkedin.com/in/daniel-felipe-ariza-agudelo-281942200"
            target="blank"
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
              }
            }}
            className={`lg:text-5xl md:text-5xl text-4xl transition transform ${
              user
                ? 'hover:scale-110 hover:-translate-y-1 hover:cursor-pointer opacity-100'
                : 'hover:cursor-default opacity-60'
            }`}
          >
            <FaLinkedin fill="#0A66C2" />
          </a>
          <a
            href="mailto:realdash64@gmail.com"
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
              }
            }}
            className={`text-white lg:text-5xl md:text-5xl text-4xl transition transform ${
              user
                ? 'hover:scale-110 hover:-translate-y-1 hover:cursor-pointer opacity-100'
                : 'hover:cursor-default opacity-60'
            }`}
          >
            <IoMdMail />
          </a>
        </div>
      </div>
      <div data-aos="fade-up">
        <div className="w-7/12 mt-10 mb-10 h-[2.5px] mx-auto bg-blue"></div>
        <h1 className="text-blue font-Oswald lg:text-4xl md:text-5xl text-3xl lg:mb-10 mt-10 mb-16 text-center">
          2024
        </h1>
      </div>
    </div>
  );
};

export default Footer;
