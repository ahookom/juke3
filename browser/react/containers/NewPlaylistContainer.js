import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.changeHandler=this.changeHandler.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
      playlistName: 'name your playlist'
    }
  }

  changeHandler(e){
    const playlistName = e.target.value;
    this.setState({playlistName});
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state.playlistName);

  }

  render(){
    return <NewPlaylist playlistName={this.state.playlistName} changeHandler={this.changeHandler} onSubmit={this.onSubmit} />
  }

}
