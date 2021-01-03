import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #fefefe;
    font-family: 'Roboto', sans-serif;
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
}

h1 {
    font-size: 64px;
    font-weight: 700;
}

h2 {
    font-size: 32px;
    font-weight: 500;
}

main {
    padding: 0 8rem;
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 8rem;
    display: block;
    min-height: 80vh;
    overflow: hidden;
}

button {
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        opacity: 0.7;
      }
}

a {
    transition: all 0.3s ease;
    &:hover {
        opacity: 0.7;
      }
}

p {
    white-space: pre-line;
    font-size: 1rem;
    line-height: 30px;
}

hr {
    color: #2d2d2d;
}

.progress {
    position: absolute;
    top: 50%;
    left: 47%;
    color: #2d2d2d !important;
}

@media screen and (max-width: 1200px) {
    main {
        width: 100%;
        padding: 0 2rem;
        min-height: 100%;
    }
}

@media screen and (max-width: 800px) {
    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 24px;
    }
}
`;

export default GlobalStyles;
