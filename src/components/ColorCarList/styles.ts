import styled, { keyframes } from 'styled-components';
import { pulse, merge, fadeIn } from 'react-animations';

const pulseAnimation = keyframes`${merge(pulse, fadeIn)}`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ArrowButton = styled.button`
  margin-left: 40px;
  margin-right: 40px;
  background-color: #313136;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;

  :hover {
    background-color: #313136af;
  }

  @media (max-width: 800px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const MainSquare = styled.div`
  cursor: pointer;
  background: transparent linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%) 0% 0%
    no-repeat padding-box;
  width: 200px;
  height: 170px;
  border-radius: 10px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  animation: 0.5s ${pulseAnimation};

  img {
    width: 260px;
  }

  @media (max-width: 800px) {
    width: 100px;
    height: 70px;
    margin-left: 20px;
    margin-right: 20px;

    img {
      width: 120px;
    }
  }
`;

export const Square = styled.div`
  cursor: pointer;
  background-color: #d4d4d4;
  height: 130px;
  width: 160px;
  border-radius: 10px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  align-items: center;

  img {
    width: 200px;
  }

  @media (max-width: 930px) {
    display: none;
  }
`;
