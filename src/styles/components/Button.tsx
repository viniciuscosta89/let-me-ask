import styled, { css } from 'styled-components';

const variantStyles = (variant = 'primary') =>
({
  primary: css`
    background: var(--primary);
    color: var(--white);
  `,
  secondary: css`
    background: var(--secondary);
    color: var(--white);
`,
  google: css`
    background-color: #ea4335;
    color: var(--white);
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
  justify-content: center;
  align-items: center;
  font-weight: 500;
  padding: 1rem 2rem;
  transition: all .2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }

  ${({ variant }) => variantStyles(variant)};
  ${({ isBlock }) => blockStyle(isBlock)};

  > img {
    margin-right: 0.5rem;
  }

`
