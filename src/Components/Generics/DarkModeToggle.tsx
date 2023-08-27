import React, { useState } from "react";
import styled from "styled-components";

interface DarkModeToggleProps {
  handleChange: () => void;
}

const ToggleBtn = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 30px;
  }

  .switch input {
    display: none;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-azul-electrico);
    border-radius: 30px;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  .slider:after {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: #080808;
    border-radius: 50%;
    transition: all 0.4s;
    clip-path: ellipse(50% 50% at 50% 23%);
    transform: rotate(60deg);
  }

  input:checked + .slider {
    background-color: var(--color-azul-electrico);
  }

  input:checked + .slider:before,
  input:checked + .slider:after {
    transform: translateX(26px);
  }

  input:checked + .slider:after {
    visibility: hidden;
    opacity: 0;
  }

  .toggle-icons {
    display: flex;
    justify-content: space-between;
    width: 50px;
    position: absolute;
    top: 4px;
    right: 4px;
  }

  .fa {
    color: white;
  }

  .fa-sun {
    display: none;
  }

  input:checked ~ .toggle-icons .fa-sun {
    display: inline-block;
  }

  input:checked ~ .toggle-icons .fa-moon {
    display: none;
  }
`;

export default function DarkModeToggle({ handleChange }: DarkModeToggleProps) {
  return (
    <ToggleBtn className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" onChange={handleChange} />
        <span className="slider"></span>
      </label>
    </ToggleBtn>
  );
}
