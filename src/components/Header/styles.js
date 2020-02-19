import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  height: 100px;
  display: flex;
  width: 100%;
  position: absolute;
  z-index: 999;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;

  img {
    height: 80%;
    margin-left: 40px;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      border-left: 1px solid #fff;
      position: relative;

      &:first-child {
        border-left: none;
      }
      a {
        font-size: 14px;
        font-weight: 300;
        text-decoration: none;
        color: #fff;
        height: 100%;
        width: 100%;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        flex-direction: column;

        &:hover {
          color: #f6d5b2;
        }
      }
    }
  }

  @media (max-width: 992px) {
    height: 60px;

    ul {
      display: none;
    }
  }
`;
