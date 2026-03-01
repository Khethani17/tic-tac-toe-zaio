// src/pages/Details/Details.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  DetailsWrapper,
  InfoCard,
  InfoTitle,
  InfoText,
} from "./Details.styled";

function Details() {
  const navigate = useNavigate();

  return (
    <DetailsWrapper>
      <InfoCard>
        <InfoTitle>How to Play</InfoTitle>
        <InfoText>
          Players take turns placing their mark (X or O) on a 3×3 grid.
        </InfoText>
        <InfoText>
          The first player to get 3 marks in a row — horizontally, vertically,
          or diagonally — wins the round!
        </InfoText>
        <InfoText>
          If all 9 squares are filled without a winner, it's a draw.
        </InfoText>
        <Button onClick={() => navigate("/game-on")} small>
          🎮 Start Playing
        </Button>
      </InfoCard>
    </DetailsWrapper>
  );
}

export default Details;
