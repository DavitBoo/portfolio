import React from "react";
import styled, { keyframes } from "styled-components";

// import desktop from "../../assets/twitter-desktop.png";

const translateAnimation = keyframes`
  from {
    transform: translateX(30%);
  }
  to {
    transform: translateX(35%);
  }
`;

const StyledDiv = styled.div`
  transform: translateX(30%);
  animation: ${translateAnimation} 2s linear infinite alternate;
  .desktop {
    width: min(25vw, 400px);
    aspect-ratio: 16/8.6;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 1000px) {
      width: min(50vw, 400px);
    }
  }

  .browser-toolbar {
    width: 100%;
    height: 8%;
    background-color: #eee;
    background-image: linear-gradient(to bottom, #ddd, #eee);
    border-bottom: 1px solid #ccc;
  }

  .browser-buttons {
    width: 45px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5px;
  }

  .browser-button {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-left: 2px;
  }

  .minimize {
    background-color: #fcbe4a;
  }

  .maximize {
    background-color: #5ac85d;
  }

  .close {
    background-color: #ff5f57;
  }

  .screen {
    width: 100%;
    height: calc(100% - 8%); /* Resta la altura de la barra de herramientas */
    background-color: #fff;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    overflow: hidden;
  }

  .screen img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export default function DesktopScreen({ desktop }: any) {
  return (
    <StyledDiv>
      <div className="desktop">
        <div className="browser-toolbar">
          <div className="browser-buttons">
            <div className="browser-button close"></div>
            <div className="browser-button minimize"></div>
            <div className="browser-button maximize"></div>
          </div>
        </div>
        <div className="screen">
          <img src={desktop} alt="Pantalla de la aplicación" />
        </div>
      </div>
    </StyledDiv>
  );
}
