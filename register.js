document.addEventListener('DOMContentLoaded', () => {
  // Zaten giriş yapmışsa profile yönlendir
  if (localStorage.getItem('currentUser')) {
    window.location.href = 'profile.html';
  }

  const registerForm = document.getElementById('registerForm');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    // Şifre kontrolü
    if (password !== passwordConfirm) {
      alert('Şifreler eşleşmiyor!');
      return;
    }

    if (password.length < 6) {
      alert('Şifre en az 6 karakter olmalıdır!');
      return;
    }

    // Kullanıcıları localStorage'dan çek
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Aynı e-posta var mı kontrol et
    const userExists = users.find(u => u.email === email);
    if (userExists) {
      alert('Bu e-posta adresi zaten kayıtlı! Giriş yapmayı deneyin.');
      return;
    }

    // Yeni kullanıcı oluştur
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Otomatik giriş yap
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    alert('Kayıt başarılı! Hoş geldin, ' + name + '!');
    window.location.href = 'profile.html';
  });
});