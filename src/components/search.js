import React, { Component } from 'react';

class Search extends Component {

    changeValue = (event) => {
        return this.props.valueListening(event.target.value)
    }

    render() {
        return (
            <div className="search">
              <input type="text" value={this.props.inputValue}
                        onChange={(event) => this.changeValue(event)}
              />
            </div>
        );
    }
}

export default Search;