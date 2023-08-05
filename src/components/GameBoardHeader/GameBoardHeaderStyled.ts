import styled from "styled-components";

export const BoardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 64px;
  
`;

export const RestartButton = styled.button`
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[3]};

  background-color: #979797;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    border-radius: 5px;
`;

export const TableStyle = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-left: 15px;
  padding-right: 15px;
  padding-top: 9px;
  padding-bottom: 13px;

  text-transform: uppercase;
  background-color: ${(props) => props.theme.color.secondaryBG};
  font-weight: ${(props) => props.theme.weight.bold};

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  border-radius: 5px;

  & > svg {
    display: inline-block;
    height: auto;
    margin-right: ${(props) => props.theme.space[2]};

    fill: ${props => props.theme.color.text};
  }
`;