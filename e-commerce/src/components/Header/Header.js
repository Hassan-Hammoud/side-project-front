import React from 'react';
// import {NavLink,Link} from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';
import { BsSearch} from "react-icons/bs";
function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free shipping over $100</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel: +961 70118991">
                  +961 70118991
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-7">
              <h2>
                <Link className="text-white">Our Store</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Find A Product Here...."
                  aria-label="Find A Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex  align-items-center">
                <div></div>
                <div className=" menu-links ">
                  <div className=" d-flex align-items-center gap-15 ">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Product</NavLink>
                    <NavLink to="/">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
