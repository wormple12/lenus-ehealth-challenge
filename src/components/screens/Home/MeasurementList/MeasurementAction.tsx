import React from "react";

import { ListItemText, ListItemButton, ListItemIcon } from '@mui/material';

type Props = {
    label: string,
    icon: JSX.Element,
    onClick: () => void,
};

export const MeasurementAction: React.FC<Props> = props => {
    return (
        <ListItemButton onClick={props.onClick}>
            <ListItemIcon>
                {props.icon}
            </ListItemIcon>
            <ListItemText primary={props.label} />
        </ListItemButton>
    );
};