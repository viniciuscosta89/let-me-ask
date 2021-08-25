import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --background: ${({ theme }) => theme.background};
    --blue-twitter: #2AA9E0;
    --green: #4cd62b;
    --pink: #e559f9;
    --separator-color: #a8a8b3;
    --red: #e73f5d;
    --red-hover: #d73754;
    --text: ${({ theme }) => theme.text};
    --white: ${({ theme }) => theme.white};
    --border-radius: 4px;
    --border-radius-round: 50%;
    --primary: ${({ theme }) => theme.primary};
    --primary-hover: #6f4bd8;
    --secondary: ${({ theme }) => theme.secondary};
    --secondary-hover: #cecece;
    --transition: all 0.3s ease-in-out;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--background);
    color: var(--text);
    transition: all 0.3s ease-in-out;
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    display: inline-block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles
