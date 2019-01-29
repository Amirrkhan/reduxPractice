import React, { Component } from 'react';

import {connect} from 'react-redux'
import {artistListAll, artistList} from '../actions'
import {bindActionCreators} from 'redux'

import Search from '../components/search'
import ArtistList from '../components/artistList'


class HomeContainer extends Component {

  state = {
    keyword: ''
  }

  componentDidMount(){
    this.props.artistListAll()
    
  }


  valueListening = (newValue) => {

    this.props.artistList(newValue)
    this.setState({
      keyword: newValue
    })
  } 
    
  render() {      
    let artistList = this.props.artists.artistList
    return (
      <div className="App">
        <div className="title" style={{textAlign:'center'}}>
          <h1>Search Your Artist</h1>
        </div>
        <Search valueListening={this.valueListening}
                inputValue = {this.state.keyword}        
        />
        <ArtistList artists = {artistList}/>
      </div>
    );
  }
}

function mapStateToProps (state ){
    
    return {
        artists: state.artists
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({artistListAll, artistList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);