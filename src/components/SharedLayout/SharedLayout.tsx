import * as SC from "./SharedLayoutStyled"

import { ComponentProps } from "../../utils/interfaces";

const SharedLayout: React.FC<ComponentProps> = ({ children }): JSX.Element => {
    return (<SC.SharedLayoutStyled>{children}</SC.SharedLayoutStyled>);
}

export default SharedLayout;