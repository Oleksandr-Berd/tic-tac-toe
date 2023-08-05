import * as React from "react";
import { ReactComponent as XSvg } from "../../assets/icon-x.svg";
import { ReactComponent as OSvg } from "../../assets/icon-o.svg";

import * as SC from "./PlayBoardStyled"

interface IProps {
    moveClick: () => void;
    currentPlayer: string;
}

const PlayBoardItem: React.FC<IProps> = ({ moveClick, currentPlayer }): JSX.Element => {
    const [isClicked, setIsClicked] = React.useState<boolean>(false)
    const [isMoved , setIsMoved] = React.useState("")

    const handleClick = (evt: any) => {
        
        
        setIsMoved(currentPlayer)
        moveClick()
    setIsClicked(!isClicked)
}

    return (
        <SC.Item onClick={handleClick}> {/* Corrected the prop name */}
            {isClicked && isMoved === "x" ? <XSvg fill="#31C3BD" width={40} /> : isClicked && isMoved === "o" ? <OSvg fill="#F2B137" width={40}/> : null}
        </SC.Item>
    );
};

export default PlayBoardItem;
