import React from 'react';

import {
  Container,
  LineToTitle,
  Apresentation,
  Title,
  SubTitle,
  SectionPeoples,
  SectionUsina,
  SectionUp,
  SectionMaquina,
  SectionCard
} from './styles';

import imgTrio from '../../assets/3.jpg';
import imgUsina from '../../assets/4.jpg';
import imgAgricola from '../../assets/agricola.png';
import imgIndustrial from '../../assets/industrial.png';
import imgComercial from '../../assets/comercial.png';
import imgServiço from '../../assets/serviço.png';

export default function Home() {
  return (
    <>
      <Container>
        <Apresentation>
          <Title>Coinvest</Title>
          <LineToTitle />
          <SubTitle>
            Comece investindo no fôlego <br />
            financeiro do seu negócio.
          </SubTitle>
        </Apresentation>
      </Container>
      <SectionPeoples>
        <div>
          <h1>
            Solução é a chave do <br />
            nosso negócio.
          </h1>
          <hr />

          <h3>Somos um fundo de investimento em direitos créditórios</h3>
        </div>
        <img src={imgTrio} alt='' />
      </SectionPeoples>

      <SectionUsina>
        <div>
          <img src={imgUsina} alt='' />
          <span />
        </div>

        <section>
          <div>
            <h1>Não OFERECEMOS crédito e sim OPORTUNIDADES de crescimento.</h1>
            <h3>
              E que tal você conseguir a chance de investir no seu próprio
              negócio?
            </h3>
            <button type='button'>Saiba como</button>
          </div>
        </section>
      </SectionUsina>
      <SectionUp>
        <div />
        <div />
        <section>
          <h1>Dê um UP no seu faturamento</h1>
          <hr />
          <h2>COM A COINVEST VOCÊ OTIMIZA O SEU NEGÓCIO SEM RISCOS.</h2>
        </section>
      </SectionUp>
      <SectionMaquina>
        <div />
        <div />
        <div />
        <section>
          <h1>
            Você focado apenas <br /> no que realmente importa:{' '}
          </h1>
          <h2>O seu negócio!</h2>
        </section>
      </SectionMaquina>

      <SectionCard>
        <h1>
          A solução financeira que o seu negócio precisava, você tem com a
          gente.
        </h1>

        <section>
          <div>
            <img src={imgAgricola} alt='' />
            <p>Agrícola</p>
          </div>
          <div>
            <img src={imgIndustrial} alt='' />
            <p>Indústrial</p>
          </div>
          <div>
            <img src={imgComercial} alt='' />
            <p>Comercial</p>
          </div>
          <div>
            <img src={imgServiço} alt='' />
            <p>Serviço</p>
          </div>
        </section>
      </SectionCard>
    </>
  );
}
