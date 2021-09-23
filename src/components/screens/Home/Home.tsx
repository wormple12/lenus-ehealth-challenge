import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Measurement } from '@Types/Measurement';
import chartDatabase from '@Services/firebase/chartDatabase';

import './Home.scss';

type Props = RouteComponentProps;

export const Home: React.FC<Props> = props => {
    const [measurements, setMeasurements] = useState<Measurement[]>([]);

    useEffect(() => {
        const unsubscribe = chartDatabase.streamMeasurements(setMeasurements);
        return () => {
            const cleanup = async () => await unsubscribe;
            cleanup();
        };
    }, [setMeasurements]);

    return (
        <section className="content">
            <h1>Weight Tracker</h1>
            <p className="sectionDesc">
                This is a simple proof-of-concept app allowing a single person to track their weight over time.
                Simply log your measurements, and both the list and the chart below will automatically be updated.
            </p>
            <br />
            <div className="home-page-flex">
                <div id="chart-container"></div>
                <div id="list-container">
                    <h2>Measurements</h2>
                    {/* <List>
                        {measurements.map(m => (
                            <ListItem
                                caption={m.date.toDateString()}
                                legend={`${m.weight} kg`}
                                rightIcon='delete'
                            />
                        ))}
                    </List> */}
                </div>
            </div>
        </section>
    );
};