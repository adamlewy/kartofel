import * as React from "react";
import * as ReactDOM from "react-dom";
import ReduxThunk from "redux-thunk"
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import {reducers} from "./reducers/index";

import {Index} from "./index";

const finalCreateStore = compose(
    applyMiddleware(ReduxThunk)
)(createStore);

const store = finalCreateStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById("root")
);
