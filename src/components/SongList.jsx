import {Component} from "react";
import {connect} from 'react-redux';
import {selectSong} from '../actions/selectSong';
import './SongList.css'

// create a component to hold list of
class SongList extends Component {

    render(){
        // extract each song from song list and assign HTML element to it.
        return this.props.songs.map((song) => {
            return(
                <div className = "song-list" key= {song.title}>
                    <h4 className = "song-title">{song.title}</h4>
                    <input 
                    type = "button" 
                    value="Select" 
                    onClick={
                        () => {this.props.selectSong(song);}
                            }/>
                </div>
            )
        })
            
        
    }
} 

// map state to prop. The function name can be anything
const mapStateToProp = (state) => {
    // return an object as prop
    return{
        selectedSong: state.selectedSong,
        songs: state.songList
    };
}

// the connect()() syntax is this because connect() function returns another function
// added action i.e selectStore to connect because it provides action in the props so that we can call 'this.prop.selectSong(song)'
export default connect(mapStateToProp, {selectSong})(SongList);