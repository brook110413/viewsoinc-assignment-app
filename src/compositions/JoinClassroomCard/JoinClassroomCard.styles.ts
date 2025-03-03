import { media } from '@/styles/breakpoints';
import { styled } from 'styled-components';

export const StyledBackToClassList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  gap: 2px;

  ${media.tablet} {
    gap: 10px;
  }
`;

export const StyledClassTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  margin-bottom: 10px;

  ${media.tablet} {
    font-size: 24px;
  }
`;

export const StyledClassID = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
  font-size: 14px;
`;

export const StyledQRCode = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledQRImage = styled.img`
  max-width: 450px;
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
`;

export const StyledVersion = styled.div`
  font-size: 12px;
  margin-top: auto;
  text-align: center;
  width: 100%;
`;
