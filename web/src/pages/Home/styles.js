import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Menu = styled.div`
  .logo-home {
    text-align: center;
    margin-bottom: 3.2rem;

    h2 {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 5rem;
      margin-top: 0.8rem;

      color: #9c98a6;
    }
  }
`;

export const ButtonMenu = styled.div`
  .button-home {
    display: flex;
    flex-direction: center;
    justify-content: center;
    margin: 3.2rem 0;

    a {
      width: 15rem;
      height: 4rem;
      border-radius: 0.8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      font-size: 1.2rem;
      background-color: #1c86ee;
      color: #ffffff;
      transition: background 0.3s;

      svg {
        margin-right: 1rem;
      }
      &:hover {
        background: ${darken(0.03, '#1874CD')};
      }
    }
    a:first-child {
      margin-right: 1.6rem;
    }
  }
`;
