let currentStep = 1;
const totalSteps = 10;

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
  loadProfile();
  updateProgress();
});

// Sonraki adım
function nextStep() {
  if (currentStep < totalSteps) {
    saveCurrentStep();
    document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
    currentStep++;
    document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
    updateProgress();
  }
}

// Önceki adım
function prevStep() {
  if (currentStep > 1) {
    saveCurrentStep();
    document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
    currentStep--;
    document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
    updateProgress();
  }
}

// Profili tamamla
function finishProfile() {
  saveCurrentStep();
  alert('✅ Profile completed! Redirecting to Universities...');
  window.location.href = 'universities.html';
}

// Progress bar güncelle
function updateProgress() {
  const progress = (currentStep / totalSteps) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('currentStep').textContent = currentStep;
}

// Mevcut adımı kaydet
function saveCurrentStep() {
  const profile = getProfile();
  localStorage.setItem('studentProfile', JSON.stringify(profile));
}

// Tüm profili al
function getProfile() {
  return {
    gpa: document.getElementById('gpa').value,
    sat: document.getElementById('sat').value,
    ap: document.getElementById('ap').value,
    ib: document.getElementById('ib').value,
    toefl: document.getElementById('toefl').value,
    ielts: document.getElementById('ielts').value,
    extracurriculars: document.getElementById('extracurriculars').value,
    supercurriculars: document.getElementById('supercurriculars').value,
    awards: document.getElementById('awards').value,
    cv: document.getElementById('cv').value,
    grade : document.getElementById('grade').value
  };
}

// Profili yükle
function loadProfile() {
  const saved = localStorage.getItem('studentProfile');
  if (saved) {
    const profile = JSON.parse(saved);
    document.getElementById('gpa').value = profile.gpa || '';
    document.getElementById('sat').value = profile.sat || '';
    document.getElementById('ap').value = profile.ap || '';
    document.getElementById('ib').value = profile.ib || '';
    document.getElementById('toefl').value = profile.toefl || '';
    document.getElementById('ielts').value = profile.ielts || '';
    document.getElementById('extracurriculars').value = profile.extracurriculars || '';
    document.getElementById('supercurriculars').value = profile.supercurriculars || '';
    document.getElementById('awards').value = profile.awards || '';
    document.getElementById('cv').value = profile.cv || '';
     document.getElementById('grade').value = profile.grade || '';
  }
}
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', resetProfile);

const eminMi = confirm("Are you sure you want to reset your profile? All data will be lost!");
localStorage.removeItem('studentProfile');
localStorage.removeItem('universitySelection');
window.location.reload();