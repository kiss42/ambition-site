import React from 'react';
import video from '../assets/into.mp4';

function LandingPage({ onEnter }) {
  return React.createElement(
    'div',
    { className: 'relative h-screen w-full overflow-hidden' }, // Fullscreen container
    // Video element
    React.createElement(
      'video',
      {
        className: 'absolute top-0 left-0 w-full h-full object-cover', // Fullscreen and covers the screen
        src: video,
        autoPlay: true,
        loop: true,
        muted: true, // Mute video for autoplay
      }
    ),
    // Overlay content
    React.createElement(
      'div',
      { className: 'absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center' }, // Semi-transparent overlay
      React.createElement(
        'div',
        { className: 'text-center text-white' },
        React.createElement(
          'h1',
          { className: 'text-7xl text-neonBlue mb-6', style: { fontFamily: 'Urban Jungle' } }, // Apply Urban Jungle font
          'Welcome to Ambition'
        ),
        React.createElement(
          'p',
          { className: 'text-lg text-gray-300 mb-8' },
          'Your journey to greatness begins here.'
        ),
        React.createElement(
          'button',
          {
            className: 'bg-neonPink px-6 py-3 rounded-full font-bold hover:scale-110 transition-transform',
            onClick: onEnter, // Call the `onEnter` handler
          },
          'Enter Site'
        )
      )
    )
  );
}

export default LandingPage;
