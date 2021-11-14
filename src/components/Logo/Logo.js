import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconLogo from './IconLogo';
import css from './Logo.module.css';
import Image from './logo.svg';
const Logo = props => {
  const { className, format, ...rest } = props;
  const mobileClasses = classNames(css.logoMobile, className);

  // If you want to use image instead of svg as a logo you can use the following code.
  // Also, remember to import the image as LogoImage here.
  // <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />

  return (
    <div>
      <img src={Image} alt="" />
      <span
        style={{ marginLeft: '1rem' }}
        className="font-poppins font-semibold text-blue-2000 text-2xl lg:text-[40px] ml-2 flex"
      >
        LocationDAS Marketplace
      </span>
    </div>
    // <IconLogo
    //   className={format === 'desktop' ? className : mobileClasses}
    //   format={format}
    //   {...rest}
    // />
  );
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
