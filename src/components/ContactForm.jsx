import { useState } from "react";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function ContactForm() {

    // const navigate = useNavigate();
    const history = useHistory();

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: '',
        _subject:'Consulta desde portfolio'
    });

    const handleServerResponse = (ok, msg) => {
        if (ok) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
          });
          setInputs({
            email: '',
            message: '',
            _subject:'Consulta desde portfolio'
            
          });
        } else {
          setStatus({
            info: { error: true, msg: msg },
          });
        }
    };
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
          ...prev,
          [e.target.id]: e.target.value,
        }));
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(inputs._subject)
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
          method: 'POST',
          url: "https://formspree.io/f/mnqeryjr",
          data: inputs,
        })
          .then((response) => {
            handleServerResponse(
              true,
              'Gracias, tu mensaje fué enviado',
            );
            // navigate('/thanks');
            history.push('/thanks');
          })
          .catch((error) => {
            handleServerResponse(false, error.response.data.error);
          });
    };

      
  return (
    <>
        <form onSubmit={handleOnSubmit}>

            <div className="lg:flex lg:w-full lg:justify-between">
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Nombre
                </label>

                <input
                required
                id="name"
                type="text"
                name="name"
                onChange={handleOnChange}
                value={inputs.name}
                placeholder="Escribinos tu nombre acá .."
                autoComplete="off"
                minLength={3}
                maxLength={50}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                  </label>
                  <input
                  required
                  id="email"
                  type="email"
                  name="_replyto"
                  onChange={handleOnChange}
                  value={inputs.email}
                  placeholder="ejemplo@mail.com"
                  autoComplete="off"
                  minLength={5}
                  maxLength={50}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <input type="hidden" name="_subject" value="Consulta a Cabañas Peñihue"></input>
              </div>
            </div>
           

{/* --------------mensaje------------ */}

            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Mensaje
                </label>
                <textarea
                required
                id="message"
                name="message"
                placeholder="Dejanos tu mensaje .."
                onChange={handleOnChange}
                value={inputs.message}
                rows={4}
                minLength={10}
                maxLength={500}

                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                
                />
            </div>

            <button 
            type="submit"
            disabled={status.submitting}
            className="text-white bg-indigo-500 border-0 py-2 px-6 
            disabled:bg-gray-400 disabled:text-gray-100
            focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
            {!status.submitting
                ? !status.submitted
                ? 'Submit'
                : 'Submitted'
                : 'Submitting...'}
            </button>

            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </form>   
    </>
  )
}
