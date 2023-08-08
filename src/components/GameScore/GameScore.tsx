import * as SC from "./GameScoreStyled"


interface IProps {
    gamer1: string,
    gamer2: string,
    score: {
        player1: number,
        player2: number,
        ties: number,
    }
}

const GameScore: React.FC<IProps> = ({ gamer1, gamer2, score }): JSX.Element => {
    
    const { player1, player2, ties } = score;


    return (
        <SC.ScoreTable>
            <SC.ScoreBlock><SC.Text>X {gamer1 === "o" ? "(P2)" : "(P1)"}</SC.Text>
                <SC.Text>{gamer1 === "o" ? player2 : player1}</SC.Text>
            </SC.ScoreBlock>
            <SC.ScoreBlock><SC.Text>Ties</SC.Text><SC.Text>{ties}</SC.Text></SC.ScoreBlock>
            <SC.ScoreBlock>
                <SC.Text>O {gamer1 === "o" ? "(P1)" : "(P2)"}</SC.Text>
                <SC.Text>{gamer1 === "o" ? player1 : player2}</SC.Text>
            </SC.ScoreBlock>
        </SC.ScoreTable>
    );
}

export default GameScore;