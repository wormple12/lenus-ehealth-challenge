import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Measurement } from '@Types/Measurement';
import chartDatabase from '@Services/firebase/chartDatabase';

import './Home.scss';
import { MeasurementList } from './MeasurementList/MeasurementList';
import { TrackerChart } from './TrackerChart/TrackerChart';

type Props = RouteComponentProps;

export const Home: React.FC<Props> = props => {
    const [measurements, setMeasurements] = useState<Measurement[]>([]);

    useEffect(() => {
        console.log("useEffect")
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
                <TrackerChart
                    id="chart-container"
                />
                <MeasurementList
                    id="list-container"
                    measurements={measurements}
                />
            </div>
        </section>
    );
};