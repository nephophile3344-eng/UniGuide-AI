document.addEventListener('DOMContentLoaded', () => {
  const currentUser = localStorage.getItem('currentUser');
  const user = currentUser ? JSON.parse(currentUser) : null;

  const loginLink = document.querySelector('.login-link');
  const logoutLink = document.querySelector('.logout-link');

  if (user) {
    // 1. DURUM: KULLANICI GİRİŞ YAPMIŞSA
    if (loginLink) {
      loginLink.style.display = 'none'; // Giriş/Kayıt linkini gizle
    }
    if (logoutLink) {
      logoutLink.style.display = 'inline-block'; // Çıkış linkini göster
      logoutLink.textContent = `Çıkış Yap (${user.name})`; // İsmini yanına yaz
      
      // Çıkış butonuna tıklanınca ne olacağı
      logoutLink.onclick = (e) => {
        e.preventDefault();
        if (confirm('Çıkış yapmak istediğine emin misin?')) {
          localStorage.removeItem('currentUser');
          alert('Çıkış yapıldı.');
          window.location.href = 'index.html';
        }
      };
    }
  } else {
    // 2. DURUM: KULLANICI GİRİŞ YAPMAMIŞSA
    if (loginLink) {
      loginLink.style.display = 'inline-block'; // Giriş/Kayıt linkini göster
    }
    if (logoutLink) {
      logoutLink.style.display = 'none'; // Çıkış linkini gizle
    }
  }
});