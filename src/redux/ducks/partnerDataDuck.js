import {createAction} from "../helper";

const FETCH_DATA = "partnerDataDuck/FETCH_DATA";
const SET_TABLE_DATA = "partnerDataDuck/SET_TABLE_DATA";

export const setLineData = createAction(FETCH_DATA);
export const setTableData = createAction(SET_TABLE_DATA);

const initialState = {
    lineData: [],
    tableData: []
};


const PartnerDataDuck = (state = initialState, {type, payload}) => {

    switch (type) {
        case SET_TABLE_DATA:
            return {...state, tableData: payload};
        case FETCH_DATA:
            return {...state, lineData: payload};
        default:
            return state;
    }
};

export default PartnerDataDuck;