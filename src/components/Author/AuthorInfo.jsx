import React from 'react';

import CatalogRadar from './CatalogRadar';
import AuthorProfile from './AuthorProfile';

function AuthorInfo(props) {
  return (
    <div className="container bg-light">
      AuthorInfo
      <div className="row justify-content-md-center">
        <CatalogRadar />
        <AuthorProfile />
      </div>
    </div>
  );
}

export default AuthorInfo;
