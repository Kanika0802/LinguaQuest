const languageData = {
    german: {
        name: "German",
        nativeName: "Deutsch lernen",
        difficulty: 3,
        lessons: [
            {
                title: "Alphabets and Pronunciation",
                subtitle: "Learn the German alphabet and how to pronounce each letter",
                phrases: [
                    { english: "A", translation: "Ah", pronunciation: "ah" },
                    { english: "B", translation: "Beh", pronunciation: "beh" },
                    { english: "C", translation: "Tseh", pronunciation: "tseh" },
                    { english: "D", translation: "Deh", pronunciation: "deh" },
                    { english: "E", translation: "Eh", pronunciation: "eh" },
                    { english: "F", translation: "Eff", pronunciation: "eff" },
                    { english: "G", translation: "Geh", pronunciation: "geh" },
                    { english: "H", translation: "Hah", pronunciation: "hah" },
                    { english: "I", translation: "Ee", pronunciation: "ee" },
                    { english: "J", translation: "Yot", pronunciation: "yot" },
                    { english: "K", translation: "Kah", pronunciation: "kah" },
                    { english: "L", translation: "Ell", pronunciation: "ell" },
                    { english: "M", translation: "Emm", pronunciation: "emm" },
                    { english: "N", translation: "Enn", pronunciation: "enn" },
                    { english: "O", translation: "Oh", pronunciation: "oh" },
                    { english: "P", translation: "Peh", pronunciation: "peh" },
                    { english: "Q", translation: "Kuh", pronunciation: "kuh" },
                    { english: "R", translation: "Err", pronunciation: "err" },
                    { english: "S", translation: "Ess", pronunciation: "ess" },
                    { english: "T", translation: "Teh", pronunciation: "teh" },
                    { english: "U", translation: "Oo", pronunciation: "oo" },
                    { english: "V", translation: "Fau", pronunciation: "fau" },
                    { english: "W", translation: "Veh", pronunciation: "veh" },
                    { english: "X", translation: "Ix", pronunciation: "ix" },
                    { english: "Y", translation: "Ypsilon", pronunciation: "ypsilon" },
                    { english: "Z", translation: "Tsett", pronunciation: "tsett" }
                ]
            },
            {
                title: "Numbers and Pronunciation",
                subtitle: "Learn to count in German from 1 to 20",
                phrases: [
                    { english: "1", translation: "Eins", pronunciation: "eyns" },
                    { english: "2", translation: "Zwei", pronunciation: "tsvy" },
                    { english: "3", translation: "Drei", pronunciation: "dry" },
                    { english: "4", translation: "Vier", pronunciation: "feer" },
                    { english: "5", translation: "Fünf", pronunciation: "fuhnf" },
                    { english: "6", translation: "Sechs", pronunciation: "zeks" },
                    { english: "7", translation: "Sieben", pronunciation: "zee-ben" },
                    { english: "8", translation: "Acht", pronunciation: "ahkt" },
                    { english: "9", translation: "Neun", pronunciation: "noyn" },
                    { english: "10", translation: "Zehn", pronunciation: "tsayn" },
                    { english: "11", translation: "Elf", pronunciation: "elf" },
                    { english: "12", translation: "Zwölf", pronunciation: "tsvuhlf" },
                    { english: "13", translation: "Dreizehn", pronunciation: "dry-tsayn" },
                    { english: "14", translation: "Vierzehn", pronunciation: "feer-tsayn" },
                    { english: "15", translation: "Fünfzehn", pronunciation: "fuhnf-tsayn" },
                    { english: "16", translation: "Sechzehn", pronunciation: "zek-tsayn" },
                    { english: "17", translation: "Siebzehn", pronunciation: "zeep-tsayn" },
                    { english: "18", translation: "Achtzehn", pronunciation: "ahkt-tsayn" },
                    { english: "19", translation: "Neunzehn", pronunciation: "noyn-tsayn" },
                    { english: "20", translation: "Zwanzig", pronunciation: "tsvan-tsikh" }
                ]
            },
            {
                title: "Common Greetings",
                subtitle: "Essential German greetings for everyday conversation",
                phrases: [
                    { english: "Hello", translation: "Hallo", pronunciation: "hah-loh" },
                    { english: "Good morning", translation: "Guten Morgen", pronunciation: "goo-ten mor-gen" },
                    { english: "Good afternoon", translation: "Guten Tag", pronunciation: "goo-ten tahk" },
                    { english: "Good evening", translation: "Guten Abend", pronunciation: "goo-ten ah-bent" },
                    { english: "Good night", translation: "Gute Nacht", pronunciation: "goo-te nahkt" },
                    { english: "Goodbye", translation: "Auf Wiedersehen", pronunciation: "owf vee-der-zayn" },
                    { english: "See you later", translation: "Bis später", pronunciation: "bis shpay-ter" },
                    { english: "See you tomorrow", translation: "Bis morgen", pronunciation: "bis mor-gen" },
                    { english: "Have a nice day", translation: "Einen schönen Tag", pronunciation: "eye-nen shuh-nen tahk" },
                    { english: "Welcome", translation: "Willkommen", pronunciation: "vil-kom-men" }
                ]
            },
            {
                title: "Common Phrases",
                subtitle: "Useful German phrases for daily communication",
                phrases: [
                    { english: "Thank you", translation: "Danke", pronunciation: "dahn-ke" },
                    { english: "You're welcome", translation: "Bitte", pronunciation: "bit-te" },
                    { english: "Please", translation: "Bitte", pronunciation: "bit-te" },
                    { english: "Excuse me", translation: "Entschuldigung", pronunciation: "ent-shool-di-gung" },
                    { english: "How are you?", translation: "Wie geht es dir?", pronunciation: "vee gayt es deer" },
                    { english: "I'm fine", translation: "Mir geht es gut", pronunciation: "meer gayt es goot" },
                    { english: "What's your name?", translation: "Wie heißt du?", pronunciation: "vee hyst doo" },
                    { english: "My name is...", translation: "Ich heiße...", pronunciation: "ikh hy-se" },
                    { english: "Nice to meet you", translation: "Freut mich", pronunciation: "froyt mikh" },
                    { english: "I don't understand", translation: "Ich verstehe nicht", pronunciation: "ikh fer-shtay-e nikt" },
                    { english: "Do you speak English?", translation: "Sprechen Sie Englisch?", pronunciation: "shprek-en zee eng-lish" },
                    { english: "Yes", translation: "Ja", pronunciation: "yah" },
                    { english: "No", translation: "Nein", pronunciation: "nyn" },
                    { english: "I'm sorry", translation: "Es tut mir leid", pronunciation: "es toot meer lyt" },
                    { english: "Good luck", translation: "Viel Glück", pronunciation: "feel glook" }
                ]
            }
        ]
    },
    japanese: {
        name: "Japanese",
        nativeName: "日本語を学ぶ",
        difficulty: 4,
        lessons: [
            {
                title: "Basic Greetings",
                subtitle: "Essential Japanese greetings for everyday conversation",
                phrases: [
                    { english: "Hello", translation: "こんにちは", pronunciation: "kon-ni-chi-wa" },
                    { english: "Good morning", translation: "おはようございます", pronunciation: "o-ha-yo-u go-za-i-ma-su" },
                    { english: "Good evening", translation: "こんばんは", pronunciation: "kon-ban-wa" },
                    { english: "Goodbye", translation: "さようなら", pronunciation: "sa-yo-u-na-ra" }
                ]
            },
            {
                title: "Common Phrases",
                subtitle: "Useful Japanese phrases for daily communication",
                phrases: [
                    { english: "Thank you", translation: "ありがとう", pronunciation: "a-ri-ga-to-u" },
                    { english: "You're welcome", translation: "どういたしまして", pronunciation: "do-u-i-ta-shi-ma-shi-te" },
                    { english: "Excuse me", translation: "すみません", pronunciation: "su-mi-ma-sen" },
                    { english: "How are you?", translation: "お元気ですか？", pronunciation: "o-gen-ki de-su-ka" },
                    { english: "Yes", translation: "はい", pronunciation: "ha-i" },
                    { english: "No", translation: "いいえ", pronunciation: "i-i-e" },
                    { english: "Please", translation: "お願いします", pronunciation: "o-ne-ga-i-shi-ma-su" },
                    { english: "I don't understand", translation: "わかりません", pronunciation: "wa-ka-ri-ma-sen" }
                ]
            },
            {
                title: "Hiragana - Vowels",
                subtitle: "The five basic vowels in the Japanese hiragana writing system",
                phrases: [
                    { english: "A", translation: "あ", pronunciation: "a" },
                    { english: "I", translation: "い", pronunciation: "i" },
                    { english: "U", translation: "う", pronunciation: "u" },
                    { english: "E", translation: "え", pronunciation: "e" },
                    { english: "O", translation: "お", pronunciation: "o" }
                ]
            },
            {
                title: "Hiragana - K Group",
                subtitle: "The K-group characters in hiragana",
                phrases: [
                    { english: "KA", translation: "か", pronunciation: "ka" },
                    { english: "KI", translation: "き", pronunciation: "ki" },
                    { english: "KU", translation: "く", pronunciation: "ku" },
                    { english: "KE", translation: "け", pronunciation: "ke" },
                    { english: "KO", translation: "こ", pronunciation: "ko" }
                ]
            },
            {
                title: "Hiragana - S Group",
                subtitle: "The S-group characters in hiragana",
                phrases: [
                    { english: "SA", translation: "さ", pronunciation: "sa" },
                    { english: "SHI", translation: "し", pronunciation: "shi" },
                    { english: "SU", translation: "す", pronunciation: "su" },
                    { english: "SE", translation: "せ", pronunciation: "se" },
                    { english: "SO", translation: "そ", pronunciation: "so" }
                ]
            },
            {
                title: "Hiragana - T Group",
                subtitle: "The T-group characters in hiragana",
                phrases: [
                    { english: "TA", translation: "た", pronunciation: "ta" },
                    { english: "CHI", translation: "ち", pronunciation: "chi" },
                    { english: "TSU", translation: "つ", pronunciation: "tsu" },
                    { english: "TE", translation: "て", pronunciation: "te" },
                    { english: "TO", translation: "と", pronunciation: "to" }
                ]
            },
            {
                title: "Katakana - Vowels",
                subtitle: "The five basic vowels in the Japanese katakana writing system",
                phrases: [
                    { english: "A", translation: "ア", pronunciation: "a" },
                    { english: "I", translation: "イ", pronunciation: "i" },
                    { english: "U", translation: "ウ", pronunciation: "u" },
                    { english: "E", translation: "エ", pronunciation: "e" },
                    { english: "O", translation: "オ", pronunciation: "o" }
                ]
            },
            {
                title: "Katakana - K Group",
                subtitle: "The K-group characters in katakana",
                phrases: [
                    { english: "KA", translation: "カ", pronunciation: "ka" },
                    { english: "KI", translation: "キ", pronunciation: "ki" },
                    { english: "KU", translation: "ク", pronunciation: "ku" },
                    { english: "KE", translation: "ケ", pronunciation: "ke" },
                    { english: "KO", translation: "コ", pronunciation: "ko" }
                ]
            },
            {
                title: "Katakana - S Group",
                subtitle: "The S-group characters in katakana",
                phrases: [
                    { english: "SA", translation: "サ", pronunciation: "sa" },
                    { english: "SHI", translation: "シ", pronunciation: "shi" },
                    { english: "SU", translation: "ス", pronunciation: "su" },
                    { english: "SE", translation: "セ", pronunciation: "se" },
                    { english: "SO", translation: "ソ", pronunciation: "so" }
                ]
            },
            {
                title: "Katakana - T Group",
                subtitle: "The T-group characters in katakana",
                phrases: [
                    { english: "TA", translation: "タ", pronunciation: "ta" },
                    { english: "CHI", translation: "チ", pronunciation: "chi" },
                    { english: "TSU", translation: "ツ", pronunciation: "tsu" },
                    { english: "TE", translation: "テ", pronunciation: "te" },
                    { english: "TO", translation: "ト", pronunciation: "to" }
                ]
            }
        ]
    }
};

// DOM elements
const modal = document.getElementById('languageModal');
const modalTitle = document.getElementById('modalTitle');
const closeBtn = document.querySelector('.close');
const languageCards = document.querySelectorAll('.language-card');
const backToLessonsBtn = document.querySelector('.back-to-lessons-btn');
const lessonButtons = document.getElementById('lessonButtons');
const lessonSelection = document.querySelector('.lesson-selection');
const lessonPreview = document.getElementById('lessonPreview');

let currentLanguage = null;
let currentLessonIndex = null;

// Game system variables
let userXP = 0;
let userHearts = 3;
let currentExerciseType = null;

document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    languageCards.forEach(card => {
        card.addEventListener('click', handleLanguageSelection);
    });

    closeBtn.addEventListener('click', closeModal);
    backToLessonsBtn.addEventListener('click', showLessonSelection);

    window.addEventListener('click', event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    languageCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    typeWriter();
}

function handleLanguageSelection(event) {
    const card = event.currentTarget;
    const language = card.getAttribute('data-language');
    currentLanguage = language;

    trackEvent('language_selected', { language });

    showLessonSelection();

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function showLessonSelection() {
    const data = languageData[currentLanguage];
    modalTitle.textContent = `Welcome to ${data.name} Learning!`;
    lessonSelection.style.display = 'block';
    lessonPreview.style.display = 'none';
    generateLessonButtons();
    
    // Reset hearts when returning to lesson selection
    resetHearts();
}

function generateLessonButtons() {
    const data = languageData[currentLanguage];
    lessonButtons.innerHTML = '';
    data.lessons.forEach((lesson, index) => {
        const lessonBtn = document.createElement('div');
        lessonBtn.className = 'lesson-btn';
        lessonBtn.innerHTML = `
            <div class="lesson-number">${index + 1}</div>
            <h4>${lesson.title}</h4>
            <p>${lesson.subtitle || ''}</p>
        `;
        lessonBtn.addEventListener('click', () => showLessonPreview(index));
        lessonButtons.appendChild(lessonBtn);
    });
}

function showLessonPreview(index) {
    currentLessonIndex = index;
    const data = languageData[currentLanguage];
    const lesson = data.lessons[index];

    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonSubtitle').textContent = lesson.subtitle || '';

    const lessonExample = document.getElementById('lessonExample');
    lessonExample.innerHTML = '';
    
    // Add game status UI
    const gameStatusDiv = document.createElement('div');
    gameStatusDiv.id = 'gameStatus';
    gameStatusDiv.className = 'game-status';
    lessonExample.appendChild(gameStatusDiv);
    
    // Display phrases first
    const phrasesContainer = document.createElement('div');
    phrasesContainer.className = 'phrases-container';
    lesson.phrases.forEach(phrase => {
        const div = document.createElement('div');
        div.className = 'phrase';
        div.innerHTML = `
            <div class="phrase-content">
                <span class="original">${phrase.english}</span>
                <span class="translation">${phrase.translation}</span>
                ${phrase.pronunciation ? `<span class="pronunciation">[${phrase.pronunciation}]</span>` : ''}
            </div>
        `;
        phrasesContainer.appendChild(div);
    });
    lessonExample.appendChild(phrasesContainer);
    
    // Add interactive exercises section
    const exercisesContainer = document.createElement('div');
    exercisesContainer.className = 'exercises-container';
    exercisesContainer.innerHTML = `
        <h4 class="exercises-title">Practice Exercises</h4>
        <div class="exercise-tabs">
            <button class="exercise-tab active" data-exercise="multiple-choice">Multiple Choice</button>
            <button class="exercise-tab" data-exercise="fill-blanks">Fill in the Blanks</button>
            <button class="exercise-tab" data-exercise="matching">Matching</button>
        </div>
        <div class="exercise-content"></div>
    `;
    lessonExample.appendChild(exercisesContainer);
    
    // Set up tab switching
    const tabs = exercisesContainer.querySelectorAll('.exercise-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const exerciseType = tab.getAttribute('data-exercise');
            currentExerciseType = exerciseType;
            generateExercise(exerciseType, lesson.phrases);
        });
    });
    
    // Generate the first exercise by default
    currentExerciseType = 'multiple-choice';
    generateExercise('multiple-choice', lesson.phrases);
    
    // Update the game UI
    updateGameUI();

    lessonSelection.style.display = 'none';
    lessonPreview.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    document.body.appendChild(notification);
    setTimeout(() => { notification.style.transform = 'translateX(0)'; }, 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function typeWriter() {
    const heroTitle = document.querySelector('.hero-title');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            this.style.pointerEvents = 'none';
            setTimeout(() => {
                this.classList.remove('loading');
                this.style.pointerEvents = 'auto';
            }, 1000);
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    .loading {
        position: relative;
        color: transparent !important;
    }
    .loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin: -10px 0 0 -10px;
        border: 2px solid transparent;
        border-top: 2px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .language-card {
        cursor: pointer;
    }
    .language-card:hover .select-btn {
        background: linear-gradient(135deg, #5a6fd8, #6a4190);
    }
`;
document.head.appendChild(style);

function saveProgress(language, lesson, score) {
    const progress = JSON.parse(localStorage.getItem('lingoProgress') || '{}');
    if (!progress[language]) progress[language] = {};
    progress[language][lesson] = score;
    
    // Save XP and hearts
    progress.userXP = userXP;
    progress.userHearts = userHearts;
    
    localStorage.setItem('lingoProgress', JSON.stringify(progress));
}

function getProgress(language) {
    const progress = JSON.parse(localStorage.getItem('lingoProgress') || '{}');
    
    // Load XP and hearts if available
    if (progress.userXP !== undefined) userXP = progress.userXP;
    if (progress.userHearts !== undefined) userHearts = progress.userHearts;
    
    return progress[language] || {};
}

function addXP(amount) {
    userXP += amount;
    updateGameUI();
    showNotification(`+${amount} XP!`, 'success');
    saveProgress(currentLanguage, currentLessonIndex, 0); // Save XP progress
}

function loseHeart() {
    if (userHearts > 0) {
        userHearts--;
        updateGameUI();
        
        if (userHearts === 0) {
            showNotification('No hearts left! Try again later.', 'info');
            setTimeout(() => {
                showLessonSelection(); // Return to lesson selection
            }, 2000);
        } else {
            showNotification(`Oops! ${userHearts} hearts left.`, 'info');
        }
        
        saveProgress(currentLanguage, currentLessonIndex, 0); // Save hearts progress
    }
}

function resetHearts() {
    userHearts = 3;
    updateGameUI();
    saveProgress(currentLanguage, currentLessonIndex, 0);
}

function updateGameUI() {
    const gameStatusElement = document.getElementById('gameStatus');
    if (gameStatusElement) {
        gameStatusElement.innerHTML = `
            <div class="xp-display">
                <i class="fas fa-star"></i> ${userXP} XP
            </div>
            <div class="hearts-display">
                ${Array(3).fill().map((_, i) => 
                    i < userHearts ? 
                    '<i class="fas fa-heart"></i>' : 
                    '<i class="far fa-heart"></i>'
                ).join('')}
            </div>
        `;
    }
}

function trackEvent(eventName, data = {}) {
    console.log('Analytics Event:', eventName, data);
}

// Function to generate different types of exercises
function generateExercise(type, phrases) {
    const exerciseContent = document.querySelector('.exercise-content');
    exerciseContent.innerHTML = '';
    
    // Track exercise type selected
    trackEvent('exercise_selected', { type });
    
    switch(type) {
        case 'multiple-choice':
            generateMultipleChoiceExercise(exerciseContent, phrases);
            break;
        case 'fill-blanks':
            generateFillBlanksExercise(exerciseContent, phrases);
            break;
        case 'matching':
            generateMatchingExercise(exerciseContent, phrases);
            break;
    }
}

// Generate multiple choice exercise
function generateMultipleChoiceExercise(container, phrases) {
    if (phrases.length < 4) return;
    
    // Reset hearts if starting a new exercise session
    if (userHearts === 0) {
        resetHearts();
    }
    
    // Select 5 random phrases for questions (or fewer if not enough phrases)
    const questionCount = Math.min(5, phrases.length);
    const shuffledPhrases = [...phrases].sort(() => Math.random() - 0.5);
    const selectedPhrases = shuffledPhrases.slice(0, questionCount);
    
    const exerciseDiv = document.createElement('div');
    exerciseDiv.className = 'multiple-choice-exercise';
    
    // Create instructions
    const instructions = document.createElement('p');
    instructions.className = 'exercise-instructions';
    instructions.textContent = 'Choose the correct translation for each word or phrase:';
    exerciseDiv.appendChild(instructions);
    
    // Add game explanation
    const gameExplanation = document.createElement('div');
    gameExplanation.className = 'game-explanation';
    gameExplanation.innerHTML = `
        <p><i class="fas fa-star"></i> Earn 10 XP for each correct answer and 50 XP bonus for completing all questions!</p>
        <p><i class="fas fa-heart"></i> Lose a heart for each incorrect answer. If you run out of hearts, you'll need to restart.</p>
    `;
    exerciseDiv.appendChild(gameExplanation);
    
    // Create questions
    selectedPhrases.forEach((phrase, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'exercise-question';
        questionDiv.innerHTML = `<p class="question-text">${index + 1}. ${phrase.english}</p>`;
        
        // Create options (1 correct, 3 incorrect)
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'question-options';
        
        // Get incorrect options from other phrases
        const otherPhrases = phrases.filter(p => p !== phrase);
        const incorrectOptions = otherPhrases
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(p => p.translation);
        
        // Combine correct and incorrect options and shuffle
        const allOptions = [phrase.translation, ...incorrectOptions].sort(() => Math.random() - 0.5);
        
        allOptions.forEach(option => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.addEventListener('click', () => {
                // If no hearts left, don't allow answering
                if (userHearts === 0) {
                    showNotification('No hearts left! Try again later.', 'info');
                    return;
                }
                
                // Remove any previous selection in this question
                questionDiv.querySelectorAll('.option-btn').forEach(btn => {
                    btn.classList.remove('correct', 'incorrect');
                });
                
                // Check if answer is correct
                if (option === phrase.translation) {
                    optionBtn.classList.add('correct');
                    showNotification('Correct! +10 XP', 'success');
                    // Award XP for correct answer
                    addXP(10);
                    
                    // Disable all options for this question
                    questionDiv.querySelectorAll('.option-btn').forEach(btn => {
                        btn.disabled = true;
                    });
                    
                    // Check if all questions are answered correctly
                    const allCorrect = document.querySelectorAll('.exercise-question').length === 
                                      document.querySelectorAll('.option-btn.correct').length;
                    if (allCorrect) {
                        showNotification('All correct! Great job! +50 XP bonus', 'success');
                        addXP(50); // Bonus XP for completing all questions
                        saveProgress(currentLanguage, currentLessonIndex, 100);
                    }
                } else {
                    optionBtn.classList.add('incorrect');
                    showNotification('Try again!', 'info');
                    // Lose a heart for incorrect answer
                    loseHeart();
                }
            });
            optionsDiv.appendChild(optionBtn);
        });
        
        questionDiv.appendChild(optionsDiv);
        exerciseDiv.appendChild(questionDiv);
    });
    
    container.appendChild(exerciseDiv);
}

// Generate fill in the blanks exercise
function generateFillBlanksExercise(container, phrases) {
    if (phrases.length < 3) return;
    
    // Reset hearts if starting a new exercise session
    if (userHearts === 0) {
        resetHearts();
    }
    
    // Select 5 random phrases for questions (or fewer if not enough phrases)
    const questionCount = Math.min(5, phrases.length);
    const shuffledPhrases = [...phrases].sort(() => Math.random() - 0.5);
    const selectedPhrases = shuffledPhrases.slice(0, questionCount);
    
    const exerciseDiv = document.createElement('div');
    exerciseDiv.className = 'fill-blanks-exercise';
    
    // Create instructions
    const instructions = document.createElement('p');
    instructions.className = 'exercise-instructions';
    instructions.textContent = 'Fill in the blanks with the correct translation:';
    exerciseDiv.appendChild(instructions);
    
    // Add game explanation
    const gameExplanation = document.createElement('div');
    gameExplanation.className = 'game-explanation';
    gameExplanation.innerHTML = `
        <p><i class="fas fa-star"></i> Earn 10 XP for each correct answer and 50 XP bonus for completing all questions perfectly!</p>
        <p><i class="fas fa-heart"></i> Lose a heart for each incorrect answer. If you run out of hearts, you'll need to restart.</p>
    `;
    exerciseDiv.appendChild(gameExplanation);
    
    // Create form
    const form = document.createElement('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Don't allow submission if no hearts left
        if (userHearts === 0) {
            showNotification('No hearts left! Try again later.', 'info');
            return;
        }
        
        checkFillBlanksAnswers(form, selectedPhrases);
    });
    
    // Create questions
    selectedPhrases.forEach((phrase, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'exercise-question';
        
        questionDiv.innerHTML = `
            <p class="question-text">${index + 1}. ${phrase.english}</p>
            <div class="input-container">
                <input type="text" class="fill-blank-input" data-index="${index}" placeholder="Type translation here...">
            </div>
        `;
        
        form.appendChild(questionDiv);
    });
    
    // Add submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'check-answers-btn';
    submitBtn.textContent = 'Check Answers';
    form.appendChild(submitBtn);
    
    exerciseDiv.appendChild(form);
    container.appendChild(exerciseDiv);
}

// Function to check fill in the blanks answers
function checkFillBlanksAnswers(form, phrases) {
    const inputs = form.querySelectorAll('.fill-blank-input');
    let correctCount = 0;
    
    inputs.forEach(input => {
        const index = parseInt(input.getAttribute('data-index'));
        const correctAnswer = phrases[index].translation;
        
        // Remove previous result classes
        input.classList.remove('correct-answer', 'incorrect-answer');
        
        // Check if answer is correct (case insensitive)
        if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            input.classList.add('correct-answer');
            correctCount++;
            // Award XP for each correct answer
            addXP(10);
        } else {
            input.classList.add('incorrect-answer');
            // Show correct answer as placeholder
            input.placeholder = `Correct: ${correctAnswer}`;
            // Lose a heart for each incorrect answer
            loseHeart();
        }
    });
    
    // Show result notification
    showNotification(`You got ${correctCount} out of ${inputs.length} correct!`, 'info');
    
    // Award bonus XP for high scores
    if (correctCount === inputs.length) {
        addXP(50); // Perfect score bonus
        showNotification('Perfect score! +50 XP bonus!', 'success');
    } else if (correctCount >= inputs.length * 0.7) {
        addXP(20); // Good score bonus
        showNotification('Good job! +20 XP bonus!', 'success');
    }
    
    // Track completion
    trackEvent('exercise_completed', { 
        type: 'fill-blanks', 
        score: correctCount / inputs.length 
    });
}

// Generate matching exercise
function generateMatchingExercise(container, phrases) {
    if (phrases.length < 3) return;
    
    // Reset hearts if starting a new exercise session
    if (userHearts === 0) {
        resetHearts();
    }
    
    // Select phrases for matching (or fewer if not enough phrases)
    const pairCount = Math.min(6, phrases.length);
    const shuffledPhrases = [...phrases].sort(() => Math.random() - 0.5);
    const selectedPhrases = shuffledPhrases.slice(0, pairCount);
    
    const exerciseDiv = document.createElement('div');
    exerciseDiv.className = 'matching-exercise';
    
    // Create instructions
    const instructions = document.createElement('p');
    instructions.className = 'exercise-instructions';
    instructions.textContent = 'Match each word or phrase with its correct translation:';
    exerciseDiv.appendChild(instructions);
    
    // Create matching container
    const matchingContainer = document.createElement('div');
    matchingContainer.className = 'matching-container';
    
    // Create left column (English)
    const leftColumn = document.createElement('div');
    leftColumn.className = 'matching-column';
    
    // Create right column (Translations - shuffled)
    const rightColumn = document.createElement('div');
    rightColumn.className = 'matching-column';
    
    // Track which items are matched
    const matchedPairs = new Map();
    let selectedItem = null;
    
    // Add English items
    selectedPhrases.forEach((phrase, index) => {
        const item = document.createElement('div');
        item.className = 'matching-item';
        item.textContent = phrase.english;
        item.dataset.index = index;
        item.dataset.type = 'english';
        
        item.addEventListener('click', () => {
            // Don't allow interaction if no hearts left
            if (userHearts === 0) {
                showNotification('No hearts left! Try again later.', 'info');
                return;
            }
            handleMatchingItemClick(item, matchedPairs);
        });
        
        leftColumn.appendChild(item);
    });
    
    // Add translations (shuffled)
    [...selectedPhrases]
        .sort(() => Math.random() - 0.5)
        .forEach((phrase, index) => {
            const item = document.createElement('div');
            item.className = 'matching-item';
            item.textContent = phrase.translation;
            item.dataset.index = selectedPhrases.indexOf(phrase); // Original index for matching
            item.dataset.type = 'translation';
            
            item.addEventListener('click', () => {
                // Don't allow interaction if no hearts left
                if (userHearts === 0) {
                    showNotification('No hearts left! Try again later.', 'info');
                    return;
                }
                handleMatchingItemClick(item, matchedPairs);
            });
            
            rightColumn.appendChild(item);
        });
    
    matchingContainer.appendChild(leftColumn);
    matchingContainer.appendChild(rightColumn);
    exerciseDiv.appendChild(matchingContainer);
    
    // Add game status explanation
    const gameExplanation = document.createElement('div');
    gameExplanation.className = 'game-explanation';
    gameExplanation.innerHTML = `
        <p><i class="fas fa-star"></i> Earn 5 XP for each correct match and 30 XP bonus for completing all matches!</p>
        <p><i class="fas fa-heart"></i> Lose a heart for each incorrect match attempt.</p>
    `;
    exerciseDiv.appendChild(gameExplanation);
    
    container.appendChild(exerciseDiv);
}

// Handle matching item click
function handleMatchingItemClick(item, matchedPairs) {
    // If item is already matched, do nothing
    if (item.classList.contains('matched')) {
        return;
    }
    
    // If no item is selected, select this one
    if (!document.querySelector('.matching-item.selected')) {
        item.classList.add('selected');
        return;
    }
    
    const selectedItem = document.querySelector('.matching-item.selected');
    
    // If clicking the same item, deselect it
    if (selectedItem === item) {
        item.classList.remove('selected');
        return;
    }
    
    // If clicking an item of the same type (english/translation), switch selection
    if (selectedItem.dataset.type === item.dataset.type) {
        selectedItem.classList.remove('selected');
        item.classList.add('selected');
        return;
    }
    
    // Check if match is correct
    const isMatch = selectedItem.dataset.index === item.dataset.index;
    
    if (isMatch) {
        // Correct match
        selectedItem.classList.remove('selected');
        selectedItem.classList.add('matched');
        item.classList.add('matched');
        
        // Add line connecting the matched pairs
        drawMatchingLine(selectedItem, item);
        
        // Award XP for correct match
        addXP(5);
        
        // Check if all items are matched
        const allMatched = document.querySelectorAll('.matching-item:not(.matched)').length === 0;
        if (allMatched) {
            showNotification('Great job! All matches complete!', 'success');
            // Award bonus XP for completing the matching exercise
            addXP(30);
            trackEvent('exercise_completed', { type: 'matching', score: 1 });
        } else {
            showNotification('Correct match!', 'success');
        }
    } else {
        // Incorrect match
        selectedItem.classList.remove('selected');
        selectedItem.classList.add('shake');
        item.classList.add('shake');
        
        showNotification('Try again!', 'info');
        
        // Lose a heart for incorrect match
        loseHeart();
        
        // Remove shake animation after it completes
        setTimeout(() => {
            selectedItem.classList.remove('shake');
            item.classList.remove('shake');
        }, 500);
    }
}

// Draw a line connecting matched items
function drawMatchingLine(item1, item2) {
    // This is a simplified version - in a real implementation, you would
    // calculate positions and draw SVG lines between the elements
    console.log('Drawing line between matched items');
}

