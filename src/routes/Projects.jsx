import { ProjectList } from '../helpers/projectList'
import ProjectItem from '../components/ProjectItem'

export default function Projects () {
  return (
    <div className='bg-gradient-to-r from-yellow2 to-yellow1 px-3'>
      <section className=" bg-white text-penihue-text body-font pt-14  mx-auto
      sm:min-h-[calc(100vh-340px)]
      xl:max-w-[90%] xl:min-h-[calc(100vh-224px)]">

        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl pt-12 mb-4">
            Proyectos
        </h2>

      {/* --------cards---------- */}

      <div className="flex flex-wrap justify-center px-4 py-10 gap-10 jus ">
          {ProjectList.map((project) => {
              return (
                  <ProjectItem
                  key={`${project.id}-${project.name}`}
                  id={`${project.id}-${project.name}`}
                  name={project.name}
                  imageH={project.imageHor}
                  description={project.description}
                  />
              )
              })}
      
      </div>
    </section>
    </div>
  )
}
