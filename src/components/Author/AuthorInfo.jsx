import React from 'react';

import CatalogRadar from './CatalogRadar';
import AuthorProfile from './AuthorProfile';

import authorPhoto from '../../lidaxia.jpg';

const author = {
  name: 'lidaxia',
  avatar: authorPhoto,
  description: 'lalala lalala wo shi mai bao de xiao hang jia \n lalala lalala wo shi mai bao de xiao hang jia',
  radarOption: true,
  catalogs: {
      ML: 29,
      Algorithm: 24,
      OS: 34,
      Others: 35,
      NLP: 15,
  },
};

const allCatalogs = [
  'ML',
  'Algorithm',
  'OS',
  'AI',
  'NLP',
  'DL',
  'Others',
];

function AuthorInfo(props) {
  const { name, avatar, description, radarOption, catalogs } = author;

  return (
    <div className="container border-primary border my-2">
      <div className="row justify-content-center">
        <div className="col-md-4 d-flex align-items-center border border-success m-1" >
          <CatalogRadar catalogs={catalogs} option={radarOption} allCatalogs={allCatalogs} />
        </div>
        <div className="col-md-6 text-right d-flex align-items-center border border-success m-1" >
          <AuthorProfile name={name} avatar={avatar} description={description} />
        </div>
      </div>
    </div>
  );
}

export default AuthorInfo;
