// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
  loadSummary();
  document.getElementById('analyzeBtn').addEventListener('click', startAnalysis);
});

// Özet bilgileri yükle (YENİ DROPDOWN YAPISINA GÖRE GÜNCELLENDİ)
function loadSummary() {
  const profile = JSON.parse(localStorage.getItem('studentProfile') || '{}');
  const selection = JSON.parse(localStorage.getItem('universitySelection') || '{}');

  // 1. Akademik skorlar
  const scoresList = document.getElementById('scoresList');
  if (scoresList) {
    scoresList.innerHTML = '';
    const scores = [
      { label: 'GPA', value: profile.gpa },
      { label: 'SAT', value: profile.sat },
      { label: 'AP', value: profile.ap },
      { label: 'IB', value: profile.ib },
      { label: 'TOEFL', value: profile.toefl },
      { label: 'IELTS', value: profile.ielts }
    ];
    
    scores.forEach(score => {
      if (score.value) {
        const li = document.createElement('li');
        li.textContent = `${score.label}: ${score.value}`;
        scoresList.appendChild(li);
      }
    });
    if (scoresList.children.length === 0) scoresList.innerHTML = '<li class="empty">No scores entered</li>';
  }

  // 2. Aktiviteler
  const activitiesList = document.getElementById('activitiesList');
  if (activitiesList) {
    activitiesList.innerHTML = '';
    const activities = [
      { label: 'Extracurriculars', value: profile.extracurriculars },
      { label: 'Supercurriculars', value: profile.supercurriculars },
      { label: 'Awards', value: profile.awards }
    ];
    
    activities.forEach(activity => {
      if (activity.value) {
        const li = document.createElement('li');
        li.textContent = `${activity.label}: ${activity.value.substring(0, 60)}${activity.value.length > 60 ? '...' : ''}`;
        activitiesList.appendChild(li);
      }
    });
    if (activitiesList.children.length === 0) activitiesList.innerHTML = '<li class="empty">No activities entered</li>';
  }

  // 3. Üniversite Seçimi (YENİ MANTIK)
  const universitiesList = document.getElementById('universitiesList');
  if (universitiesList) {
    universitiesList.innerHTML = '';
    
    if (selection.country && selection.university) {
      const liCountry = document.createElement('li');
      liCountry.textContent = `🌍 Country: ${selection.country}`;
      universitiesList.appendChild(liCountry);

      const liUni = document.createElement('li');
      liUni.textContent = `🏛️ University: ${selection.university}`;
      universitiesList.appendChild(liUni);

      if (selection.faculty) {
        const liFac = document.createElement('li');
        liFac.textContent = `📚 Faculty: ${selection.faculty}`;
        universitiesList.appendChild(liFac);
      }
    } else {
      universitiesList.innerHTML = '<li class="empty">No university selected</li>';
    }
  }
}

// Analizi başlat
async function startAnalysis() {
  const profile = JSON.parse(localStorage.getItem('studentProfile') || '{}');
  const selection = JSON.parse(localStorage.getItem('universitySelection') || '{}');

  if (!profile.gpa && !profile.sat) {
    alert('Please complete your profile first!');
    window.location.href = 'profile.html';
    return;
  }

  if (!selection.university) {
    alert('Please select a university first!');
    window.location.href = 'universities.html';
    return;
  }

  document.getElementById('analyzeBtn').classList.add('hidden');
  document.getElementById('loadingSection').classList.remove('hidden');
  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('errorSection').classList.add('hidden');

  const prompt = buildPrompt(profile, selection);

  try {
    const result = await callOpenAI(prompt);
    displayResult(result);
  } catch (error) {
    showError(error.message);
  }
}

// AI'ya gidecek metni oluştur (YENİ MANTIK)
function buildPrompt(profile, selection) {
  return `You are an expert university admissions consultant. Analyze this student's profile:

STUDENT PROFILE:
- GPA: ${profile.gpa || 'Not provided'}
- SAT: ${profile.sat || 'Not provided'}
- AP Courses: ${profile.ap || 'Not provided'}
- IB Score: ${profile.ib || 'Not provided'}
- TOEFL: ${profile.toefl || 'Not provided'}
- IELTS: ${profile.ielts || 'Not provided'}
- Extracurriculars: ${profile.extracurriculars || 'None'}
- Supercurriculars: ${profile.supercurriculars || 'None'}
- Awards & Honors: ${profile.awards || 'None'}
- Grade: ${profile.grade || 'None'}
- Personal Statement: ${profile.cv || 'Not provided'}

TARGET DETAILS:
- Country: ${selection.country || 'Not specified'}
- University: ${selection.university || 'Not specified'}
- Faculty/Major: ${selection.faculty || 'Not specified'}

Please provide:
1. Overall assessment of the profile (strengths and weaknesses).
2. Acceptance probability for the target university (High/Medium/Low) with specific reasoning based on their stats.
3. Specific, actionable recommendations to improve the profile before applying.
4. 2-3 suggested backup universities in the same country.
5. Timeline and next steps.

Be honest, constructive, and encouraging. Use markdown formatting.`;
}

// OpenAI/Groq API Çağrısı
async function callOpenAI(prompt) {
  const response = await fetch(API_CONFIG.OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_CONFIG.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: API_CONFIG.MODEL,
      messages: [
        {
          role: 'system',
          content: 'You are an expert university admissions consultant with 20 years of experience.'
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1024
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'API request failed');
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

function displayResult(result) {
  document.getElementById('loadingSection').classList.add('hidden');
  document.getElementById('resultSection').classList.remove('hidden');
  document.getElementById('analysisResult').innerHTML = formatMarkdown(result);
}

function formatMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
}

function showError(message) {
  document.getElementById('loadingSection').classList.add('hidden');
  document.getElementById('errorSection').classList.remove('hidden');
  document.getElementById('errorMessage').textContent = message;
}

function retryAnalysis() {
  document.getElementById('errorSection').classList.add('hidden');
  startAnalysis();
}

function startOver() {
  if (confirm('Are you sure you want to start over? All data will be cleared.')) {
    localStorage.removeItem('studentProfile');
    localStorage.removeItem('universitySelection');
    window.location.href = 'profile.html';
  }
}