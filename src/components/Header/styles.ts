import styled from 'styled-components';

export const HeaderDiv = styled.header`
  width: 100%;
  height: 14vh;
  background-color: white;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 10px 30px #0000001a;

  #dropdown-menu-align-end {
    display: none;
    color: white;
    background-color: #7b89f4;
    border: none;
    box-shadow: 2px 2px 2px gray;
  }
  #dropdown-menu-align-end:hover {
    background-color: #7b89f480;
  }

  @media (max-width: 960px) {
    #dropdown-menu-align-end {
      display: inline;
    }
  }
`;

export const ButtonTitle = styled.button`
  background: none;
  border: none;
  padding-left: 5px;

  @media (max-width: 960px) {
    margin-left: -20px;
  }
`;

export const Title = styled.h2`
  font: normal normal 600 24px/32px Segoe UI;
  font-weight: 600;
  color: #313136;
  display: inline;
`;

export const Title2 = styled.h2`
  display: inline;
  font-weight: 400;
  font-size: 1.1em;
`;

export const SearchDiv = styled.div`
  background: #f3f1fc 0% 0% no-repeat padding-box;
  border-radius: 18px;
  width: 540px;
  height: 36px;
  opacity: 0.59;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6px;
  padding-right: 6px;
  margin-left: 5%;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: none;
`;

export const Icon = styled.img`
  padding-right: 5px;
`;

export const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: white;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 0px 3px 1px #dadada;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignDiv = styled.div`
  margin-right: -100px;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const Sign = styled.button<{ border?: boolean }>`
  font: normal normal bold 16px/21px Segoe UI;
  background: none;
  color: #7b89f4;
  border-radius: 13px;
  width: 84px;
  height: 36px;
  border: ${(props) => (props.border ? '2px solid #7b89f4' : 'none')};
  margin-right: 4px;
  margin-left: 4px;
`;
