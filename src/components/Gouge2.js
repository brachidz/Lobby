import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import { useSelector } from 'react-redux'


export default function App() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    console.log(UpdatedData.leaderStatic.sumProjects + "in gouge2");
    return (
        <ReactSpeedometer
            value={UpdatedData.leaderStatic.sumContacts}
            width={100}
            forceRender={true}
            height={100}
            fluidWidth={false}
            valueTextFontSize={'0px'}
            needleHeightRatio={0.4}
            ringWidth={16}
            maxValue={5000}
            needleColor={'#2E2E2E'}
            segmentColors={[
                '#F7B400', '#D99E00', '#C38E00', '#8E6800', '#6A4E00'
            ]}
            labelFontSize={'0'}
        />
    );
}

