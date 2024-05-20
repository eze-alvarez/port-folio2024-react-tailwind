import whats from '../assets/whatsapp.svg'
import cvIcon from '../assets/cv.png'

export default function FloatingIcons() {
  return (
    <div className="flex flex-col gap-3 items-center justify-end fixed bottom-10 right-0 mb-4 mr-3 z-10
    lg:gap-5 lg:bottom-[224px] lg:mr-2 2xl:mr-4">
        <div>
            <a
            title="Download C.V."
            href='/CV.EzequielAlvarez.FRONTEND.docx'
            download="CV.EzequielAlvarez.FRONTEND.docx"
            rel="noopener noreferrer"
            target="_blank"
            className="block w-14 h-14 transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12
            lg:h-16 lg:w-16"
            >
            <img
                className="object-cover object-center w-full h-full "
                src={cvIcon} alt='C.V.'
            />
            </a>
        </div>

        <div>
            <a
            title="Link to Whatsapp"
            href='https://api.whatsapp.com/send?phone=5493518559355'
            rel="noopener noreferrer"
            target="_blank"
            className="block w-12 h-12 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12
            lg:h-16 lg:w-16"
            >
            <img
                className="object-cover object-center w-full h-full rounded-full "
                src={whats} alt='logo whatsapp'
            />
            </a>
        </div>
    </div>
  )
}
