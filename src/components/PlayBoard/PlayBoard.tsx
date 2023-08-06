import * as React from "react"; // Import React
import * as SC from "./PlayBoardStyled";

import PlayBoardItem from "./PlayBoardItem";
import { winningCombinations } from "../../utils/combination";
import GameModal from "../GameModal/GameModal";

interface IProps {
    click: () => void;
    currentPlayer: string;
}

const PlayBoard: React.FC<IProps> = ({ click, currentPlayer }): JSX.Element => {
    const [xArray, setXArray] = React.useState<number[]>([])
    const [oArray, setOArray] = React.useState<number[]>([])
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [winner, setWinner] = React.useState<string>("")


    const handleClick = (index:number) => {
        click();
        if (currentPlayer === "x") {
            setXArray(prev => [...prev, index])
        } else {
            setOArray(prev => [...prev, index])
        }
    };
    
    const testX = winningCombinations.map((el) => el.every(subel => xArray.includes(subel)))
    const testO = winningCombinations.map((el) => el.every(subel => oArray.includes(subel)))


    const toggleOverlay = () => {
        setIsOpen(!isOpen)
    }
    
    React.useEffect(() => {
        if (testX.includes(true)) {
            setWinner("x")
            setIsOpen(true)
           
        }
        if (testO.includes(true)) {
            setWinner("o")
            setIsOpen(true)
        }
    }, [currentPlayer, testO, testX])

   


    const elementsArray = new Array(9).fill("");

    return (
        <SC.GridContainer>
            {elementsArray.map((el, idx) => (
                <PlayBoardItem
                    key={idx}
                    index={idx}
                    moveClick={handleClick}
                    currentPlayer={currentPlayer}
                />
            ))}
            <GameModal toggleOverlay={toggleOverlay} isOpen={isOpen} winner={winner} />
        </SC.GridContainer>
    );
};

export default PlayBoard;
