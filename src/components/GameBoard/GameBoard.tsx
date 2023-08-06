import * as SC from "./GameBoardStyled"

import GameBoardHeader from '../GameBoardHeader/GameBoardHeader';
import GameScore from '../GameScore/GameScore';
import PlayBoard from '../PlayBoard/PlayBoard';
import { useState } from "react";
import { winningCombinations } from "../../utils/combination";

interface IProps {
    player1: string,
    player2: string,
}




const GameBoard: React.FC<IProps> = ({ player1, player2 }):JSX.Element => {

    const [currentPlayer, setCurrentPlayer] = useState<string>(player1)
    const [xArray, setXArray] = useState<number[]>([])
    const [oArray, setOArray] = useState<number[]>([])


    const handleCLick = (index: number) => {
        
        if (currentPlayer === player1) {
            setCurrentPlayer(player2)
            setXArray(prev => [...prev, index])
            
        } else {
            setCurrentPlayer(player1)
            setOArray(prev => [...prev, index])
            
        }
    }
    
   

return (<SC.BoardStyled id='board'>
    <GameBoardHeader currentPlayer={currentPlayer} />
    <PlayBoard click={handleCLick} currentPlayer={currentPlayer} xArray={xArray} oArray={oArray}/>
    <GameScore />
</SC.BoardStyled>);
}

export default GameBoard;