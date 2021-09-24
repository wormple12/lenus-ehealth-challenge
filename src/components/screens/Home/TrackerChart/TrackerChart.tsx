import React from "react";

import { Measurement } from "@Types/Measurement";

type Props = {
    id: string,
};

export const TrackerChart: React.FC<Props> = props => {
    return (
        <div id={props.id}>
        </div>
    );
};