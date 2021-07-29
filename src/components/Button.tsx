import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from '../styles/components/Button'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: string,
  isBlock?: string,
}

export function Button(props: ButtonProps) {
  return (
    <ButtonStyled
      className="btn"
      {...props}
    >

    </ButtonStyled>
  )
}
