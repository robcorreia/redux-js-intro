// import redux e create store
const redux = require('redux');
const createStore = redux.legacy_createStore;

// Actions e Actions TYPE
const CHANGE_USER =  'CHANGE_USER';
const LOGOUT = 'LOGOUT';


// Actions
function changeUser(user) {
    return {
        type: CHANGE_USER,
        info: "Change the current user",
        payload: user
    };
}

function logout() {
    return {
        type: LOGOUT,
        info: "Logout the current user",
    }
}

//estado inicial, ideal passar no reducer para não retornar undefined
const initialState = {
    user: '',
    isLogged: false,
    count: 0
}

//  Reducers 
function userReducer(prevState = initialState, action) {
    switch(action.type) {
        case CHANGE_USER:
            return {
                ...prevState,
                user: action.payload,
                isLogged: true,
                count: prevState.count +1
            }
        case LOGOUT:
            return {
                ...prevState,
                user: '',
                isLogged: false
            }
            default: {
                return prevState;
            }
    }
}

// Store
const store = createStore(userReducer);

console.log('initial state', store.getState());
store.dispatch(changeUser('Robson'));
store.dispatch(changeUser('Robson Correia'));
console.log('alter state', store.getState());
store.dispatch(logout());
console.log('logou', store.getState());

