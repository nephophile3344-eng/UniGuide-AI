// Üniversite verileri (universities.js'den aynı veriyi kullan)
const universities = [
  {
    name: "Massachusetts Institute of Technology (MIT)",
    country: "USA",
    ranking: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zn_7bYui8-Cfd8QaBPG3NBoMMmB5v0ZsLfs4YE-mzA&s=10",
    faculties: ["Computer Science", "Engineering", "Physics", "Mathematics", "Economics"]
  },
  {
    name: "Harvard University",
    country: "USA",
    ranking: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAwDpf2dVP1E_g73ShHGv00zqB_Sce7q5-JSTz8nX1A&s=10",
    faculties: ["Computer Science", "Economics", "Business", "Law", "Medicine", "History"]
  },
  {
    name: "Stanford University",
    country: "USA",
    ranking: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_IRiqqrnZ04W3r7wMwn-yPkX7hhdq5P8u-g-N3HD2jw&s=10",
    faculties: ["Computer Science", "Engineering", "Business", "Humanities", "Natural Sciences"]
  },
  {
    name: "University of Oxford",
    country: "UK",
    ranking: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzY2kmEeq7lnNy7W0X7IBkPZnD224WWA6kSBxu06vyQ&s=10",
    faculties: ["Medicine", "Law", "Humanities", "History", "Natural Sciences"]
  },
  {
    name: "University of Cambridge",
    country: "UK",
    ranking: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7EC9II1xgv8EgVpzaZhUw5ro21Zk7ssyWuzT0d6daEA&s=10",
    faculties: ["Computer Science", "Engineering", "Natural Sciences", "Mathematics", "Medicine"]
  },
  {
    name: "Imperial College London",
    country: "UK",
    ranking: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuUdmFkgrc6hRA0_WIbnctaLpvKoaPfOu4615m6HTkQ&s=10",
    faculties: ["Engineering", "Medicine", "Business", "Computing", "Natural Sciences"]
  },
  {
    name: "University of Toronto",
    country: "Canada",
    ranking: 18,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5xQSOa32EnOaiqzao3sCwCEF5OAid2Ct9ceBQEcB-A&s=10",
    faculties: ["Computer Science", "Engineering", "Business", "Medicine", "Arts"]
  },
  {
    name: "Technical University of Munich",
    country: "Germany",
    ranking: 37,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp77S32_Av_gidJhWrDGh8si37S7EolyH3vNWir2cwZg&s=10",
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