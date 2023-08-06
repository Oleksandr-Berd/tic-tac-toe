import styled from "styled-components"
import Modal from 'react-bootstrap/Modal';

export const CommonContainer = styled(Modal)`
  text-align: center;

  background-color: rgba(10, 10, 10, 0.5);
`;

export const HeaderStyled = styled(Modal.Header)`
  justify-content: center;
  &&& {
    background-color: ${(props) => props.theme.color.secondaryBG};
  }
`;

export const TitleStyled = styled(Modal.Title)`
  &&& {
    background-color: ${(props) => props.theme.color.secondaryBG};
  }
`;

export const BodyStyled = styled(Modal.Body)`
  &&& {
    background-color: ${(props) => props.theme.color.secondaryBG};
  }
`;