import * as React from "react"; // Import React
import * as SC from "./PlayBoardStyled";

import PlayBoardItem from "./PlayBoardItem";

interface IProps {
    click: () => void;
    currentPlayer: string;
}

const PlayBoard: React.FC<IProps> = ({ click, currentPlayer }): JSX.Element => {
    const [xArray, setXArray] = React.useState<number[]>([])
    const [oArray, setOArray] = React.useState<number[]>([])


const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]            
    ];

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

   

    if (testX.includes(true)) alert("victory X")
    if (testO.includes(true)) alert("victory Y")


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
        </SC.GridContainer>
    );
};

export default PlayBoard;
