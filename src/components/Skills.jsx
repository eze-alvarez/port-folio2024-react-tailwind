import { useState } from 'react';
import Loader from './Loader';

export default function Skills({ skillsList }) {
  return (
    <div className="mx-auto py-6 lg:py-10">
      <div className="flex flex-wrap gap-4 justify-center md:gap-7 lg:gap-10">
        {skillsList.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillItem({ skill }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="bg-slate-400 flex p-1 rounded-md hover:bg-yellow1 hover:scale-110 md:p-2">
      <div className="bg-black flex flex-col p-2 h-20 w-20 rounded-sm md:h-24 md:w-24">
        <header className="h-[70%]">
          {loading && (
            <div className="flex justify-center items-center h-full">
               <Loader
              text=''
              height='50'
              width='50' />
            </div>
          )}
          <img
            src={skill.imagen}
            alt={skill.skill}
            className={`h-[100%] mx-auto ${loading ? 'hidden' : 'block'}`}
            onLoad={handleImageLoad}
          />
         
        </header>
        <footer className="flex items-center justify-center h-[30%] mt-[2px]">
          <p className="text-[0.6rem] font-semibold text-center leading-tight text-white">
            {skill.skill}
          </p>
        </footer>
      </div>
    </div>
  );
}