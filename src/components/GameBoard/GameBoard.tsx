import * as SC from "./GameBoardStyled"

import GameBoardHeader from '../GameBoardHeader/GameBoardHeader';
import GameScore from '../GameScore/GameScore';
import PlayBoard from '../PlayBoard/PlayBoard';
import { useEffect, useState } from "react";
import { winningCombinations } from "../../utils/combination";

interface IProps {
    player1: string,
    player2: string,
}




const GameBoard: React.FC<IProps> = ({ player1, player2 }): JSX.Element => {

    const [currentPlayer, setCurrentPlayer] = useState<string>("x")
    const [xArray, setXArray] = useState<number[]>([])
    const [oArray, setOArray] = useState<number[]>([])


    console.log("player1", player1);
    console.log("player2", player2);
    console.log("currentPlayer", currentPlayer);




    const handleCLick = (index: number) => {
        switch (currentPlayer) {
            case "x":
                setXArray(prev => [...prev, index])
                setCurrentPlayer("o")
                break
            case "o":
                setOArray(prev => [...prev, index])
                setCurrentPlayer("x")
                break
        }
    }


    return (<SC.BoardStyled id='board'>
        <GameBoardHeader currentPlayer={currentPlayer} />
        <PlayBoard click={handleCLick} currentPlayer={currentPlayer} xArray={xArray} oArray={oArray} playersMark={{ player1, player2 }} />
        <GameScore />
    </SC.BoardStyled>);
}

export default GameBoard;