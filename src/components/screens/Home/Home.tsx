import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps;

export const Home: React.FC<Props> = props => {

    return (
        <section className="content">
            <h1></h1>
            <p className="sectionDesc"></p>
            <br />
        </section>
    );
};