import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import { useSelector } from 'react-redux'


export default function App() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    console.log(UpdatedData.leaderStatic.sumProjects + "in gouge2");
    return (
        <ReactSpeedometer
            value={UpdatedData.leaderStatic.sumPapers}
            width={100}
            height={100}
            forceRender={true}
            fluidWidth={false}
            valueTextFontSize={'0px'}
            needleHeightRatio={0.4}
            maxValue={500}
            ringWidth={16}
            needleColor={'#2E2E2E'}
            segmentColors={[
                '#00DEC2', '#08C4AC', '#05AA95', '#03675A', '#02433B'
            ]}
            labelFontSize={'0'}
        />
    );
}

