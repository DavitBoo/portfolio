import desktopTwitter from '../assets/img/twitter-clone/twitter-desktop.png';
import mobilewitter from '../assets/img/twitter-clone/twitter-mobile.png';

import desktopTodo from '../assets/img/todo/todo-desktop.png';

import deskPokemon from '../assets/img/pokemon-wally/pokemon-desktop.png'
import mobilePokemon from '../assets/img/pokemon-wally/pokemon-mobile.png'

import deskKetzalak from '../assets/img/ketzalak-store/desktop.png'
import mobileKetzalak from '../assets/img/ketzalak-store/mobile.png'

import deskMemoryGame from '../assets/img/memory-game/desktop.png'
import mobileMemoryGame from '../assets/img/memory-game/mobile.png'

import deskCV from '../assets/img/cv-aplication/desktop.png'

import deskSalburua from '../assets/img/academia-salburua/desktop.png'
import mobileSalburua from '../assets/img/academia-salburua/mobile.png'

interface Project {
  title: string;
  description: string;
  desktop: string;
  mobile: string;
  technologies: string[];
  url: string;
  responsive: boolean;
}

const projects: Project[] = [
  {
    title: "Twitter Clone",
    description: "La idea era hacer un clone de twitter que tuviese las funcionalidades principales de la red social: escribir y publicar posts, seguir a gente y que te sigan, editar tu perfil, dar al like a post de los demás... con intención poner en práctica casi todo lo aprendido hasta ahora en conjunto. Sobre la marcha se me fueron ocurriendo algunas cosas que podía añadirle, y este es el resultado.",
    desktop: desktopTwitter,
    mobile: mobilewitter,
    technologies: ["HTML", "CSS", "JS", "React", "TypeScript", "Firebase", "Styled-Components"],
    url: "https://davitboo.github.io/twitter-clone/",
    responsive: true
  },
  {
    title: "ToDo List",
    description: "Una aplicación para crear listas de tareas. Si te loggeas en ella compartes la base de datos con todos los usuarios, si no utiliza el almacenamiento del navegador.",
    desktop: desktopTodo,
    mobile: "",
    technologies: ["HTML", "CSS", "JS", "Firebase", "Webpack"],
    url: "https://davitboo.github.io/todo-list/",
    responsive: false
  },
  {
    title: "Buscando a Wally versión Pokemon",
    description: "Pequeño juego para encontrar 3 Pokemon en una imagen. Una vez los encuentras puedes guardar tu tiempo y mirar la clasificación.",
    desktop: deskPokemon,
    mobile: mobilePokemon,
    technologies: ["HTML", "CSS", "JS", "React", "Firebase", "Styled-Compontent"],
    url: "https://davitboo.github.io/photo-tagging-game/",
    responsive: true
  },
  {
    title: "Front end tienda",
    description: "Lo planteé como el diseño del front end para la tienda del proyecto de artesanía de mi hermana. Solo cuenta con la parte front end.",
    desktop: deskKetzalak,
    mobile: mobileKetzalak,
    technologies: ["HTML", "CSS", "JS", "React"],
    url: "https://davitboo.github.io/shopping-cart/",
    responsive: true
  },
  {
    title: "Juego de memoria",
    description: "Consiste en hacer click en las 20 fotos sin repetir ninguna. La idea era empezar a trabajar con los estados de React",
    desktop: deskMemoryGame,
    mobile: mobileMemoryGame,
    technologies: ["HTML", "CSS", "JS", "React"],
    url: "https://davitboo.github.io/memory-game/",
    responsive: true
  },
  {
    title: "Generador de CV",
    description: "Formulario para generar un CV, según vas completandolo los datos aparecen abajo, cuando terminas de completarlos puedes tomar una captura de pantalla y usarlo como tu CV.",
    desktop: deskCV,
    mobile: '',
    technologies: ["HTML", "CSS", "JS", "React"],
    url: "https://davitboo.github.io/cv-project-react/",
    responsive: false
  },
  {
    title: "Sitio Web - Academia Salburua",
    description: "Este es un proyecto real, tomé la web vieja y utilizando los mismo estilos cree una nueva desde cero utilizando WordPress. Utilice un tema como base, pero el proyecto tiene un child-theme que me permite editar las plantillas a mi gusto. Por otro lado utilice un page builder para construirla (Elementor).",
    desktop: deskSalburua,
    mobile: mobileSalburua,
    technologies: ["WordPress", "HTML", "CSS", "JS", "PHP"],
    url: "https://www.academiasalburua.com/",
    responsive: true
  }
];

export default projects;