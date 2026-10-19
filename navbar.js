document.addEventListener('DOMContentLoaded', () => {
  const currentUser = localStorage.getItem('currentUser');
  
  // Giriş yapmış mı kontrol et
  if (currentUser) {
    // Giriş yapmışsa: auth-link'leri göster, login-link'i gizle, logout-link'i göster
    document.querySelectorAll('.auth-link').forEach(link => {
      link.style.display = 'inline-block';
    });
    document.querySelector('.login-link').style.display = 'none';
    document.querySelector('.logout-link').style.display = 'inline-block';
    
    // Çıkış yap butonuna tıklandığında
    document.querySelector('.logout-link').addEventListener('click', (e) => {
      e.preventDefault();
      if (confirm('Çıkış yapmak istediğine emin misin?')) {
        localStorage.removeItem('currentUser');
        alert('Çıkış yapıldı.');
        window.location.href = 'login.html';
      }
    });
  } else {
    // Giriş yapmamışsa: auth-link'leri gizle, login-link'i göster, logout-link'i gizle
    document.querySelectorAll('.auth-link').forEach(link => {
      link.style.display = 'none';
    });
    document.querySelector('.login-link').style.display = 'inline-block';
    document.querySelector('.logout-link').style.display = 'none';
  }
});