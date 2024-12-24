import { ProjectList } from "../helpers/projectList";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import Loader from "./Loader";

export default function LastProjects() {
  // Crear un estado que rastree la carga de las imágenes
  const [loadedImages, setLoadedImages] = useState(
    ProjectList.reduce((acc, project) => {
      acc[project.id] = false;
      return acc;
    }, {})
  );

  // Función para marcar una imagen como cargada
  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const last = ProjectList.slice(0, 6);

  return (
    <div
      className="grid gap-6 mx-auto pt-6 pb-4 
    sm:grid-cols-2  
    lg:grid-cols-3  lg:py-10"
    >
      {last.map((project) => (
        <div key={project.id}>
          {!loadedImages[project.id] && (
            <div className="flex items-center justify-center h-full">
              <Loader />
            </div>
          )}
          <img
            src={project.imageHor}
            alt={project.name}
            onLoad={() => handleImageLoad(project.id)}
            className={loadedImages[project.id] ? "opacity-100" : "opacity-0"}
          />
          <div className="item-img-overlay">
            <div className="overlay-info full-width flex flex-col h-full justify-around p-4">
              <div>
                <p className="text-base text-yellow1 font-bold tracking-wide">
                  {project.name}
                </p>
                <h5 className="text-[0.6rem] mt-1 text-white font-semibold ">
                  {project.sumary}
                </h5>
              </div>
              <Link
                to={`project/${project.id}-${project.name} `}
                data-lightbox="images"
                className="self-end"
              >
                <span className="icon flex items-center justify-center w-7 h-7">
                  <GoArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
