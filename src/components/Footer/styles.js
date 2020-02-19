import styled from 'styled-components';

export const Container = styled.div`
  padding: 90px;

  background: #fff;
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin: 20px;
    width: 30%;
    h1 {
      color: #01132e;
      font-weight: 400;
    }

    h2 {
      font-size: 16px;
      color: #011031;
      font-weight: 300;
    }
    hr {
      border: 1px solid #c0905e;
      margin: 20px 0px;
      width: 60%;
    }

    section {
      width: 60%;

      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60px;
        margin: 0px 20px;
      }
      button {
        background: transparent;
        border: 0;
        color: #c0905e;
        font-weight: 400;
        font-size: 30px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
          background: #c0905e;
          color: #fff;
        }
      }
    }
  }

  div:nth-child(2) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    .sociais {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: flex-end;
      img {
        margin: 10px 5px;
      }
    }
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    div {
      margin: 20px;
      width: 100%;

      h1 {
        font-size: 20px;
      }

      h2 {
        font-size: 12px;
        color: #011031;
        font-weight: 300;
      }

      section {
        width: 100%;
        img {
          width: 40px;
        }
      }
    }

    div:nth-child(2) {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      .sociais {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        img {
          margin: 10px 5px;
        }
      }
    }
  }
`;
