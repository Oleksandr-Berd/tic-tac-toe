import styled from "styled-components"
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

interface IStylesProps {
    $winner:string,
}

export const CommonContainer = styled(Modal)`
  text-align: center;

  background-color: rgba(10, 10, 10, 0.5);
`;

export const HeaderStyled = styled(Modal.Header)`
  padding-top: ${(props) => props.theme.space[10]};
  padding-bottom: ${(props) => props.theme.space[4]};

  text-transform: uppercase;
  font-size: ${(props) => props.theme.size.S};
  font-family: ${(props) => props.theme.fontFamily.base};
  letter-spacing: -0.88px;

  justify-content: center;
  &&& {
    background-color: ${(props) => props.theme.color.secondaryBG};
    border: none;
  }

  
`;

export const TitleStyled = styled(Modal.Title)`
  &&& {
    background-color: ${(props) => props.theme.color.secondaryBG};
  }
`;

export const BodyStyled = styled(Modal.Body)`
  padding-top: 0;
  padding-bottom: ${(props) => props.theme.space[6]};

  text-transform: uppercase;
  font-family: ${(props) => props.theme.fontFamily.base};
  font-size: ${(props) => props.theme.size.XXN};
  letter-spacing: 1.5px;

  &&& {
    background-color: ${(props) => props.theme.color.secondaryBG};
  }
`;

export const ButtonContainer = styled.div`
padding-bottom: ${props => props.theme.space[11]};

  background-color: ${(props) => props.theme.color.secondaryBG};
`;

export const QuitButton = styled(Button)`
  margin-right: ${(props) => props.theme.space[4]};

  padding-bottom: ${(props) => props.theme.space[4]};
  padding-top: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};
  padding-right: ${(props) => props.theme.space[4]};

  background-color: #979797;

  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;

  & > a {
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme.color.secondaryBG};
    font-size: ${(props) => props.theme.size.N};
    font-family: ${(props) => props.theme.fontFamily.base};
    font-weight: ${(props) => props.theme.weight.bold};
  }
`;

export const NextButton = styled(Button)`
  padding-bottom: ${(props) => props.theme.space[4]};
  padding-top: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};
  padding-right: ${(props) => props.theme.space[4]};

  background-color: ${(props) => props.theme.color.o};

  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;

  & > a {
    text-transform: uppercase;
    text-decoration: none;

    color: ${(props) => props.theme.color.secondaryBG};
    font-size: ${(props) => props.theme.size.N};
    font-family: ${(props) => props.theme.fontFamily.base};
    font-weight: ${(props) => props.theme.weight.bold};
  }
`;

export const WinnerText = styled.h2<IStylesProps>`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

& > span{
    margin-left: ${props => props.theme.space[2]};
    
    color: ${props => props.$winner === "x" ? props.theme.color.x : props.theme.color.o};
}
`