import React from "react";
import styled from "styled-components";

const StyledDiv = styled.section`
  display: flex;
  max-width: 980px;
  flex-direction: column;

  h2 {
    font-size: 2.2rem;
    font-weight: 400;
    position: relative;
  }

  h2::after {
    content: "";
    position: absolute;
    width: calc(100% - 10rem);
    margin-left: 2rem;
    bottom: calc(50% - 6px);
    height: 2px;
    background-color: var(--color-naranja-vibrante);
  }

  .contact-ways {
    display: flex;
    justify-content: center;
    gap: 2rem;

    > div {
      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: var(--color-texto);

        p {
          transition: all 0.15s cubic-bezier(0.4, 0, 1, 1) 0s;
        }
      }

      a:hover p {
        font-weight: 600;
        color: var(--color-naranja-vibrante);
      }
    }
  }

  i {
    font-size: 2rem;
  }

  svg {
    height: 2.5rem;
    fill: var(--color-texto);
  }
`;
export default function Contact() {
  return (
    <StyledDiv>
      <h2 className="contact">Contact</h2>
      <p>
        Si quieres compartir algo conmigo, más información sobre mi, tienes alguna sugerencia o te interesa algo de lo
        que hago y puedo encajar en alguno de tus proyectos o de tu empresa, puedes contactarme por aquí:
      </p>
      <div className="contact-ways">
        <div>
          <a href="https://www.linkedin.com/in/david-boo/" target="_blank">
            <i className="devicon-linkedin-plain colored"></i>
            <p>LinkedIn</p>
          </a>
        </div>
        <div>
          <a href="mailto:davitbooweb@gmail.com" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>email-outline</title>
              <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
            </svg>
            <p>E-mail</p>
          </a>
        </div>
      </div>
    </StyledDiv>
  );
}
