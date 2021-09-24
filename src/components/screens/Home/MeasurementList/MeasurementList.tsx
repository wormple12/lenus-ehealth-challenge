import React from "react";

import { Measurement } from "@Types/Measurement";

import { IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { MeasurementLogger } from "./MeasurementLogger";

type Props = {
    id: string,
    measurements: Measurement[],
};

export const MeasurementList: React.FC<Props> = props => {
    return (
        <div id={props.id}>
            <h2>Measurements</h2>
            {props.measurements.length === 0
                && <p>You haven't logged any measurements yet.</p>
            }
            <List>
                {props.measurements.map(m => (
                    <ListItem
                        key={m.date.toDateString()}
                        disablePadding
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
                <Divider />
                <nav aria-label="measurement actions">
                    <List>
                        <ListItem disablePadding>
                            <MeasurementLogger />
                        </ListItem>
                    </List>
                </nav>
            </List>
        </div>
    );
};