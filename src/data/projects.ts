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


import deskShips from '../assets/img/battle-ships/desktop.png'
import mobileShips from '../assets/img/battle-ships/mobile.png'

import deskCafe from '../assets/img/one-page-web/desktop.png'
import mobileCafe from '../assets/img/one-page-web/mobile.png'

import deskInventory from '../assets/img/inventory/desktop.jpg'


interface Project {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  desktop: string;
  mobile: string;
  technologies: string[];
  url: string;
  responsive: boolean;
}

const projects: Project[] = [
  {
    title: "Twitter Clone",
    titleEn: "Twitter Clone",
    description: "La idea era hacer un clone de twitter que tuviese las funcionalidades principales de la red social: escribir y publicar posts, seguir a gente y que te sigan, editar tu perfil, dar al like a post de los demás... con intención poner en práctica casi todo lo aprendido hasta ahora en conjunto. Sobre la marcha se me fueron ocurriendo algunas cosas que podía añadirle, y este es el resultado.",
    descriptionEn: "The idea was to make a twitter clone that had the main functionalities of the social network: write and publish posts, follow people and have them follow you, edit your profile, like other people's posts... with the intention of putting into practice almost everything I had learned so far as a whole. As I went along I came up with some things I could add, and this is the result.",
    desktop: desktopTwitter,
    mobile: mobilewitter,
    technologies: ["HTML", "CSS", "JS", "React", "Typescript", "Firebase", "Styled-Components"],
    url: "https://davitboo.github.io/twitter-clone/",
    responsive: true
  },
  {
    title: "ToDo List",
    titleEn: "ToDo List",
    description: "Una aplicación para crear listas de tareas. Si te loggeas en ella compartes la tareas con todos los usuarios, si no utiliza el almacenamiento del navegador.",
    descriptionEn: "An application to create to-do lists. If you log in you share the tasks with all users, otherwise it uses the browser storage.",
    desktop: desktopTodo,
    mobile: "",
    technologies: ["HTML", "CSS", "JS", "Firebase", "Webpack"],
    url: "https://davitboo.github.io/todo-list/",
    responsive: false
  },
  {
    title: "Buscando a Wally versión Pokemon",
    titleEn: "Where is Wally Pokemon version",
    description: "Pequeño juego para encontrar 3 Pokemon en una imagen. Una vez los encuentras puedes guardar tu tiempo y mirar la clasificación.",
    descriptionEn: "Small game to find 3 Pokemon in a picture. Once you find them you can save your time and look at the ranking.",
    desktop: deskPokemon,
    mobile: mobilePokemon,
    technologies: ["HTML", "CSS", "JS", "React", "Firebase", "Styled-Compontent"],
    url: "https://davitboo.github.io/photo-tagging-game/",
    responsive: true
  },
  {
    title: "Front end tienda",
    titleEn: "Store (Just Front end) ",
    description: "Lo planteé como el diseño del front end para la tienda del proyecto de artesanía de mi hermana. Solo cuenta con la parte front end.",
    descriptionEn: "I approached it as the front end design for my sister's craft project store. It only has the front end.",
    desktop: deskKetzalak,
    mobile: mobileKetzalak,
    technologies: ["HTML", "CSS", "JS", "React"],
    url: "https://davitboo.github.io/shopping-cart/",
    responsive: true
  },
  {
    title: "Juego de memoria",
    titleEn: "Memory Game",
    description: "Consiste en hacer click en las 20 fotos sin repetir ninguna. La idea era empezar a trabajar con los estados de React",
    descriptionEn: "It consists of clicking on the 20 photos without repeating any of them. The idea was to start working with React states.",
    desktop: deskMemoryGame,
    mobile: mobileMemoryGame,
    technologies: ["HTML", "CSS", "JS", "React"],
    url: "https://davitboo.github.io/memory-game/",
    responsive: true
  },
  {
    title: "Generador de CV",
    titleEn: "CV Generator",
    description: "Formulario para generar un CV, según vas completandolo los datos aparecen abajo, cuando terminas de completarlos puedes tomar una captura de pantalla y usarlo como tu CV.",
    descriptionEn: "Form to generate a CV, as you complete it the data appears below, when you finish completing it you can take a screenshot and use it as your CV.",
    desktop: deskCV,
    mobile: '',
    technologies: ["HTML", "CSS", "JS", "React"],
    url: "https://davitboo.github.io/cv-project-react/",
    responsive: false
  },
  {
    title: "Sitio Web - Academia Salburua",
    titleEn: "Web Site - Academia Salburua",
    description: "Este es un proyecto real, tomé la web vieja y utilizando los mismo estilos cree una nueva desde cero utilizando WordPress. Utilice un tema como base, pero el proyecto tiene un child-theme que me permite editar las plantillas a mi gusto. Por otro lado utilice un page builder para construirla (Elementor).",
    descriptionEn: "This is a real project, I took the old website and using the same styles I created a new one from scratch using WordPress. I used a theme as a base, but the project has a child-theme that allows me to edit the templates to my preferences. On the other hand I used a page builder to build it (Elementor).",
    desktop: deskSalburua,
    mobile: mobileSalburua,
    technologies: ["WordPress", "HTML", "CSS", "JS", "PHP"],
    url: "https://www.academiasalburua.com/",
    responsive: true
  },
  {
    title: "Juego hundir la flota",
    titleEn: "Battle Ships Game",
    description: "Juego hundir la flota, coloca tus barcos arrastrandolos en el tablero o ubicalos usando el botón de random. Juega contra el Jugador CPU.",
    descriptionEn: "Battle Ships game, place your ships by dragging them on the board or place them using the random button. Play against the CPU Player.",
    desktop: deskShips,
    mobile: mobileShips,
    technologies: ["HTML", "CSS", "JS", "Webpack", "Jest"],
    url: "https://davitboo.github.io/battleship-game/",
    responsive: true
  },
  {
    title: "Web cafetería, Vanilla.js",
    titleEn: "Cafe Static Web Site, Vanilla.js",
    description: "Una web que hice para jugar con el DOM, fue uno de los pasos previos a React. Cuando de verdad te das cuenta de lo útil que es disponer del state.",
    descriptionEn: "A web I made to play with the DOM, it was one of the previous steps to React. When you really realize how useful it is to have the state.",
    desktop: deskCafe,
    mobile: mobileCafe,
    technologies: ["HTML", "CSS", "JS", "Webpack"],
    url: "https://davitboo.github.io/battleship-game/",
    responsive: true
  },
  {
    title: "Inventario de herramientas y material",
    titleEn: "Tools and material inventory",
    description: "La idea era hacer algo decente con node y express. Se me ocurrio hacer este pequeño gestor de inventario para ordenar el material y las herramientas que tengo y utilizo para hacer mis guitarras",
    descriptionEn: "The idea was to do something simple but nice using node and express. I came up with this little inventory manager to organize the material and tools that I have and use to make my guitars.",
    desktop: deskInventory,
    mobile: '',
    technologies: ["nodejs", "expressjs", "mongodb", "bs5"],
    url: "https://inventory-5huj.onrender.com/",
    responsive: false
  }
];

export default projects;