// --- Translations Object ---
const translations = {
    en: {
        nav_expertise: "Expertise",
        nav_partners: "Partners",
        nav_connect: "Connect",
        hero_title: "Securing Roorkee's Future, <br><span class='highlight'>One Family at a Time.</span>",
        hero_tagline: "Contact for Life Insurance, Health Insurance, and General Insurance.",
        hero_subtitle: "Dheeraj Agarwal. Your unbiased, multi-brand insurance navigator in Uttarakhand.",
        btn_schedule: "Schedule a Consultation",
        badge_trust: "Trusted Advisor",
        partners_title: "AUTHORIZED PARTNER FOR LEADING ORGANIZATIONS",
        achieve_title: "Impact & Recognition",
        bento_award: "Top Regional Performer",
        bento_families: "Families Protected",
        bento_exp: "Industry Experience",
        bento_cert: "Certified Financial Protector",
        testi_title: "Trusted by Roorkee",
        contact_title: "Let's Connect",
        form_header: "Send a Message",
        form_name: "Your Name",
        form_email: "Email Address",
        form_phone: "Phone Number",
        form_msg: "How can I help?",
        btn_send: "Send Message"
    },
    hi: {
        nav_expertise: "विशेषज्ञता",
        nav_partners: "पार्टनर्स",
        nav_connect: "संपर्क करें",
        hero_title: "रुड़की के भविष्य को सुरक्षित करें, <br><span class='highlight'>एक समय में एक परिवार।</span>",
        hero_tagline: "जीवन बीमा, स्वास्थ्य बीमा और सामान्य बीमा के लिए संपर्क करें।",
        hero_subtitle: "धीरज अग्रवाल। उत्तराखंड में आपका निष्पक्ष, मल्टी-ब्रांड बीमा सलाहकार।",
        btn_schedule: "परामर्श बुक करें",
        badge_trust: "विश्वसनीय सलाहकार",
        partners_title: "प्रमुख संगठनों के लिए अधिकृत भागीदार",
        achieve_title: "प्रभाव और पहचान",
        bento_award: "शीर्ष क्षेत्रीय प्रदर्शन",
        bento_families: "सुरक्षित परिवार",
        bento_exp: "उद्योग का अनुभव",
        bento_cert: "प्रमाणित वित्तीय रक्षक",
        testi_title: "रुड़की का भरोसा",
        contact_title: "चलो जुड़ते हैं",
        form_header: "एक संदेश भेजें",
        form_name: "आपका नाम",
        form_email: "ईमेल पता",
        form_phone: "फ़ोन नंबर",
        form_msg: "मैं कैसे मदद कर सकता हूँ?",
        btn_send: "संदेश भेजें"
    }
};

// --- Language Switcher Logic ---
const langSelect = document.getElementById('language-toggle');

langSelect.addEventListener('change', (e) => {
    const lang = e.target.value; // 'en' or 'hi'
    changeLanguage(lang);
});

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if it's an input label or standard text
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

// --- Cursor Logic (Optional: Only works if CSS cursor:none is active) ---
const cursor = document.querySelector('.cursor');
const hoverTriggers = document.querySelectorAll('.hover-trigger');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

hoverTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
        cursor.classList.add('grow');
    });
    trigger.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
    });
});
// --- Carousel Logic (Dots Version) ---

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const dotsContainer = document.querySelector('.carousel-dots');

let slideIndex = 0;

// 1. Create Dots based on number of images
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active-dot'); // Activate first dot
    
    // Make dot clickable
    dot.addEventListener('click', () => {
        moveToSlide(index);
        resetTimer();
    });
    
    dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.children);

const moveToSlide = (index) => {
    // Check bounds (Looping logic)
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    // Move track
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    slideIndex = index;

    // Update Dot Styling
    dots.forEach(d => d.classList.remove('active-dot'));
    dots[index].classList.add('active-dot');
};

// Auto Rotation (Every 3 seconds)
let autoSlide = setInterval(() => {
    moveToSlide(slideIndex + 1);
}, 3000);

// Reset timer on interaction
function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        moveToSlide(slideIndex + 1);
    }, 3000);
}

// Pause rotation when user hovers over the image
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
carouselContainer.addEventListener('mouseleave', () => resetTimer());