import { fadeIn, merge, pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`${merge(pulse, fadeIn)}`;

export const Container = styled.li`
  list-style: none;
  width: 287px;
  height: 220px;
  background: #f8f8fa 0% 0% no-repeat padding-box;
  border-radius: 20px;
  padding-top: 20px;
  padding-right: 12px;
  padding-left: 12px;
  margin-left: 13px;
  margin-right: 13px;
  margin-bottom: 32px;
  cursor: pointer;
  animation: 0.5s ${pulseAnimation};

  :hover {
    background: transparent linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%) 0%
      0% no-repeat padding-box;
  }

  @media (max-width: 970px) {
    height: 220px;
    width: 200px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  width: 100%;
  height: 90px;
  padding-top: 10px;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }

  div img {
    width: 240px;
  }

  @media (max-width: 970px) {
    div img {
      width: 180px;
    }
  }

  @media (max-width: 500px) {
    div img {
      width: 160px;
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 8px;

  div h1 {
    font-size: 1.5em;
  }

  @media (max-width: 500px) {
    div h1 {
      font-size: 1.2em;
    }
  }
`;

export const DivCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const CarBrand = styled.h4`
  font-size: 1.2em;
  margin: 0;
`;

export const CarName = styled.h4`
  font-size: 1em;
  font-weight: 400;
  margin: 0;
`;

export const OptionsButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
`;

export const DivDolar = styled.div`
  display: flex;
  margin-right: 2px;
  margin-top: 2px;
`;

export const Dolar = styled.h4`
  font-size: 1em;
  display: inline;
  margin: 0;
`;

export const BookNow = styled.h4`
  font-size: 1em;
  color: #f8f8fa;
  padding-left: 20px;
  padding-top: 10px;

  @media (max-width: 500px) {
    font-size: 0.8em;
  }
`;
