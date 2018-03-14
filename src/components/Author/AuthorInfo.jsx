import React from 'react';

import CatalogRadar from './CatalogRadar';
import AuthorProfile from './AuthorProfile';

import authorPhoto from '../../lidaxia.jpg';

const author = {
  name: 'lidaxia',
  avatar: authorPhoto,
  description: 'lalala lalala woshimaibaodexiaohangjia \n lalala lalala woshimaibaodexiaohangjia',
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
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6 text-center" >
          <CatalogRadar catalogs={catalogs} option={radarOption} allCatalogs={allCatalogs} />
        </div>
        <div className="col-md-6 text-right" >
          <AuthorProfile name={name} avatar={avatar} description={description} />
        </div>
      </div>
    </div>
  );
}

export default AuthorInfo;
