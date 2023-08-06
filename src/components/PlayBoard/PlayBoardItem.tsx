import * as React from "react";
import { ReactComponent as XSvg } from "../../assets/icon-x.svg";
import { ReactComponent as OSvg } from "../../assets/icon-o.svg";

import * as SC from "./PlayBoardStyled"

interface IProps {
    moveClick: (index:number) => void;
    currentPlayer: string;
    index:number,
}

const PlayBoardItem: React.FC<IProps> = ({ moveClick, currentPlayer, index }): JSX.Element => {
    const [isClicked, setIsClicked] = React.useState<boolean>(false)
    const [isMoved, setIsMoved] = React.useState("")



    const handleClick = () => {
        setIsMoved(currentPlayer)
        moveClick(index)
       
        setIsClicked(!isClicked)
    }       

    
    return (
        <SC.Item onClick={handleClick}>
            {isClicked && isMoved === "x" ? <XSvg fill="#31C3BD" width={40} /> : isClicked && isMoved === "o" ? <OSvg fill="#F2B137" width={40}/> : null}
        </SC.Item>
    );
};

export default PlayBoardItem;
