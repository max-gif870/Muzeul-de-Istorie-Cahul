// Highlight the active nav link based on current page filename
document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';

  const navMap = {
    'index.html': 'nav-home',
    '': 'nav-home',
    'expozitie.html': 'nav-expozitie',
    'colectii.html': 'nav-colectii',
    'vizite.html': 'nav-vizite',
    'contacts.html': 'nav-contacts'
  };

  const activeId = navMap[filename];
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) el.classList.add('active');
  }
});
