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
            <Modal
                centered
                size="lg"
                show={isOpen}
                // onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {winner} is win!
                    </Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                    <h2>{winner} takes the round</h2>
                </Modal.Body>
                <div>
                    <Button variant="primary">
                        quit
                    </Button>
                    <Button variant="primary">
                       next round
                    </Button>
                </div>
            </Modal>

    )
}
export default GameModal