import { Button, Overlay } from "@blueprintjs/core";

interface IProps {
    toggleOverlay: () => void,
    isOpen: boolean,
    winner: string,
}


const GameModal: React.FC<IProps> = ({ toggleOverlay, isOpen, winner }):JSX.Element => {
    return (<div>
        <Button text="Show overlay" onClick={toggleOverlay} />
        <Overlay isOpen={isOpen} onClose={toggleOverlay}>
            <h3>{winner} wins!</h3>
            <h2>{winner} takes the round</h2>
            <div> <Button text="Show overlay" onClick={toggleOverlay} />
            <button>Next round</button>
            </div>
        </Overlay>
    </div> );
}
 
export default GameModal;