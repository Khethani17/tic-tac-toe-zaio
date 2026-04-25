// src/components/Header/Header.styled.js

import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colorX},
    ${({ theme }) => theme.colorO}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const TurnDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: ${({ theme }) => theme.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.textMuted};
  text-transform: uppercase;
  letter-spacing: 1px;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ThemeButton = styled.button`
  background: ${({ theme }) => theme.surface};
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.surfaceHover};
    transform: rotate(20deg) scale(1.1);
  }
`;

export const AiThinkingText = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textMuted};
  margin-left: 8px;
  animation: pulse 1s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;