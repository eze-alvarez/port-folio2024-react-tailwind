import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import foto from "../assets/yo.webp";
import { skillsList } from "../helpers/skills";
import Skills from "../components/Skills";
import LastProjects from "../components/LastProjects";
import ProfileImage from "../components/ProfileImage";
import { Link } from "react-router-dom";
export default function Home() {
  const [text] = useTypewriter({
    words: ["Me llamo Ezequiel Alvarez", "Soy Frontend Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="bg-gradient-to-r from-yellow2 to-yellow1 px-3">
      <div className="pt-[56px]  mx-auto  bg-white xl:max-w-[90%] ">
        {/* --------- principal ------ */}
        {/* px-6 mx-auto sm:px-16 xl:px-16 2xl:px-32 */}
        <section
          className="py-6 grid   h-[calc(100vh-56px)]
          px-6 mx-auto sm:px-16 lg:px-8 2xl:px-14
          sm:h-auto
          sm:landscape:grid-cols-5 sm:landscape:h-[calc(100vh-56px)]
          lg:landscape:h-[calc(100vh-56px)] 
          "
        >
          <div
            className=" w-full flex items-center justify-center 
            sm:h-[25vh]  
            sm:landscape:col-span-3 sm:landscape:h-auto
            md:h-[30vh] 
            "
          >
            <div>
              <p
                className="tracking-widest font-bold text-lg
              sm:text-xl sm:landscape:text-base
              lg:landscape:text-3xl"
              >
                BIENVENIDOS !
              </p>

              <h1
                className="mt-2 sm:landscape:my-3 md:my-6 
              lg:landscape:my-6
              2xl:landscape:my-10"
              >
                <span
                  className="font-semibold text-lg 
                sm:landscape:text-lg 
                md:landscape:text-2xl md:text-3xl 
                lg:landscape:text-3xl
                2xl:landscape:text-4xl"
                >
                  Hola,
                </span>

                <span
                  className="tracking-wide font-semibold bg-yellow1 px-2 text-lg rounded-md ml-1
                sm:landscape:text-lg 
                md:landscape:text-2xl
                md:text-4xl lg:landscape:text-3xl
                2xl:landscape:text-4xl"
                >
                  {text}
                </span>

                <span className="text-black sm:landscape:text-xl md:landscape:text-4xl md:text-4xl">
                  <Cursor cursorStyle="|" />
                </span>
              </h1>
              <p className="mt-2 text-cv-text md:text-lg sm:landscape:text-sm">
                En mi portfolio, encontrarás una colección de proyectos donde la
                creatividad y la innovación se unen para ofrecer soluciones
                impactantes.
              </p>
              <p className="mt-2 lg:mt-4 text-cv-text sm:landscape:text-sm ">
                ¡Explora y descubre cómo puedo hacer brillar tu próxima idea!
              </p>

              {/* ------- redes sociales ----- */}

              <ul
                className="flex justify-center gap-5 mt-4
              sm:landscape:my-2 md:mt-10 md:mb-0 lg:landscape:my-10"
              >
                <li className=" border-yellow1 border-2 rounded-full p-3 hover:bg-yellow1">
                  <a
                    href="https://www.linkedin.com/in/ezzequiel-alvarez/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={25} className="cursor-pointer" />
                  </a>
                </li>
                <li className=" border-yellow1 border-2 rounded-full p-3 hover:bg-yellow1">
                  <a
                    href="https://github.com/eze-alvarez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={25} className="cursor-pointer " />
                  </a>
                </li>
                <li className=" border-yellow1 border-2 rounded-full p-3 hover:bg-yellow1">
                  <a
                    href="mailto:ezenigm@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope size={25} className="cursor-pointer " />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ------------ foto perfil ----- */}
          <div
            className="flex items-center h-full w-full 
        sm:min-h-60
        sm:landscape:col-span-2 lg:pt-32"
          >
            <ProfileImage src={foto} alt="foto C.V." />
            {/* <div>
              <img src={foto} alt="foto C.V." className="sm:full sm:ml-auto" />
            </div> */}
          </div>
        </section>

        {/* ------------ skills---------- */}
        <section className="mt-16 lg:mt-4 pt-4  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-center lg:px-8 2xl:px-14">
          <h2 className="tracking-wider font-bold text-2xl text-center my-2 md:my-4 md:text-3xl 2xl:text-4xl text-white">
            Skills
          </h2>
          <p className="text-white pt-2 px-6 mx-auto sm:px-16 lg:px-8 2xl:px-24 max-w-[1800px]">
            En esta sección te comparto una visión general de mis competencias y
            conocimientos técnicos. Desde la experiencia en diferentes
            tecnologías hasta la habilidad en herramientas de desarrollo, cada
            habilidad representa mi compromiso con la excelencia y la búsqueda
            constante de la mejora
          </p>
          <section className="px-4 md:px-6 max-w-[1800px]">
            <Skills skillsList={skillsList}/>
          </section>
        </section>

        <section className="pt-10 px-6 mx-auto sm:px-16">
          <h2 className="tracking-wider font-bold text-2xl text-center my-2 md:my-4 md:text-3xl 2xl:text-4xl">
            Ultimos Proyectos
          </h2>
          <p className="text-cv-text ">
            ¿Quieres ver lo que he estado haciendo últimamente? ¡Echa un vistazo
            a mis proyectos de frontend! Desde cosas simples hasta proyectos más
            complicados, ¡aquí encontrarás un poco de todo!
          </p>
          <LastProjects />
          <Link
          to={'/projects'} // URL interna dinámica
          className="flex justify-end pt-4 pb-12"
        >
          <button className="bg-indigo-500 text-white hover:text-gray-900 hover:bg-yellow1 rounded-full px-6 py-2 font-semibold">
            Ver Todos los Proyectos
          </button>
        </Link>
        </section>

       
      </div>
    </div>
  );
}
