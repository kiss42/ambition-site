import React from 'react';

function Footer() {
  return React.createElement(
    'footer',
    { className: 'py-6 bg-gradient-to-r from-neonPink to-yellow-400 text-black text-center' },
    React.createElement('p', { className: 'font-bold' }, `© ${new Date().getFullYear()} Ambition. All rights reserved.`)
  );
}

export default Footer;
