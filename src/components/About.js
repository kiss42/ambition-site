import React from 'react';

function About() {
  return React.createElement(
    'section',
    {
      className: 'py-16 bg-gradient-to-r from-neonBlue to-neonPink text-black text-center px-6 md:px-12',
    },
    React.createElement(
      'div',
      { className: 'max-w-4xl mx-auto' }, // Center content with max width
      React.createElement(
        'h2',
        { className: 'text-5xl font-bold text-yellow-400 mb-6' }, // Bigger title
        'About Ambition'
      ),
      React.createElement(
        'p',
        { className: 'text-lg text-gray-800 leading-relaxed' }, // Improved readability with leading-relaxed
        'Ambition is more than just a platform. It is a movement designed to inspire and guide individuals to achieve their goals. Unlock your potential and succeed in ways you never thought possible.'
      ),
      React.createElement(
        'p',
        { className: 'mt-4 text-md text-black font-medium' },
        'Join us in transforming your dreams into reality.'
      ),
      React.createElement(
        'div',
        { className: 'mt-8' },
        React.createElement(
          'button',
          {
            className:
              'bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition duration-300',
          },
          'Learn More'
        )
      )
    )
  );
}

export default About;
