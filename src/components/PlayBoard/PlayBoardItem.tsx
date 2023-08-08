import { useEffect, useState } from "react";
import { ReactComponent as XSvg } from "../../assets/icon-x.svg";
import { ReactComponent as OSvg } from "../../assets/icon-o.svg";

import * as SC from "./PlayBoardStyled"

interface IProps {
    moveClick: (index:number) => void;
    currentPlayer: string;
    index: number,
    isClear: boolean,
}

const PlayBoardItem: React.FC<IProps> = ({ moveClick, currentPlayer, index, isClear }): JSX.Element => {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [isMoved, setIsMoved] = useState("")



    const handleClick = () => {
        setIsMoved(currentPlayer)
        moveClick(index)
       
        setIsClicked(!isClicked)
    }       

    useEffect(() => {
        if (isClear) {
            setIsClicked(false)
        }
     }, [isClear])  
    
    return (
        <SC.Item onClick={handleClick}>
            {isClicked && isMoved === "x" && !isClear ? <XSvg fill="#31C3BD" width={40} /> : isClicked && isMoved === "o" && !isClear ? <OSvg fill="#F2B137" width={40} /> : null}      
        </SC.Item>
    );
};

export default PlayBoardItem;
