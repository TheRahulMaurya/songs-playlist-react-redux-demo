import {Component} from 'react';
import {connect} from 'react-redux'
import './SongDetail.css'

// create Song detail component
class SongDetail extends Component{

    // render the selected song details
    render(){
        if(!this.props.selectedSong){
            return(
            <div className="song-details">
                <h2>Please select a song.</h2>
            </div>
            )
        }
        return(
            <div className="song-details">
                {console.log(this.props)}
                <h2>Song Details:</h2>
                <p>Name: {this.props.selectedSong.title}</p>
                <p>Duration: {this.props.selectedSong.duration}</p>
            </div>
        )
    }
}

// map selected song detail to props
const mapStatetoProp = (state) =>{
    return{        
        selectedSong: state.selectedSong
    }
}

// connect function takes a param (e.g mapStatetoProp) 
// passes the state to it and whatever the return value is 
// it sets that in props.
export default connect(mapStatetoProp)(SongDetail)