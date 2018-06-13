import React from 'react';

const creditStyle = {
  float: 'right',
  marginRight: '10px'
};

const githubStyle = {
  textAlign: 'center'
}

const Footer = () => (
  <footer className="navbar navbar-fixed-bottom footer">
    <div style={githubStyle}>
      <a href=''>
        Benedict Rasmussen
      </a>
    </div>
    <div style={creditStyle}>
      <a href='https://www.youtube.com/channel/UCBV-JvG9Ubkj7AU6Cxls1Tw?&ab_channel=HamzaMirza'>
        Hamza Mirza (Youtube)
      </a>
    </div>
  </footer>
)

export default Footer;
