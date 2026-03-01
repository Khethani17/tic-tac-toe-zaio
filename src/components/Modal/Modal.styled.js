// src/components/Modal/Modal.styled.js

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
`;

export const ModalBox = styled.div`
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  min-width: 300px;
  max-width: 400px;
  animation: ${slideUp} 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

export const ModalTitle = styled.h2`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textMuted};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

export const WinnerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;

  svg {
    width: 50px;
    height: 50px;
  }

  span {
    font-size: 2rem;
    font-weight: 900;
    color: ${({ $color }) => $color};
  }
`;

export const DrawText = styled.div`
  font-size: 1.8rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colorDraw};
  margin-bottom: 24px;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;
