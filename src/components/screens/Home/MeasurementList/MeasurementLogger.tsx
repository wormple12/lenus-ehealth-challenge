import React, { useEffect, useState } from "react";

import { isMeasurementValid } from "@Types/Measurement";
import chartDatabase from "@Services/firebase/chartDatabase";

import { Dialog, DialogTitle, DialogContent, Button, DialogActions, DialogContentText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { MeasurementAction } from "./MeasurementAction";
import { DateField } from "./form/DateField";
import { WeightField } from "./form/WeightField";

const initialFormContent = {
    date: new Date(),
    weight: ""
}

const textContent = {
    title: "Log your measurement",
    desc: `To log a measurement, please fill out the form below.\n
            Be aware that only one measurement can be logged per date.`,
    buttonOpen: "Log measurement",
    buttonCancel: "Cancel",
    buttonSubmit: "Add",
};

export const MeasurementLogger: React.FC = props => {
    const [open, setOpen] = useState(false);
    const [inputIsValid, setInputIsValid] = useState(false);
    const [date, setDate] = useState<Date | null>(initialFormContent.date);
    const [weight, setWeight] = useState(initialFormContent.weight);

    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);

    const formIsValid = () => isMeasurementValid(date, weight);

    useEffect(() => {
        setInputIsValid(formIsValid());
    }, [date, weight]);

    const submitLog = (e: React.FormEvent) => {
        e.preventDefault();
        if (!!date && formIsValid()) {
            chartDatabase.updateMeasurement({
                date,
                weight: parseFloat(weight)
            });
        }
        closeDialog();
    };

    return (
        <>
            <MeasurementAction
                label={textContent.buttonOpen}
                icon={<AddIcon />}
                onClick={openDialog}
            />
            <Dialog open={open} onClose={closeDialog}>
                <form autoComplete="off" onSubmit={submitLog}>
                    <DialogTitle>{textContent.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>{textContent.desc}</DialogContentText>
                        <br />
                        <DateField required value={date} setValue={setDate} />
                        <WeightField required autoFocus value={weight} setValue={setWeight} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeDialog}>
                            {textContent.buttonCancel}
                        </Button>
                        <Button type="submit" disabled={!inputIsValid}>
                            {textContent.buttonSubmit}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};