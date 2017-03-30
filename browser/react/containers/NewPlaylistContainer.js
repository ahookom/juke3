import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios'

export default class NewPlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.changeHandler=this.changeHandler.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
      playlistName: 'name your playlist',
      isValid: false,
      warning: null
    }
  }

  changeHandler(e){
    const playlistName = e.target.value;
    const isValid = this.isValid(playlistName);
    const warning = !isValid && 'Playlists must be strings between 5 and 16 character'
    this.setState({
      playlistName,
      isValid: isValid,
      warning: warning
    });

  }

  onSubmit(e){
    e.preventDefault();

    axios.post('/api/playlists', { name: this.state.playlistName })
      .then(res => res.data)
      .then(result => {
        console.log(result) // response json from the server!
      });

    this.setState({
      playlistName: ''
    })
  }

  isValid(input){
    return (typeof input === 'string'
            && input.length > 5
            && input.length < 16);
  }

  render(){
    return (
    <NewPlaylist valid={this.state.isValid} warning={this.state.warning} playlistName={this.state.playlistName} changeHandler={this.changeHandler} onSubmit={this.onSubmit} />
  )}

}
