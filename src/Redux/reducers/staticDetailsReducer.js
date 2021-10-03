import produce from 'immer';
import { createReducer } from "./reducerUtils";
import moment from 'moment';


const initialState = {
    leaderStatic: { sumContacts: 0, sumPapers: 0, sumProjects: 0, sumTasks: 0 },
    GougeContact: "0",
    dataStatic: [],
    AllProject: [],
    AllTask: [],
    AllContact: [],
    AllPapers: [],
    jwt: "",
    papers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    projects: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    tasks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    contacts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    user: {}
};

const staticData = {

    setJwt(state, action) {

        state.jwt = (action.payload);
    },

    setUserName(state, action) {

        state.user.username = (action.payload);
    },
    setUser(state, action) {

        state.user = (action.payload);
    },
    setContactStatic(state, action) {

        state.leaderStatic.sumContacts = action.payload
    },
    setProjectStatic(state, action) {

        state.leaderStatic.sumProjects = action.payload
    },
    setProjectData(state, action) {
        if (action.payload != null) {
            state.AllProject = action.payload.result
        }
        else {
            state.AllProject = action.payload
        }
    },
    setTaskStatic(state, action) {
        state.leaderStatic.sumTasks = action.payload
    },
    setTaskData(state, action) {
        state.AllTask = action.payload
    },
    setTaskChart(state = initialState, action) {
        if (action.payload != null) {
            let allData = action.payload
            const arr = [...state.tasks];
            for (let i = 0; i < allData.length; i++) {

                const date1 = allData[i].startDate.split("/")
                let date2 = date1[1]
                if (date2[0] != 0) {
                    const x = (arr[date2]) + 1
                    arr[date2] = x;
                }
                else {
                    date2 = date2[1]
                    const x = (arr[date2]) + 1
                    arr[date2] = x;
                }
            }
            state.tasks = [...arr];
        }
    },
    setProjectChart(state = initialState, action) {
        if (action.payload != null) {
            let allData = action.payload.result
            const arr = [...state.projects];
            for (let i = 0; i < allData.length; i++) {
                const date1 = allData[i].closeDate
                let date11 = moment(date1).format("MM/DD/YYYY").split("/")
                let date2 = date11[0]

                if (date2[0] != 0) {
                    const x = (arr[date2]) + 1
                    arr[date2] = x;
                }
                else {
                    date2 = date2[1]
                    const x = (arr[date2]) + 1
                    arr[date2] = x;
                }
            }
            state.projects = [...arr];
        }
    },
    setContactChart(state = initialState, action) {
        debugger
        if (action.payload != null) {

            let allData = action.payload
            console.log(initialState.contacts)
            const arr = [...state.contacts];
            for (let i = 0; i < allData.length; i++) {

                const date1 = allData[i].createDateAndTime
                let date11 = moment(date1).format("MM/DD/YYYY").split("/")
                let date2 = date11[0]
                if (date2[0] != 0) {
                    const x = (arr[date2]) + 1
                    arr[date2] = x;
                }
                else {
                    date2 = date2[1]
                    const x = (arr[date2]) + 1
                    arr[date2] = x;
                }
            }
            state.contacts = [...arr];
        }
    },
    setPaperChart(state = initialState, action) {

        if (action.payload != null) {
            let allData = action.payload
            console.log(initialState.papers)
            const arr = [...state.papers];
            for (let i = 0; i < allData.length; i++) {

                const date1 = allData[i].createdDate
                let date11 = moment(date1).format("MM/DD/YYYY").split("/")
                let date2 = date11[0]
                if (date2[0] != 0) {
                    const x = (arr[date2]) + 1
                    arr[date2] = x;
                }
                else {
                    date2 = date2[1]
                    const x = (arr[date2]) + 1
                    arr[date2] = x;
                }
            }
            state.papers = [...arr];
        }
    },
    setPaperStatic(state, action) {
        state.leaderStatic.sumPapers = action.payload
    },
    setContactData(state, action) {
        state.AllContact = action.payload
    },
    setPaperData(state, action) {
        state.AllPapers = action.payload
    },
};

export default produce((state, action) => createReducer(state, action, staticData), initialState);