import * as React from "react"; // Import React
import * as SC from "./PlayBoardStyled";

import PlayBoardItem from "./PlayBoardItem";
import { winningCombinations } from "../../utils/combination";
import GameModal from "../GameModal/GameModal";

interface IProps {
    click: (index:number) => void;
    currentPlayer: string;
    oArray: number[],
    xArray:number[]
}

const PlayBoard: React.FC<IProps> = ({ click, currentPlayer, xArray, oArray }): JSX.Element => {
    // const [xArray, setXArray] = React.useState<number[]>([])
    // const [oArray, setOArray] = React.useState<number[]>([])
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [winner, setWinner] = React.useState<string>("")





   

    const handleClick = (index:number) => {
        click(index);
    };
    

    React.useEffect(() => {
        const testX:any = winningCombinations.map((el) => el.every(subel => xArray.includes(subel)))
        const testO:any = winningCombinations.map((el) => el.every(subel => oArray.includes(subel)))

        if (testX.includes(true) | testO.includes(true))
        {
            setIsOpen(true)
            setWinner(testX.includes(true) ? "x" : "o")
        } 
    }, [xArray, oArray])
   

    const elementsArray = new Array(9).fill("");

    return (<>
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
            <GameModal  isOpen={isOpen} winner={winner} />
    </>
    );
};

export default PlayBoard;
