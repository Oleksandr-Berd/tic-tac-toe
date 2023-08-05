import styled from "styled-components";

interface IProps {
  $active: string;
}

export const CommonContainer = styled.div`
  padding-top: 119px;
  padding-bottom: 119px;

  text-align: center;
`;

export const FormStyled = styled.form`
 
`;

export const FormContainer = styled.div`
  margin-top: ${(props) => props.theme.space[10]};
  margin-bottom: ${(props) => props.theme.space[8]};

  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[8]};
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};

  background-color: ${(props) => props.theme.color.secondaryBG};

  border-radius: ${(props) => props.theme.radius[3]};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-right: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[2]};

  margin-bottom: ${(props) => props.theme.space[4]};

  background-color: ${(props) => props.theme.color.bg};
  border-radius: 10px;
`;

export const Button = styled.input`
  min-width: ${(props) => props.theme.percentage[6]};

  background-color: ${(props) =>
    props.checked ? props.theme.color.text : props.theme.color.BG};
`;

export const FormFooterText = styled.h4`
  opacity: 0.5;
`;

export const FormHeaderTitle = styled.h3`
  margin-bottom: ${(props) => props.theme.space[6]};

  text-transform: uppercase;

  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.N};
  letter-spacing: 1px;
`;

export const LabelStyled = styled.label<IProps>`
  display: block;
  min-width: ${(props) => props.theme.percentage[6]};

  padding-top: ${(props) => props.theme.space[5]};
  padding-bottom: ${(props) => props.theme.space[5]};


  background-color: ${(props) =>
    props.$active === "true" ? props.theme.color.text : props.theme.color.bg};

  border-radius: 10px;

  & > svg {
    fill: ${(props) =>
      props.$active === "true" ? props.theme.color.bg : props.theme.color.text};
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const SubmitButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    text-transform: uppercase;
  }

  & > button {
    padding-top: 14px;
    padding-bottom: 18px;

    font-weight: ${(props) => props.theme.weight.bold};
    font-size: ${(props) => props.theme.size.N};
    font-family: ${(props) => props.theme.fontFamily.base};

    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  & > button:first-child {
    margin-bottom: ${(props) => props.theme.space[4]};

    background-color: ${(props) => props.theme.color.secondary};
  }

  & > button:last-child {
    background-color: ${(props) => props.theme.color.primary};
  }
`;
