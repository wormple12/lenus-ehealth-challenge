import React, { Dispatch, SetStateAction } from "react";
import locale from 'date-fns/locale/en-IN';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import { TextField } from "@mui/material";

type Props = {
    value: Date | null,
    setValue: Dispatch<SetStateAction<Date | null>>,
    required?: boolean,
    autoFocus?: boolean,
};

export const DateField: React.FC<Props> = props => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
            <DatePicker
                label="Date"
                value={props.value}
                onChange={(newValue) => props.setValue(newValue)}
                renderInput={(params) =>
                    <TextField {...params}
                        required={props.required}
                        autoFocus={props.autoFocus}
                        type="date"
                        margin="dense" fullWidth
                    />
                }
            />
        </LocalizationProvider>
    );
};