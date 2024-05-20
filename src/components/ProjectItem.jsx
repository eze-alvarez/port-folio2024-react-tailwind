import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function ProjectItem ({ id, name, imageH, description }) {
  // const navigate = useNavigate()
  const match = useRouteMatch()
  const url = match.url.slice(0,-1)
  console.log(match)
 
  return (
    <Link to={`${url}/${id}`}
    className="h-[calc(18rem*1.618)] w-72 flex flex-col  rounded-[2rem] shadow-3xl hover:shadow-hov"
      // onClick={() => {
      //   navigate('/project/' + id)
      // }}
       onClick={() => <Link to={`${match.url}/${id}`}>link</Link>}
      //  onClick={() =>  console.log(`${match.url}/${id}`)}
    >
     
        <img
          src={imageH}
          alt="Card img"
          className="object-cover object-top w-full h-48 rounded-t-[2rem]"
        />
        <div className="flex flex-grow ">
          <div className="flex flex-col justify-between px-4 py-6 rounded-b-md">

            <div className=''>
              <h2 className="block mb-4 text-xl font-black leading-tight ">
                {name}
              </h2>
              <p className="mb-4 text-sm text-cv-text ">
                {description}
              </p>
             
            </div>

            <div>
              <a
                href="#"
                className="inline-block pb-1 mt-2 text-base font-black text-blue-600  border-b border-transparent hover:border-blue-600"
              >
                Leer más -&gt;
              </a>
            </div>
          </div>
        </div>
     

    </Link>
  )
}
