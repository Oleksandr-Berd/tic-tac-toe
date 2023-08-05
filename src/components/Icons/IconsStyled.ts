import styled from "styled-components";

export const IconsContainer = styled.div`
& > *:not(:last-child){
    margin-right: ${props =>props.theme.space[2]};
}
`