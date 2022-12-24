'use strict';

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  document.getElementById('theme-toggle')?.setAttribute('aria-label', 'light-theme');
} else {
  document.documentElement.classList.remove('dark');
  document.getElementById('theme-toggle')?.setAttribute('aria-label', 'dark-theme');
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
    document.getElementById('theme-toggle')?.setAttribute('aria-label', 'dark-theme');
  } else {
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
    document.getElementById('theme-toggle')?.setAttribute('aria-label', 'light-theme');
  }
});
