import React, { Component } from 'react';

class Reader extends Component {
  render() {
    return (
      <div>
        Reader : {this.props.match.params.id}
      </div>
    );
  }
}

export default Reader;
