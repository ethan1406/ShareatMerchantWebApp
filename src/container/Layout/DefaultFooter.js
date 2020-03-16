import React, { Fragment } from "react";
import { Link, navLink, useHistory } from "react-router-dom";
import { Button, nav } from "react-bootstrap";

const DefaultFooter = () => {
  return (
    <footer>
      <div className="container border-top text-left">
        <div className="row pt-4">
          <div className="col-md-3 ">
            <a href="href" className="logo text-orange">
              <img src="/assets/img/footer-logo.jpg" className="img-fluid" />
            </a>
            <ul className="list-unstyled mb-0 mt-2">
              <li className="list-inline-item">
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
            <span className="d-block text-muted">
              &copy; 2020 Shareat Payment, Inc
            </span>
          </div>
          <div className="col-md-3">
            <h5 className="text-orange font-weight-bold">About</h5>
            <ul className="list-unstyled">
              <li>
                <a href="" className="text-muted">
                  How Shareat Works
                </a>
              </li>
              <li>
                <a href="" className="text-muted">
                  Request Merchant Services
                </a>
              </li>
              <li>
                <a href="" className="text-muted">
                  Become a Shareat Partner
                </a>
              </li>
              <li>
                <a href="" className="text-muted">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-orange font-weight-bold">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="" className="text-muted">
                  About
                </a>
              </li>
              <li>
                <a href="" className="text-muted">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="text-muted">
                  Press
                </a>
              </li>
              <li>
                <a href="" className="text-muted">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-orange font-weight-bold">Terms & Policies</h5>
            <ul className="list-unstyled">
              <li>
                <a href="" className="text-muted">
                  Terms of Services
                </a>
              </li>
              <li>
                <a href="" className="text-muted">
                  Merchant Policy
                </a>
              </li>
              <li>
                <a href="" className="text-muted">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
