import React, { useState, useEffect } from 'react';

import { Measurement } from '@Types/Measurement';
import chartDatabase from '@Services/firebase/chartDatabase';

import './Home.scss';
import { MeasurementList } from './MeasurementList/MeasurementList';
import { TrackerChart } from './TrackerChart/TrackerChart';

const textContent = {
    heading: "Weight Tracker",
    desc: `This is a simple proof-of-concept app allowing a single person to track their weight over time.
                Simply log your measurements, and both the list and the chart below will automatically be updated.`,
}

export const Home: React.FC = props => {
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
            <h1>{textContent.heading}</h1>
            <p className="sectionDesc">{textContent.desc}</p>
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