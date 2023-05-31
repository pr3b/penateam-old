import React from "react";

function FloatingNav() {
  return (
    <div className="floating-nav">
      <div className="div-block-17">
        <div data-animation="default" className="navbar-2 w-nav">
          <nav role="navigation" className="nav-menu-2 w-nav-menu">
            <a
              href="\#home"
              className="floating-nav__link arrow w-nav-link"
            ></a>
            <a href="\#benefit" className="floating-nav__link w-nav-link">
              Benefits
            </a>
            <a href="\#work" className="floating-nav__link w-nav-link">
              Recent work
            </a>
            <a href="\#pricing" className="floating-nav__link w-nav-link">
              Pricing
            </a>
          </nav>
          {/* <div className="w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FloatingNav;
