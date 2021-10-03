import React from 'react';
import { Navbar } from 'react-bootstrap';


import './chart.css'
import BarT from './BarT'
import ChartT from './ChartT'
import './chart.css'

let circleStyle1 = {
    padding: 6,
    margin: 6,
    display: "inline-block",
    backgroundColor: "rgb(247, 181, 0)",
    borderRadius: "50%",
    width: 1,
    height: 1,
    left: 0,
    top: 0
};
let circleStyle2 = {
    padding: 6,
    margin: 6,
    display: "inline-block",
    // position:'absolute',
    backgroundColor: "rgb(1, 220, 209)",
    borderRadius: "50%",
    width: 1,
    height: 1,
    left: 0,
    top: 0
};
let circleStyle3 = {
    padding: 6,
    margin: 6,
    display: "inline-block",
    // position:'absolute',
    backgroundColor: "rgb(103, 114, 222)",
    borderRadius: "50%",
    width: 1,
    height: 1,
    left: 0,
    top: 0
};
let circleStyle4 = {
    padding: 6,
    margin: 6,
    display: "inline-block",
    // position:'absolute',
    backgroundColor: "#ff4560",
    borderRadius: "50%",
    width: 1,
    height: 1,
    left: 0,
    top: 1
};
export default function TryChart() {
    return (
        <>
            <div className="container mt-5 container-chart" >
                <div className=" d-flex justify-content-between align-items-center myClass in-small-screen">
                    <div className="marginClass">
                        <BarT></BarT>
                    </div>
                    <div class="add-div">
                        <Navbar expand="md" variant="light" className="justify-content-end is-small">
                            <p style={circleStyle1}>
                            </p>
                            <Navbar.Brand style={{ fontSize: "14px" }}>Contacts</Navbar.Brand>
                            <div style={circleStyle2}>
                            </div>
                            <Navbar.Brand style={{ fontSize: "14px" }}>Papers</Navbar.Brand>
                            <div style={circleStyle3}>
                            </div>
                            <Navbar.Brand style={{ fontSize: "14px" }}>Deals</Navbar.Brand>
                            <div style={circleStyle4}>
                            </div>
                            <Navbar.Brand style={{ fontSize: "14px" }}>Tasks</Navbar.Brand>
                        </Navbar>
                    </div>
                    <div className="marginClass1">
                        <ChartT></ChartT>
                        <div class="add-div">
                            <Navbar expand="md" variant="light" className="justify-content-end is-small1">
                                <p style={circleStyle1}>
                                </p>
                                <Navbar.Brand style={{ fontSize: "14px" }}>Contacts</Navbar.Brand>
                                <div style={circleStyle2}>
                                </div>
                                <Navbar.Brand style={{ fontSize: "14px" }}>Papers</Navbar.Brand>
                                <div style={circleStyle3}>
                                </div>
                                <Navbar.Brand style={{ fontSize: "14px" }}>Deals</Navbar.Brand>
                                <div style={circleStyle4}>
                                </div>
                                <Navbar.Brand style={{ fontSize: "14px" }}>Tasks</Navbar.Brand>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}