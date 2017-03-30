import React from 'react';
import Songs from './Songs';

class Playlist extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.selectPlaylist(this.props.routeParams.playlistId)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.routeParams.playlistId !== nextProps.selectedPlaylist.id)
      this.props.selectPlaylist(nextProps.routeParams.playlistId)
  }

  render(){
    const playlist = this.props.selectedPlaylist;
    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    )
  }
}

export default Playlist;

