import React, { Component } from 'react';

class Author extends Component {
  render() {
    return (
      <div>
        Author : { this.props.match.params.id }
      </div>
    );
  }
}

export default Author;
