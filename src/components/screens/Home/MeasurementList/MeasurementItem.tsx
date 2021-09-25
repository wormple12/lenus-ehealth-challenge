import React from "react";
import { format } from 'date-fns';
import locale from 'date-fns/locale/en-IN';

import { Measurement } from "@Types/Measurement";

import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import chartDatabase from "@Services/firebase/chartDatabase";

type Props = {
    m: Measurement,
};

export const MeasurementItem: React.FC<Props> = props => {
    const deleteItem = async () => {
        await chartDatabase.deleteMeasurement(props.m.date);
    }

    const numberFormat = new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <ListItem
            disablePadding
            secondaryAction={
                <IconButton onClick={deleteItem} edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            }
        >
            <ListItemText
                primary={format(props.m.date, 'MMMM do, yyyy', { locale })}
                secondary={`${numberFormat.format(props.m.weight)} kg`}
            />
        </ListItem>
    );
};