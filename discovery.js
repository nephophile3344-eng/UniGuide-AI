// Üniversite verileri (universities.js'den aynı veriyi kullan)
const universities = [
  {
    name: "Massachusetts Institute of Technology (MIT)",
    country: "USA",
    ranking: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/320px-MIT_logo.svg.png",
    faculties: ["Computer Science", "Engineering", "Physics", "Mathematics", "Economics"]
  },
  {
    name: "Harvard University",
    country: "USA",
    ranking: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Harvard_University_coat_of_arms.svg/320px-Harvard_University_coat_of_arms.svg.png",
    faculties: ["Computer Science", "Economics", "Business", "Law", "Medicine", "History"]
  },
  {
    name: "Stanford University",
    country: "USA",
    ranking: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Stanford_University_seal_2003.svg/320px-Stanford_University_seal_2003.svg.png",
    faculties: ["Computer Science", "Engineering", "Business", "Humanities", "Natural Sciences"]
  },
  {
    name: "University of Oxford",
    country: "UK",
    ranking: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Arms_of_University_of_Oxford.svg/320px-Arms_of_University_of_Oxford.svg.png",
    faculties: ["Medicine", "Law", "Humanities", "History", "Natural Sciences"]
  },
  {
    name: "University of Cambridge",
    country: "UK",
    ranking: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cambridge_University_Coat_of_Arms.svg/320px-Cambridge_University_Coat_of_Arms.svg.png",
    faculties: ["Computer Science", "Engineering", "Natural Sciences", "Mathematics", "Medicine"]
  },
  {
    name: "Imperial College London",
    country: "UK",
    ranking: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Imperial_College_London_logo.svg/320px-Imperial_College_London_logo.svg.png",
    faculties: ["Engineering", "Medicine", "Business", "Computing", "Natural Sciences"]
  },
  {
    name: "University of Toronto",
    country: "Canada",
    ranking: 18,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/University_of_Toronto_coat_of_arms.svg/320px-University_of_Toronto_coat_of_arms.svg.png",
    faculties: ["Computer Science", "Engineering", "Business", "Medicine", "Arts"]
  },
  {
    name: "Technical University of Munich",
    country: "Germany",
    ranking: 37,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/TU_M%C3%BCnchen_Logo.svg/320px-TU_M%C3%BCnchen_Logo.svg.png",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  }
];

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
  renderUniversityCards(universities);
  populateCountryFilter();
  setupEventListeners();
});

// Kartları oluştur
function renderUniversityCards(universitiesToRender) {
  const grid = document.getElementById('universityGrid');
  grid.innerHTML = '';

  if (universitiesToRender.length === 0) {
    grid.innerHTML = '<p class="no-results">No universities found.</p>';
    return;
  }

  universitiesToRender.forEach(uni => {
    const card = document.createElement('div');
    card.className = 'university-card';
    card.innerHTML = `
      <img src="${uni.image}" alt="${uni.name}" onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(uni.name)}'">
      <div class="card-info">
        <h3>${uni.name}</h3>
        <p class="ranking">🏆 Rank #${uni.ranking}</p>
        <p class="country">📍 ${uni.country}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(uni));
    grid.appendChild(card);
  });
}

// Ülke filtresini doldur
function populateCountryFilter() {
  const select = document.getElementById('countryFilter');
  const countries = [...new Set(universities.map(uni => uni.country))];
  
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
  });
}

// Event listener'ları bağla
function setupEventListeners() {
  document.getElementById('countryFilter').addEventListener('change', filterUniversities);
  document.getElementById('searchInput').addEventListener('input', filterUniversities);
  document.querySelector('.close').addEventListener('click', closeModal);
  document.getElementById('uniModal').addEventListener('click', (e) => {
    if (e.target.id === 'uniModal') closeModal();
  });
}

// Filtreleme
function filterUniversities() {
  const country = document.getElementById('countryFilter').value;
  const search = document.getElementById('searchInput').value.toLowerCase();
  
  let filtered = universities;
  
  if (country) {
    filtered = filtered.filter(uni => uni.country === country);
  }
  
  if (search) {
    filtered = filtered.filter(uni => uni.name.toLowerCase().includes(search));
  }
  
  renderUniversityCards(filtered);
}

// Modal aç
function openModal(uni) {
  document.getElementById('modalImg').src = uni.image;
  document.getElementById('modalTitle').textContent = uni.name;
  document.getElementById('modalRanking').textContent = ` Ranking: #${uni.ranking}`;
  document.getElementById('modalCountry').textContent = ` Country: ${uni.country}`;
  
  let facultiesHTML = '<div class="faculties-list"><h3>📚 Available Programs:</h3><ul>';
  uni.faculties.forEach(fac => {
    facultiesHTML += `<li>${fac}</li>`;
  });
  facultiesHTML += '</ul></div>';
  document.getElementById('modalFaculties').innerHTML = facultiesHTML;
  
  document.getElementById('uniModal').classList.remove('hidden');
}

// Modal kapat
function closeModal() {
  document.getElementById('uniModal').classList.add('hidden');
}