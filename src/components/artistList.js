import React, { Component } from 'react';

import {Link } from 'react-router-dom'

class ArtistList extends Component {

    state = {

    }

    renderTemplate = (data) => {
    
        let template = null
        if(data){
            template = data.map(item => 
                (<Link to={`/artist/${item.id}`} className="artist__box" key={item.id} style={{
                    backgroundImage: `url(/images/${item.cover})`,
                    backgroundSize: 'cover'
                }}>
                    <div className="artist__name">
                    {item.name}
                    </div>
                </Link>
                )
            )
        }
        return template
    }

    render() {
        
        return (
            <div className='artists'>
                {this.renderTemplate(this.props.artists)}       
            </div>
        );
    }
}

export default ArtistList;