import { } from 'styled-components';
import { defaultTheme } from './styles/components/Themes';

declare module 'styled-components' {
  type Theme = typeof defaultTheme;
  export interface DefaultTheme extends Theme {
    background: string,
    blue: string,
    blueDark: string,
    'gray-line': string,
    'number-divisor': string,
    primary: string,
    secondary: string,
    'text': string,
    'text-highlight': string,
    'title': string,
    'toggle-bg': string,
    'white': string,
  }
}
