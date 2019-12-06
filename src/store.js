import {
    createStore
} from "redux";

let reducer = (state, action) => {
    if (action.type === "logout") {
        return {
            ...state,
            loggedIn: false,
            username: ""
        };
    }
    if (action.type === "login-success") {
        return {
            ...state,
            loggedIn: true,
            username: action.username,
            patterns: action.patterns
        };
    }

    if (action.type === "data-submitted") {
        return {
            ...state,
            data: action.data,
        };
    }
    if (action.type === "reset-data") {
        return {
            ...state,
            data: initialState.data,
        };
    }

    if (action.type === "update-patterns") {
        return {
            ...state,
            patterns: action.patterns,
        };
    }
    return state
}

let initialState = {
    data: {
        title: undefined,
        stitches: 0,
        rows: 0,
        footcirc: 0,
        footlength: 0
    },
    users: [],
    username: "",
    patterns: [],
    loggedIn: false,
    hasSearched: false
}

let store = createStore(
    reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;