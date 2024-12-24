import { useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import Loader from "./Loader"; // Importa tu componente Loader

export default function ProjectItem({ id, name, imageH, description }) {
  const [loaded, setLoaded] = useState(false); // Estado para manejar si la imagen está cargada
  const match = useRouteMatch();
  const url = match.url.slice(0, -1);

  const handleImageLoad = () => {
    setLoaded(true); // Cambiar estado cuando la imagen se haya cargado
  };

  return (
    <Link
      to={`${url}/${id}`}
      className="h-[calc(16rem*1.618)] w-72 flex flex-col rounded-[2rem] shadow-3xl hover:shadow-hov"
    >
      <div className="relative">
        {/* Loader mientras la imagen no se carga */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <Loader />
          </div>
        )}

        {/* Imagen con transición de opacidad */}
        <img
          src={imageH}
          alt="Card img"
          className={`object-cover object-top w-full h-48 rounded-t-[2rem] transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
        />
      </div>
      <div className="flex flex-grow">
        <div className="flex flex-col justify-between px-4 py-6 rounded-b-md">
          <div>
            <h2 className="block mb-4 text-xl font-black leading-tight">
              {name}
            </h2>
            <p className="mb-4 text-sm text-cv-text line-clamp-4">
              {description}
            </p>
          </div>
          <div>
            <a
              href="#"
              className="inline-block pb-1 mt-2 text-base font-black text-blue-600 border-b border-transparent hover:border-blue-600"
            >
              Leer más -&gt;
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
