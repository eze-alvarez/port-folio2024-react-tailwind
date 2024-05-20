import {EducationList} from '../helpers/educationList'
export default function EducationItem() {
  return (
    <div>
        
      {EducationList.map((curso, index) => {
        const esPar = index % 2 === 0;

        // Renderizado condicional basado en si es par o impar
        return (
          <div key={index} className={`mb-8 flex justify-between ${esPar ? 'flex-row-reverse left-timeline' : 'right-timeline'} cursos-center w-full`}>
            <div className="order-1 w-5/12" />
            <div className={`order-1 w-5/12 px-2 py-4 md:px-4 bg-cv-fondo rounded-md ${esPar ? 'text-right' : 'text-left'}`}>
              <p className="text-base text-indigo-500 font-bold">{curso.fecha}</p>
              <h4 className="mb-0 font-bold text-lg md:text-2xl">{curso.titulo}</h4>
              <h5 className="mb-3 font-bold italic text-base text-indigo-500 ">{curso.lugar}</h5>
              <p className="text-sm md:text-base leading-snug text-black">{curso.texto}</p>
            </div>
          </div>
        );
      })}
  
    </div>
  )
}
