import { Radio, RadioGroup } from "@blueprintjs/core";
import { Mark } from "../../utils/interfaces";
import { FormEvent, useState } from "react";

import * as SC from "./StartedFormStyle"

const StartedForm = () => {
    const [playerMark, setPlayerMark] = useState<Mark>("x");

const titleForm = "pick player 1's mark"

    const onChangeMark = (evt: FormEvent<HTMLInputElement>): void => {
        const newValue = evt.currentTarget.value as Mark;
        console.log(newValue);
        setPlayerMark(newValue);
    };

    return (
        <SC.CommonContainer>

            <form action="">
                <RadioGroup
                    label={titleForm}
                    onChange={onChangeMark}
                    selectedValue={playerMark}
                >
                    <Radio label="x" value="x" />
                    <Radio label="y" value="y" />
                </RadioGroup>
            </form>
        </SC.CommonContainer>
    );
};

export default StartedForm;
