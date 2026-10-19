document.addEventListener('DOMContentLoaded', () => {
  // Zaten giriş yapmışsa direkt profile at
  if (localStorage.getItem('currentUser')) {
    window.location.href = 'profile.html';
  }

  // URL'den gelen uyarı mesajını göster (Korumalı sayfadan atıldıysa)
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get('message');
  if (message) {
    alert(decodeURIComponent(message));
  }

  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engelle
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Kayıtlı kullanıcıları çek
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // E-posta ve şifre eşleşiyor mu kontrol et
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Giriş başarılı: Kullanıcıyı kaydet ve profile yönlendir
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Hoş geldin, ' + user.name + '!');
      window.location.href = 'profile.html';
    } else {
      // Giriş başarısız
      alert('Hatalı e-posta veya şifre! Lütfen kontrol edin veya kayıt olun.');
    }
  });
});