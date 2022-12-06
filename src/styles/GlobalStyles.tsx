import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  //Font import
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');

  *,*::before,*::after{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  :root{
    font-family: 'Comfortaa', cursive;
  }
`
