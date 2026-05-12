const COLORS = {
  primary:"#3d6b41", primaryLight:"#5a9060", primaryDark:"#2a4a2e",
  secondary:"#8b6f47", accent:"#c8a96e", beige:"#f5efe6",
  beigeLight:"#faf6f0", dark:"#1a2e1c", text:"#2d3a2e",
  textLight:"#6b7c6d", danger:"#c0392b", safe:"#27ae60",
  card:"#ffffff", border:"#e8ddd0"
};

const ANIMALS = [
  { id:1,  name:"Ball Python",       category:"reptiles", price:120,  danger:"safe",     diet:"Carnivore",   habitat:"Grasslands of Africa",            image:"🐍", rating:4.8, reviews:124, tags:["beginner-friendly","docile"],       lifespan:"20-30 yrs", size:"3-5 ft",    description:"One of the most popular pet snakes worldwide. Known for their calm temperament and beautiful patterns.", handling:"Support the body fully, avoid the head area, handle 2-3 times per week.", related:[2,5,9] },
  { id:2,  name:"Bearded Dragon",    category:"reptiles", price:85,   danger:"safe",     diet:"Omnivore",    habitat:"Arid regions of Australia",        image:"🦎", rating:4.9, reviews:203, tags:["beginner-friendly","interactive"],   lifespan:"10-15 yrs", size:"18-24 in",  description:"Friendly and social reptiles that love interaction. Great for families and first-time reptile owners.", handling:"Support the belly and limbs, avoid squeezing. They may wave or bob their head as social cues.", related:[1,3,10] },
  { id:3,  name:"Chameleon",         category:"reptiles", price:200,  danger:"moderate", diet:"Insectivore", habitat:"Tropical forests of Africa",        image:"🦎", rating:4.2, reviews:67,  tags:["advanced","colorful"],             lifespan:"5-10 yrs",  size:"10-20 in",  description:"Masters of camouflage with remarkable color-changing ability. Require specific care and humidity.", handling:"Minimal handling recommended. Let them walk onto your hand voluntarily. Stress-sensitive.", related:[2,4,6] },
  { id:4,  name:"Green Iguana",      category:"reptiles", price:45,   danger:"moderate", diet:"Herbivore",   habitat:"Central & South America rainforests",image:"🦎", rating:3.9, reviews:89,  tags:["large","vegetarian"],             lifespan:"15-20 yrs", size:"4-6 ft",    description:"Iconic large lizards known for their impressive crests and dewlaps. Can become tame with regular handling.", handling:"Use both hands to support the body. Beware of tail whipping and claws. Daily socialization helps.", related:[2,3,5] },
  { id:5,  name:"Corn Snake",        category:"reptiles", price:60,   danger:"safe",     diet:"Carnivore",   habitat:"Eastern North America",            image:"🐍", rating:4.7, reviews:156, tags:["beginner-friendly","colorful"],     lifespan:"15-20 yrs", size:"3-5 ft",    description:"Beautiful and docile snakes with stunning patterns. One of the best starter snakes available.", handling:"Gentle and rarely bite. Allow to explore your hands. Avoid handling after feeding.", related:[1,6,7] },
  { id:6,  name:"Blue-tongued Skink",category:"reptiles", price:300,  danger:"safe",     diet:"Omnivore",    habitat:"Australia & Indonesia",            image:"🦎", rating:4.6, reviews:78,  tags:["unique","docile"],                lifespan:"20+ yrs",   size:"18-24 in",  description:"Known for their distinctive blue tongue used to startle predators. Robust and hardy pets.", handling:"Very handleable once tamed. Support the full body. They rarely bite when properly socialized.", related:[2,4,5] },
  { id:7,  name:"African Grey Parrot",category:"birds",   price:1500, danger:"safe",     diet:"Herbivore",   habitat:"Central Africa rainforests",        image:"🦜", rating:4.9, reviews:312, tags:["intelligent","talking"],           lifespan:"50-60 yrs", size:"13 in",     description:"The Einstein of the bird world. Capable of learning hundreds of words and understanding context.", handling:"Highly social, needs daily interaction. Wear a perch glove initially. Consistent routines matter.", related:[8,9,10] },
  { id:8,  name:"Macaw",             category:"birds",   price:2000, danger:"moderate", diet:"Herbivore",   habitat:"Central & South America",          image:"🦜", rating:4.7, reviews:198, tags:["colorful","loud"],                lifespan:"50+ yrs",   size:"20-36 in",  description:"The most spectacular parrots in the world. Brilliant colors and strong personalities.", handling:"Strong beaks - use proper perches. Build trust slowly. Loud and demanding of attention.", related:[7,9,11] },
  { id:9,  name:"Cockatiel",         category:"birds",   price:150,  danger:"safe",     diet:"Herbivore",   habitat:"Australia",                        image:"🐦", rating:4.8, reviews:445, tags:["beginner-friendly","sweet"],       lifespan:"15-20 yrs", size:"12-13 in",  description:"Gentle, affectionate birds perfect for beginners. They whistle tunes and enjoy head scratches.", handling:"Very gentle. Step-up training with positive reinforcement. Love head and cheek scratches.", related:[7,8,10] },
  { id:10, name:"Lovebird",          category:"birds",   price:80,   danger:"safe",     diet:"Herbivore",   habitat:"Africa",                           image:"🦜", rating:4.5, reviews:267, tags:["affectionate","colorful"],         lifespan:"10-15 yrs", size:"5-6 in",    description:"Small parrots with big personalities. They form strong bonds with their owners.", handling:"Daily handling strengthens bonds. Keep in pairs if not frequently handled.", related:[9,8,7] },
  { id:11, name:"Sugar Glider",      category:"mammals", price:400,  danger:"safe",     diet:"Omnivore",    habitat:"Australia & Indonesia",            image:"🐾", rating:4.4, reviews:134, tags:["exotic","nocturnal"],             lifespan:"10-15 yrs", size:"5-6 in",    description:"Tiny marsupials that can glide between trees. Incredibly bonded to their owners.", handling:"Bond pouch training. Gentle scooping. Very social - need company.", related:[12,13,14] },
  { id:12, name:"Hedgehog",          category:"mammals", price:200,  danger:"safe",     diet:"Insectivore", habitat:"Europe, Asia, Africa",             image:"🦔", rating:4.6, reviews:289, tags:["unique","quiet"],                 lifespan:"4-7 yrs",   size:"6-8 in",    description:"Adorable spiky mammals that are quiet and low-maintenance. Nocturnal but can adapt.", handling:"Cup in both hands, avoid startling. Gloves initially. Consistent gentle handling.", related:[11,13,14] },
  { id:13, name:"Ferret",            category:"mammals", price:150,  danger:"safe",     diet:"Carnivore",   habitat:"Domestic (wild: steppes)",         image:"🐾", rating:4.7, reviews:378, tags:["playful","mischievous"],           lifespan:"5-10 yrs",  size:"18-24 in",  description:"Playful and curious mammals that love to explore. Highly social and entertaining.", handling:"Scruff technique for grooming. Very playful - let them roam supervised.", related:[11,12,14] },
  { id:14, name:"Rabbit",            category:"mammals", price:50,   danger:"safe",     diet:"Herbivore",   habitat:"Meadows & grasslands worldwide",   image:"🐇", rating:4.8, reviews:521, tags:["beginner-friendly","gentle"],       lifespan:"8-12 yrs",  size:"8-20 in",   description:"Gentle and social animals that can be litter-trained. Great for families with children.", handling:"Support hindquarters fully. Never pick up by ears. Floor-level interaction preferred.", related:[11,12,13] },
];

const QUIZ_QUESTIONS = [
  { q:"What kind of space do you have?",              options:["Small apartment","Medium home","Large home with yard","Rural property"] },
  { q:"How much time can you dedicate daily?",        options:["Less than 30 min","30–60 min","1–2 hours","3+ hours"] },
  { q:"What's your experience level?",                options:["Complete beginner","Some experience","Experienced owner","Expert/Breeder"] },
  { q:"What type of animal appeals to you most?",     options:["Reptiles & Snakes","Birds & Parrots","Small Mammals","Something exotic"] },
  { q:"What's your budget?",                          options:["Under $100","$100–$500","$500–$2000","$2000+"] },
];

let aiMode = 'choose';
let quizStep = 0;
let quizAnswers = [];
let quizRecommendation = null;
let selectedAnimal = null;

function setAIMode(mode) {
  aiMode = mode;
  ['choose','quiz','result'].forEach(m => {
    const el = document.getElementById('ai-section-' + m);
    if (el) el.classList.remove('visible');
  });
  const target = document.getElementById('ai-section-' + mode);
  if (target) target.classList.add('visible');
  if (mode === 'quiz') renderQuizStep();
  if (mode === 'result') renderResult();
}

function renderQuizStep() {
  document.getElementById('quiz-step-label').textContent = `Question ${quizStep + 1} of ${QUIZ_QUESTIONS.length}`;
  document.getElementById('quiz-pct-label').textContent = `${Math.round((quizStep / QUIZ_QUESTIONS.length) * 100)}% done`;
  document.getElementById('quiz-progress-fill').style.width = `${(quizStep / QUIZ_QUESTIONS.length) * 100}%`;
  document.getElementById('quiz-question-text').textContent = QUIZ_QUESTIONS[quizStep].q;
  document.getElementById('quiz-options').innerHTML = QUIZ_QUESTIONS[quizStep].options.map(opt =>
    `<button class="quiz-option" onclick="handleQuizAnswer('${opt.replace(/'/g,"\\'")}')"> ${opt}</button>`
  ).join('');
}

function handleQuizAnswer(ans) {
  quizAnswers.push(ans);
  if (quizStep < QUIZ_QUESTIONS.length - 1) {
    quizStep++;
    renderQuizStep();
  } else {
    const catChoice = quizAnswers[3];
    let category = "reptiles";
    if (catChoice && catChoice.includes("Bird")) category = "birds";
    else if (catChoice && catChoice.includes("Mammal")) category = "mammals";
    const safe = ANIMALS.filter(a => a.category === category && a.danger === "safe");
    quizRecommendation = safe[Math.floor(Math.random() * safe.length)] || ANIMALS[0];
    setAIMode('result');
  }
}

function resetQuiz() {
  quizStep = 0;
  quizAnswers = [];
  quizRecommendation = null;
  setAIMode('choose');
}

function renderResult() {
  if (!quizRecommendation) return;
  const r = quizRecommendation;
  document.getElementById('result-emoji').textContent = r.image;
  document.getElementById('result-name').textContent = r.name;
  document.getElementById('result-stars').innerHTML = starsHTML(r.rating, 16);
  document.getElementById('result-desc').textContent = r.description;
  document.getElementById('result-view-btn').onclick = () => {
    selectedAnimal = r;
    alert(`${r.name}\n\nPrice: $${r.price}\nRating: ${r.rating}⭐\n${r.description}`);
  };
}


function starsHTML(rating, size = 20) {
  const filled = Math.round(rating);
  const stars = "⭐".repeat(filled) + "☆".repeat(5 - filled);
  return `<span style="font-size:${size}px">${stars}</span>`;
}

function getAnimalById(id) {
  return ANIMALS.find(a => a.id === id);
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AI page
  setAIMode('choose');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && aiMode === 'chat') {
    const input = document.getElementById('chat-input');
    if (input && input === document.activeElement) {
      sendChat();
    }
  }
});