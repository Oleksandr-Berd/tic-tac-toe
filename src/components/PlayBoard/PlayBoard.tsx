import * as React from "react"; // Import React
import * as SC from "./PlayBoardStyled";

import PlayBoardItem from "./PlayBoardItem";

interface IProps {
    click: () => void;
    currentPlayer: string;
}

const PlayBoard: React.FC<IProps> = ({ click, currentPlayer }): JSX.Element => {
    const handleClick = () => {
        click();
    };

    const elementsArray = new Array(9).fill("");

    console.log(elementsArray);

    return (
        <SC.GridContainer>
            {elementsArray.map((el, idx) => (
                <PlayBoardItem
                    key={idx}
                    moveClick={handleClick}
                    currentPlayer={currentPlayer}
                />
            ))}
        </SC.GridContainer>
    );
};

export default PlayBoard;
