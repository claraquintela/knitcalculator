import {
    createStore
} from "redux";

let reducer = (state, action) => {
    if (action.type === "logout") {
        return {
            ...state,
            login: false,
            username: ""
        };
    }
    if (action.type === "login-success") {
        return {
            ...state,
            login: true,
            username: action.username
        };
    }

}

let store = createStore(
    reducer, {
        products: [],
        searchResults: [],
        users: [],
        username: "",
        login: false,
        hasSearched: false
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;