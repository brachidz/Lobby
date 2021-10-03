
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ReactSpeedometer from "react-d3-speedometer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from 'react-redux'

export default function Try() {

    //   handleGaugeValueChange(e) {
    //     console.log(1);

    //     this.setState({
    //       value: e.target.value
    //     });
    //   }
    const UpdatedData = useSelector(state => state.staticDetailsReducer);

    return (
        <div className="center">
            <h1 className="title">Ship Engine 1</h1>

            <Container className="p-3">
                <Row>
                    <Col>
                        <div
                            className="speedometer"
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative"
                            }}
                        >

                            <ReactSpeedometer
                                maxValue={UpdatedData.maxValue}
                                ringWidth={20}
                                //   customSegmentStops={[0, 30, 55, 65, 90, 120, 150]}
                                segmentColors={[
                                    "#FAFAFA",
                                    "#FAFAFA",
                                    "#007fff",
                                    "#FAFAFA",
                                    "#FAFAFA",
                                    "#FAFAFA"
                                ]}
                                needleHeightRatio={0.72}
                                valueTextFontSize="19px"
                                needleTransitionDuration={9000}
                                needleTransition="easeElastic"
                                currentValueText="${value} kW"
                                value={UpdatedData.leaderStatic.sumPapers}
                            />
                        </div>
                        <div className="divLabelReq">
                            <label
                                className="labelReq"
                                htmlFor="value"
                                style={{ color: "#6b6964" }}
                            >
                                Requested: 39.7kW
                </label>
                        </div>
                    </Col>
                    <Col>
                        <form className="form-settings" >

                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label
                                        className="label"
                                        htmlFor="value"
                                        style={{ color: "white" }}
                                    >
                                        Change Gauge Value:{" "}
                                    </label>
                                    {/* <input
                      type="number"
                      className="form-control"
                      name="value"
                      id="value"
                      placeholder="0"
                      onChange={this.handleGaugeValueChange}
                      value={this.state.keywords}
                    /> */}
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}



