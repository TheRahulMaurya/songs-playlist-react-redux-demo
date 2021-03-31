import {Component} from "react";
import {connect} from 'react-redux';
import {selectSong} from '../actions/selectSong';

// create a component to hold list of
class SongList extends Component {

    render(){
        // extract each song from song list and assign HTML element to it.
        return this.props.songs.map((song) => {
            return(
                <div key= {song.title}>
                    <h4>{song.title}</h4>
                    <p>{song.duration}</p>
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
export default connect(mapStateToProp, {selectSong})(SongList);