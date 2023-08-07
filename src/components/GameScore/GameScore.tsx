import * as SC from "./GameScoreStyled"


interface IProps {
    player1: string,
    player2: string
}

const GameScore: React.FC<IProps> = ({ player1, player2 }): JSX.Element => {
    
    return (
        <SC.ScoreTable>
            <SC.ScoreBlock><SC.Text>X {player1 === "o" ? "(P2)" : "(P1)"}</SC.Text><SC.Text>score</SC.Text></SC.ScoreBlock>
            <SC.ScoreBlock><SC.Text>Ties</SC.Text><SC.Text>score</SC.Text></SC.ScoreBlock>
            <SC.ScoreBlock>
                <SC.Text>O {player1 === "o" ? "(P1)" : "(P2)"}</SC.Text>
                <SC.Text>score</SC.Text>
            </SC.ScoreBlock>
        </SC.ScoreTable>
    );
}

export default GameScore;