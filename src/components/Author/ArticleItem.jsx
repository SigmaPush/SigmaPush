import React from 'react';

function ArticleItem(props) {
  const { title, imgUrl, description } = props.article;
  return (
    <div className="container row">
      <div className="card-body col-8">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-img col-4" style={{ width: '50%', }}>
        <img className="float-right" src={imgUrl} alt="article img" />  
      </div>
    </div>
  );
}

export default ArticleItem;
