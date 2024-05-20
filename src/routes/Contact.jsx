// import ContactForm from "../components/ContactForm"

// export default function Contact() {
//   return (
//    <div className='bg-gradient-to-r from-yellow2 to-yellow1 px-3'>
//      <section className="bg-white text--text body-font pt-14  mx-auto
//     sm:min-h-[calc(100vh-340px)]
//     xl:max-w-[90%] xl:px-16 2xl:px-32 xl:min-h-[calc(100vh-224px)]">

//         <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl pt-12">
//           Contacto
//         </h2>

//         <div className="container px-6 py-6  mx-auto sm:px-16 
//         lg:flex lg:gap-12">
        

//             <div className="flex flex-col lg:w-[35%]">
                
//                 <div className='w-full py-6
//                 lg:landscape:max-w-1/2'>
              
                    
//                     <iframe
//                         height="100%"
//                         width="100%"
//                         className="inset-0 h-60 sm:h-80"
//                         frameBorder={0}
//                         title="map"
//                         marginHeight={0}
//                         marginWidth={0}
//                         scrolling="no"
//                         referrerPolicy="no-referrer-when-downgrade"
                        
//                         allowFullScreen=""
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108977.23899501601!2d-64.27661389191663!3d-31.399280319417784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses-419!2sar!4v1714505522817!5m2!1ses-419!2sar"
//                         // style={{ filter: " contrast(1.2) opacity(0.8)" }}
//                     />

//                 </div>

//             </div>



//             {/* ---------------SECTOR FORMULARIO COMPLETO  */}

//             <div className=" w-full   text-sm mt-4 text--text  flex flex-col
//             md:ml-auto
//              lg:w-[65%] ">
//                 <h2 className="text- text-xl mb-1 font-medium title-font">
//                     Escribinos tu consulta
//                 </h2>
//                 <p className="leading-relaxed mb-5 ">
//                     Nuestro equipo está listo para responder tus preguntas y ayudarte en todo lo que necesites
//                 </p>

//                 <ContactForm/>

//                 <p className=" text-sm mt-3">
//                     Estamos emocionados de recibir tu mensaje y te agradecemos sinceramente por contactarnos 
//                 </p>
                

//             </div>


//         </div>
//     </section>
//    </div>
   
//   )
// }


import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import Loader from '../components/Loader';

export default function Contact() {
  const [loading, setLoading] = useState(true);

  const handleMapLoad = () => {
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-yellow2 to-yellow1 px-3">
      <section className="bg-white text--text body-font pt-14 mx-auto sm:min-h-[calc(100vh-340px)] xl:max-w-[90%] xl:px-16 2xl:px-32 xl:min-h-[calc(100vh-224px)]">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl pt-12">
          Contacto
        </h2>

        <div className="container px-6 py-6 mx-auto sm:px-16 lg:flex lg:gap-12">
          <div className="flex flex-col lg:w-[35%]">
            <div className="w-full py-6 lg:landscape:max-w-1/2 relative">
              {loading && (
                <div className="absolute inset-0 flex justify-center items-center bg-white">
                  <Loader text="Cargando..." height="60" width="60" />
                </div>
              )}
              <iframe
                height="100%"
                width="100%"
                className="inset-0 h-60 sm:h-80"
                frameBorder={0}
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen=""
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108977.23899501601!2d-64.27661389191663!3d-31.399280319417784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses-419!2sar!4v1714505522817!5m2!1ses-419!2sar"
                onLoad={handleMapLoad}
              />
            </div>
          </div>

          <div className="w-full text-sm mt-4 text--text flex flex-col md:ml-auto lg:w-[65%]">
            <h2 className="text- text-xl mb-1 font-medium title-font">
              Escribinos tu consulta
            </h2>
            <p className="leading-relaxed mb-5">
              Nuestro equipo está listo para responder tus preguntas y ayudarte en todo lo que necesites
            </p>

            <ContactForm />

            <p className="text-sm mt-3">
              Estamos emocionados de recibir tu mensaje y te agradecemos sinceramente por contactarnos
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// function Loader({ text = '', height = '20', width = '20' }) {
//   return (
//     <div className="flex flex-col items-center justify-center gap-2">
//       <div
//         className="border-gray-300 animate-spin rounded-full border-8 border-t-indigo-500"
//         style={{ height: `${height}px`, width: `${width}px` }}
//       ></div>
//       {text && <p className="text-center">{text}</p>}
//     </div>
//   );
// }
