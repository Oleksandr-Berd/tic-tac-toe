import {useState, useEffect} from "react";
import * as SC from "./PlayBoardStyled";

import PlayBoardItem from "./PlayBoardItem";
import { winningCombinations } from "../../utils/combination";
import GameModal from "../GameModal/GameModal";
import { Action } from "../../utils/reducer";

interface IProps {
    click: (index:number) => void;
    currentPlayer: string;
    oArray: number[],
    xArray: number[],
    playersMark: { player1: string, player2: string },
    handleScore: (action: Action) => void,
    clearBoard:()=>void,
}

const PlayBoard: React.FC<IProps> = ({ click, currentPlayer, xArray, oArray, playersMark, handleScore, clearBoard }): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [winner, setWinner] = useState<string>("")

    const handleClick = (index:number) => {
        click(index);
    };
    

    useEffect(() => {
        const matrixX:any = winningCombinations.map((el) => el.every(subel => xArray.includes(subel)))
        const matrixO:any = winningCombinations.map((el) => el.every(subel => oArray.includes(subel)))

        if (matrixX.includes(true) | matrixO.includes(true))
        {
            setIsOpen(true)
            setWinner(matrixX.includes(true) ? "x" : "o")
        } 

        if (xArray.length === 5 && !matrixX.includes(true) && !matrixO.includes(true)) {
            setIsOpen(true)
            setWinner("tie")
        }
    }, [xArray, oArray])
   

    const playerWinner = Object.keys(playersMark).find(
        (el) => playersMark[el as keyof typeof playersMark] === winner
    );    


    const elementsArray = new Array(9).fill("");

    const closeModal = ():void => {
        setIsOpen(false)
    }

   

    return (<>
        <SC.GridContainer id="board">
            {elementsArray.map((el, idx) => (
                <PlayBoardItem
                    key={idx}
                    index={idx}
                    moveClick={handleClick}
                    currentPlayer={currentPlayer}
                    isClear={xArray.length === 0 && oArray.length === 0}
                />
            ))}

        </SC.GridContainer>
        <GameModal isOpen={isOpen} $winner={playerWinner ? playerWinner : "tie"} winnersMark={winner} handleScore={handleScore} closeModal={closeModal} clearBoard={clearBoard} />
    </>
    );
};

export default PlayBoard;
