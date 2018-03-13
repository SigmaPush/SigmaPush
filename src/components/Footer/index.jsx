import React from 'react';

function Footer(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">

        {/* TODO:change href to real link */}
        <li className="breadcrumb-item"><a href="/author/lidaxia">Home</a></li>
        <li className="breadcrumb-item"><a href="/author/laoshi">About Us</a></li>
        <li className="breadcrumb-item active" aria-current="page"><a href="ping">Contact</a></li>
      </ol>
    </nav>
  );
}

export default Footer;
