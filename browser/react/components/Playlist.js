import React from 'react';
import Songs from './Songs';

class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      value: 2
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.selectPlaylist(this.props.routeParams.playlistId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.routeParams.playlistId !== nextProps.routeParams.playlistId)
      this.props.selectPlaylist(nextProps.routeParams.playlistId)
  }

  handleChange(e){
    this.setState({value: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    this.props.updatePlaylist(this.state.value)
  }

  render() {
    const playlist = this.props.selectedPlaylist;
    return (
      <div>
        <h3>{playlist.name}</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        {playlist.songs && !playlist.songs.length && <small>No songs.</small>}
        <hr />
        <div className="well">
          <form onSubmit={this.onSubmit}className="form-horizontal" noValidate name="songSelect">
            <fieldset>
              <legend>Add to Playlist</legend>
              <div className="form-group">
                <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                <div className="col-xs-10">
                  <select onChange={this.handleChange} value={this.state.value} className="form-control" name="song">
                    {this.props.songs.map(song =>
                      <option key={song.id} value={song.id}>{song.name}</option>
                     )}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                  <button type="submit" className="btn btn-success">Add Song</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>



      </div>
    )
  }
}

export default Playlist;

                    // {this.props.songs.map((song)=>return
                    //   <option value={/**SONGID_GOES_HERE*/}>song name</option>
                    //   )}

