// Üniversite verileri (universities.js'den aynı veriyi kullan)
const universities = [
  {
    name: "Massachusetts Institute of Technology (MIT)",
    country: "USA",
    ranking: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zn_7bYui8-Cfd8QaBPG3NBoMMmB5v0ZsLfs4YE-mzA&s=10",
    faculties: ["Architecture", "Media Arts and Sciences", "Urban Studies and Planning", "Aeronautics and Astronautics", "Biological Engineering", "Chemical Engineering", "Civil and Environmental Engineering", "Electrical Engineering and Computer Science", "Health Sciences and Technology", "Materials Science and Engineering", "Mechanical Engineering", "Nuclear Science and Engineering", "Anthropology", "Comparative Media Studies/Writing", "Economics", "Global Languages", "History", "Humanities", "Humanities + Engineering/Science", "Linguistics", "Literature", "Music and Theater Arts", "Philosophy", "Political Science", "Science, Technology, and Society", "Management", "Biology", "Brain and Cognitive Sciences", "Chemistry", "Earth, Atmospheric, and Planetary Sciences", "Mathematics", "Physics", "Data, Systems, and Society", "Electrical Engineering and Computer Science"]
    
  },
  {
    name: "Harvard University",
    country: "USA",
    ranking: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAwDpf2dVP1E_g73ShHGv00zqB_Sce7q5-JSTz8nX1A&s=10",
    faculties: ["African and American Studies", "Anthropology", "Applied Mathematics", "Art, Film, and Visual Studies", "Astrophysics", "Bioengineering", "Biology", "Biomedical Engineering", "Business Management and Administration", "Chemical and Physical Biology", "Chemistry", "Chemistry and Physics", "Classics", "Comparative Literature", "Comparative Study of Religion", "Computer Science", "Creative Writing and Literature", "Dramatic Arts", "Earth and Planetary Sciences", "East Asian Studies", "Economics", "Electrical and Computer Engineering", "Electrical Engineering", "Energy, Climate, and Environment", "Engineering Sciences", "English", "Environmental Science and Engineering", "Environmental Science and Public Policy", "Environmental Studies", "Folklore and Mythology", "Germanic Languages and Literatures", "Government", "History", "History and Literature", "History and Science", "History of Art", "History of Art and Architecture", "Human Biology, Behavior, and Evolution", "Human Developmental and Regenerative Biology", "Integrative Biology", "International Relations", "Journalism", "Legal Studies", "Linguistics", "Materials Science and Mechanical Engineering", "Mathematics", "Mechanical Engineering", "Molecular and Cellular Biology", "Music", "Near Eastern Languages and Civilizations", "Neuroscience", "Philosophy", "Physics", "Psychology", "Religion", "Romance Languages and Literatures", "Slavic Languages and Literatures", "Social Studies", "Sociology", "South Asian Studies", "Special Concentrations", "Statistics", "Studies of Women, Gender, and Sexuality", "Studio Arts and Film", "Theater, Dance, and Media"]
  },
  {
    name: "Stanford University",
    country: "USA",
    ranking: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_IRiqqrnZ04W3r7wMwn-yPkX7hhdq5P8u-g-N3HD2jw&s=10",
    faculties: ["Aeronautics and Astronautics", "African and African American Studies", "African Studies", "American Studies", "Anthropology", "Applied Physics", "Archaeology", "Art History", "Art Practice", "Asian American Studies", "Atmosphere/Energy", "Bioengineering", "Biology", "Biomechanical Engineering", "Biomedical Computation", "Chemical Engineering", "Chemistry", "Chicana/o - Latina/o Studies", "China Studies", "Civil Engineering", "Classics", "Communication", "Community Health and Prevention Research", "Comparative Literature", "Comparative Studies in Race and Ethnicity", "Computer Science", "Creative Writing", "Dance (TAPS Minor)", "Data Science", "Data Science & Social Systems", "Data Science for Artistic and Cultural Analysis", "Democracy, Development, and the Rule of Law", "Design", "Digital Humanities", "Earth and Planetary Sciences", "Earth Systems", "East Asian Studies", "Economics", "Education", "Electrical Engineering", "Energy Science and Engineering", "Engineering Physics", "English", "Environmental Justice", "Environmental Systems Engineering", "Ethics and Technology", "Ethics in Society", "European Studies", "Feminist, Gender, and Sexuality Studies", "Film and Media Studies", "French", "Geophysics", "German Studies", "Global Studies", "History", "Honors in the Arts", "Human Biology", "Human Rights", "Iberian and Latin American Cultures", "International Policy Studies", "International Relations", "International Security Studies", "Iranian Studies", "Islamic Studies", "Italian", "Japanese", "Jewish Studies", "Korean", "Laboratory Animal Science", "Latin American Studies", "Linguistics", "Management Science and Engineering", "Materials Science and Engineering", "Mathematical and Computational Science", "Mathematics", "Mechanical Engineering", "Medieval Studies", "Middle Eastern Language, Literature and Culture", "Modern Languages", "Modern Thought and Literature", "Music", "Music, Science, and Technology", "Native American Studies", "Philosophy", "Philosophy and Religious Studies", "Physics", "Political Science", "Portuguese", "Psychology", "Public Policy", "Religious Studies", "Science, Technology, and Society", "Slavic Languages and Literatures", "Sociology", "South Asian Studies", "Spanish", "Statistics", "Sustainability", "Sustainable Architecture + Engineering", "Symbolic Systems", "Theater and Performance Studies", "Translation Studies", "Urban Studies"]
  },
  {
    name: "University of Oxford",
    country: "UK",
    ranking: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzY2kmEeq7lnNy7W0X7IBkPZnD224WWA6kSBxu06vyQ&s=10",
    faculties: ["American Institute, Rothermere, Art, Ruskin School of, Asian and Middle Eastern Studies, Faculty of, Classics, Faculty of, English Language and Literature, Faculty of, Ertegun Graduate Scholarship Programme in the Humanities, The, Ethics in AI, Institute for, History, Faculty of, History of Art Department, Linguistics, Philology and Phonetics, Faculty of, Medieval and Modern Languages, Faculty of, Modern Slavery & Human Rights Policy & Evidence Centre, Music, Faculty of, Philosophy, Faculty of, Theology and Religion, Faculty of, TORCH | The Oxford Research Centre in the Humanities, Voltaire Foundation, Begbroke Science Park, Biology, Department of, Chemistry, Department of, Computer Science, Department of, Doctoral Training Centre, Earth Sciences, Department of, Engineering Science, Department of, Materials, Department of, Mathematical Institute, Physics, Department of, Statistics, Department of, Biochemistry, Department of, Clinical Medicine, Nuffield Department of, Clinical Neurosciences, Nuffield Department of, Experimental Psychology, Department of, Medicine, Radcliffe Department of, Oncology, Department of, Orthopaedics, Rheumatology and Musculoskeletal Sciences, Nuffield Department of, Paediatrics, Department of, Pathology, Sir William Dunn School of, Pharmacology, Department of, Physiology, Anatomy & Genetics, Department of, Population Health, Nuffield Department of, Primary Care Health Sciences, Department of, Psychiatry, Department of, Surgical Sciences, Nuffield Department of, Women's & Reproductive Health, Nuffield Department of, Anthropology and Museum Ethnography, School of, Archaeology, School of, Business School, Saïd, Economics, Department of, Education, Department of, Geography and the Environment, School of, Global and Area Studies, Oxford School of, Government, Blavatnik School of, International Development, Department of, Internet Institute, Oxford, Law, Faculty of, Oxford Martin School, Politics & International Relations, Department of, Social Policy and Intervention, Department of, Sociology, Department of, Department for Continuing Education, Astrophoria Foundation Year, Language Centre, Oxford Lifelong Learning, Ashmolean Museum Oxford, Bodleian Libraries, History of Science Museum, Oxford Botanic Garden & Arboretum, Oxford University Museum of Natural History, Pitt Rivers Museum"]
  },
  {
    name: "University of Cambridge",
    country: "UK",
    ranking: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7EC9II1xgv8EgVpzaZhUw5ro21Zk7ssyWuzT0d6daEA&s=10",
    faculties: [
  "Faculty of Architecture and History of Art",
  "Architecture",
  "History of Art",
  "Faculty of Asian and Middle Eastern Studies",
  "Faculty of Classics",
  "Museum of Classical Archaeology",
  "Faculty of Divinity",
  "Faculty of English",
  "Anglo-Saxon, Norse and Celtic",
  "Faculty of Modern and Medieval Languages and Linguistics",
  "French",
  "German",
  "Italian",
  "Modern Greek",
  "Spanish and Portuguese",
  "Slavonic Studies",
  "Theoretical and Applied Linguistics",
  "Faculty of Music",
  "Centre for Music Performance",
  "Faculty of Philosophy",
  "Centre for Research in Arts, Social Sciences and Humanities",
  "Language Centre",
  "Institute for Technology and Humanity",
  "Faculty of Economics",
  "Faculty of Education",
  "Faculty of History",
  "Faculty of Human, Social and Political Science",
  "Archaeology",
  "McDonald Institute for Archaeological Research",
  "Bennett School of Public Policy",
  "Politics and International Studies",
  "Social Anthropology",
  "Museum of Archaeology and Anthropology",
  "Mongolian and Inner Asia Studies Unit",
  "Sociology",
  "History and Philosophy of Science",
  "Whipple Museum of the History of Science",
  "Land Economy",
  "Faculty of Law",
  "Lauterpacht Centre for International Law",
  "Institute of Criminology",
  "Faculty of Biology",
  "Biochemistry",
  "Centre for Family Research",
  "Genetics",
  "Pathology",
  "Pharmacology",
  "Physiology, Development and Neuroscience",
  "Plant Sciences",
  "Botanic Garden",
  "Psychology",
  "Zoology",
  "Museum of Zoology",
  "Veterinary Medicine",
  "Cambridge Stem Cell Institute",
  "Gurdon Institute",
  "Cambridge Systems Biology Centre",
  "MRC Toxicology Unit",
  "Sainsbury Laboratory",
  "Faculty of Earth Sciences and Geography",
  "Earth Sciences",
  "Sedgwick Museum of Earth Sciences",
  "Geography",
  "Conservation Research Institute",
  "Scott Polar Research Institute",
  "Polar Museum",
  "Faculty of Mathematics",
  "Applied Mathematics and Theoretical Physics",
  "Pure Mathematics and Mathematical Statistics",
  "Statistical Laboratory",
  "Faculty of Physics and Chemistry",
  "Astronomy",
  "Chemistry",
  "Materials Science and Metallurgy",
  "Physics",
  "Cambridge Zero",
  "Isaac Newton Institute for Mathematical Sciences",
  "Cambridge Institute for Medical Research",
  "Clinical Biochemistry",
  "IMS Epidemiology",
  "Metabolic Research Laboratories",
  "Clinical Neurosciences",
  "John van Geest Centre for Brain Repair",
  "Neurology Unit",
  "Neurosurgery",
  "Wolfson Brain Imaging Centre",
  "Genomic Medicine",
  "Haematology",
  "Medicine",
  "MRC Biostatistics Unit",
  "MRC Mitochondrial Biology Unit",
  "Obstetrics and Gynaecology",
  "Oncology",
  "Early Cancer Institute",
  "Paediatrics",
  "Psychiatry",
  "Brain Mapping Unit",
  "Developmental Psychopathology",
  "Public Health and Primary Care",
  "Radiology",
  "Surgery",
  "Trauma and Orthopaedic Surgery",
  "Cambridge Stem Cell Institute",
  "Cancer Research UK Cambridge Institute",
  "MRC Cognition and Brain Sciences Unit",
  "Institute of Metabolic Science",
  "Engineering",
  "Energy, Fluid Mechanics and Turbomachinery",
  "Electrical Engineering",
  "Mechanics, Materials and Design",
  "Civil Engineering",
  "Manufacturing and Management",
  "Information Engineering",
  "Cambridge Judge Business School",
  "Centre for Business Research",
  "Psychometrics Centre",
  "Computer Science and Technology",
  "Chemical Engineering and Biotechnology",
  "Cambridge Institute for Sustainability Leadership"
]
  },
  {
    name: "Imperial College London",
    country: "UK",
    ranking: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuUdmFkgrc6hRA0_WIbnctaLpvKoaPfOu4615m6HTkQ&s=10",
    faculties: ["Aeronautics", "Bioengineering", "Chemical Engineering", "Civil and Environmental Engineering", "Computing", "Dyson School of Design Engineering", "Earth Science and Engineering", "Electrical and Electronic Engineering", "Materials", "Mechanical Engineering", "Brain Sciences", "Immunology and Inflammation", "Infectious Disease", "Institute of Clinical Sciences", "Metabolism", "Digestion and Reproduction", "National Heart and Lung Institute", "School of Public Health", "Surgery and Cancer", "Chemistry", "Mathematics", "Physics", "Life Sciences", "Centre for Environmental Policy", "Finance", "Management and Entrepreneurship", "Economics and Public Policy", "Marketing", "Analytics and Operations"]
  },
  {
    name: "University of Toronto",
    country: "Canada",
    ranking: 18,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5xQSOa32EnOaiqzao3sCwCEF5OAid2Ct9ceBQEcB-A&s=10",
    faculties: [
  "Accounting",
  "Accounting (Rotman Commerce)",
  "Accounting & Finance",
  "Accounting + Master of Accounting & Finance",
  "Actuarial Science",
  "African Studies",
  "Aging and Society",
  "American Studies",
  "Animal Physiology",
  "Anthropology",
  "Anthropology: Evolutionary",
  "Anthropology: Evolutionary (Health Sciences Stream)",
  "Anthropology: General",
  "Anthropology: Society, Culture, and Language",
  "Anthropology: Socio-Cultural",
  "Applied Climatology",
  "Applied Data Science",
  "Applied Genetics and Biotechnology",
  "Applied Mathematics",
  "Applied Statistics",
  "Archaeology",
  "Architectural Studies",
  "Art & Art History",
  "Art History",
  "Art History & Visual Culture",
  "Arts and Media Management",
  "Arts Management",
  "Asian Canadian Studies",
  "Astronomical Sciences",
  "Astronomy",
  "Astronomy and Astrophysics",
  "Astronomy and Physics",
  "Biochemistry",
  "Biochemistry (Health Sciences Stream)",
  "Biodiversity and Conservation Biology",
  "Bioethics",
  "Bioinformatics and Computational Biology",
  "Biological Chemistry",
  "Biological Physics",
  "Biology",
  "Biology (Health Sciences Stream)",
  "Biology for Health Sciences",
  "Biomedical Communications",
  "Biomedical Toxicology",
  "Biophysics",
  "Biotechnology",
  "Book and Media Studies",
  "Buddhist Studies",
  "Business German",
  "Business, Science and Entrepreneurship",
  "Canadian Studies",
  "Caribbean Studies",
  "Cell and Molecular Biology",
  "Celtic Studies",
  "Chemical Engineering",
  "Chemical Physics",
  "Chemistry",
  "Chemistry (Health Sciences Stream)",
  "Chinese Language and Culture",
  "Christianity and Culture",
  "Christianity and Education",
  "Cinema Studies",
  "City Studies",
  "Civil Engineering",
  "Classical Civilization",
  "Classical Studies",
  "Classics (Greek and Latin)",
  "Climate Change Studies",
  "Cognitive Science",
  "Commerce",
  "Communication, Culture, Information, and Technology",
  "Comparative Physiology",
  "Computer Engineering",
  "Computer Science",
  "Conservation and Biodiversity",
  "Conservation and Biodiversity (Health Sciences Stream)",
  "Contemporary Asian Studies",
  "Creative Writing",
  "Creativity & Society",
  "Criminology & Socio-Legal Studies",
  "Criminology, Law & Society",
  "Critical Migration Studies",
  "Critical Studies in Equity and Solidarity",
  "Culture, Creativity and Cities",
  "Data Science",
  "Diaspora and Transnational Studies",
  "Digital Enterprise Management",
  "Digital Humanities",
  "Drama",
  "Dramaturgy and Drama Studies",
  "Earth and Environmental Systems",
  "Earth Science",
  "East Asian Studies",
  "Ecology & Evolution",
  "Ecology and Evolutionary Biology",
  "Economics",
  "Economics & Political Science",
  "Economics and Mathematics",
  "Economics for Management Studies",
  "Education and Society",
  "Education Studies",
  "Electrical Engineering",
  "Engineering Science",
  "English",
  "English Language Linguistics",
  "English/Chinese Translation",
  "Environment and Behaviour",
  "Environment and Energy",
  "Environment and Health",
  "Environment and Toxicology",
  "Environmental Anthropology",
  "Environmental Biology",
  "Environmental Chemistry",
  "Environmental Chemistry (Health Sciences Stream)",
  "Environmental Economics",
  "Environmental Ethics",
  "Environmental Geography",
  "Environmental Geoscience",
  "Environmental Geoscience (Health Sciences Stream)",
  "Environmental Geosciences",
  "Environmental Law and Policy",
  "Environmental Management",
  "Environmental Physics",
  "Environmental Science",
  "Environmental Science (Health Sciences Stream)",
  "Environmental Studies",
  "Ethics, Law & Society",
  "Ethics, Society and Law",
  "European Affairs",
  "Exceptionality in Human Learning",
  "Film Studies",
  "Finance",
  "Finance and Economics (Rotman Commerce)",
  "Finance and Statistics: Quantitative Finance",
  "Financial Economics",
  "Food Studies",
  "Forensic Anthropology",
  "Forensic Biology",
  "Forensic Chemistry",
  "Forensic Psychology",
  "Forensic Science",
  "Forest Conservation",
  "Forest Conservation Science",
  "French",
  "French Language",
  "French Language and French Linguistics",
  "French Language and Literature",
  "French Language Learning",
  "French Studies",
  "Functional French",
  "Game Studies",
  "Genome Biology",
  "Geographic Data Science",
  "Geographic Information Science",
  "Geographical Information Systems",
  "Geography",
  "Geology",
  "Geophysics",
  "Geoscience",
  "GeoSpatial Data Science",
  "German Studies",
  "German Studies in English",
  "Global Asia Studies",
  "Global Environmental Change",
  "Global Environmental Change (Health Sciences Stream)",
  "Global Health",
  "Global Leadership",
  "Greek",
  "Health and Disease",
  "Health Humanities",
  "Health Policy",
  "Health, Environments, and Society",
  "History",
  "History and Philosophy of Science and Technology",
  "History of Religions",
  "Human Biology",
  "Human Biology (Health Sciences Stream)",
  "Human Geography",
  "Human Resources",
  "Immunology",
  "Indigenous Studies",
  "Industrial Engineering",
  "Industrial Relations and Human Resources",
  "Information",
  "Information Security",
  "Information Technology",
  "Integrative Biology",
  "Integrative Biology (Health Sciences Stream)",
  "International Affairs",
  "International Business",
  "International Development Studies",
  "International Relations",
  "Islamic Studies",
  "Italian",
  "Italian Culture and Communication Studies",
  "Italian Language & Culture",
  "Jewish Studies",
  "Journalism",
  "Kinesiology and Physical Education",
  "Language Teaching and Learning: French",
  "Language Teaching and Learning: French & Italian",
  "Language Teaching and Learning: Italian",
  "Latin",
  "Latin American & Caribbean Studies",
  "Latin American Studies",
  "Linguistics",
  "Literature and Critical Theory",
  "Literature and Critical Theory: Comparative Literature Stream",
  "Literature and Critical Theory: Cultural Theory Stream",
  "Logic",
  "Management",
  "Marketing",
  "Material Culture and Semiotics",
  "Materials Engineering",
  "Materials Science",
  "Mathematical Applications in Economics and Finance",
  "Mathematical Sciences",
  "Mathematics",
  "Mathematics and Its Applications: Physical Science",
  "Mathematics and Its Applications: Probability/Statistics", "Mathematics and Its Applications: Teaching",
  "Mathematics and Philosophy",
  "Mathematics and Physics",
  "Mechanical Engineering",
  "Media and Communication Studies",
  "Media Studies",
  "Medicinal & Biological Chemistry",
  "Medicinal & Biological Chemistry (Health Sciences Stream)",
  "Medieval Studies",
  "Mental Health Studies",
  "Mental Health Studies (Health Sciences Stream)",
  "Mineral Engineering",
  "Molecular Biology",
  "Molecular Biology and Biotechnology",
  "Molecular Biology and Biotechnology (Health Sciences Stream)",
  "Molecular Biology, Immunology & Disease",
  "Molecular Biology, Immunology & Disease (Health Sciences Stream)",
  "Molecular Genetics and Microbiology",
  "Music",
  "Music Education (Classical)",
  "Music Education (Jazz)",
  "Music Industry & Technology",
  "Music Performance (Classical)",
  "Music Performance (Jazz)",
  "Music Technology & Digital Media (Classical)",
  "Music Technology & Digital Media (Jazz)",
  "Music with Ensemble Option",
  "Music: Composition (Classical)",
  "Music: History, Culture & Theory (Classical)",
  "Music: Interdisciplinary Music Studies (Classical)",
  "Music: Interdisciplinary Music Studies (Jazz)",
  "Natural Sciences & Environmental Management",
  "Near and Middle Eastern Civilizations",
  "Neuroscience",
  "Neuroscience (Health Sciences Stream)",
  "Nutritional Sciences",
  "Paleontology",
  "Paramedicine",
  "Pathobiology",
  "Peace, Conflict and Justice",
  "Pharmaceutical Chemistry",
  "Pharmacology",
  "Pharmacology and Biomedical Toxicology",
  "Philosophy",
  "Philosophy of Science",
  "Physical and Human Geography",
  "Physical and Mathematical Sciences",
  "Physical Sciences",
  "Physics",
  "Physics and Astrophysics",
  "Physics and Philosophy",
  "Physiology",
  "Planetary Science",
  "Plant Biology",
  "Plant Biology (Health Sciences Stream)",
  "Political Science",
  "Population Health",
  "Population Health (Health Sciences Stream)",
  "Portuguese",
  "Professional Writing and Communication",
  "Psycholinguistics",
  "Psycholinguistics (Health Sciences Stream)",
  "Psychology",
  "Psychology (Health Sciences Stream)",
  "Psychology Research",
  "Public Health",
  "Public Law",
  "Public Policy",
  "Quantitative Biology",
  "Religion",
  "Renaissance Studies",
  "Science, Technology and Society",
  "Sexual Diversity Studies",
  "Slavic and East European Languages and Cultures",
  "Slavic and East European Literature in Translation",
  "Social Data Science",
  "Sociology",
  "South Asian Humanities",
  "South Asian Studies",
  "Spanish",
  "Statistical Science: Methods and Practice",
  "Statistical Science: Theory and Methods",
  "Statistics",
  "Strategic Management",
  "Studio Art",
  "Sustainability",
  "Synthetic and Catalytic Chemistry",
  "Technology, Coding and Society",
  "Theatre and Drama Studies",
  "Theatre and Performance",
  "Urban Public Policy and Governance",
  "Urban Studies",
  "Visual Culture",
  "Visual Culture & Communication",
  "Visual Studies",
  "Women and Gender Studies",
  "Women, Gender and Sexuality Studies",
  "Women’s and Gender Studies",
  "Work and Organizations: Humanities Contexts",
  "Work and Organizations: Sciences Contexts",
  "Work and Organizations: Social Sciences Contexts",
  "Writing and Rhetoric",
  "Yiddish, Al and Malka Green Program"
]
  },
  {
    name: "Technical University of Munich",
    country: "Germany",
    ranking: 37,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp77S32_Av_gidJhWrDGh8si37S7EolyH3vNWir2cwZg&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "Princeton Universty",
    country: "USA",
    ranking: 27,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBeoQYXoabRzRRRkWM1EBPxSamGpUtxXF8_IbdKUz51A&s",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "Yale Universty",
    country: "USA",
    ranking: 16,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8qYx5kSOMpolhaCpMYNVHv53DSpwTayvotmACiw-yQ&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
{
    name: "California Institute of Technology",
    country: "USA",
    ranking: 7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPJmWJ1r_zsNyGq_jWmNJxAAmOrgNTH096uMbG2_1pw&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
{
    name: "University of Pennslyvania",
    country: "USA",
    ranking: 15,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQHVGtNTCtH5XbM0xZ8jcyU8W9S5tB7O5ERjAf0smdg&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },

{
    name: "Duke University",
    country: "USA",
    ranking: 70,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRqMpFaeyFc_E6TufnFeqcvYy9tdjmqa4Jpii1MExvA&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
{
    name: "Johns Hopkins University",
    country: "USA",
    ranking: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwtv1NBrxoU2FZIH1vTGB5YRNQSgUFVWxCJoqt8KTIA&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "Northwestern University",
    country: "USA",
    ranking: 45,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1x1DzRBAmYjQEY9VRRHiZnFhqSiqaNl5MLueAyKPOcA&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University of Chicago",
    country: "USA",
    ranking: 24,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgnw74u3_Rq_RQ564wpnoGDXQtr6vFqaSR7gPYRlxHow&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "Columbia University",
    country: "USA",
    ranking: 24,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCzTHNu3CK2KprZcIsLD4FRc4zWkzoIkmz9Vxc1414A&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
 {
    name: "Dartmouth Collage",
    country: "USA",
    ranking: 270,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ynpPuOmz607TfGiu5boxhXexTlTg2LAQVOE1xRiKrw&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
 {
    name: "Carnegie Mellon University",
    country: "USA",
    ranking: 55,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmfXuoGqYVdxxncM801Pymcp0Vlg-tlVtAor06K2GLg&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
 {
    name: "Cornell University",
    country: "USA",
    ranking: 16,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHX-Q4CY4rpEalXm565IOXNcw4AHQkVGwvAdJAKaJWg&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University Collage London ",
    country: "UK",
    ranking: 17,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIuumqguy_clAQzrbZWbosCciSL0l6Izi6GRfLvWrWg&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University of Edinburgh",
    country: "UK",
    ranking: 29,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdE9AhWIt1T1IP63CvVzNwyN_oSrdL0r_kos0ByhUxQ&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "King's Collage London",
    country: "UK",
    ranking: 40,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mG7Kqi1xi7Sbb-zdxZbjU1GMJDoOp4_a2HADwgswnQ&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "London School of Economics and Political Science",
    country: "UK",
    ranking: 47,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZslREUuwoY1MVsSQOljhBAHcwywFSorD_v7mqPyWuw&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University of Manchester",
    country: "UK",
    ranking: 60,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0xgLcRC4r-xCItxspN-nRuOp1L9vobXZniVvW5T_YA&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University of Bristol",
    country: "UK",
    ranking: 82,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKVN7uJRZFsqzCbDin4xm0XIJNF3dSG3IK9zFVZFm98g&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University of Glasgow",
    country: "UK",
    ranking: 83,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFldmUfsAAVfUppNJnAt1lOmutJIh2qqrnpcBgMwxPBA&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
{
    name: "University of Birmingham",
    country: "UK",
    ranking: 97,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFSrX5vOLVwecft2Vjtr99fm3uSnwes_PnX2zSaMMHw&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
{
    name: "University of Sheffield",
    country: "UK",
    ranking: 104,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7Nzcy7x3AxHGYgghbk2w0bnOcANPInF9aBJXSwQDLA&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
{
    name: "University of Leeds",
    country: "UK",
    ranking: 113,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQAOe7bzlcnNy1W2ZVU_dY8D5dw09hjVc21swtd--TA&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University of Warwick",
    country: "UK",
    ranking: 113,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WoX_Gx-OrZYoflVy1ZqSCmU2jhs5Oaqal04jtYBJoQ&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "Queen Mary University of London",
    country: "UK",
    ranking: 129,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6JtyhktsZLLOubrNveo2Ds5kMhBIYhr8YTzlgxJPMg&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "McGill University",
    country: "Canada",
    ranking: 43,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkAxEjiyvrw96EvdNuak2hp_MS_PwwNSiKLIf8c4pbg&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University of British Columbia",
    country: "Canada",
    ranking: 44,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDSkTOwLJ3hRTIseaCSckcNdVK1dknRDZ_VU5we5hNA&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "McMaster University",
    country: "Canada",
    ranking: 116,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuN69iRMEKqyqEut8Qr0IKbSPU78MB6mHFO8c0cOBXA&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University of Alberta",
    country: "Canada",
    ranking: 118,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl4y3zqpu4hXABiu8zoGdYHK6OXINiKhlSf_NLrScJw&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "Université de Montréal",
    country: "Canada",
    ranking: 132,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DSc0UUWiqBt6IJ6pJaH4Iatr6b26xDmTo1DiPrUldA&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University of Waterloo",
    country: "Canada",
    ranking: 178,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTho_NaWPsSa0PdNrjJASZWG3cpJpH_5YZN5FZqeJ1UTA&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University of Calgary",
    country: "Canada",
    ranking: 185,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7H3Gjk6eRfkm_YZBjXojN1wOipqwwTV-Z4DfjTHNlQ&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "University of Ottawa",
    country: "Canada",
    ranking: 185,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpPXG6AMDxd5xXkwmIICEwwRU074AxSPf2awRADIDlw&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "Western University",
    country: "Canada",
    ranking: 212,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Yi4ca7hGEnd-6xoSf-a8yOvaJDfwYW4qzVHt4OSrtQ&s=10",
    faculties: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  


 


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