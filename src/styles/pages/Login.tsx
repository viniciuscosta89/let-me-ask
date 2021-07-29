import styled from "styled-components";

export const LoginWrapper = styled.div`
  background: url('/img/login-bg.png') left center/auto no-repeat;
  background-color: var(--blue);
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  .login {
    &__container {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      width: 100%;
      max-width: 992px;
    }

    &__logo {
      display: block;
      margin-bottom: 6rem;
      max-width: 100%;
    }
  }

  .github {
    color: var(--white);

    &__title {
      font-size: 2.25rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    &__msg {
      display: flex;
      align-items: center;

      background-color: transparent;
      border: none;
      color: var(--white);
      font-size: 1.25rem;
      line-height: 1.5;
      margin-bottom: 2.5rem;
      opacity: .5;
      transition: all .3s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }

    &__logo {
      margin-right: 1.5rem;
    }

    &__container {
      display: flex;
    }

    &__input {
      background: linear-gradient(90deg, var(--blue-dark) 0%, rgba(0, 33, 113, 0.1) 100%);
      border: none;
      border-radius: 5px 0px 0px 5px;
      color: var(--white);
      font-size: 1.25rem;
      padding: 1.5rem 2rem;

      &::placeholder {
        color: var(--white);
        opacity: .5;
      }
    }

    &__btn {
      background-color: var(--blue-dark);
      border: none;
      border-radius: 0 5px 5px 0;
      color: var(--white);
      padding: 1.5rem;
    }
  }

`
