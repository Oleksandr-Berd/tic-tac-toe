import { ReactComponent as XIcon } from "../../assets/icon-x.svg"
import { ReactComponent as OIcon } from "../../assets/icon-o.svg"


const Icons: React.FC = (): JSX.Element => {
    return (<div>
        <XIcon width={32} />
        <OIcon width={32} />
    </div> );
}
 
export default Icons;