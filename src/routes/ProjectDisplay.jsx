import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/projectList'

export default function ProjectDisplay() {
    const { id } = useParams()
    const infoProject = id.split('-')
    const numberId = Number(infoProject[0])
    // console.log(numberId)
    const project = ProjectList.filter(project => project.id === numberId)[0]
    // console.log(project)

    const skillsArray = project.skills.split(',');
  return (
    <>
    {/* component */}
    
    <div className="pt-20 sm:min-h-[calc(100vh-340px)] bg-gradient-to-r from-yellow2 to-yellow1 flex items-center p-5 lg:p-10 lg:pt-20 overflow-hidden relative xl:min-h-[calc(100vh-224px)]">
      <div className="w-full max-w-6xl rounded-md bg-white shadow-xl p-10  mx-auto text-gray-800 relative md:text-left lg:h-96 xl:h-[30rem] lg:flex lg:items-center">
        <div className="md:flex items-center -mx-10">

          <div className=" h-[calc(10rem*1.618)] w-40  mb-10 mx-auto rounded-md
          md:mb-0 lg:px-0 ">
            <div className="relative h-[100%] w-40 rounded-[2rem] shadow-3xl hover:shadow-hov cursor-pointer ">
              <a href={project.url} target='_blank' rel='noreferrer' >
                <img
                  src={project.imageVer}
                  className="w-full rounded-3xl object-cover h-[100%] object-top "
                  alt=""
                />
              </a>
              
             
            </div>
          </div>


          <div className="w-full md:w-2/3 px-10 lg:pl-0">
            <h2 className="font-bold uppercase text-center text-2xl mb-10">
                {project.name}
            </h2>
            <section className='flex flex-col lg:flex-row lg:gap-x-8'>
                <div className="mb-10 lg:w-1/3 border-4 border-yellow1 p-4">
                  <h2 className="font-bold uppercase text-xl mb-5">
                      Descripción
                  </h2>
                  <p className="text-sm ">
                      {project.description}
                      
                  </p>
                </div>

                <div className='lg:w-2/3 flex flex-col border-2 border-yellow1 p-4 lg:pb-2'>
                    <h2 className="font-bold uppercase text-xl mb-5 lg:text-center">
                    Tecnologias
                    </h2>
                    <ul className="text-sm grid justify-center mb-1 sm:grid-cols-2 sm:pl-10 italic">
                        {
                            skillsArray.map(skill => {
                                // Puedes cambiar este formato según tus necesidades
                                return <li key={skill}>- {skill}</li>;
                            })
                        }
                        
                    </ul>
                    <a  href={project.url} target='_blank' rel='noreferrer' className="inline-block self-end mt-7 mr-5">
                        <button className="bg-indigo-500 text-white hover:text-gray-900 hover:bg-yellow1 rounded-full px-10 py-2 font-semibold">
                      Visitar Proyecto
                        </button>
                    </a>
                </div>
            </section>
            

          </div>
        </div>
      </div>
    </div>
   
  </>
  
  )
}
