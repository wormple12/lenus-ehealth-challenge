import React, { useState } from "react";

import { Measurement } from "@Types/Measurement";

import { ListItemText, ListItemButton, Dialog, DialogTitle, DialogContent, Button, DialogActions, DialogContentText, TextField, ListItemIcon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import locale from 'date-fns/locale/en-IN';

export const MeasurementLogger: React.FC = props => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = React.useState<Date | null>(new Date());
    const [weight, setWeight] = React.useState("");

    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);

    const submitLog = () => {
        // integrate with db
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
                            renderInput={(params) => <TextField {...params} required />}
                        />
                    </LocalizationProvider>
                    <TextField
                        autoFocus required
                        margin="dense" variant="standard" fullWidth
                        id="weight"
                        label="Weight"
                        type="number"
                        value={weight}
                        onChange={(evt) => setWeight(evt.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Cancel</Button>
                    <Button onClick={submitLog}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};