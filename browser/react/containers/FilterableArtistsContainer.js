import React from 'react';
import { Link } from 'react-router';
import Artists from '../components/Artists.js';
import FilterInput from '../components/FilterInput.js';

export default class FilterableArtistsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentArtists: props.artists,
      filter: ''
    }
    this.updateHandler=this.updateHandler.bind(this);
  }
  updateHandler(e){
    console.log(e.target.value);
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
