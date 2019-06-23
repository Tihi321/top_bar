import React from 'react';

const Logo = (props) => {
  const {
    logo,
  } = props;

  const buckupUrl = '../../assets/images/logo.png';
  const url = (logo && logo.url) ? logo.url : buckupUrl;
  const title = (logo && logo.title) ? logo.title : 'logo';

  return (
    <a className="logo" href="/" title="Tihomir Selak Portfolio">
    <img src={url} alt={title} />
    </a>
  )
};

export default Logo;