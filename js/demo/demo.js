$(function () {
  'use strict'
  // Initialize the Gallery as video carousel:
  blueimp.Gallery([
      {
        title: 'Wildways - D.O.I.T.',
          href: 'https://www.youtube.com/watch?v=EXS9O6h6yq0',
          type: 'text/html',
          youtube: 'EXS9O6h6yq0',
          poster: 'https://img.youtube.com/vi/EXS9O6h6yq0/maxresdefault.jpg'
      }
  ], {
    container: '#blueimp-video-carousel',
    carousel: true
  })
})
