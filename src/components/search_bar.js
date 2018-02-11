import React, { Component } from 'react';

class SearchBar extends Component{

  constructor(props){
    super(props)

    this.state = {term: ''};
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render(){
    return (
      <div className="col-md-8">
        <input className="search-bar" value = {this.state.term} onChange = {event => this.onInputChange(event.target.value)} placeholder="Search here"/>
      </div>
    )
  }
}

export default SearchBar;