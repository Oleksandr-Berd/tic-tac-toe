import styled from "styled-components";

export const SharedLayoutStyled = styled.div`
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  text-align: center;

  @media (min-width: 768px) {
    padding-right: 154px;
    padding-left: 154px;
  }

  @media (min-width: 1440px) {
    padding-right: 490px;
    padding-left: 490px;
  }
`;

