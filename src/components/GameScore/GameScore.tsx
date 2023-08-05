import * as SC from "./GameScoreStyled"

const GameScore: React.FC = (): JSX.Element => {
    return (
        <SC.ScoreTable>
            <SC.ScoreBlock><span>You</span><span>score</span></SC.ScoreBlock>
            <SC.ScoreBlock><span>Ties</span><span>score</span></SC.ScoreBlock>
            <SC.ScoreBlock>
                <span> Player 2</span>
                <span>score</span>
            </SC.ScoreBlock>
        </SC.ScoreTable>
    );
}

export default GameScore;