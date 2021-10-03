
import React, { useState } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Container } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import $ from 'jquery'
import HeaderLeader from '@leadercodes/header'
// import HeaderLeader from '@leadercodes/leader-header'


import './InformationTemp.css';
// import iconFive from '../img/iconFive.png'
// import iconOne from '../img/iconOne.png'
// import iconTwo from '../img/iconTwo.png';
// import iconThree from '../img/iconThree.png'
import { actions } from '../Redux/actions/staticAction'
import Chart2 from './Chart2'
import '../App.css'
import SourcesCards from './applictaionsCards/SourcesCards';
import '../components/applictaionsCards/SourcesCardsStyles.css'
import Gouge2 from './Gouge2'
import GougeTask from './GougeTask'
import GougeDeals from './GougeDeals'
import GougePaper from './GougePaper'
import keys from '../config/env/keys';

// -------get new date in correct format to filter data----------------------------------------------------

let currentDate = moment().format("MM/DD/YYYY");
let dateBeforeWeek = moment().subtract(1, 'week').format('MM/DD/YYYY');
let dateBeforeMonth = moment().subtract(1, 'month').format('MM/DD/YYYY');
let dateBeforeYear = moment().subtract(1, 'year').format('MM/DD/YYYY')

let circleStyle1 = {
    padding: 6,
    margin: 6,
    display: "inline-block",
    backgroundColor: "#DDA204",
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
    backgroundColor: "#0EBAA5",
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
    backgroundColor: "#FD2443",
    borderRadius: "50%",
    width: 1,
    height: 1,
    left: 0,
    top: 1
};

// --------------------------------------------------------------------------------------------------------------
const useStyles = () => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    paper: {
        borderRadius: '17px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
})
export default withStyles(useStyles)(function Information() {
    const ReducerData = useSelector(state => state.staticDetailsReducer)
    const user = ReducerData.user
    const dispatch = useDispatch()
    const [more, setMore] = useState(false);
    let [inmore, setInMore] = useState(true);

    //  ---filter by: last day,last week,last month,year
    function filterByDay() {

        $(".filterBy").css("font-weight", "unset")
        $("#day").css("font-weight", "bold")
        if (ReducerData.AllTask != null) {
            let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {
                const dateTask = AllTask.startDate.split("/")
                const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
                return (dateFormater === currentDate)
            })
            dispatch(actions.setTaskStatic(AllTaskData.length))

        }
        if (ReducerData.AllContact != null) {

            let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {

                const dateContact1 = (AllContact.createDateAndTime)
                let detaContact = moment(dateContact1).format("MM/DD/YYYY");
                return (detaContact === currentDate)
            })
            dispatch(actions.setContactStatic(AllContactData.length))
        }
        if (ReducerData.AllProject != null) {

            let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {

                const dateProject1 = (AllProject.closeDate)
                let dateProject = moment(dateProject1).format("MM/DD/YYYY");
                return (dateProject === currentDate)
                // const dateProject = AllProject.startDate.split("/")
                // const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
                // return (dateFormater === currentDate)
            })
            dispatch(actions.setProjectStatic(AllProjectData.length));

        }
        if (ReducerData.AllPapers != null) {
            let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {

                const datePaper1 = AllPapers.createdDate
                let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
                return (detaPaper === currentDate)
            })
            dispatch(actions.setPaperStatic(AllPapersData.length));

        }

    }
    function filterByWeek() {
        $(".filterBy").css("font-weight", "unset")
        $("#week").css("font-weight", "bold")
        if (ReducerData.AllProject != null) {
            let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {
                const dateProject1 = (AllProject.closeDate)
                let dateProject = moment(dateProject1).format("MM/DD/YYYY");
                return (new Date(dateProject) >= new Date(dateBeforeWeek))

                // const dateProject = AllProject.startDate.split("/")
                // const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
                // return (new Date(dateFormater) >= new Date(dateBeforeWeek))
            })
            dispatch(actions.setProjectStatic(AllProjectData.length));

        }
        if (ReducerData.AllPapers != null) {
            let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {

                const datePaper1 = AllPapers.createdDate
                let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
                return (new Date(detaPaper) >= new Date(dateBeforeWeek))
            })
            dispatch(actions.setPaperStatic(AllPapersData.length));

        }
        if (ReducerData.AllTask != null) {
            let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {
                const dateTask = AllTask.startDate.split("/")
                const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
                return (new Date(dateFormater) >= new Date(dateBeforeWeek))

            })
            dispatch(actions.setTaskStatic(AllTaskData.length))
        }
        if (ReducerData.AllContact != null) {
            let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {
                const dateContact1 = (AllContact.createDateAndTime)
                let detaContact = moment(dateContact1).format("MM/DD/YYYY");
                return (new Date(detaContact) >= new Date(dateBeforeWeek))
            })
            dispatch(actions.setContactStatic(AllContactData.length))
        }
    }
    function filterByMonth() {
        $(".filterBy").css("font-weight", "unset")
        $("#month").css("font-weight", "bold")
        if (ReducerData.AllProject != null) {
            let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {
                const dateProject1 = (AllProject.closeDate)
                let dateProject = moment(dateProject1).format("MM/DD/YYYY");
                return (new Date(dateProject) >= new Date(dateBeforeMonth))
                // const dateProject = AllProject.startDate.split("/")
                // const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
                // return (new Date(dateFormater) >= new Date(dateBeforeMonth))
            })
            dispatch(actions.setProjectStatic(AllProjectData.length));
        }
        if (ReducerData.AllPapers != null) {
            let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {
                const datePaper1 = AllPapers.createdDate
                let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
                return (new Date(detaPaper) >= new Date(dateBeforeMonth))
            })
            dispatch(actions.setPaperStatic(AllPapersData.length));
        }
        if (ReducerData.AllTask != null) {
            let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {
                const dateTask = AllTask.startDate.split("/")
                const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
                return (new Date(dateFormater) >= new Date(dateBeforeMonth))

            })
            dispatch(actions.setTaskStatic(AllTaskData.length))
        }
        if (ReducerData.AllContact != null) {
            ;
            let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {
                const dateContact1 = (AllContact.createDateAndTime)
                let detaContact = moment(dateContact1).format("MM/DD/YYYY")
                return (new Date(detaContact) >= new Date(dateBeforeMonth))
            })
            dispatch(actions.setContactStatic(AllContactData.length))
        }
    }
    function filterByYear() {
        $(".filterBy").css("font-weight", "unset")
        $("#year").css("font-weight", "bold")
        if (ReducerData.AllProject != null) {
            let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {
                const dateProject1 = (AllProject.closeDate)
                let dateProject = moment(dateProject1).format("MM/DD/YYYY");
                return (new Date(dateProject) >= new Date(dateBeforeYear))
                // const dateProject = AllProject.startDate.split("/")
                // const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
                // return (new Date(dateFormater) >= new Date(dateBeforeYear))
            })
            dispatch(actions.setProjectStatic(AllProjectData.length));
        }
        if (ReducerData.AllPapers != null) {
            let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {
                const datePaper1 = AllPapers.createdDate
                let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
                return (new Date(detaPaper) >= new Date(dateBeforeYear))
            })
            dispatch(actions.setPaperStatic(AllPapersData.length))
        }
        if (ReducerData.AllTask != null) {
            let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {
                const dateTask = AllTask.startDate.split("/")
                const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
                return (new Date(dateFormater) >= new Date(dateBeforeYear))
            })
            dispatch(actions.setTaskStatic(AllTaskData.length))
        }
        if (ReducerData.AllContact != null) {
            let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {
                const dateContact1 = (AllContact.createDateAndTime)
                let detaContact = moment(dateContact1).format("MM/DD/YYYY");
                return (new Date(detaContact) >= new Date(dateBeforeYear))
            })
            dispatch(actions.setContactStatic(AllContactData.length))
        }
    }
    return (
        <div>
            <HeaderLeader appName={"Leader"} userName={user ? user.username : ""} />
            <div className="firstDiv" style={{ backgroundColor: 'rgb(248, 249, 250)', paddingTop: '80px' }}>
                <div className="row pb-5" style={{ marginRight: '5%', marginLeft: '5%' }} >
                    <div className="col-3.5" style={{ direction: "rtl" }}>
                        <div className="col-3.5" style={{ direction: "rtl" }}>
                        </div>
                    </div>‏
                    <Grid container className="grid-container" spacing={4} >
                        <Grid item xs={12} sm={3} >
                            <Paper className="paperOne" onClick={() => {
                                // window.open(` https://contacts.dev.leader.codes/${user.username}`) 
                                window.open(`${keys.CONTACT_URL}/${user.username}`)

                            }}
                                style={{ cursor: 'pointer', padding: 10, borderRadius: '14px', background: '#fff', height: ' 100px', width: '240px', color: '#DDA204' }}>
                                <div className="ml-2 total" style={{ textAlign: 'start', fontWeight: 'bolder', color: 'black', fontSize: '12px' }}>
                                    Total Contacts {" "}
                                </div>
                                <div class="row justify-content-between">
                                    <div className="ml-2" >
                                        <div class="col-6 p-2">
                                            <h6 style={{ fontSize: "19px", color: "#DDA204" }} className="h6">
                                                {ReducerData.leaderStatic.sumContacts ? ReducerData.leaderStatic.sumContacts + "/5000" : "0/5000"}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="gouge">
                                        <Gouge2 className="gouge1"></Gouge2></div>
                                    {/* <div onClick={"https://pay.leader.codes/"} className="upladge" style={{ backgroundColor: "#DDA204" }}>upradge</div> */}
                                </div>
                                <div className="row" style={{ margin: '1px', fontWeight: 'bolder' }}>
                                </div>

                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Paper className="paperTwo" onClick={() => {
                                window.open(`${keys.PAPERS_URL}/admin/${user.username}`)
                                //  window.open(`https://papers.dev.leader.codes/admin/${user.username}`)
                            }} style={{ padding: 10, background: '#fff', cursor: 'pointer', color: '#01DCD1', borderRadius: '14px', height: ' 100px', width: '240px' }}>
                                <div className="total" style={{ textAlign: 'start', fontWeight: 'bolder', color: 'black', fontSize: '12px' }}>
                                    Total Papers {" "}
                                </div>
                                <div class="row justify-content-between">
                                    <div className="ml-2" >
                                        <div class="col-6 p-2">
                                            <h6 className="h6" style={{ fontSize: "19px" }}>
                                                {ReducerData.leaderStatic.sumPapers ? ReducerData.leaderStatic.sumPapers + "/500" : "0/500"}</h6>
                                        </div>
                                    </div>
                                    <div className="gouge">
                                        <GougePaper className="gouge1"></GougePaper></div>
                                </div>
                                {/* <div onClick={"https://pay.leader.codes/"} className="upladge" style={{ backgroundColor: "#0EBAA5" }}>upradge</div> */}
                                {/* <div className="row" style={{ margin: '1px' }}>
                                </div> */}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={3}  >
                            <Paper className="paperThree"
                                onClick={() => {
                                    window.open(`${keys.CONTACT_URL}/${user.username}/deals`)

                                    // window.open(`https://contacts.dev.leader.codes/${user.username}/deals`)
                                }}
                                style={{ cursor: 'pointer', padding: 10, background: '#fff', color: '#5475E3', borderRadius: '14px', height: ' 100px', width: '240px' }}>
                                <div className="ml-2 total" style={{ textAlign: 'start', fontWeight: 'bolder', color: 'black', fontSize: '12px' }}>
                                    Total Deals {" "}
                                </div>
                                <div class="row justify-content-between">
                                    <div className="ml-2">
                                        <div class="col-6 p-2">
                                            <h6 className="h6" style={{ fontSize: "19px" }}>
                                                {ReducerData.leaderStatic.sumProjects ? ReducerData.leaderStatic.sumProjects + "/500" : "0/500"}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="gouge">
                                        <GougeDeals className="gouge1"></GougeDeals></div>
                                    {/* <div
                                        onClick={() => {
                                            window.location.assign(`https://pay.leader.codes/`)
                                        }}
                                        className="upladge" style={{ backgroundColor: "#5475E3" }}>upradge</div> */}
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={3}  >
                            <Paper className="paperFour"
                                onClick={() => {
                                    // window.open(`https://reacthub.dev.leader.codes/${user.username}/myTasks`)

                                    window.open(`${keys.HUB_URL}/${user.username}/myTasks`)
                                }}
                                style={{
                                    paddingRight: '5px', paddingTop: '10px', background: '#fff', color: '#FD2443', borderRadius: '14px', cursor: 'pointer'
                                    , height: ' 100px', width: '240px'
                                }}>
                                <div

                                    className="ml-2 total cardFor" style={{ textAlign: 'start', fontWeight: 'bolder', color: 'black', fontSize: '12px' }}>
                                    Total Tasks  {" "}
                                </div>
                                <div class="row justify-content-between">
                                    <div class=" ml-2">
                                        <div className=" col-6 p-2" >
                                            <h6 className="h6" style={{ fontSize: "19px" }}>{ReducerData.leaderStatic.sumTasks ? ReducerData.leaderStatic.sumTasks + "/500" : "0/500"}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="gouge">
                                        <GougeTask className="gouge1"></GougeTask></div>
                                    {/* <p
                                        onClick={() => {
                                            window.location.assign(` 
                                            https://pay.leader.codes/`)
                                        }}
                                        className="upladge" style={{ backgroundColor: "#FD2443" }}>
                                        upradge
                                    </p> */}
                                </div>
                                <div className="row" style={{ margin: '1px' }}>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>

                </div>

                {more ?
                    <>
                        <div className="d-flex justify-content-center align-content-center">
                            <p className="moreTxt1  moreBtn" onClick={() => {
                                console.log(inmore)
                                setInMore(true)
                                console.log(inmore)
                                setMore(!more)
                            }}>Show Less</p>
                        </div>
                        <div className="div-container">
                            <Container className="p-0">
                                <div class="container p-0">
                                    <div class="row">
                                        <div class="col-md-6 mb-0 text-time-container">
                                            <Navbar expand="md" variant="light" className="nav mb-0 d-flex navmy" style={{ justifyContent: "flex-start" }}>
                                                <p id="day" onClick={filterByDay} className="filterBy">Day</p>
                                                <p id="week" onClick={filterByWeek} className="filterBy">Week</p>
                                                <p id="month" onClick={filterByMonth} className="filterBy">Month</p>
                                                <p id="year" onClick={filterByYear} className="filterBy">Year</p>
                                            </Navbar>
                                        </div>
                                        <div class="col-md-6 circle-menu-container">
                                            <Navbar expand="md" variant="light" className="justify-content-end is-small nav2">
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
                            </Container>
                        </div>
                        <Chart2 />
                        <div style={{ backgroundColor: "rgb(248, 249, 250)", height: "55px" }} className="backgroundDiv"></div>
                    </>
                    :
                    <div className="d-flex justify-content-center align-content-center">
                        <p className="moreTxt1 moreBtn" onClick={
                            () => {
                                ;
                                setMore(!more)
                                console.log(more)
                                setInMore(false)
                            }}>Show More</p>
                    </div>
                }
            </div>
            <SourcesCards inMore={inmore} />
        </div >
    )
})


