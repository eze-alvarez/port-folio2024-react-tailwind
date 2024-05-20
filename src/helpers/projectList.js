import calculadoraV from '../assets/calculadora vertical.png'
import calculadoraH from '../assets/calculadora horizontal.png'
import bootstrapV from '../assets/BootstrapWebSite vertical.png'
import bootstrapH from '../assets/BootstrapWebSite horizontal.png'
import piedraPapelTijeraV from '../assets/piedra papel tijera vertical.png'
import piedraPapelTijeraH from '../assets/piedra papel tijera horizontal.png'
import portfolioV from '../assets/portfolio vertical.png'
import portfolioH from '../assets/portfolio horizontal.png'
import reactMoviesV from '../assets/movies vertical.png'
import reactMoviesH from '../assets/movies horizontal.png'
import toDoListV from '../assets/toDoList vertical.png'
import toDoListH from '../assets/toDoList horizontal.png'
import javaMoviesV from '../assets/java movies vertical.png'
import javaMoviesH from '../assets/java movies horizontal.png'
import penihueH from '../assets/peñihue.png'
import penihueV from '../assets/peñihue vertical.png'
// import bookStore from '../assets/bookstore.png'

const Projects = [
  {
    id: 1,
    name: 'Calculadora',
    imageVer: calculadoraV,
    imageHor: calculadoraH,
    sumary: 'Proyecto: JS y CSS interactivo',
    description: 'Cuenta con un boton de ON para el encendido de la calculadora y un boton de OFF para el apagado de la misma, se programó para que salude al encenderse y se despida al apagarse',
    skills: 'JavaScript, HTML, CSS, Grid layout, Flexbox, Responsive Web Design, Media Queries',
    url: 'https://calculadora-messi-eze-alvarez.vercel.app'
  },
  {
    id: 2,
    name: 'Piedra Papel Tijera',
    imageVer: piedraPapelTijeraV,
    imageHor: piedraPapelTijeraH,
    sumary: 'Juego interactivo, JS y CSS',
    description: 'El juego empieza con el jugador seleccionando la cantidad de rounds total, el nombre y cuenta con un marcador, al seleccionar la jugada aparezcan de los costados brazos indicando la jugada elegida',
    skills: 'JavaScript ,HTML ,CSS, Grid layout, Flexbox, Responsive Web Design, Media Queries',
    url: 'https://piedra-papel-tijera-eze-alvarez.vercel.app'
  },
  {
    id: 3,
    name: 'ToDoList',
    imageVer: toDoListV,
    imageHor: toDoListH,
    sumary: 'Lista de tareas con React.js',
    description: 'Lista de tareas que ayuda a la organización diaria, incluye botones para agregar y eliminar tareas, además cuenta con filtros que ayudan a visualizar más rapidamente las todas las tareas, las completadas y las que restan por hacer',
    skills: 'JavaScript ,HTML ,CSS, Grid layout, Flexbox, Responsive Web Design, Media Queries, CSS modules, React.js',
    url: 'https://todo-list-eze-alvarez.vercel.app'
  },
  {
    id: 4,
    name: 'React Movies',
    imageVer: reactMoviesV,
    imageHor: reactMoviesH,
    sumary: 'Sitio web buscador de películas con React.js',
    description: 'Sitio web buscador de películas, la información es consultada de una base de datos, incluye detalle de cada película; realizado con React.js',
    skills: 'JavaScript ,HTML ,CSS, Grid layout, Flexbox, Responsive Web Design, Media Queries, CSS modules, React.js, Postman',
    url: 'https://movies-eze-alvarez.vercel.app'
  },
  {
    id: 5,
    name: 'Portfolio (1era Version)',
    imageVer: portfolioV,
    imageHor: portfolioH,
    sumary: 'Sitio Web Responsive, JS y CSS ',
    description: 'Primer Portfolio creado para mostrar mi Curriculum, es una Página Web Personal donde se encuentra información referida a  educación, skills, proyectos, contacto y links de redireccionamiento a redes sociales; realizado con HTML5 y CSS ',
    skills: 'JavaScript,HTML,CSS, Grid layout, Flexbox, Responsive Web Design, Media Queries',
    url: 'https://portfolio-eze-alvarez.vercel.app'
  },
  {
    id: 6,
    name: 'Bootstrap Website',
    imageVer: bootstrapV,
    imageHor: bootstrapH,
    sumary: 'Sitio Web Responsive creado usando framework Bootstrap',
    description: 'Sitio Web Responsive creado usando framework Bootstrap, usando componentes como nav-bar con la opción de desplegado, carruseles, tarjetas y footer',
    skills: 'Bootstrap, JavaScript, HTML, CSS, Responsive Web Design',
    url: 'https://bootstrap-proyect-eze-alvarez.vercel.app'
  },
  {
    id: 7,
    name: 'Java Movies',
    imageVer: javaMoviesV,
    imageHor: javaMoviesH,
    sumary: 'Proyecto en curso del bootcamp de JAVA-frontend',
    description: 'Proyecto intermedio, el frontend se maqueto usando Bootstrap y la parte interactiva se implementara cuando se aborde el contenido de JAVA',
    skills: 'HTML ,CSS, Grid layout, Flexbox, Responsive Web Design, Media Queries, Bootstrap',
    url: 'https://java-front-end-2024.vercel.app/'
  },
  {
    id: 8,
    name: 'Cabañas Peñihue',
    imageVer: penihueV,
    imageHor: penihueH,
    sumary: 'Sitio Web para Cabañas Peñihue, realizado con Next.js & Tailwind',
    description: 'Proyecto intermedio, el frontend se maqueto usando Bootstrap y la parte interactiva se implementara cuando se aborde el contenido de JAVA',
    skills: 'HTML ,CSS, Grid layout, Flexbox, Responsive Web Design, Tailwind, Next.js, React.js',
    url: 'https://cabanas-penihue.vercel.app/'
  },
  // {
  //   id: 7,
  //   name: 'BookStore',
  //   imageVertical: bookStore,
  //   description: 'Sitio para poder crear una biblioteca de libros, cuenta con sección de creación de libros donde se incluirá toda la información referida al libro, incluye boton para eliminar el libro desde la biblioteca',
  //   skills: 'JavaScript ,HTML ,CSS, Grid layout, Flexbox, Responsive Web Design, Media Queries, CSS modules, React.js',
  //   url: 'https://book-store-eze-alvarez.vercel.app'
  // }
]

export const ProjectList = [...Projects].reverse()
