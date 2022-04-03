import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.webp';
import usePathname from '../../hooks/usePathname';
Footer.propTypes = {};

function Footer(props) {
  const { cartItems = [] } = useSelector((state) => state.cart);
  const pathname = usePathname();
  if (pathname === '/cart' && cartItems.length === 0) {
    return <></>;
  }
  return (
    <footer className="footer-area">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="widget-item">
                <div className="widget-about">
                  <a className="widget-logo" href="index.html">
                    <img src={logo} width="95" height="68" alt="Logo" />
                  </a>
                  <p className="desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 mt-md-0 mt-9">
              <div className="widget-item">
                <h4 className="widget-title">Information</h4>
                <ul className="widget-nav">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="about-us.html">About us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="faq.html">Privacy</a>
                  </li>
                  <li>
                    <a href="account-login.html">Login</a>
                  </li>
                  <li>
                    <a href="product.html">Shop</a>
                  </li>
                  <li>
                    <a href="my-account.html">My Account</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mt-lg-0 mt-6">
              <div className="widget-item">
                <h4 className="widget-title">Social Info</h4>
                <div className="widget-social">
                  <a href="https://twitter.com/" target="_blank" rel="noopener">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="https://www.pinterest.com/" target="_blank" rel="noopener">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container pt-0 pb-0">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2022 Brancy. Made with <i className="fa fa-heart"></i> by{' '}
              <a target="_blank" href="https://themeforest.net/user/codecarnival">
                Codecarnival.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
