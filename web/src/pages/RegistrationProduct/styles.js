import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 0.8rem;
  }

  .header-main {
    background: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border: 0.1rem solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin: -3rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    

  input,
  select {
    width: 100%;
    height: 3.6rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  .form-input {
    border: 0;
    padding: 0 2.4rem;
    margin-top: 0.1rem;

    

    .button-list{
      width: 2.5rem;
      height: 2.5rem;
      padding: 0.3rem;
      
      border-radius: 0.2rem;
      background: var(--color-primary-dark);
 ;
      text-decoration: none;

      display: flex;
      flex-direction: center;

      border: 0;
      margin-right: 1rem;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        background: ${darken(0.03, '#6842c2')};
      }
  }

    button {
      background: none;
      border: 0;
      /* margin: 1rem; */
      color: var(--color-primary);
      font: 700 1.6rem Archivo;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.03, '#6842c2')};
      }
    }

  }

  .header-title {
    label {
      font: 700 1.4rem Archivo;
      color: var(--color-text-title);
      margin-bottom: 1.4rem;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
    }

    textarea {
      width: 100%;
      min-height: 8rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      background: var(--color-input-background);
      border: 1px solid var(--color-line-in-white);
      outline: 0;
      resize: vertical;
      padding: 1.2rem 1.6rem;
      font: 1.6rem Archivo;
    }
    p {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: var(--color-text-complement);
    }

    span {
      color: #ff0000;
      margin: 0 0 0 20px;
      font-weight: bold;
    }

    main {
      margin: 3.2rem auto;
      width: 90%;
    }

    footer {
      padding: 2rem ;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        margin-right: 1rem;
      }
    }
  }
  
  

  @media (min-width: 1100px) {
    #container-input {
      max-width: 1100px;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 210px 550px 1fr;
      grid-template-areas:
        'name name name'
        'campo2  campo4 campo3'
        'campo5 campo5 campo5'
        'button button button';
    }

    .name-campo {
      grid-area: name;
      
    }

    .campo2 {
      grid-area: campo2;
      margin-right: 1rem;
    }

    .campo3 {
      grid-area: campo3;

      ul {
        display: flex;
        flex-direction: column;
      }
    }

    .campo4 {
      grid-area: campo4;
      margin-right: 1rem;
    }

    .campo5 {
      grid-area: campo5;
    }
    .buttons-container {
      grid-area: button;
    }
  }


`;
