import React from "react";
import { addDays, subDays } from "date-fns";

import { Measurement } from "@Types/Measurement";

import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine } from 'victory';

const textContent = {
    heading: "Chart",
    weightAxisLabel: "Weight (kg)"
}

type Props = {
    id: string,
    measurements: Measurement[],
};

export const TrackerChart: React.FC<Props> = props => {
    const { id, measurements } = props;

    const datePadding = Math.min(Math.max(3, measurements.length), 10);

    const latestDate = addDays(
        measurements.reduce((a, b) => (a.date > b.date ? a : b)).date,
        datePadding
    );
    const earliestDate = subDays(
        measurements.reduce((a, b) => (a.date < b.date ? a : b)).date,
        datePadding
    );
    const maxWeight = Math.max(...measurements.map(e => e.weight)) + 1;
    const minWeight = Math.min(...measurements.map(e => e.weight)) - 1;

    return (
        <div id={id}>
            <h2>{textContent.heading}</h2>
            <VictoryChart
                scale={{ x: 'time' }}
                width={500}
                height={300}
                padding={{ top: 20, bottom: 70, left: 50, right: 10 }}
            >
                <VictoryAxis crossAxis
                    domain={[earliestDate, latestDate]}
                    tickCount={6}
                    style={{
                        ticks: {
                            size: -5,
                            stroke: 'black',
                        },
                        tickLabels: { angle: 90, padding: 35 },
                    }}
                    standalone={false}
                />
                <VictoryAxis dependentAxis crossAxis
                    domain={[minWeight, maxWeight]}
                    label={textContent.weightAxisLabel}
                    axisLabelComponent={<VictoryLabel dy={-12} />}
                    style={{
                        ticks: {
                            size: -5,
                            stroke: 'black',
                        },
                        axisLabel: { angle: -90 }
                    }}
                    standalone={false}
                />
                <VictoryLine
                    data={measurements}
                    x={(m: Measurement) => m.date}
                    y={(m: Measurement) => m.weight}
                    style={{ data: { stroke: '#c43a31', strokeWidth: 2 } }}
                    interpolation="monotoneX"
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                />
            </VictoryChart>
        </div>
    );
};