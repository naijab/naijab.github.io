"use strict";

;

(function () {
  try {
    // Checks for the color scheme of the device.
    // In this case it checks for anything that is not light theme.
    var media = window.matchMedia('not all and (prefers-color-scheme: light)');
    var body = document.body;

    if (localStorage.getItem('theme') == 'dark') {
      body.setAttribute('data-theme', 'dark');
    } else if (localStorage.getItem('theme') == 'light') {
      body.setAttribute('data-theme', 'light');
    } else if (media.matches) {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    media.addListener(function () {
      if (media.matches) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  } catch (err) {}
})();