// This is the select song action
export const selectSong = song => {
    // returns selected song data
    console.log("inside select song action")
    console.log(song)
    return {
        // type is a mandatory field in actions
        type: "SELECTED_SONG",
        payload: song
    }
}