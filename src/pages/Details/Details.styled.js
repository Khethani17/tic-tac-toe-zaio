// src/pages/Details/Details.styled.js

import styled from "styled-components";

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

export const InfoCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 30px;
  text-align: center;
  width: 100%;
`;

export const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text};
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.6;
  margin-bottom: 12px;
`;
