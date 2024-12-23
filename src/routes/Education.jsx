import EducationItem from "../components/EducationItem"
export default function Education() {
  return (
    <>
  {/* component */}
  <section className="bg-gradient-to-r from-yellow2 to-yellow1 px-3">
    <div className="bg-white  text-black pt-14 mx-auto sm:min-h-[calc(100vh-340px)]
      xl:max-w-[90%] xl:min-h-[calc(100vh-224px)]">
        <h2 className="py-12 text-center text-3xl mx-auto font-bold tracking-tight text-gray-900 lg:text-5xl">
          Educación
        </h2>
      <div className="container mx-auto flex flex-col items-start pb-12 px-4
       sm:px-16 lg:flex-row  ">

        <div className="flex flex-col  w-full bg-cv-fondo p-4 px-8 rounded-md
         lg:w-1/3  lg:sticky lg:top-[200px] ">
          
          
          <p className="italic tracking-wide text-sm md:text-base lg:text-lg text-black ">
          ¡Bienvenido a mi sección de formación! Aquí encontrarás una recopilación de mis estudios y cursos, donde he adquirido conocimientos sólidos en Programación. <br /><br />Desde cursos en línea hasta certificaciones académicas, cada experiencia ha sido un paso hacia el crecimiento profesional
          </p>
          <a
            title="Download C.V."
            href='../..//public/C.V.Frontend-Ezequiel-Alvarez.pdf'
            download="C.V.Frontend-Ezequiel-Alvarez.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="mt-4 tracking-wide bg-indigo-500 ml-auto hover:bg-yellow1 text-white hover:text-gray-900 rounded-lg shadow hover:shadow-lg py-2 px-4 border "
          >
            Descargar C.V.
          </a>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 px-0 h-full lg:pt-0">
              <div
                className="border-2-2 border-yellow-555 absolute h-full border"
                style={{
                  right: "50%",
                  border: "2px solid #FFC100",
                  borderRadius: "1%"
                }}
              />
              <div
                className="border-2-2 border-yellow-555 absolute h-full border"
                style={{
                  left: "50%",
                  border: "2px solid #FFC100",
                  borderRadius: "1%"
                }}
              />

              <EducationItem />
             
             
            

              
            </div>
            <img
              className="mx-auto -mt-36 md:-mt-36"
              src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
