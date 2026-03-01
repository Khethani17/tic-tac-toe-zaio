// src/pages/Game/Game.styled.js

import styled from "styled-components";

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 380px;
  margin-bottom: 24px;
`;

export const ScoreSection = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 380px;
  margin-bottom: 20px;
`;

export const ControlsRow = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 380px;
`;
