import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Header from './components/header';
import Footer from './components/footer';


const API_KEY = "AIzaSyDIBlD4mrQnRzayZJT2ckZHZigh85zf6kA";

class App extends Component{
  constructor(props){
    super(props);

    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    })
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return(
      <div>
        <nav className="row">
          <Header />
          <SearchBar onSearchTermChange={videoSearch} />
        </nav>
        <section>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
        </section>
        <Footer />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#container'));