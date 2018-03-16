import React from 'react';

function AuthorProfile({ name, avatar, description }) {
  return (
    <div className="row justify-content-end border border-warning m-1">
      <div className="col-md-6 border border-danger mx-1">
        <h4>{name}</h4>
        <small>{description}</small>
      </div>
      <div className="col-md-5 d-flex align-items-center border border-danger mx-1">
        <img className="img-fluid" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}
export default AuthorProfile;
