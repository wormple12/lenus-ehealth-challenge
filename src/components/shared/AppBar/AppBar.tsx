import React from 'react';

import { AppBar as AppBar_MUI, IconButton, Toolbar, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export const AppBar: React.FC = () => {
    const handleClick = () => {
        window.open("https://github.com/wormple12");
    };

    return (
        <AppBar_MUI position="static">
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>
                    Weight Tracker (2021), Simon Norup
                </Typography>
                <IconButton
                    size="large"
                    aria-label="page author's github"
                    aria-controls="menu-appbar"
                    color="inherit"
                    onClick={handleClick}
                >
                    <GitHubIcon />
                </IconButton>
            </Toolbar>
        </AppBar_MUI>
    );
};