// src/components/Player/Player.styled.js

import styled from "styled-components";

export const PlayerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px;
  background: ${({ theme }) => theme.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid
    ${({ $isActive, $color }) => ($isActive ? $color : "transparent")};
  transition: all 0.3s ease;
`;

export const PlayerLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ $color }) => $color};
`;

export const PlayerScore = styled.span`
  font-size: 1.6rem;
  font-weight: 900;
  margin-top: 2px;
`;
