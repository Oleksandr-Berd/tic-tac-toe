import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import * as SC from "./GameModalStyled"

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
                    {winner} is win!
                </Modal.Title>

            </SC.HeaderStyled>
            <SC.BodyStyled>
                <h2><span>{winner}</span> takes the round</h2>
            </SC.BodyStyled>
            <div>
                <Button variant="primary">
                    quit
                </Button>
                <Button variant="primary">
                    next round
                </Button>
            </div>
        </SC.CommonContainer>

    )
}
export default GameModal