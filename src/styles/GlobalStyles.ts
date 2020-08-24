import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  font-family: 'Open Sans Condensed';
  padding: 1.5rem 4rem;
  box-sizing: border-box;

}

a { text-decoration: none; color: #000; outline: 0; }
ul { list-style: none; }

input:focus,
button:focus { outline: none; }
`;
