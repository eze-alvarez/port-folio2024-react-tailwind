import Logo from "../../src/assets/logo BLACK.png"
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {  FaWhatsapp} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className='bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-center'>
        <div className="p-8 flex flex-col sm:px-16
        sm:landscape:h-[calc(100vh-56px)]
        lg:landscape:h-56 
        xl:max-w-6xl xl:flex-row xl:items-center xl:mx-auto  xl:justify-between xl:px-12 ">

            <section className='max-w-76 flex flex-col items-center mx-auto 
            lg:flex-row lg:max-w-[30rem] lg:items-start 
            xl:mx-0'>
                <picture className="max-w-[150px]">
                {/* <source media='(max-width: 1199)' srcSet={cabañaTab} /> */}
                    <img src={Logo} alt='logo Ezequiel Alvarez'/>
                </picture>

                <article className="text-center pt-4 text-cv-text lg:py-0 lg:px-10">
                    <p className="italic font-semibold">Gracias por visitar mi portfolio</p>
                    <p className="italic ">Para cualquier consulta, te dejo mis contactos</p>
                </article>
            </section>
            

            <section className=" mt-6 gap-8 flex flex-col sm:flex-row sm:justify-evenly xl:mt-0">
                <article >
                        <h2 className="text-black font-bold ">Redes Sociales</h2>
                        
                        <div className="flex  pt-4  text-[0.85rem] 
                       ">
                            <ul>

                                <li>
                                    <a href='https://www.linkedin.com/in/ezzequiel-alvarez/' target="_blank" className="gap-x-1 flex">
                                            
                                        < FaLinkedinIn size={25} className="cursor-pointer text-black min-w-[25px]"/>

                                        <div className="flex  pt-1">
                                            <span className=" min-w-20">Linkedin :</span>
                                            <span className=" text-sm ">ezzequiel-alvarez</span>
                                        </div>
                                    </a>        
                                </li>

                                <li className="mt-2">
                                    <a href='https://github.com/eze-alvarez' target="_blank" className="gap-x-1 flex">
                                            
                                        <FaGithub size={25} className="cursor-pointer text-black min-w-[25px]"/>

                                        <div className="flex  pt-1">
                                            <span className=" min-w-20">Github :</span>
                                            <span className=" text-sm ">eze-alvarez</span>
                                        </div>
                                    </a>        
                                </li>

                            </ul>
                    
                        </div>
                </article>

                <article>
                        <h2 className="text-black font-bold">Contacto</h2>
                            <div className="flex pt-4  text-[0.85rem] ">
                                <ul>
                                 
                                    <li>
                                        <a href='https://api.whatsapp.com/send?phone=5493518559355' target="_blank" className="gap-x-1 flex">
                                            
                                            <FaWhatsapp size={25} className="cursor-pointer text-black min-w-[25px]"/>

                                            <div className="flex  pt-1">
                                                <span className=" min-w-20">WhatsApp :</span>
                                                <span className=" text-sm ">+5493518559355
                                                </span>
                                            </div>
                                        </a>        
                                    </li>

                                    <li className="mt-2">
                                        <a href='mailto:cv@hotmail.com.ar' target="_blank" className="gap-x-1 flex">
                                            
                                            <MdOutlineMail size={25} className="cursor-pointer text-black min-w-[25px]"/>

                                            <div className="flex  pt-1">
                                                <span className=" min-w-20">Email :</span>
                                                <span className=" text-sm ">ezenigm@hotmail.com
                                                </span>
                                            </div>
                                        </a>        
                                    </li>

                                    
                                </ul>
                            </div>
                </article>
            </section>
            


        </div>     
    </footer>
  )
}
