import * as SC from "./GameBoardStyled"

import GameBoardHeader from '../GameBoardHeader/GameBoardHeader';
import GameScore from '../GameScore/GameScore';
import PlayBoard from '../PlayBoard/PlayBoard';
import { useReducer, useState } from "react";
import { Action, initialScore, reducer } from "../../utils/reducer";
import { type } from "os";

interface IProps {
    player1: string,
    player2: string,
}




const GameBoard: React.FC<IProps> = ({ player1, player2 }): JSX.Element => {

    const [currentPlayer, setCurrentPlayer] = useState<string>("x")
    const [xArray, setXArray] = useState<number[]>([])
    const [oArray, setOArray] = useState<number[]>([])
    const [score, dispatch] = useReducer(reducer, initialScore)

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


    const handleScore = (action:Action) => {
        dispatch(action)
    }

    const clearBoard = () => {
        setXArray([])
        setOArray([])
        setCurrentPlayer("x")
    }    

    const handleRestart = () => {
        dispatch({ type: "RESTART" })
        clearBoard()
}

console.log(score);


    return (<SC.BoardStyled >
        <GameBoardHeader currentPlayer={currentPlayer} handleRestart={handleRestart} />
        <PlayBoard click={handleCLick} currentPlayer={currentPlayer} xArray={xArray} oArray={oArray} playersMark={{ player1, player2 }} handleScore={handleScore} clearBoard={clearBoard} />
        <GameScore gamer1={player1} gamer2={player2} score={score} />
    </SC.BoardStyled>);
}

export default GameBoard;