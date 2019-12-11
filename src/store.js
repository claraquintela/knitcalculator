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
        console.log("logging the patterns", action.patterns)
        return {
            ...state,
            loggedIn: true,
            username: action.username,
            patterns: action.patterns
        };
    }

    if (action.type === "dataSock-submitted") {
        return {
            ...state,
            dataSock: action.dataSock,
        };
    }
    if (action.type === "dataMittens-submitted") {
        return {
            ...state,
            dataMittens: action.dataMittens,
        };
    }
    if (action.type === "dataBabyBlanket-submitted") {
        return {
            ...state,
            dataBabyBlanket: action.dataBabyBlanket,
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

    if (action.type === "delete-pattern") {
        return {
            ...state,
            patterns: state.patterns.filter(pattern => {
                if (pattern._id !== action.id) return true
                else return false
            }),
        };
    }
    return state
}

let initialState = {
    dataSock: {
        title: undefined,
        needle: "",
        yarn: "",
        stitches: 0,
        rows: 0,
        footcirc: 0,
        footlength: 0
    },
    dataMittens: {
        title: undefined,
        needle: "",
        yarn: "",
        stitches: 0,
        rows: 0,
        handcirc: 0,
        handlength: 0
    },
    dataBabyBlanket: {
        title: undefined,
        needle: "",
        yarn: "",
        stitches: 0,
        rows: 0,
        width: 0,
        height: 0
    },
    users: [],
    username: "",
    patterns: [],
    loggedIn: false,
}

let store = createStore(
    reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;