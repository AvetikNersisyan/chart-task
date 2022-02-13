import {createAction} from "../helper";

const FETCH_DATA = "partnerDataDuck/FETCH_DATA";
const SET_TABLE_DATA = "partnerDataDuck/SET_TABLE_DATA";
const SET_SUMMARY = "partnerDataDuck/SET_SUMMARY";

export const setLineData = createAction(FETCH_DATA);
export const setTableData = createAction(SET_TABLE_DATA);
export const setSummary = createAction(SET_SUMMARY);

const initialState = {
    lineData: [],
    tableData: [],
    summaryData: {}
};


const PartnerDataDuck = (state = initialState, {type, payload}) => {

    switch (type) {
        case SET_TABLE_DATA:
            return {...state, tableData: payload};
        case SET_SUMMARY:
            return {...state, summaryData: payload}
        case FETCH_DATA:
            return {...state, lineData: payload};
        default:
            return state;
    }
};

export default PartnerDataDuck;