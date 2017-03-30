import React from 'react';
import { Link } from 'react-router';
import Artists from '../components/Artists.js';
import FilterInput from '../components/FilterInput.js';

export default class FilterableArtistsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      artists: props.artists,
      currentArtists: props.artists,
      filter: ''
    }
    this.updateHandler=this.updateHandler.bind(this);
  }
  updateHandler(e){
    const filter = e.target.value;
    const re = new RegExp(filter,'i')
    const filteredArtists = this.state.artists.filter(artist => artist.name.match(re))
    this.setState({
      currentArtists: filteredArtists,
      filter:filter
    })
  }

  render(){
    return(
      <div>
      <FilterInput updateHandler={this.updateHandler}/>
      <Artists artists={this.state.currentArtists} />
      </div>
    )

  }

}
