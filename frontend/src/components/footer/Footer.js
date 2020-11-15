import React from 'react';

import './footer.scss';

import footerImg from '../../assets/images/KCC-logo-white.png';

export const Footer = () => {
    return (
        <footer>
          <div className="row">
            <div className="footer-left col-md-6">
              <img src={footerImg} alt="Kids Cancer Care logo" className="footer-logo" />
              <p>Registered charity #899409171RR0001</p>
              <p>Copyright &copy; 2020 Kids Cancer Care Foundation of Alberta. All rights reserved</p>
            </div>
            <div className="footer-right col-md-6">
              {/* <i class="fi-social-instagram"></i>
              <i class="fi-social-instagram"></i>
              <i class="fi-social-twitter"></i> */}
              <p><a href={"#"} className="privacy-link">Privacy Policy</a></p>
              <p><a href={"#"} className="terms-of-use-link">Terms of Use</a></p>
            </div>
          </div>
        </footer>
    )
}

export default Footer;
