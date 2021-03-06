import React from 'react';

const Footer = () =>
  <div className="Footer">
    <footer className="page-footer font-small stylish-color-dark pt-4">
      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <button className="btn-floating btn-fb mx-1">
            <i className="fab fa-facebook-square"></i>
          </button>
        </li>
        <li className="list-inline-item">
          <button className="btn-floating btn-tw mx-1">
            <i className="fab fa-twitter-square"></i>
          </button>
        </li>
        <li className="list-inline-item">
          <button className="btn-floating btn-gplus mx-1">
            <i className="fab fa-google-plus-square"></i>
          </button>
        </li>
        <li className="list-inline-item">
          <button className="btn-floating btn-li mx-1">
            <i className="fab fa-linkedin"></i>
          </button>
        </li>
        <li className="list-inline-item">
          <button className="btn-floating btn-github mx-1">
            <i className="fab fa-github-square"></i>
          </button>
        </li>
      </ul>
      <div className="footer-copyright text-center">© 2018 Copyright:
        <h5>Garrett Praveen</h5>
      </div>
    </footer>
  </div>
export default Footer;