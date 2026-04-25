// src/components/Button/Button.styled.js

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ columnBased }) => (columnBased ? "column" : "row")};
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colorX},
    ${({ theme }) => theme.colorO}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.textMuted};
  font-size: 1rem;
  margin-bottom: 24px;
`;

export const ButtonStyle = styled.button`
  padding: 14px 32px;
  border: 2px solid ${({ theme }) => theme.colorX};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.surfaceHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(233, 69, 96, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const SmallButton = styled(ButtonStyle)`
  padding: 10px 20px;
  font-size: 0.85rem;
  border-color: ${({ $variant, theme }) =>
    $variant === "secondary" ? theme.colorO : theme.colorX};
`;
