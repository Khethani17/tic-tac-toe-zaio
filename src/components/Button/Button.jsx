// src/components/Button/Button.jsx

import React from "react";
import { ButtonStyle, SmallButton } from "./Button.styled";

function Button({ onClick, onMouseEnter, disabled, small, variant, children }) {
  const Component = small ? SmallButton : ButtonStyle;

  return (
    <Component
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      disabled={disabled}
      $variant={variant}
    >
      {children}
    </Component>
  );
}

export default Button;
