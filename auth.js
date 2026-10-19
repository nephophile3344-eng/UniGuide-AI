// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
  // Zaten giriş yapılmışsa profile yönlendir
  if (localStorage.getItem('currentUser')) {
    window.location.href = 'profile.html';
  }

  const authForm = document.getElementById('authForm');
  const toggleMode = document.getElementById('toggleMode');
  const authTitle = document.getElementById('authTitle');
  const authBtn = document.getElementById('authBtn');
  const toggleQuestion = document.getElementById('toggleQuestion');
  const nameGroup = document.getElementById('nameGroup');

  let isLoginMode = true;

  // Giriş / Kayıt modu arasında geçiş
  toggleMode.addEventListener('click', (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    
    if (isLoginMode) {
      authTitle.textContent = 'Giriş Yap';
      authBtn.textContent = 'Giriş Yap';
      toggleQuestion.textContent = 'Hesabın yok mu?';
      toggleMode.textContent = 'Kayıt Ol';
      nameGroup.style.display = 'none';
      document.getElementById('name').required = false;
    } else {
      authTitle.textContent = 'Kayıt Ol';
      authBtn.textContent = 'Kayıt Ol';
      toggleQuestion.textContent = 'Zaten hesabın var mı?';
      toggleMode.textContent = 'Giriş Yap';
      nameGroup.style.display = 'block';
      document.getElementById('name').required = true;
    }
  });

  // Form gönderildiğinde
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const name = document.getElementById('name').value.trim();

    // Kullanıcıları localStorage'dan çek (yoksa boş dizi oluştur)
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (isLoginMode) {
      // GİRİŞ YAPMA MANTIĞI
      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert(`Hoş geldin, ${user.name}!`);
        window.location.href = 'profile.html';
      } else {
        alert('Hatalı e-posta veya şifre!');
      }
    } else {
      // KAYIT OLMA MANTIĞI
      const userExists = users.find(u => u.email === email);
      
      if (userExists) {
        alert('Bu e-posta adresi zaten kayıtlı!');
        return;
      }

      if (password.length < 6) {
        alert('Şifre en az 6 karakter olmalıdır!');
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Otomatik giriş yap
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      alert('Kayıt başarılı! Hoş geldin.');
      window.location.href = 'profile.html';
    }
  });
});