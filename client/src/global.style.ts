import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    padding: 1.25rem 2.5rem;
    font-family: 'Open Sans Condensed';

    @media screen and (max-width: 800px) {
      padding: 0.7rem;
    }
  }

  & a {
    color: black;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
