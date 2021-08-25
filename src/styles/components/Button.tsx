import styled, { css } from 'styled-components';

const variantStyles = (variant = 'primary') =>
({
  primary: css`
    background-color: var(--primary);
    box-shadow: 0px 3px 1px -2px rgb(131 90 253 / 40%), 0px 2px 2px 0px rgb(131 90 253 / 27%), 0px 1px 5px 0px rgb(131 90 253 / 24%);
    color: var(--white);

    &:hover {
      background-color: var(--primary-hover);
      box-shadow: 0px 2px 4px -1px rgb(131 90 253 / 40%), 0px 4px 5px 0px rgb(131 90 253 / 28%), 0px 1px 10px 0px rgb(131 90 253 / 24%);
    }
  `,
  secondary: css`
    background-color: var(--secondary);
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 40%), 0px 2px 2px 0px rgb(0 0 0 / 27%), 0px 1px 5px 0px rgb(0 0 0 / 24%);
    color: var(--white);

    &:hover {
      background-color: var(--secondary-hover);
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 40%), 0px 4px 5px 0px rgb(0 0 0 / 28%), 0px 1px 10px 0px rgb(0 0 0 / 24%);
    }
`,
  google: css`
    background-color: #EA4335;
    color: var(--white);

    &:hover {
      background-color: #d43b2f;
    }
  `,
  outline: css`
    border: 1px solid var(--primary);
    color: var(--primary);
  `
}[variant]);

const blockStyle = (isBlock = 'yes') =>
({
  yes: css`
    display: flex;
    width: 100%;
  `,
  no: css`
    display: inline-flex;
    width: auto;
  `
}[isBlock]);

type ButtonProps = {
  variant: string,
  isBlock?: string
}

export const ButtonStyled = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  padding: 1rem 2rem;
  transition: all .2s ease-in-out;
  white-space: nowrap;

  ${({ variant }) => variantStyles(variant)};
  ${({ isBlock }) => blockStyle(isBlock)};

  > img {
    margin-right: 0.5rem;
  }

`
