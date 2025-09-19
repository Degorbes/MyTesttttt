const breedData = {
  'persian': {
    name: 'Persian',
    description: 'Persian cats are gentle, affectionate companions that love a calm environment and lots of pampering.',
    origin: 'Historical Persia (modern-day Iran)',
    personality: 'Sweet, quiet, and happy to lounge with their people.',
    coat: 'Long, plush double coat in a wide variety of colors.',
    tip: 'Daily brushing keeps their coat tangle-free and reduces hairballs.'
  },
  'siamese': {
    name: 'Siamese',
    description: 'Siamese cats are vocal extroverts that thrive on attention and interactive play sessions.',
    origin: 'Thailand (formerly Siam)',
    personality: 'Curious, talkative, and devoted to their favorite humans.',
    coat: 'Short, sleek coat with striking color-point pattern and blue eyes.',
    tip: 'Provide puzzle toys or training games to channel their intelligence.'
  },
  'maine-coon': {
    name: 'Maine Coon',
    description: 'Known as gentle giants, Maine Coons combine impressive size with a friendly, dog-like attitude.',
    origin: 'United States (Maine)',
    personality: 'Sociable, confident, and typically great with families.',
    coat: 'Long, shaggy coat with a bushy tail built for cold climates.',
    tip: 'Weekly combing and a tall cat tree help them stay groomed and exercised.'
  },
  'bengal': {
    name: 'Bengal',
    description: 'Bengals bring wildcat looks into the living room with their rosetted coats and athletic build.',
    origin: 'United States (hybrid of Asian leopard cat and domestic cats)',
    personality: 'Energetic, adventurous, and always ready to climb.',
    coat: 'Short, glittering coat with dramatic marbled or spotted patterns.',
    tip: 'Offer vertical spaces and regular playtime to match their energy.'
  },
  'sphynx': {
    name: 'Sphynx',
    description: 'The Sphynx may be hairless, but they make up for it with warmth, affection, and playful antics.',
    origin: 'Canada',
    personality: 'Friendly, extroverted, and loves to cuddle for warmth.',
    coat: 'Soft down or no coat; skin feels like warm suede.',
    tip: 'Schedule gentle baths to remove oils and keep their skin healthy.'
  },
  'ragdoll': {
    name: 'Ragdoll',
    description: 'Ragdolls are relaxed lap cats that often flop into your arms like a plush toy.',
    origin: 'United States',
    personality: 'Mellow, affectionate, and typically easygoing with kids and pets.',
    coat: 'Semi-long silky coat with pointed coloration and bright blue eyes.',
    tip: 'Brush a few times each week and provide cozy lounging spots they can claim.'
  }
};

const cards = document.querySelectorAll('.breed-card');
const nameEl = document.getElementById('breed-name');
const descriptionEl = document.getElementById('breed-description');
const detailsList = document.getElementById('breed-details');
const originEl = document.getElementById('detail-origin');
const personalityEl = document.getElementById('detail-personality');
const coatEl = document.getElementById('detail-coat');
const tipEl = document.getElementById('detail-tip');

let activeCard = null;

function setActiveCard(card) {
  if (activeCard) {
    activeCard.classList.remove('is-active');
  }
  activeCard = card;
  card.classList.add('is-active');
}

function showBreed(key) {
  const breed = breedData[key];

  if (!breed) {
    return;
  }

  nameEl.textContent = breed.name;
  descriptionEl.textContent = breed.description;
  originEl.textContent = breed.origin;
  personalityEl.textContent = breed.personality;
  coatEl.textContent = breed.coat;
  tipEl.textContent = breed.tip;
  detailsList.hidden = false;
}

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const key = card.dataset.breed;
    showBreed(key);
    setActiveCard(card);
  });
});

const defaultCard = document.querySelector('.breed-card');
if (defaultCard) {
  showBreed(defaultCard.dataset.breed);
  setActiveCard(defaultCard);
}
