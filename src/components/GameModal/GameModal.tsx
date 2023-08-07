import Modal from 'react-bootstrap/Modal';

import * as SC from "./GameModalStyled"

import { ReactComponent as OSvg } from "../../assets/icon-o.svg"
import { ReactComponent as XSvg } from "../../assets/icon-x.svg"

interface IProps {
    toggleOverlay?: () => void,
    isOpen: boolean,
    winner: string,
}


const GameModal: React.FC<IProps> = ({ isOpen, winner }): JSX.Element => {

    return (
        <SC.CommonContainer
            centered
            size="lg"
            show={isOpen}
            backdrop={false}
        // onHide={() => setLgShow(false)}
        // aria-labelledby="example-modal-sizes-title-lg"
        >
            <SC.HeaderStyled>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {winner} wins!
                </Modal.Title>

            </SC.HeaderStyled>
            <SC.BodyStyled>
                <SC.WinnerText winner={winner}>
                    {winner === "x" ? <XSvg width={30} fill="#31C3BD" /> : <OSvg width={30} fill="#F2B137" />}
                    <span>takes the round</span>
                </SC.WinnerText>
            </SC.BodyStyled>
            <SC.ButtonContainer>
                <SC.QuitButton variant="primary">
                    quit
                </SC.QuitButton>
                <SC.NextButton variant="primary">
                    next round
                </SC.NextButton>
            </SC.ButtonContainer>
        </SC.CommonContainer>

    )
}
export default GameModal