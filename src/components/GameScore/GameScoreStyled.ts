import styled from "styled-components";

export const ScoreTable = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ScoreBlock = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 64px;

  padding-top: 13px;
  padding-bottom: 11px;
  padding-left: 30px;
  padding-right: 30px;

  font-size: ${(props) => props.theme.size.XS};
  color: ${(props) => props.theme.color.bg};
  letter-spacing: 0.75px;
  line-height: 1;

  border-radius: 10px;

  @media (min-width: 768px) {
    min-width: 140px;

    padding-left: 42px;
    padding-right: 42px;

    font-size: ${(props) => props.theme.size.S};
  }

  &:first-child {
    background-color: ${(props) => props.theme.color.x};
  }

  &:nth-child(2) {
    background-color: ${(props) => props.theme.color.text};
  }

  &:last-child {
    background-color: ${(props) => props.theme.color.o};
  }

  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[5]};
  }
`;

export const Text = styled.span``;
