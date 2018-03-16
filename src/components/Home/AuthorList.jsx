import React, { Component } from 'react';

class AuthorList extends Component {
  render() {
    return (
      <div class="list-group">
        <div class="row">
          <div class="col-md-3">name</div>
          <div class="col-md-9">data</div>
        </div>
      </div>
    );
  }
}

export default AuthorList;
