import React from "react";

import { Measurement } from "@Types/Measurement";

import { List, ListItem, Divider } from '@mui/material';
import { MeasurementLogger } from "./MeasurementLogger";
import { MeasurementItem } from "./MeasurementItem";

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
                {props.measurements.map((m, index) =>
                    <MeasurementItem key={index} m={m} />
                )}
            </List>
            <Divider />
            <nav aria-label="measurement actions">
                <List>
                    <ListItem disablePadding>
                        <MeasurementLogger />
                    </ListItem>
                </List>
            </nav>
        </div>
    );
};
