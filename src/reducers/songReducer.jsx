import {combineReducers, createStore} from "redux"; 
import { selectSong } from "../actions/selectSong";

// create a song list reducer
export const songListReducer = (song) =>{
    return([
        {
            title: "song 1",
            duration: "2:45"
        },
        {
            title: "song 2",
            duration: "2:00"
        },
        {
            title: "song 3",
            duration: "5:23"
        },
        {
            title: "song 4",
            duration: "4:25"
        }

    ]);
}

// as the dispacher bring old and new value of the action thats why there is two args
export const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type === "SELECTED_SONG"){
        return action.payload
    }
    return selectSong;
}

// combine all reducers
const reducers = combineReducers({
    songList: songListReducer,
    selectedSong: selectedSongReducer
});

// create a store, store is also used to dispatch/update the actions 
const store = createStore(reducers);    


export default store;