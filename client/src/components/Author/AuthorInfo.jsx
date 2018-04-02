import React from 'react';
import _ from 'lodash';

import CatalogRadar from './CatalogRadar';
import AuthorProfile from './AuthorProfile';

const radarSetting = {
  showAllCat: true,
};

function getCatData({ authorArticles, catalogs }) {
  // FIXME: this version shows the number of related catalog, but we can show other interesting data instead
  const data = _.countBy(authorArticles, (article) => {
    return article.cat.name;
  });
  const labels = _.keys(data);
  const counts = _.values(data);
  const allCatalogs = _.values(catalogs).reduce((acc, cur) => {
    acc.push(cur.name);
    return acc;
  }, []);

  return { labels, counts, allCatalogs};
}

function AuthorInfo(props) {
  const { authorId } = props;
  const { labels, counts, allCatalogs } = getCatData(props);
  const { showAllCat } = radarSetting;

  return (
    <div className="container border-primary border my-2">
      <div className="row justify-content-center">
        <div className="col-md-4 d-flex align-items-center border border-success m-1" >
          <CatalogRadar
            labels={labels}
            counts={counts}
            allCatalogs={allCatalogs}
            showAllCat={showAllCat}
          />
        </div>
        <div className="col-md-6 text-right d-flex align-items-center border border-success m-1" >
          <AuthorProfile authorId={authorId} />
        </div>
      </div>
    </div>
  );
}

export default AuthorInfo;
