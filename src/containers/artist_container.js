import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import {getOneArtist, clearArtistInfo} from '../actions'

class ArtistContainer extends Component {

    componentDidMount(){
        this.props.clearArtistInfo()
        this.props.getOneArtist(this.props.match.params.id)
    }

    renderArtistPage = (data) => {
        let template = null
        if(data){
            template = data.map((item, i)=>(
                <div className="artistpage" key={i}>
                    <div className="artistpage__about">
                        <div className="artist__box"
                            style={{
                                    backgroundImage: `url(/images/${item.cover})`,
                                    backgroundSize: 'cover'
                            }}
                        >
                            <Link to="/" className="artistpage__home">
                                Back to home
                            </Link>
                            <div className="artist__name">
                                {item.name}
                            </div>
                        </div>
                        <div className="artistpage__bio">
                            {item.bio}
                            <div className="artistpage__style">
                                <span>Style:</span> {item.style}
                            </div>  
                        </div>
                    </div>
                    
                    
                    <div className="artistpage__albums">
                        {item.albums.map((innerItem, i) => (
                            <div className="artist__box artist__box--album"
                                style={{
                                        backgroundImage: `url(/images/albums/${innerItem.cover})`,
                                        backgroundSize: `cover`
                                        }}
                                key={i}
                            >
                                <div className="artist__name">
                                    {innerItem.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))
        }

        return template
    }
    

    render() {
        
        return (
            <div>
            {this.renderArtistPage(this.props.artists.artistData)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        artists: state.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getOneArtist, clearArtistInfo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);