import * as SC from "./IconsStyled"

import { ReactComponent as XIcon } from "../../assets/icon-x.svg"
import { ReactComponent as OIcon } from "../../assets/icon-o.svg"


const Icons: React.FC = (): JSX.Element => {
    return (<SC.IconsContainer>
        <XIcon width={32} fill={"#31C3BD" } />
        <OIcon width={32} fill={"#F2B137"} />
    </SC.IconsContainer> );
}
 
export default Icons;