// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to cards on scroll
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.problem-card, .trust-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
});

// Interactive savings calculator
document.addEventListener('DOMContentLoaded', function() {
    // Create calculator if it exists on the page
    const calculatorContainer = document.getElementById('savings-calculator');
    if (calculatorContainer) {
        const currentSpending = document.getElementById('current-spending');
        const savingsResult = document.getElementById('savings-result');
        const calculateBtn = document.getElementById('calculate-savings');
        
        calculateBtn.addEventListener('click', function() {
            const spending = parseFloat(currentSpending.value);
            if (isNaN(spending)) {
                savingsResult.textContent = 'Please enter a valid number';
                return;
            }
            
            const potentialSavings = spending * 0.5; // 50% savings
            savingsResult.textContent = `Potential Annual Savings: $${potentialSavings.toLocaleString()}`;
            savingsResult.classList.add('highlight');
        });
    }
});

// Add hover effects to list items
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.trust-list li, .company-checklist li');
    
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('item-highlight');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('item-highlight');
        });
    });
});