const questions = {
  history: {
    easy: [
      {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: "George Washington"
      },
      {
        question: "In which year did India gain independence?",
        options: ["1942", "1945", "1947", "1950"],
        answer: "1947"
      },
      {
        question: "Which civilization built the pyramids?",
        options: ["Greek", "Egyptian", "Roman", "Mayan"],
        answer: "Egyptian"
      },
      {
        question: "Who discovered America?",
        options: ["Marco Polo", "Columbus", "Magellan", "Vasco da Gama"],
        answer: "Columbus"
      },
      {
        question: "What was the name of the ship on which the Pilgrims traveled to America?",
        options: ["Santa Maria", "Titanic", "Mayflower", "Beagle"],
        answer: "Mayflower"
      },
      {
        question: "Where is the Great Wall located?",
        options: ["India", "China", "Russia", "Japan"],
        answer: "China"
      },
      {
        question: "Who was the British Prime Minister during WWII?",
        options: ["Winston Churchill", "Neville Chamberlain", "Tony Blair", "David Cameron"],
        answer: "Winston Churchill"
      },
      {
        question: "What empire was ruled by Julius Caesar?",
        options: ["Ottoman", "Mongol", "Roman", "Persian"],
        answer: "Roman"
      },
      {
        question: "Who was the last Mughal emperor of India?",
        options: ["Akbar", "Aurangzeb", "Bahadur Shah Zafar", "Shah Jahan"],
        answer: "Bahadur Shah Zafar"
      },
      {
        question: "What event started WWI?",
        options: [
          "Invasion of Poland",
          "Assassination of Archduke Franz Ferdinand",
          "Treaty of Versailles",
          "Pearl Harbor attack"
        ],
        answer: "Assassination of Archduke Franz Ferdinand"
      }
    ],
    medium: [
      {
        question: "The Battle of Plassey was fought in which year?",
        options: ["1757", "1761", "1857", "1805"],
        answer: "1757"
      },
      {
        question: "Which dynasty built the Konark Sun Temple?",
        options: ["Chola", "Maurya", "Ganga", "Gupta"],
        answer: "Ganga"
      },
      {
        question: "Where was the Indus Valley civilization located?",
        options: ["India", "China", "Egypt", "Mesopotamia"],
        answer: "India"
      },
      {
        question: "Who was the first female ruler of India?",
        options: ["Razia Sultana", "Indira Gandhi", "Jhansi Rani", "Ahilyabai Holkar"],
        answer: "Razia Sultana"
      },
      {
        question: "What was the capital of the Maurya Empire?",
        options: ["Delhi", "Pataliputra", "Kalinga", "Taxila"],
        answer: "Pataliputra"
      },
      {
        question: "Which Indian leader is known as 'The Father of the Nation'?",
        options: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "Bose"],
        answer: "Mahatma Gandhi"
      },
      {
        question: "The Industrial Revolution began in which country?",
        options: ["France", "Germany", "England", "USA"],
        answer: "England"
      },
      {
        question: "Who was known as Iron Lady of India?",
        options: ["Razia Sultana", "Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu"],
        answer: "Indira Gandhi"
      },
      {
        question: "Which war ended with the Treaty of Versailles?",
        options: ["WWI", "WWII", "Cold War", "Vietnam War"],
        answer: "WWI"
      },
      {
        question: "What was Hitler’s party called?",
        options: ["Communist", "Democratic", "Nazi", "Labour"],
        answer: "Nazi"
      }
    ],
    hard: [
      {
        question: "Who wrote 'The History of the Decline and Fall of the Roman Empire'?",
        options: ["Gibbon", "Tacitus", "Livy", "Plutarch"],
        answer: "Gibbon"
      },
      {
        question: "What was the code name for the Allied invasion of Normandy?",
        options: ["Overlord", "Barbarossa", "Torch", "Neptune"],
        answer: "Overlord"
      },
      {
        question: "When was the Berlin Wall constructed?",
        options: ["1945", "1961", "1989", "1955"],
        answer: "1961"
      },
      {
        question: "Who was the founder of the Ottoman Empire?",
        options: ["Osman I", "Suleiman", "Mehmet", "Saladin"],
        answer: "Osman I"
      },
      {
        question: "In which year did the French Revolution begin?",
        options: ["1776", "1789", "1804", "1815"],
        answer: "1789"
      },
      {
        question: "Who succeeded Lenin in USSR?",
        options: ["Trotsky", "Stalin", "Gorbachev", "Khrushchev"],
        answer: "Stalin"
      },
      {
        question: "Which treaty ended the Napoleonic Wars?",
        options: ["Treaty of Paris", "Treaty of Vienna", "Treaty of Tilsit", "Treaty of Versailles"],
        answer: "Treaty of Paris"
      },
      {
        question: "Which Mughal emperor wrote his own biography in Persian?",
        options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
        answer: "Babur"
      },
      {
        question: "Who was the longest reigning monarch in British history before Queen Elizabeth II?",
        options: ["George III", "Victoria", "Henry VIII", "Edward III"],
        answer: "Victoria"
      },
      {
        question: "Which philosopher tutored Alexander the Great?",
        options: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
        answer: "Aristotle"
      }
    ]
  },

   math: {
    easy: [
      { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
      { question: "What is 9 - 3?", options: ["3", "5", "6", "9"], answer: "6" },
      { question: "5 x 0 = ?", options: ["0", "5", "1", "10"], answer: "0" },
      { question: "What is 10 ÷ 2?", options: ["3", "4", "5", "6"], answer: "5" },
      { question: "What is 100 more than 250?", options: ["250", "350", "300", "450"], answer: "350" },
      { question: "How many sides does a triangle have?", options: ["2", "3", "4", "5"], answer: "3" },
      { question: "Which is an even number?", options: ["3", "7", "8", "9"], answer: "8" },
      { question: "What is 3²?", options: ["6", "9", "12", "15"], answer: "9" },
      { question: "What comes after 19?", options: ["18", "20", "22", "21"], answer: "20" },
      { question: "What is the Roman numeral for 5?", options: ["I", "X", "V", "L"], answer: "V" }
    ],
    medium: [
      { question: "What is 15% of 200?", options: ["20", "25", "30", "35"], answer: "30" },
      { question: "Solve: 3x + 2 = 11", options: ["3", "2", "1", "4"], answer: "3" },
      { question: "What is the area of a square with side 5?", options: ["10", "20", "25", "30"], answer: "25" },
      { question: "What is 7 x 8?", options: ["56", "48", "64", "54"], answer: "56" },
      { question: "What is the square root of 81?", options: ["9", "8", "7", "6"], answer: "9" },
      { question: "What is the next prime after 7?", options: ["8", "9", "10", "11"], answer: "11" },
      { question: "Convert 0.75 into a fraction.", options: ["3/4", "2/3", "1/2", "4/5"], answer: "3/4" },
      { question: "What is 3 cubed?", options: ["9", "27", "18", "6"], answer: "27" },
      { question: "What is 5! (factorial of 5)?", options: ["120", "60", "24", "100"], answer: "120" },
      { question: "Simplify: 2(x + 3)", options: ["2x + 3", "x + 6", "2x + 6", "6x"], answer: "2x + 6" }
    ],
    hard: [
      { question: "What is the value of π (pi) approximately?", options: ["2.14", "3.14", "3.41", "1.41"], answer: "3.14" },
      { question: "What is the derivative of x²?", options: ["x", "2x", "x²", "2"], answer: "2x" },
      { question: "What is the integral of 1/x dx?", options: ["x", "1/x", "ln|x|", "x²"], answer: "ln|x|" },
      { question: "Solve: x² - 9 = 0", options: ["±3", "±9", "±1", "0"], answer: "±3" },
      { question: "What is the determinant of [[2,3],[1,4]]?", options: ["5", "7", "8", "1"], answer: "5" },
      { question: "Limit of (1 + 1/n)^n as n → ∞ is?", options: ["0", "1", "e", "∞"], answer: "e" },
      { question: "Which number is an irrational number?", options: ["√2", "4", "0.5", "1"], answer: "√2" },
      { question: "What is the angle sum of a pentagon?", options: ["360°", "540°", "720°", "900°"], answer: "540°" },
      { question: "Solve: log₁₀(1000)", options: ["1", "2", "3", "10"], answer: "3" },
      { question: "What is the binomial coefficient C(5,2)?", options: ["10", "15", "5", "20"], answer: "10" }
    ]
  },

  science: {
    easy: [
      { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
      { question: "Water freezes at what temperature?", options: ["0°C", "100°C", "50°C", "32°C"], answer: "0°C" },
      { question: "What do humans breathe in?", options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Helium"], answer: "Oxygen" },
      { question: "Which organ pumps blood?", options: ["Lungs", "Heart", "Kidney", "Liver"], answer: "Heart" },
      { question: "Which gas is essential for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"], answer: "Carbon Dioxide" },
      { question: "What is H2O?", options: ["Oxygen", "Hydrogen", "Water", "Salt"], answer: "Water" },
      { question: "Which planet is closest to the Sun?", options: ["Earth", "Mars", "Mercury", "Venus"], answer: "Mercury" },
      { question: "What is the boiling point of water?", options: ["90°C", "100°C", "80°C", "70°C"], answer: "100°C" },
      { question: "Which body part helps us to see?", options: ["Ears", "Nose", "Eyes", "Mouth"], answer: "Eyes" },
      { question: "How many legs does an insect have?", options: ["4", "6", "8", "10"], answer: "6" }
    ],
    medium: [
      { question: "What gas do plants release during photosynthesis?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: "Oxygen" },
      { question: "Which vitamin is produced in the skin when exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
      { question: "What is the basic unit of life?", options: ["Atom", "Molecule", "Cell", "Tissue"], answer: "Cell" },
      { question: "Which organ filters blood in the human body?", options: ["Heart", "Kidney", "Lungs", "Liver"], answer: "Kidney" },
      { question: "How many bones are in the adult human body?", options: ["206", "210", "200", "180"], answer: "206" },
      { question: "Which element is needed for the formation of red blood cells?", options: ["Iron", "Calcium", "Magnesium", "Zinc"], answer: "Iron" },
      { question: "What is the chemical formula of common salt?", options: ["NaCl", "KCl", "MgCl", "CaCl"], answer: "NaCl" },
      { question: "Which part of the plant conducts photosynthesis?", options: ["Roots", "Stem", "Leaves", "Flower"], answer: "Leaves" },
      { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Lungs"], answer: "Skin" },
      { question: "Which force pulls objects to the Earth?", options: ["Magnetism", "Friction", "Gravity", "Electricity"], answer: "Gravity" }
    ],
    hard: [
      { question: "What is the powerhouse of the cell?", options: ["Ribosome", "Nucleus", "Mitochondria", "Golgi body"], answer: "Mitochondria" },
      { question: "What is the unit of electrical resistance?", options: ["Ohm", "Volt", "Ampere", "Watt"], answer: "Ohm" },
      { question: "Speed of light is approximately?", options: ["300,000 km/s", "150,000 km/s", "30,000 km/s", "3,000 km/s"], answer: "300,000 km/s" },
      { question: "Which particle has no charge?", options: ["Electron", "Proton", "Neutron", "Nucleus"], answer: "Neutron" },
      { question: "Which organelle is responsible for protein synthesis?", options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], answer: "Ribosome" },
      { question: "What is Newton's third law?", options: ["F=ma", "Inertia", "Every action has equal and opposite reaction", "None"], answer: "Every action has equal and opposite reaction" },
      { question: "Which is not a noble gas?", options: ["Helium", "Argon", "Nitrogen", "Neon"], answer: "Nitrogen" },
      { question: "What is the chemical symbol of gold?", options: ["Au", "Ag", "Gd", "Go"], answer: "Au" },
      { question: "What is pH value of pure water?", options: ["6", "7", "8", "9"], answer: "7" },
      { question: "How many chromosomes are in a human cell?", options: ["46", "48", "44", "42"], answer: "46" }
    ]
  },

  general: {
    easy: [
      { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
      { question: "Which is the tallest mountain in the world?", options: ["K2", "Kilimanjaro", "Everest", "Makalu"], answer: "Everest" },
      { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
      { question: "Which is the national flower of India?", options: ["Rose", "Lotus", "Sunflower", "Lily"], answer: "Lotus" },
      { question: "Who is the Prime Minister of India (2024)?", options: ["Rahul Gandhi", "Narendra Modi", "Manmohan Singh", "Amit Shah"], answer: "Narendra Modi" },
      { question: "How many states are in India?", options: ["28", "29", "30", "27"], answer: "28" },
      { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Osaka"], answer: "Tokyo" },
      { question: "Which sport is known as the ‘king of sports’?", options: ["Cricket", "Tennis", "Football", "Hockey"], answer: "Football" },
      { question: "What currency is used in the USA?", options: ["Euro", "Dollar", "Peso", "Rupee"], answer: "Dollar" },
      { question: "Which bird is known for wisdom?", options: ["Crow", "Parrot", "Owl", "Sparrow"], answer: "Owl" }
    ],
    medium: [
      { question: "Who wrote the national anthem of India?", options: ["Rabindranath Tagore", "Bankim Chandra", "Subhash Chandra Bose", "Gandhi"], answer: "Rabindranath Tagore" },
      { question: "What is the longest river in the world?", options: ["Amazon", "Ganges", "Nile", "Yangtze"], answer: "Nile" },
      { question: "Which is the largest desert in the world?", options: ["Gobi", "Sahara", "Kalahari", "Thar"], answer: "Sahara" },
      { question: "What does CPU stand for?", options: ["Central Power Unit", "Central Processing Unit", "Control Power Unit", "Central Process Unit"], answer: "Central Processing Unit" },
      { question: "Where is the Statue of Liberty?", options: ["London", "Paris", "New York", "Toronto"], answer: "New York" },
      { question: "Which animal is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], answer: "Blue Whale" },
      { question: "What is the boiling point of water in Fahrenheit?", options: ["100", "150", "200", "212"], answer: "212" },
      { question: "Which is the most spoken language in the world?", options: ["English", "Hindi", "Mandarin", "Spanish"], answer: "Mandarin" },
      { question: "Who invented the light bulb?", options: ["Edison", "Newton", "Tesla", "Einstein"], answer: "Edison" },
      { question: "Which festival is known as the festival of lights?", options: ["Holi", "Christmas", "Eid", "Diwali"], answer: "Diwali" }
    ],
    hard: [
      { question: "Which country hosted the first Olympic Games?", options: ["France", "USA", "Greece", "Italy"], answer: "Greece" },
      { question: "Which element has the atomic number 1?", options: ["Helium", "Hydrogen", "Oxygen", "Carbon"], answer: "Hydrogen" },
      { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"], answer: "Leonardo da Vinci" },
      { question: "What is the SI unit of force?", options: ["Newton", "Joule", "Pascal", "Watt"], answer: "Newton" },
      { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Mars", "Uranus"], answer: "Saturn" },
      { question: "Who discovered gravity?", options: ["Einstein", "Galileo", "Newton", "Tesla"], answer: "Newton" },
      { question: "Which gas forms ozone?", options: ["O2", "CO2", "O3", "N2"], answer: "O3" },
      { question: "Where is the Great Barrier Reef?", options: ["USA", "Australia", "India", "Brazil"], answer: "Australia" },
      { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: "Ottawa" },
      { question: "Which is the largest island in the world?", options: ["Greenland", "Australia", "New Guinea", "Madagascar"], answer: "Greenland" }
    ]
  }
};



export default questions;
