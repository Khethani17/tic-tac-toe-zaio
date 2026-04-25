// src/components/GameModeSelector/GameModeSelector.styled.js

import styled, { css } from "styled-components";

export const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SelectorLabel = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.textMuted};
`;

export const ModeButton = styled.button`
  padding: 8px 20px;
  border: 2px solid ${({ theme }) => theme.textMuted};
  border-radius: 10px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${({ theme }) => theme.primary || "#e94560"};
      border-color: ${({ theme }) => theme.primary || "#e94560"};
      color: #fff;
    `}
`;

export const DifficultyWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const DifficultyButton = styled.button`
  padding: 6px 16px;
  border: 2px solid ${({ theme }) => theme.textMuted};
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${({ theme }) => theme.secondary || "#00d2ff"};
      border-color: ${({ theme }) => theme.secondary || "#00d2ff"};
      color: #fff;
    `}
`;
