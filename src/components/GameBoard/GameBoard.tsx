import * as SC from "./GameBoardStyled"

import GameBoardHeader from '../GameBoardHeader/GameBoardHeader';
import GameScore from '../GameScore/GameScore';
import PlayBoard from '../PlayBoard/PlayBoard';
import { useState } from "react";

interface IProps {
    player1: string,
    player2: string,
}




const GameBoard: React.FC<IProps> = ({ player1, player2 }):JSX.Element => {

    const [currentPlayer, setCurrentPlayer] = useState<string>(player1)

    const handleCLick = () => {
        if (currentPlayer === player1) {

            setCurrentPlayer(player2)
            
        } else {

            setCurrentPlayer(player1)
            
        }
    }



return (<SC.BoardStyled id='board'>
    <GameBoardHeader currentPlayer={currentPlayer} />
    <PlayBoard click={handleCLick} currentPlayer={currentPlayer} />
    <GameScore />
</SC.BoardStyled>);
}

export default GameBoard;