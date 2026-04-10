// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active'); // Animates the hamburger to an 'X'
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ===== TIMETABLE TABS LOGIC =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked
        btn.classList.add('active');
        const targetDay = btn.getAttribute('data-day');
        document.getElementById(targetDay).classList.add('active');
    });
});

// ===== RESTORED GALLERY SLIDER LOGIC =====
const slides = document.querySelectorAll('.gallery-slide');
const prevBtn = document.querySelector('.gallery-prev');
const nextBtn = document.querySelector('.gallery-next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Handle wrap around
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    
    slides[currentSlide].classList.add('active');
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

// Auto slide every 4 seconds
function startSlider() { slideInterval = setInterval(nextSlide, 4000); }
function resetSlider() { clearInterval(slideInterval); startSlider(); }

if (slides.length > 0) {
    nextBtn.addEventListener('click', () => { nextSlide(); resetSlider(); });
    prevBtn.addEventListener('click', () => { prevSlide(); resetSlider(); });
    startSlider();
}

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
// Smooth scrolling update
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if(targetId === "#") return; // Ignore empty hashes

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const headerOffset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function () {
        const moreText = this.previousElementSibling.querySelector('.more-text');
        if (moreText.style.display === "inline") {
            moreText.style.display = "none";
            this.textContent = "Read More";
        } else {
            moreText.style.display = "inline";
            this.textContent = "Read Less";
        }
    });
});

// ===== FEES TABS LOGIC =====
const feeTabBtns = document.querySelectorAll('.fee-tab-btn');
const feeTabPanels = document.querySelectorAll('.fee-tab-panel');

feeTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all fee tabs and panels
        feeTabBtns.forEach(b => b.classList.remove('active'));
        feeTabPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show the corresponding panel
        const targetPlan = btn.getAttribute('data-plan');
        document.getElementById(targetPlan).classList.add('active');
    });
});