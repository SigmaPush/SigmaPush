import React from 'react';

function ArticleItem(props) {
  const { title, thumbnail, description } = props.article;

  return (
    <div className="container row justify-content-end border border-danger m-1">
      <div className="card-body col-8">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-img col-4 d-flex align-items-center" style={{ width: '50%', }}>
        <img className="img-fluid" src={thumbnail} alt="article img" />  
      </div>
    </div>
  );
}

export default ArticleItem;
