import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand px-2" href="#">
            Employee Management System
          </a>

          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Optional nav links or user actions can go here */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
