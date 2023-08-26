import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { LanguageContext } from "../../Context/LanguageContext";

// import mobile from "../../assets/twitter-mobile.png";

const rotateAnimation = keyframes`
  from {
    transform: translateX(-380%) translateY(10%) rotate(0deg);
  }
  to {
    transform: translateX(-415%) translateY(0%) rotate(-5deg);
  }
`;

const StyledDiv = styled.div`
  transform: translateX(-400%) translateY(10%);
  animation: ${rotateAnimation} 1s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate;
  transform-origin: right bottom;
  .mobile {
    width: min(6vw, 80px);
    aspect-ratio: 375/667;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 3px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 12px; /* Ajusta el margen superior según tus necesidades */
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    position: relative; /* Agrega posición relativa para posicionar correctamente el contorno */

    @media (max-width: 1000px) {
      width: min(12vw, 80px);
    }
  }

  .mobile-border {
    width: calc(100% - 4%); /* Ajusta el tamaño del contorno según tus necesidades */
    height: calc(100% - 4%); /* Ajusta el tamaño del contorno según tus necesidades */
    border: 1px solid #ccc;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
  }

  .mobile-screen {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function MobileScreen({ mobile }: any) {
  const { language } = useContext(LanguageContext);

  return (
    <StyledDiv>
      <figure className="mobile">
        <div className="mobile-border">
          <div className="mobile-screen">
            <img
              src={mobile}
              alt={
                language === "es-ES"
                  ? "Captura de pantalla de la aplicación móvil"
                  : "Screenshot of the mobile application"
              }
            />
          </div>
        </div>
      </figure>
    </StyledDiv>
  );
}
