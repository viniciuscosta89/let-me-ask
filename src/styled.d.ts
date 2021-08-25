import { } from 'styled-components';
import { defaultTheme } from './styles/components/Themes';

declare module 'styled-components' {
  type Theme = typeof defaultTheme;
  export interface DefaultTheme extends Theme {
    background: string,
    primary: string,
    secondary: string,
    text: string,
    white: string,
  }
}
