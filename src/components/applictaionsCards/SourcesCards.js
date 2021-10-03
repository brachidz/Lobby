import React, { useState } from "react";
import $ from 'jquery'

import box from '../../assets/images/box.svg';
import crm from '../../assets/images/crm.svg';
import papers from '../../assets/images/papers.svg';
import time from '../../assets/images/time.svg';
import funnel from '../../assets/images/funnel.svg';
import hub from '../../assets/images/hub.svg';
// import chat from '../../assets/images/chat.svg';
import clocks from '../../assets/images/clocks.svg';
import BLDR from '../../assets/images/BLDR.svg';
import knowme from '../../assets/images/knowme.svg';
import hoverKnowme from '../../assets/images/hoverKnowme.svg';
import soundBox from '../../assets/images/soundBox.svg';
import hoverBLDR from '../../assets/images/hoverBLDR.svg';
import hoverSoundBox from '../../assets/images/hoverSoundBox.svg';
import vlogger from '../../assets/images/vlogger.svg';
import hoverVlogger from '../../assets/images/hoverVlogger.svg';
import hoverClocks from '../../assets/images/hoverClocks.svg';
import hoverBox from '../../assets/images/hoverBox.svg';
import hoverFunnel from '../../assets/images/hoverFunnel.svg';
import hoverHub from '../../assets/images/hoverHub.svg';
// import hoverChat from '../../assets/images/hoverChat.svg';
// import hoverStories from '../../assets/images/hoverStories.svg';
import hoverPapers from '../../assets/images/hoverPapers.svg';
import hoverCrm from '../../assets/images/hoverCrm.svg';
import hoverTime from '../../assets/images/hoverTime.svg';
import user from '../../assets/images/user.svg'
// import ribbon from '../../assets/images/ribbon.svg'
// import SourcesCardsStyles from './SourcesCardsStyles.css';
// import { connect } from 'react-redux';
// import { getUser } from '../../redux/actions/user.action';
// import ReactTooltip from 'react-tooltip';
import Tooltip from '@material-ui/core/Tooltip';
// import { Badge } from '@material-ui/core';
import { animations } from 'react-animation';
import { useSelector } from 'react-redux';
import keys from "../../config/env/keys";
// import { actions } from '../../Redux/actions/staticAction';


function SourcesCards(props) {

    const ReducerData = useSelector(state => state.staticDetailsReducer)
    const [index, setIndex] = useState(-1);
    // const [userName, setuser, Name] = useState("");
    const [clickedApplicationIndex, setClickedApplicationIndex] = useState(-1);
    const [more, setMore] = useState(false);
    const [initial, setinitial] = useState(true);
    // const [jwt, setJwt] = useState("");
    ;

    const leaderApps = [
        {
            i: 0,
            title: "Box",
            text: "CRM For Managing All Client Contact And Interactions Using Leader Tools",
            isActiveApp: true,
            color: "#2198FF",
            overColor: "#EFF7FF",
            img: box,
            overImg: hoverBox,
            url: `${keys.BOX_URL}/${ReducerData.user.username}`,
            leader: true
        },
        // {
        //     i: 1,
        //     title: "Funnel",
        //     text: "Lead Capture System With Marketing Campaigns And Landing Pages",
        //     isActiveApp: true,
        //     color: "#44D7B6",
        //     overColor: "#EFFFFC",
        //     overImg: hoverFunnel,
        //     img: funnel,
        //     url: `https://dev.vloger.codes/admin/${ReducerData.user.username}`,
        //     leader: true
        // },
        {
            i: 2,
            title: "Hub",
            text: "Manage Your Projects, Teams And Tasks, Priorities And Performance Goals",
            isActiveApp: true,
            color: "#6DD400",
            overColor: "#FAFFF5",
            overImg: hoverHub,
            img: hub,
            url: `${keys.HUB_URL}/${ReducerData.user.username}/hub`,
            leader: true
        },
        // {
        //     i: 3,
        //     title: "Leader Clocks",
        //     text: "Blog Writing Platform With Integrated Keywords And Lead Conversation System",
        //     isActiveApp: false,
        //     color: "#FF808B",
        //     overColor: "#FFF5F6",
        //     overImg: hoverClocks,
        //     img: clocks,
        //     url: `https://chat.dev.leader.codes/${ReducerData.user.username}`,
        //     leader: true
        // },
        {
            i: 4,
            title: "Time",
            text: "Intergrated Calendar For Managing Leads, Meetings Events And Deadlines",
            isActiveApp: true,
            color: "#B620E0",
            overColor: "#FCF1FF",
            img: time,
            overImg: hoverTime,
            url: `${keys.CALANDER_URL}/${ReducerData.user.username}`,
            leader: true
        },

        {
            i: 5,
            title: "papers",
            text: "Intuitive Form Builder Including Api Integration With Popular Applications",
            isActiveApp: false,
            color: "#F7B500",
            overColor: "#FFFAEE",
            overImg: hoverPapers,
            img: papers,
            url: `${keys.PAPERS_URL}/admin/${ReducerData.user.username}`,
            leader: true
        },
        {
            i: 6,
            title: "Contacts",
            text: "Customizable Proposal Templates For Customer Quotations And Contracts",
            isActiveApp: true,
            color: "#6236FF",
            overColor: "#F4F2FF",
            overImg: hoverCrm,
            img: crm,
            url: `${keys.CONTACT_URL}/${ReducerData.user.username}`,
            leader: true

        },


    ]

    const moreApps = [
        {
            i: 7,
            title: "Vlogger",
            text: "Customizable Proposal Templates For Customer Quotations And Contracts",
            isActiveApp: true,
            color: "#DB0019",
            overColor: "#FFEAEC",
            overImg: hoverVlogger,
            img: vlogger,
            url: `${keys.VLOGER_URL}/admin/${ReducerData.user.username}?jwt=${ReducerData.jwt}`,
            leader: false
        },
        {
            i: 8,
            title: "Sound Box",
            text: "Customizable Proposal Templates For Customer Quotations And Contracts",
            isActiveApp: true,
            color: "#4A0082",
            overColor: "#F7EBFF",
            overImg: hoverSoundBox,
            img: soundBox,
            url: `${keys.QOUTE_URL}/${ReducerData.user.username}/NewLead`,
            leader: false
        },
        {
            i: 9,
            title: "Know Me",
            text: "Customizable Proposal Templates For Customer Quotations And Contracts",
            isActiveApp: true,
            color: "#C41082",
            overColor: "#FFF2FA",
            overImg: hoverKnowme,
            img: knowme,
            // url: `https://quote.dev.leader.codes/saraa/NewLead`
            url: `${keys.QOUTE_URL}/${ReducerData.user.username}/NewLead`,
            leader: false
        },
        {
            i: 10,
            title: "BLDR",
            text: "Customizable Proposal Templates For Customer Quotations And Contracts",
            isActiveApp: true,
            color: "#FBCD4F",
            overColor: "#FFF2FA",
            overImg: hoverBLDR,
            img: BLDR,
            // url: `https://quote.dev.leader.codes/sarra/NewLead`
            url: `${keys.QOUTE_URL}/${ReducerData.user.username}/NewLead`,
            leader: false
        }
    ]

    const navigateProfil = () => {
        let url = window.location;
        let userName = (url.pathname.split('/')[1]);
        window.open(`${keys.LOBBY_URL}/${ReducerData.user.username}/profile`);
    }

    const showApps = (apps) => {

        return (
            <div className="row all-apps-in-small in-large">
                {apps.map((card) => card &&
                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xs-12 mb-5 d-flex justify-content-center">
                        <div class="box myCard"
                            style={{
                                backgroundColor: index === card.i ? card.overColor : "#F4F2FF",
                                animation: !card.leader && more ? animations.fadeIn : !card.leader && console.log("animations.fadeOut")
                            }}
                            onClick={() => {
                                // if (card.isActiveApp)

                                // console.log(ReducerData.jwt)

                                // console.log(Reducer    Data.jwt)

                                window.open(card.url)

                                // else
                                //     setClickedApplicationIndex(card.i)
                            }}
                            onMouseEnter={() => {

                                setIndex(card.i)
                            }}
                            onMouseLeave={() => {

                                setIndex(-1)
                                setClickedApplicationIndex(-1)
                            }}
                            hidden={card.i > 6 && initial}
                        >
                            <img className="offset-2 mt-2 mb-0  d-flex align-items-center appIcon" src={card.img} alt="img"
                                src={index === card.i ? card.overImg : card.img} />
                            <div class="hid-box" style={{ backgroundColor: card.color }}>
                                {card.i === index ?
                                    <p className="myCardText p-2 m-1">{card.text}</p>
                                    : <p className="myCardTitle p-2 mt-2">{card.title}</p>}
                            </div>
                        </div>
                    </div>
                )}
            </div >
        )
    }

    return (
        <>
            <div className="warpDiv space row  offset-2 col-8  d-flex justify-content-center align-items-center">
                <div className="height col-12 d-flex justify-content-center">
                    <div className="imgProfil in-small-profil mt-3 align-items-center">
                        {props.inMore ? " "
                            // $(".space").css("margin-top", "unset")
                            :
                            <div className="inmore"></div>
                        }
                        {/* <Tooltip placement="top" arrow title="Profile setting" aria-label="add">
                            <img className="imgProfil imgProfilinsmall"
                                onClick={navigateProfil} alt="img 1"
                                src={ReducerData.user.imgProfile ? ReducerData.user.imgProfile : user}
                                onError={(e) => { e.target.onerror = null; e.target.src = user }
                                }
                            />
                        </Tooltip> */}
                    </div>
                </div>

                {/* <div className=" in-small-hey d-flex justify-content-center heyTxt mb-3 mt-2">
                    {ReducerData.user.username ? `Hey, ${ReducerData.user.username}`
                        : "Hey"}
                </div> */}

                <div className="title col-12 mb-4 divTitle">
                    <h2 className="title">
                        What do you want to do?
                    </h2>
                </div>‏

                {showApps(leaderApps)}
                {/* {more && showApps(moreApps)}
                <div className="row mt-0 d-flex moreBtn justify-content-center">
                    <div className="col d-flex justify-content-center" onClick={() => {
                        setMore(!more)
                        setinitial(false)
                    }}>
                        {more ?
                            <p className="moreTxt" >Less-</p>
                            : <p className="moreTxt" >More+</p>
                        }
                    </div>
                </div> */}
            </div>
        </>

    )
}


export default SourcesCards;

