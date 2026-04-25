// src/components/GameCell/GameCell.styled.js

import styled, { keyframes, css } from "styled-components";

const popIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const winGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(233, 69, 96, 0.3); }
  100% { box-shadow: 0 0 25px rgba(233, 69, 96, 0.6); }
`;

export const CellStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.surface};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  transition: all 0.2s ease;
  padding: 18px;
  outline: none;

  &:hover {
    ${({ $disabled }) =>
      !$disabled &&
      css`
        background: ${({ theme }) => theme.surfaceHover};
        transform: scale(1.03);
      `}
  }

  &:active {
    ${({ $disabled }) =>
      !$disabled &&
      css`
        transform: scale(0.97);
      `}
  }

  .markedItem {
    width: 100%;
    height: 100%;
    animation: ${popIn} 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .outlineIcon {
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover .outlineIcon {
    opacity: 1;
  }

  ${({ $isWinning }) =>
    $isWinning &&
    css`
      background: rgba(233, 69, 96, 0.2);
      animation: ${winGlow} 0.8s ease-in-out infinite alternate;
    `}
`;
