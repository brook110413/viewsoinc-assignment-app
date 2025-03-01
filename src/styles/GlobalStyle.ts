import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  /* Set core body defaults */
  body {
    line-height: 1;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Remove list styles */
  ol, ul {
    list-style: none;
  }
  
  /* Remove quotes */
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  /* Reset tables */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* Box sizing rules */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  /* Remove default padding and margin */
  * {
    margin: 0;
    padding: 0;
  }
  
  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }
  
  /* Make images easier to work with */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  /* Inherit fonts for inputs and buttons */
  input, button, textarea, select {
    font: inherit;
  }
  
  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  
  /* Reset anchor styling */
  a {
    text-decoration: none;
    color: inherit;
  }
  
  /* Reset button styling */
  button {
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    color: inherit;
  }
  
  /* Additional modern resets */
  [hidden] {
    display: none !important;
  }
  
  /* Prevent text size adjustment after orientation changes in iOS */
  html {
    -webkit-text-size-adjust: 100%;
  }
  
  /* Remove the gap between audio, canvas, iframes, images, videos */
  audio, canvas, iframe, img, svg, video {
    vertical-align: middle;
  }
  
  /* Remove default fieldset styles */
  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }
  
  /* Allow only vertical resizing of textareas */
  textarea {
    resize: vertical;
  }
`;
