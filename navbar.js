document.addEventListener('DOMContentLoaded', () => {
  const currentUser = localStorage.getItem('currentUser');
  const user = currentUser ? JSON.parse(currentUser) : null;

  const loginLink = document.querySelector('.login-link');
  const logoutLink = document.querySelector('.logout-link');

  if (user) {
    // GİRİŞ YAPMIŞSA
    if (loginLink) loginLink.style.display = 'none';
    if (logoutLink) {
      logoutLink.style.display = 'inline-block';
      logoutLink.textContent = `Çıkış Yap (${user.name})`;
      logoutLink.onclick = (e) => {
        e.preventDefault();
        if (confirm('Çıkış yapmak istediğine emin misin?')) {
          localStorage.removeItem('currentUser');
          window.location.href = 'index.html';
        }
      };
    }
  } else {
    // GİRİŞ YAPMAMIŞSA
    if (loginLink) loginLink.style.display = 'inline-block';
    if (logoutLink) logoutLink.style.display = 'none';
  }
});