import React from "react";

import { ListItemText, ListItemButton, ListItemIcon, ListItem } from '@mui/material';

type Props = {
    label: string,
    icon: JSX.Element,
    onClick: () => void,
};

export const MeasurementAction: React.FC<Props> = props => {
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={props.onClick}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.label} />
            </ListItemButton>
        </ListItem>
    );
};