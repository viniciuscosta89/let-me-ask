import styled from 'styled-components';

export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (min-width: 720px) {
    flex-direction: row;
    height: 100vh;
  }

  .aside {
    flex: 2;

    background-color: var(--primary);
    color: var(--white);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 4rem 1rem;

    @media (min-width: 1280px) {
      padding: 8rem 5rem;
    }

    @media (min-width: 720px) and (max-width: 1279px) {
      padding: 6rem 3rem;
    }

    img {
      margin-bottom: 0.5rem;
      max-width: 50%;

      @media (min-width: 720px) {
        max-width: 320px;
      }
    }

    strong {
      font: 700 2rem 'Poppins', sans-serif;
      line-height: 1.2;
      margin-bottom: 1rem;

      @media (min-width: 1280px) {
        font-size: 2.25rem;
      }
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
      color: #f8f8f8;
      opacity: 0.7;
    }
  }

  .main {
    flex: 3;

    padding: 2rem 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 720px) {
      padding: 0 2rem;
    }

    &__content {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      text-align: center;

      > img {
        align-self: center;
        margin-bottom: 4.5rem;
      }

      small {
        color: #737380;
        font-size: 14px;
        margin-top: 1rem;

        > a {
          color: var(--pink);
          text-decoration: underline;
        }
      }
    }

    &-form {
      &__input {
        background-color: var(--white);
        border: 1px solid var(--separator-color);
        border-radius: 8px;
        margin-bottom: 1rem;
        padding: 1rem 1rem;
        width: 100%;

        &::placeholder {
          color: var(--separator-color);
        }
      }
    }

    &__subtitle {
      font: bold 1.5rem 'Poppins', sans-serif;
      margin-bottom: 2rem;
    }
  }

  .separator {
    font-size: 14px;
    color: var(--separator-color);
    margin: 32px 0;
    display: flex;
    align-items: center;

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background-color: var(--separator-color);
      margin-left: 1rem;
    }

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background-color: var(--separator-color);
      margin-right: 1rem;
    }
  }
`
