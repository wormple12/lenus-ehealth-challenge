import React, { useEffect, useState } from "react";

import { isDateValid, isWeightValid, clampWeight } from "@Types/Measurement";

import { ListItemText, ListItemButton, Dialog, DialogTitle, DialogContent, Button, DialogActions, DialogContentText, TextField, ListItemIcon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import locale from 'date-fns/locale/en-IN';
import chartDatabase from "@Services/firebase/chartDatabase";


export const MeasurementLogger: React.FC = props => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | null>(new Date());
    const [weight, setWeight] = useState("");
    const [inputIsValid, setInputIsValid] = useState(false);

    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);

    const formIsValid = () => {
        return !!date && isDateValid(date)
            && !!weight && isWeightValid(weight);
    }

    useEffect(() => {
        setInputIsValid(formIsValid());
    }, [date, weight]);

    const submitLog = (e: React.FormEvent) => {
        e.preventDefault();
        if (!!date && formIsValid()) {
            chartDatabase.setMeasurement({ date, weight: parseInt(weight) });
        }
        closeDialog();
    };

    return (
        <>
            <ListItemButton onClick={openDialog}>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Log measurement" />
            </ListItemButton>
            <Dialog open={open} onClose={closeDialog}>
                <form autoComplete="off" onSubmit={submitLog}>
                    <DialogTitle>Log your measurement</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To log a measurement, please fill out the form below.
                            Be aware that only one measurement can be logged per date.
                        </DialogContentText>
                        <br />
                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
                            <DatePicker
                                label="Date"
                                value={date}
                                onChange={(newValue) => setDate(newValue)}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        required
                                        margin="dense" fullWidth
                                        type="date"
                                    />
                                }
                            />
                        </LocalizationProvider>
                        <TextField
                            autoFocus required
                            margin="dense" variant="standard" fullWidth
                            label="Weight"
                            type="number"
                            value={weight}
                            onChange={(evt) => setWeight(evt.target.value)}
                            onBlur={(evt) => setWeight(clampWeight(evt.target.value))}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeDialog}>Cancel</Button>
                        <Button type="submit" disabled={!inputIsValid}>Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};