import React from 'react';

function Header(props) {
  const isLogin = !!props.userName;
  let userAction;
  if (isLogin) {
    userAction = <a href="/reader/lidaxia">{props.userName}</a>;
  } else {
    userAction = <a href="/">sign-in</a>;
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <span className="oi oi-badge" style={{ height: 30 + "px", width : 30 + "px" }}></span>
          SigmaPush
        </a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" style={{ width:"400px" }} type="search" placeholder="Search in Archive" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        {userAction}
      </nav>
    </div>
  );
}

export default Header;
