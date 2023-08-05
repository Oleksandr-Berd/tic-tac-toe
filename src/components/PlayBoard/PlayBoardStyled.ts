import styled from "styled-components";

interface IProps{
  clicked?: boolean,
  data?:string,
}


export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: ${props => props.theme.space[5]};

  margin-bottom: ${props => props.theme.space[5]};

  & > li {
    width: 96px;
    height: 96px;

background-color: ${props=> props.theme.color.secondaryBG};

    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;


export const BoardElement = styled.div<IProps>`

& > svg{
  opacity: ${props => !props.clicked ? "1" : "0"};
}
`


export const Item = styled.li<IProps>`
display: flex;
align-items: center;
justify-content: center;
`;
