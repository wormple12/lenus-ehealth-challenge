import React, { useState, useEffect } from 'react';

import { Measurement } from '@Types/Measurement';
import chartDatabase from '@Services/firebase/chartDatabase';

import './Home.scss';
import { MeasurementList } from './MeasurementList/MeasurementList';
import { TrackerChart } from './TrackerChart/TrackerChart';
import { MeasurementLogger } from './MeasurementList/MeasurementLogger';

const textContent = {
    heading: "Weight Tracker",
    desc: `This is a simple proof-of-concept app allowing a single person to track their weight over time.
                Simply log your measurements, and both the list and the chart below will automatically be updated.`,
    emptyListMsg: "You haven't logged any measurements yet.",
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
            {measurements.length === 0 ?
                <div id="empty-list-box">
                    <p>{textContent.emptyListMsg}</p>
                    <MeasurementLogger />
                </div>
                :
                <div className="home-page-flex">
                    {measurements.length > 1 &&
                        <TrackerChart
                            id="chart-container"
                            measurements={measurements}
                        />
                    }
                    <MeasurementList
                        id="list-container"
                        measurements={measurements}
                    />
                </div>
            }
        </section>
    );
};