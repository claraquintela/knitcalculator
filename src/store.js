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
    return state
}

let store = createStore(
    reducer, {
        data: {
            title: "",
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
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;