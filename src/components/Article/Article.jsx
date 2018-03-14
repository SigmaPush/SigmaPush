import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div>
        Article : {this.props.match.params.id}
      </div>
    );
  }
}

export default Article;
