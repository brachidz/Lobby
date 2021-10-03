import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import { useSelector } from 'react-redux'


export default function App() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    console.log(UpdatedData.leaderStatic.sumProjects + "in gouge2");
    return (
        <ReactSpeedometer
            value={UpdatedData.leaderStatic.sumTasks}
            value={400}
            width={100}
            forceRender={true}
            height={100}
            fluidWidth={false}
            valueTextFontSize={'0px'}
            needleHeightRatio={0.4}
            ringWidth={16}
            maxValue={500}
            needleColor={'#2E2E2E'}
            segmentColors={[
                '#FF4560', '#E6223F', '#9A0017', '#67000F', '#3C0009'
            ]}
            labelFontSize={'0'}
        />
    );
}

