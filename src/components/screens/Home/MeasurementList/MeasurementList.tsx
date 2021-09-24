import React from "react";

import { Measurement } from "@Types/Measurement";

import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    id: string,
    measurements: Measurement[],
};

export const MeasurementList: React.FC<Props> = props => {
    return (
        <div id={props.id}>
            <h2>Measurements</h2>
            <List>
                {props.measurements.map(m => (
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary={m.date.toDateString()}
                            secondary={`${m.weight} kg`}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};