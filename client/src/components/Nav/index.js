import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="nav-link" href="/saved">
        Search
      </a>
      <a className="nav-link" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
