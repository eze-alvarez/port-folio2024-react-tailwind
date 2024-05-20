import notebook from '../assets/notebook.jpg'

export default function Thanks() {
  return (
    <div className="relative h-screen  w-full 
    sm:h-[calc(100vh-419px)]
    sm:landscape:h-screen lg:landscape:h-[calc(100vh-224px)]">
      <img
        src={notebook}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        placeholder='blur'
      
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 " >

        <div className="absolute inset-0 flex flex-col items-center justify-center px-7 pt-14  sm:px-16 ">
            <h1 className="text-4xl text-white font-bold xl:text-5xl">GRACIAS !</h1>
            <p className="text-xl text-white mt-4 text-center font-medium xl:text-2xl">Te responderemos a la brevedad</p>
        </div>
      </div>
    </div>
  )
}
