import React from "react";

import { Measurement } from "@Types/Measurement";

import { List, Divider } from '@mui/material';
import { MeasurementLogger } from "./MeasurementLogger";
import { MeasurementItem } from "./MeasurementItem";

const textContent = {
    heading: "Measurements",
}

type Props = {
    id: string,
    measurements: Measurement[],
};

export const MeasurementList: React.FC<Props> = props => {
    return (
        <div id={props.id}>
            <h2>{textContent.heading}</h2>
            <List>
                {props.measurements.map((m, index) =>
                    <MeasurementItem key={index} m={m} />
                )}
            </List>
            <Divider />
            <nav aria-label="measurement actions">
                <List>
                    <MeasurementLogger />
                </List>
            </nav>
        </div>
    );
};
