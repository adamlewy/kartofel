import * as _ from "lodash";

import {INCREMENT} from "../actions/counter";

const initialState = {
    counter: 0
};

export function counter(state: any = initialState, action: any): any {
    switch (action.type) {
        case INCREMENT:
            return _.assign({}, state, {counter: state.counter + 1});
        default:
            return state;
    }
}
