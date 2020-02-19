import React from 'react';

import { Container } from './styles';
import imgCrdc from '../../assets/CRDC.png';
import imgWBA from '../../assets/WBA.png';
import imgItau from '../../assets/Itau.png';
import imgFacebook from '../../assets/facebook.jpg';
import imgInstagram from '../../assets/instagram.jpg';

export default function Footer() {
  return (
    <Container>
      <div>
        <h1>EMPRESAS QUE CONFIAM NA COINVEST</h1>
        <hr />
        <section>
          <button type='button'>{`<`}</button>
          <img src={imgCrdc} alt='' />
          <img src={imgWBA} alt='' />
          <img src={imgItau} alt='' />
          <button type='button'>{`>`}</button>
        </section>
      </div>

      <div>
        <h2>R. EDUARDO CHAVES 168, SÃO PAULO / SP</h2>
        <h2>(11) 3228 0417/(11) 3228 0445</h2>
        <h2>CONTATO@COINVESTCAPITAL.COM.BR</h2>
        <div className='sociais'>
          <img src={imgFacebook} alt='' />
          <img src={imgInstagram} alt='' />
        </div>
      </div>
    </Container>
  );
}
