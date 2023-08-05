import { Mark } from "../../utils/interfaces";
import { useState } from "react";

import * as SC from "./StartedFormStyle";

import { ReactComponent as XIcon } from "../../assets/icon-x.svg";
import { ReactComponent as OIcon } from "../../assets/icon-o.svg";
import Icons from "../Icons/Icons";

const StartedForm = () => {
    const [playerMark, setPlayerMark] = useState<Mark>("x");

    const titleForm = "Pick player 1's mark";
    const footerForm = "Remember: x goes first";

    const handleCheck = (evt: any) => {
        const newMark = evt.currentTarget.value as Mark;
        console.log(newMark);

        setPlayerMark(newMark)
    };



    return (
        <SC.CommonContainer>
            <Icons />
            <SC.FormStyled>
                <SC.FormHeaderTitle>{titleForm}</SC.FormHeaderTitle>
                <SC.ButtonContainer>
                    <SC.LabelStyled $active={(playerMark === "x").toString()}>
                        <SC.RadioInput
                            type="radio"
                            value="x"
                            name="playerMark"
                            defaultChecked={playerMark === "x"}
                            onClick={handleCheck}
                        />
                        <XIcon width={32} />
                    </SC.LabelStyled>
                    <SC.LabelStyled $active={(playerMark === "o").toString()}>
                        <SC.RadioInput
                            type="radio"
                            value="o"
                            name="playerMark"
                            onClick={handleCheck}

                        />
                        <OIcon width={32} />
                    </SC.LabelStyled>
                </SC.ButtonContainer>
                <SC.FormFooterText>{footerForm}</SC.FormFooterText>
            </SC.FormStyled>
            <SC.SubmitButtonsContainer>
                <button>new game (vs cpu)</button>
                <button>new game (vs player)</button>
            </SC.SubmitButtonsContainer>
        </SC.CommonContainer>
    );
};

export default StartedForm;
