import React, { Dispatch, SetStateAction } from "react";

import { clampWeight } from "@Types/Measurement";
import { TextField } from "@mui/material";

type Props = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    required: boolean,
    autoFocus: boolean,
};

export const WeightField: React.FC<Props> = props => {
    return (
        <TextField
            required={props.required}
            autoFocus={props.autoFocus}
            label="Weight (kg)"
            type="number"
            margin="dense" variant="standard" fullWidth
            value={props.value}
            onChange={(evt) => props.setValue(evt.target.value)}
            onBlur={(evt) => props.setValue(clampWeight(evt.target.value))}
        />
    );
};