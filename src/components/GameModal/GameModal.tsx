import Modal from 'react-bootstrap/Modal';

import * as SC from "./GameModalStyled"

import { ReactComponent as OSvg } from "../../assets/icon-o.svg"
import { ReactComponent as XSvg } from "../../assets/icon-x.svg"
import { Action } from '../../utils/reducer';
import { useState } from 'react';

interface IProps {
    toggleOverlay?: () => void,
    isOpen: boolean,
    $winner: string,
    winnersMark: string,
    handleScore: (action: Action) => void,
    closeModal: ()=> void,

}


const GameModal: React.FC<IProps> = ({ isOpen, $winner, winnersMark, handleScore, closeModal }): JSX.Element => {

    const handleNext = () => {
        switch ($winner) {
            case "player1":
                handleScore({ type: "PLAYER1" })
                closeModal()
                break
            case "player2":
                handleScore({ type: "PLAYER2" })
                closeModal()
                break
            case "tie":
                handleScore({ type: "TIE" })
                closeModal()

        }

}

    
    
    return (
        <SC.CommonContainer
            centered
            size="lg"
            show={isOpen}
            backdrop={false}
        
        >
            <SC.HeaderStyled>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {$winner} wins!
                </Modal.Title>

            </SC.HeaderStyled>
            <SC.BodyStyled>
                <SC.WinnerText $winner={winnersMark}>
                    {winnersMark === "x" ? <XSvg width={30} fill="#31C3BD" /> : <OSvg width={30} fill="#F2B137" />}
                    <span>takes the round</span>
                </SC.WinnerText>
            </SC.BodyStyled>
            <SC.ButtonContainer>
                <SC.QuitButton variant="primary">
                    <a href="app"> quit</a>
                </SC.QuitButton>
                <SC.NextButton variant="primary" onClick={handleNext}>
                    <a href="#board">next round</a>
                </SC.NextButton>
            </SC.ButtonContainer>
        </SC.CommonContainer>

    )
}
export default GameModal