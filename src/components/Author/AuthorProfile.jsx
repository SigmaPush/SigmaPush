import React from 'react';

function AuthorProfile({ name, avatar, description }) {
  if (!name) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-7">
          <h4>{name}</h4>
          <h6 className="">{description}</h6>
        </div>
        <div className="col-md-5">
        <img className="rounded float-left p-1 img-fluid" src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}
export default AuthorProfile;
