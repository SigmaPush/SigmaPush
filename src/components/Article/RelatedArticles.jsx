import React, { Component } from 'react';

export default class RelatedArticles extends Component {
  render() {
    return (
      <div>
        <h2>Related articles</h2>
        <div className="card-group">
        
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Why Li da xia loves Red?</h5>
            <p className="card-text d-none d-sm-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Ji xiang san bao</h5>
            <p className="card-text d-none d-sm-block">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">UTDFBoys</h5>
            <p className="card-text d-none d-sm-block" >This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
        </div>
      </div>  
    </div>
    );
  }
}