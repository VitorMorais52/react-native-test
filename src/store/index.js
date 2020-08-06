import {createStore, combineReducers} from 'redux';


const INITIAL_STATE  = {
    dataFriends: [],

}

function setFriendsReducer(state = INITIAL_STATE, action){
    
    switch(action.type){
     case 'SET_DATA':
         return {dataFriends: action.data};  
     default:
         return state;
   }
   
}


const store = createStore(setFriendsReducer);
export default store;