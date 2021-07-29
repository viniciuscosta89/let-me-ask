import styled from 'styled-components';

export const Auth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  .aside {
    flex: 2;

    background-color: var(--primary);
    color: var(--white);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8rem 5rem;

    img {
      margin-bottom: 0.5rem;
      max-width: 320px;
    }

    strong {
      font: 700 2.25rem 'Poppins', sans-serif;
      line-height: 2.75rem;
      margin-bottom: 1rem;
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

    padding: 0 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

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
          color: #E559F9;
          text-decoration: underline;
        }
      }
    }

    &-form {
      &__input {
        background-color: var(--white);
        border: 1px solid #a8a8b3;
        border-radius: 8px;
        margin-bottom: 1rem;
        padding: 1rem 1rem;
        width: 100%;
      }
    }

    &__subtitle {
      font: bold 1.5rem 'Poppins', sans-serif;
      margin-bottom: 2rem;
    }
  }

  .separator {
    font-size: 14px;
    color: #a8a8b3;
    margin: 32px 0;
    display: flex;
    align-items: center;

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background-color: #a8a8b3;
      margin-left: 1rem;
    }

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background-color: #a8a8b3;
      margin-right: 1rem;
    }
  }
`
