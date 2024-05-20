import {ProjectList} from '../helpers/projectList'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function LastProjects() {
    const last = ProjectList.slice(0, 6)
    // const idUrl = `${project.id}-${project.name}`
  return (
    <div className='grid gap-6 mx-auto pt-6 pb-14 
    sm:grid-cols-2  
    lg:grid-cols-3  lg:py-10
    xl:pb-24'>
        {
            last.map(project => (
                <div className="item-img" key={project.id}>
				<img src={project.imageHor} alt={project.name}/>
				<div className="item-img-overlay">
					<div className="overlay-info full-width flex flex-col h-full justify-around p-4">
						<div>
                            <p className='text-base text-yellow1 font-bold tracking-wide'>{project.name}</p>
                            <h5 className='text-[0.6rem] mt-1 text-white font-semibold '>{project.sumary}</h5>
                        </div>
						<Link to={`project/${project.id}-${project.name} `} data-lightbox="images" className='self-end'>
							<span className="icon flex items-center justify-center w-7 h-7">
                                <GoArrowRight />
                            </span>
						</Link>
					</div>
				</div>
			</div>
            ))
        }
    </div>
  
  )
}
