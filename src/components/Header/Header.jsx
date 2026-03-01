// src/components/Header/Header.jsx

import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ReactComponent as IconX } from "../../assets/svgs/IconX.svg";
import { ReactComponent as IconO } from "../../assets/svgs/IconO.svg";
import { HeaderWrapper, Logo, TurnDisplay, ThemeButton } from "./Header.styled";

function Header() {
  const { game } = useContext(GameContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Logo>Tic Tac Toe</Logo>

      <TurnDisplay>
        {game.turn === "x" ? <IconX /> : <IconO />}
        <span>Turn</span>
      </TurnDisplay>

      <ThemeButton onClick={toggleTheme}>
        {isDarkMode ? "☀️" : "🌙"}
      </ThemeButton>
    </HeaderWrapper>
  );
}

export default Header;
