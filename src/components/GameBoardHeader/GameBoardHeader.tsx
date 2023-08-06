import * as SC from "./GameBoardHeaderStyled"

import { ReactComponent as RestartSvg } from "../../assets/icon-restart.svg"
import {ReactComponent as XSvg} from "../../assets/icon-x.svg"
import { ReactComponent as OSvg } from "../../assets/icon-o.svg"

import Icons from '../Icons/Icons';

interface IProps {
    currentPlayer: string
}

const GameBoardHeader: React.FC<IProps> = ({ currentPlayer }): JSX.Element => {
    

    return (<SC.BoardHeader>
        <Icons />
        <SC.TableStyle>
            {currentPlayer === "x" ?
                <XSvg width={16} /> :
                <OSvg width={16} />
                }
            
            <span>turn</span></SC.TableStyle>
        <SC.RestartButton><RestartSvg /></SC.RestartButton>
    </SC.BoardHeader>);
}

export default GameBoardHeader;