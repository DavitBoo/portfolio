import { createGlobalStyle } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colorTexto: string;
    colorBg: string;
    mainColor: string;
    secondColor: string;
  }
}

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Indie+Flower&display=swap');


*, *::before, *::after {
 box-sizing: border-box;
}

* {
 margin: 0;
}

body {
 line-height: 1.5;
 -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
 display: block;
 max-width: 100%;
}

input, button, textarea, select {
 font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
 overflow-wrap: break-word;
}

#root, #__next {
 isolation: isolate;
}

:root {
 --color-azul-electrico: ${({ theme }) => theme.mainColor};
 --color-verde-lima: #CDDC39;
 --color-violeta-intenso: #8E24AA;
 --color-naranja-vibrante:  ${({ theme }) => theme.secondColor};
 --color-gris-acero: #808080;
 --color-texto: ${({ theme }) => theme.colorTexto};
 --color-blanco-fondo: ${({ theme }) => theme.colorBg};

 --color-css: hsl(204, 55%, 51%);
 --color-firebase: hsl(28, 91%, 55%);
 --color-git: hsl(11, 89%, 56%);
 --color-html: hsl(12, 78%, 53%);
 --color-js: hsl(52, 84%, 63%);
 --color-react: hsl(193, 95%, 68%);
 --color-ts: hsl(204, 100%, 40%);
 --color-webpack: hsl(206, 75%, 43%);
 --color-wordpress: hsl(0, 0%, 29%);
 --color-nodejs: hsl(87, 67%, 48%);
 --color-expressjs: hsl(0, 0%, 27%);
 --color-mongodb: hsl(112, 45%, 46%);

}

body{
 font-family: 'DM Sans', sans-serif;
 background-color: var(--color-blanco-fondo);
 color: var(--color-texto);
}

h1{
 color: var(--color-azul-electrico)
}

p{
 margin: 1.5rem 0;
}

*::selection{
 background-color: var(--color-violeta-intenso);
 color: var(--color-blanco-fondo);
}

`;
