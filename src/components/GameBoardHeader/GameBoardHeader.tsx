import { useMediaQuery } from 'usehooks-ts';

import * as SC from "./GameBoardHeaderStyled"

import { ReactComponent as RestartSvg } from "../../assets/icon-restart.svg"
import {ReactComponent as XSvg} from "../../assets/icon-x.svg"
import { ReactComponent as OSvg } from "../../assets/icon-o.svg"

import Icons from '../Icons/Icons';

interface IProps {
    currentPlayer: string,
    handleRestart: ()=>void,
}

const GameBoardHeader: React.FC<IProps> = ({ currentPlayer, handleRestart }): JSX.Element => {
    

const isMobile = useMediaQuery("(max-width:767px)")

    return (<SC.BoardHeader>
        <Icons />
        <SC.TableStyle>
            {currentPlayer === "x" ?
                <XSvg width={isMobile ? 16 : 20} /> :
                <OSvg width={isMobile ? 16 : 20} />
                }
            
            <span>turn</span></SC.TableStyle>
        <SC.RestartButton onClick={handleRestart}><RestartSvg /></SC.RestartButton>
    </SC.BoardHeader>);
}

export default GameBoardHeader;