import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';
const Header = () => (
  <Container>
    <img src={logo} alt='Coinvest Capital' />
    <ul>
      <li>
        <a href='/'>EMPRESA</a>
      </li>
      <li>
        <a href='/'>COMO FUNCIONA</a>
      </li>
      <li>
        <a href='/'>SERVIÇOS</a>
      </li>
      <li>
        <a href='/'>F.A.Q</a>
      </li>
      <li>
        <a href='/'>COTAÇÃO</a>
      </li>
      <li>
        <a href='/'>FALE CONOSCO</a>
      </li>
    </ul>
  </Container>
);

export default Header;
