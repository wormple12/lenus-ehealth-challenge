import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

export const NoMatch: React.FC = props => {
    return (
        <section className="content">
            <h1>The page was not found.</h1>
            <Button><Link to={"/"}>
                Return to home page?
            </Link></Button>
        </section>
    );
};