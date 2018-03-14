import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="container">
            <p className="float-right"><a href="">Back to top</a></p>
            <p>&copy; 2017-2018 &Sigma;p, Inc. &middot; <a href="">Team</a> &middot; <a href="">Privacy</a> &middot; <a href="">Terms</a></p>
        </footer>
    );
  }
}

export default Footer;