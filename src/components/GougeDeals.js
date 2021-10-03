import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import { useSelector } from 'react-redux'


export default function App() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    console.log(UpdatedData.leaderStatic.sumProjects + "in gouge2 in deals");
    return (
        <ReactSpeedometer
            value={UpdatedData.leaderStatic.sumProjects}
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
                '#3B68FF', '#1F50F4', '#002AB5', '#001E81', '#041755'
            ]}
            labelFontSize={'0'}
        />
    );
}

