import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Montserrat', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  body::-webkit-scrollbar{
    width: 5px;
  }

  body::-webkit-scrollbar-thumb{
    background-color: #f6d5b2;
  }

  body::-webkit-scrollbar-track{
    background-color: #074f83;
  }

  ul {
    list-style: none;
  }
`;
