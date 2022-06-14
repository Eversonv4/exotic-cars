import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #313136;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(150deg, #e6d3f1 29%, #a1a7f4 77%);
    border-radius: 0px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(150deg, #e6d3f1 6%, #a1a7f4 85%);
  }
  ::-webkit-scrollbar-track {
    border-radius: 0px;
    box-shadow: inset 0px 0px 0px 0px #f0f0f0;
  }
}



button {
  cursor: pointer;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
