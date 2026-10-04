// ==========================================
// 1. ÜNİVERSİTE VE BÖLÜM VERİTABANI
// ==========================================
const universities = [
  {
    name: "Massachusetts Institute of Technology (MIT)",
    country: "USA",
    ranking: 1,
    faculties: [
      "Computer Science", "Computer Science and Molecular Biology",
      "Computer Science, Economics, and Data Science", "Biomedical Engineering",
      "Statistics and Data Science", "Public Policy", "Humanities"
    ]
  },
  {
    name: "Harvard University",
    country: "USA",
    ranking: 2,
    faculties: [
      "Computer Science", "Economics", "Business & Management",
      "Law", "Medicine & Health Sciences", "History", "Literature"
    ]
  },
  {
    name: "Stanford University",
    country: "USA",
    ranking: 3,
    faculties: [
      "Computer Science", "Engineering", "Business & Management",
      "Humanities", "Natural Sciences", "Statistics and Data Science"
    ]
  },
  {
    name: "University of Oxford",
    country: "UK",
    ranking: 4,
    faculties: [
      "Medicine & Health Sciences", "Law", "Humanities",
      "Ancient and Medieval Studies", "Literature", "History", "Natural Sciences"
    ]
  },
  {
    name: "University of Cambridge",
    country: "UK",
    ranking: 5,
    faculties: [
      "Engineering", "Natural Sciences", "Computer Science",
      "Mathematics", "Medicine & Health Sciences", "Humanities"
    ]
  },
  {
    name: "University of Toronto",
    country: "Canada",
    ranking: 18,
    faculties: [
      "Computer Science", "Engineering", "Business & Management",
      "Life Sciences", "Arts & Humanities"
    ]
  },
  {
    name: "Technical University of Munich",
    country: "Germany",
    ranking: 37,
    faculties: [
      "Engineering", "Computer Science", "Natural Sciences", "Medicine & Health Sciences"
    ]
  },
  {
    name: "Imperial College London",
    country: "UK",
    ranking: 2,
    faculties: [
      "Aeronautics, Bioengineering,Chemical Engineering,Civil and Environmental Engineering,Computing,Dyson School of Design Engineering,Earth Science and Engineering,Electrical and Electronic Engineering,Materials,Mechanical Engineering,Brain Sciences,Immunology and Inflammation,Infectious Disease,Clinical Sciences,Metabolism Digestion and Reproduction,National Heart and Lung,Public Health,Department of Surgery and Cancer,Chemistry,Mathematics,Physics,Department of Life Sciences,Centre for Environmental Policy,Finance,Management & Entrepreneurship,Economics & Public Policy,Marketing,Analytics & Operations"
    ]
  }
];

// ==========================================
// 2. DEĞİŞKENLER VE BAŞLANGIÇ
// ==========================================
let currentStep = 1;
const totalSteps = 3;

// Sayfa yüklendiğinde çalışacaklar
document.addEventListener('DOMContentLoaded', () => {
  populateCountries(); // Ülkeleri dropdown'a doldur
  loadSelections();    // Varsa eski seçimi geri yükle
  updateProgress();

  // Değişiklikleri dinle (Zincirleme Filtre Mantığı)
  document.getElementById('countrySelect').addEventListener('change', handleCountryChange);
  document.getElementById('uniSelect').addEventListener('change', handleUniChange);
  document.getElementById('facultySelect').addEventListener('change', saveCurrentStep);
});

// 1. ADIM: Tüm benzersiz ülkeleri bul ve ilk dropdown'a ekle
function populateCountries() {
  const countrySelect = document.getElementById('countrySelect');
  const uniqueCountries = [...new Set(universities.map(uni => uni.country))];
  
  uniqueCountries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
}

// 2. ADIM: Ülke seçilince, o ülkedeki üniversiteleri filtrele ve 2. dropdown'a ekle
function handleCountryChange() {
  const selectedCountry = this.value;
  const uniSelect = document.getElementById('uniSelect');
  const facultySelect = document.getElementById('facultySelect');

  // Öncekileri temizle
  uniSelect.innerHTML = '<option value="">-- Select University --</option>';
  facultySelect.innerHTML = '<option value="">-- First select a university --</option>';
  facultySelect.disabled = true;

  if (!selectedCountry) {
    uniSelect.disabled = true;
    return;
  }

  // Seçili ülkedeki üniversiteleri bul
  const filteredUnis = universities.filter(uni => uni.country === selectedCountry);
  
  filteredUnis.forEach(uni => {
    const option = document.createElement('option');
    option.value = uni.name;
    option.textContent = `${uni.name} (Rank #${uni.ranking})`;
    uniSelect.appendChild(option);
  });
  
  uniSelect.disabled = false;
  saveCurrentStep();
}

// 3. ADIM: Üniversite seçilince, o üniversitenin bölümlerini 3. dropdown'a ekle
function handleUniChange() {
  const selectedUniName = this.value;
  const facultySelect = document.getElementById('facultySelect');

  facultySelect.innerHTML = '<option value="">-- Select Faculty --</option>';

  if (!selectedUniName) {
    facultySelect.disabled = true;
    return;
  }

  // Seçilen üniversitenin verisini bul
  const uniData = universities.find(uni => uni.name === selectedUniName);
  
  if (uniData && uniData.faculties) {
    uniData.faculties.forEach(fac => {
      const option = document.createElement('option');
      option.value = fac;
      option.textContent = fac;
      facultySelect.appendChild(option);
    });
    facultySelect.disabled = false;
  }
  saveCurrentStep();
}

// ==========================================
// 4. NAVİGASYON VE KAYIT FONKSİYONLARI
// ==========================================

function nextStep() {
  // Validasyon (Boş geçmeyi engelle)
  if (currentStep === 1 && !document.getElementById('countrySelect').value) {
    alert('Please select a country!');
    return;
  }
  if (currentStep === 2 && !document.getElementById('uniSelect').value) {
    alert('Please select a university!');
    return;
  }

  saveCurrentStep();
  document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
  currentStep++;
  document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
  updateProgress();
}

function prevStep() {
  saveCurrentStep();
  document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
  currentStep--;
  document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
  updateProgress();
}

function finishSelection() {
  if (!document.getElementById('facultySelect').value) {
    alert('Please select a faculty/major!');
    return;
  }
  saveCurrentStep();
  alert('✅ Selection complete! Analyzing your profile...');
  window.location.href = 'analysis.html';
}

function saveCurrentStep() {
  const selection = {
    country: document.getElementById('countrySelect').value,
    university: document.getElementById('uniSelect').value,
    faculty: document.getElementById('facultySelect').value
  };
  localStorage.setItem('universitySelection', JSON.stringify(selection));
}

function loadSelections() {
  const saved = localStorage.getItem('universitySelection');
  if (saved) {
    const selection = JSON.parse(saved);
    
    if (selection.country) {
      document.getElementById('countrySelect').value = selection.country;
      // Ülke seçiliyse, üniversiteleri otomatik tetikle
      document.getElementById('countrySelect').dispatchEvent(new Event('change'));
    }
    if (selection.university) {
      document.getElementById('uniSelect').value = selection.university;
      // Üniversite seçiliyse, bölümleri otomatik tetikle
      document.getElementById('uniSelect').dispatchEvent(new Event('change'));
    }
    if (selection.faculty) {
      document.getElementById('facultySelect').value = selection.faculty;
    }
  }
}

function updateProgress() {
  const progress = (currentStep / totalSteps) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('currentStep').textContent = currentStep;
}