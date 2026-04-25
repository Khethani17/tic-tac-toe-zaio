// src/components/Player/Player.jsx

import React from "react";
import { PlayerWrapper, PlayerLabel, PlayerScore } from "./Player.styled";

function Player({ label, score, color, isActive }) {
  return (
    <PlayerWrapper $isActive={isActive} $color={color}>
      <PlayerLabel $color={color}>{label}</PlayerLabel>
      <PlayerScore>{score}</PlayerScore>
    </PlayerWrapper>
  );
}

export default Player;
