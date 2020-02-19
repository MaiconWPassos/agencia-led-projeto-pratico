import styled, { keyframes } from 'styled-components';

import imgMulher from '../../assets/1.jpg';
import imgCity from '../../assets/2.jpg';
import imgCasal from '../../assets/5.jpg';
import imgCelular from '../../assets/6.jpg';
import imgMaquina from '../../assets/7.jpg';
import imgMaquinas from '../../assets/8.jpg';
import imgPlanta from '../../assets/10.jpg';
import imgCards from '../../assets/9.jpg';

export const Container = styled.div`
  position: relative;
  height: 100%;
  background-image: url(${imgMulher});
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &::before {
    content: '';
    background-image: linear-gradient(45deg, #074f83, rgba(0, 0, 0, 0.19));
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
  }

  @media (max-width: 992px) {
    height: 50%;
    background-position: center center;
  }
`;

export const Apresentation = styled.div`
  width: 50%;
  font-family: 'Montserrat', sans-serif;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 992px) {
    height: 90%;
  }
`;

const animateTitle = keyframes`
  from{
    transform: translateY(-200%);
    opacity: 0;
  }

  to{
    transform: translateY(0%);
    opacity: 1;

  }
`;
export const Title = styled.h1`
  font-weight: 500;
  width: 100%;
  text-align: right;
  font-size: 60px;
  color: #f6d5b2;
  opacity: 0;
  letter-spacing: 2px;
  transform: translateY(-200%);

  animation: ${animateTitle} 1s ease-out both;
  animation-delay: 1s;

  @media (max-width: 992px) {
    font-size: 30px;
  }
`;

const animateLine = keyframes`
  from{
    width: 0%;
  }

  to{
    width: 100%;
  }
`;
export const LineToTitle = styled.hr`
  border: 1px solid #fff;
  width: 0%;
  margin: 10px 0px;
  animation: ${animateLine} 1s ease-out both;
`;

const animateSubTitle = keyframes`
  from{
    transform: scale(0);
    opacity:0;
  }

  to{
    transform: scale(1);
    opacity:1;
  }
`;
export const SubTitle = styled.p`
  width: 100%;
  opacity: 0;
  text-align: right;
  font-size: 18px;

  color: #fff;
  font-weight: 400;
  transform: scale(0);
  animation: ${animateSubTitle} 1s ease-out both;
  animation-delay: 1s;

  @media (max-width: 992px) {
    font-size: 12px;
  }
`;

export const SectionPeoples = styled.div`
  height: 80%;
  background-color: #fff;
  background-image: url(${imgCity});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;

  div {
    width: 60%;
    height: 100%;
    padding: 10%;
    background-color: rgba(255, 255, 255, 0.3);

    h1 {
      color: #a47044;
      line-height: 50px;
      letter-spacing: 3px;
      font-size: 40px;
      font-weight: 400;
    }

    hr {
      border: 1px solid #a47044;
      width: 50%;
      margin: 20px 0px;
    }

    h3 {
      width: 60%;
      font-size: 26px;
      font-weight: 300;
      line-height: 40px;
    }
  }

  img {
    margin: auto 0px;
    width: 40%;
    height: 100%;
    padding: 3px;
  }

  @media (max-width: 992px) {
    height: 50%;

    div {
      width: 100%;
      height: 50%;

      h1 {
        font-size: 20px;
        line-height: 30px;
      }

      h3 {
        font-size: 14px;
        line-height: 24px;
      }
    }

    img {
      display: none;
    }
  }
`;

export const SectionUsina = styled.div`
  height: 100%;
  position: relative;

  div,
  section {
    width: 100%;
    height: 100%;
    display: flex;
  }

  div {
    img {
      width: 60%;
    }
    span {
      width: 40%;
      height: 100%;
      background-color: #062254;
    }
  }

  section {
    top: 0;
    left: 0;
    position: absolute;
    padding: 5% 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    div {
      max-width: 50%;
      height: 100%;
      background-color: rgba(1, 29, 58, 0.96);
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 10px 100px;

      h1 {
        width: 500px;
        font-size: 36px;
        text-align: right;
        font-weight: 500;
        color: #ffe0a9;
      }

      h3 {
        width: 500px;
        text-align: right;
        font-size: 22px;
        color: #fff;
        margin: 40px 0px;
        font-weight: 300;
      }

      button {
        border: 0;
        padding: 20px 20px;
        width: 200px;
        font-size: 18px;
        background-color: #074f83;
        color: #fff;
        font-weight: 500;
        font-family: 'Lato', sans-serif;
        margin-left: 300px;
        transition: 0.4s;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  @media (max-width: 992px) {
    height: 50%;

    div {
      img {
        width: 100%;
      }
      span {
        display: none;
      }
    }
    section {
      div {
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 10px 20px;
        max-width: 90%;

        h1 {
          width: 90%;
          font-size: 20px;
          text-align: right;
          font-weight: 500;
          color: #ffe0a9;
        }

        h3 {
          width: 90%;
          text-align: right;
          font-size: 14px;
          color: #fff;
          margin: 40px 0px;
          font-weight: 300;
        }

        button {
          background-color: #074f83;
          color: #fff;
          font-weight: 500;
          font-family: 'Lato', sans-serif;
          margin-left: calc(90% - 200px);
        }
      }
    }
  }
`;

export const SectionUp = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  position: relative;

  div {
    width: 58%;
    height: 100%;
    background-image: url(${imgCasal});
    background-repeat: no-repeat;
    background-size: cover;
  }

  div:nth-child(2) {
    background-image: url(${imgCelular});
    width: 42%;
    height: 100%;
    background-size: cover;
  }

  section {
    position: absolute;
    width: 40%;
    /* background-color: #f40; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    height: 60%;
    right: 100px;

    h1 {
      font-size: 60px;
      color: #074f83;
      text-align: right;
      font-weight: 300;
    }

    hr {
      width: 100%;
      border: 1px solid #bb853f;
      margin: 20px 0px 20px 20px;
    }

    h2 {
      color: #6d4713;
      font-size: 32px;
      text-align: right;
      font-weight: 300;
    }
  }

  @media (max-width: 1400px) {
    section {
      h1 {
        font-size: 50px;
      }
      h2 {
        width: 70%;
        font-size: 23px;
      }
    }
  }

  @media (max-width: 992px) {
    height: 50%;

    div:nth-child(1) {
      display: none;
    }

    div:nth-child(2) {
      width: 100%;
    }

    section {
      width: 90%;
      right: 10px;

      h1 {
        font-size: 30px;
      }

      h2 {
        font-size: 20px;
      }
    }
  }
`;

export const SectionMaquina = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 7fr;
  grid-template-rows: 1fr;
  position: relative;
  div {
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
  div:nth-child(1) {
    background-image: url(${imgMaquinas});
  }
  div:nth-child(2) {
    background-image: url(${imgPlanta});
  }
  div:nth-child(3) {
    background-image: url(${imgMaquina});
    background-size: 100% 100%;
  }

  section {
    position: absolute;
    height: 100%;
    width: 85%;
    background: rgba(7, 79, 135, 0.8);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 100px;

    h1 {
      width: 60%;
      font-size: 60px;
      color: #e8a36a;
      font-weight: 400;
    }

    h2 {
      color: #facca7;
      font-size: 80px;
      margin-top: 40px;
      font-weight: 300;
    }
  }

  @media (max-width: 1400px) {
    section {
      h1 {
        font-size: 40px;
      }
      h2 {
        font-size: 60px;
      }
    }
  }
  @media (max-width: 992px) {
    height: 50%;
    grid-template-columns: 1fr 0fr 0fr;

    div:nth-child(1) {
      background-size: cover;
    }

    section {
      width: 100%;
      padding: 100px 10px;
      h1 {
        font-size: 20px;
        width: 90%;
      }

      h2 {
        color: #fff;
        font-size: 30px;
        margin-top: 10px;
      }
    }
  }
`;

export const SectionCard = styled.div`
  height: 100%;
  background-image: url(${imgCards});
  background-size: 100% 100%, cover;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 20px;
    color: #fff;
    font-size: 60px;
    width: 70%;
    text-align: center;
  }

  section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    div {
      background-color: rgba(7, 25, 131, 0.4);
      padding: 30px;
      width: 300px;
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 2px solid transparent;
      cursor: pointer;
      transition: 0.4s;
      margin: 0px 20px;
      &:hover {
        border-color: #fff;
      }

      img {
        height: 30%;
      }

      p {
        margin-top: 20px;
        font-size: 22px;
        font-weight: bold;
        color: #ffe4cd;
      }
    }
  }

  @media (max-width: 1400px) {
    h1 {
      font-size: 40px;
    }

    section {
      h1 {
        font-size: 30px;
      }
      div {
        width: 250px;
        height: 300px;
      }
    }
  }

  @media (max-width: 992px) {
    height: auto;
    background-size: cover;
    h1 {
      font-size: 20px;
    }

    section {
      flex-wrap: wrap;
      div {
        background-color: rgba(7, 25, 131, 0.8);

        width: 100%;
        height: 300px;
        margin: 10px 20px;
      }
    }
  }
`;
