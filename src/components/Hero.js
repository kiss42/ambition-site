import React from 'react';

function Hero() {
  return React.createElement(
    'section',
    {
      className: 'h-screen bg-gradient-to-bl from-neonBlue to-yellow-400 text-black flex items-center justify-center',
    },
    React.createElement(
      'div',
      { className: 'text-center' },
      React.createElement(
        'h1',
        {
          className: 'text-7xl mb-6',
          style: { fontFamily: 'Urban Jungle' }, // Custom font
        },
        'Welcome to Ambition'
      ),
      React.createElement(
        'p',
        { className: 'text-lg text-black mb-8' },
        'Empowering your dreams with purpose and precision.'
      ),
      React.createElement(
        'button',
        { className: 'bg-neonPink text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform' },
        'Learn More'
      )
    )
  );
}

export default Hero;
