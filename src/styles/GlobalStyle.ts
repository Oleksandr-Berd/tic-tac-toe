import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`



body{
margin: 0;
background-color: ${props => props.theme.color.bg};
}

h1, h2, h3, h4 , h5 ,h6{
  margin: 0;
}

span, p, a, address, label, input{
  margin: 0;

}

ul, nav{
  margin: 0;
  padding: 0;
  list-style: none;
}

img{
    display: block;
}
`;
