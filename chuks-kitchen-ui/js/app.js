// =============================
// Chuks Kitchen - Main App.js
// =============================

// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const body = document.body;

// =============================
// NAVIGATION & MENU
// =============================

// Mobile Menu Toggle
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    if (menuToggle) menuToggle.classList.remove('active');
  });
});

// =============================
// SCROLL TO TOP BUTTON
// =============================

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    if (scrollToTopBtn) {
      scrollToTopBtn.classList.add('show');
    }
  } else {
    if (scrollToTopBtn) {
      scrollToTopBtn.classList.remove('show');
    }
  }
});

// Scroll to top functionality
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// =============================
// CATEGORY FILTER (HOME PAGE)
// =============================

const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    categoryBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
  });
});

// =============================
// PASSWORD VISIBILITY TOGGLE
// =============================

const passwordToggles = document.querySelectorAll('.password-toggle');
passwordToggles.forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const input = this.nextElementSibling;
    if (input && input.type === 'password') {
      input.type = 'text';
      this.textContent = '🙈';
    } else if (input && input.type === 'text') {
      input.type = 'password';
      this.textContent = '👁️';
    }
  });
});

// =============================
// FORM VALIDATION
// =============================

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Phone validation
function validatePhone(phone) {
  const re = /^[\d\s\-\+\(\)]{10,}$/;
  return re.test(phone);
}

// Password validation (minimum 6 characters)
function validatePassword(password) {
  return password.length >= 6;
}

// =============================
// LOGIN FORM HANDLING
// =============================

const loginForm = document.querySelector('form[id="login-form"]');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = loginForm.querySelector('input[type="email"], input[type="text"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    
    let isValid = true;
    let errors = [];

    // Validate email/phone
    if (!emailInput.value.trim()) {
      errors.push('Email or phone number is required');
      isValid = false;
    } else if (emailInput.value.includes('@') && !validateEmail(emailInput.value)) {
      errors.push('Please enter a valid email address');
      isValid = false;
    }

    // Validate password
    if (!passwordInput.value) {
      errors.push('Password is required');
      isValid = false;
    } else if (!validatePassword(passwordInput.value)) {
      errors.push('Password must be at least 6 characters');
      isValid = false;
    }

    if (isValid) {
      // Show success message (In real app, this would authenticate)
      alert('Login successful! Redirecting...');
      // Redirect to home page
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 500);
    } else {
      alert(errors.join('\n'));
    }
  });
}

// =============================
// SIGNUP FORM HANDLING
// =============================

const signupForm = document.querySelector('form[id="signup-form"]');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = signupForm.querySelector('input[type="email"]');
    const phoneInput = signupForm.querySelector('input[type="tel"]');
    const passwordInput = signupForm.querySelector('input[type="password"]');
    const confirmPasswordInput = signupForm.querySelectorAll('input[type="password"]')[1];
    const termsCheckbox = signupForm.querySelector('input[type="checkbox"]');
    
    let isValid = true;
    let errors = [];

    // Validate email
    if (!emailInput.value.trim()) {
      errors.push('Email is required');
      isValid = false;
    } else if (!validateEmail(emailInput.value)) {
      errors.push('Please enter a valid email address');
      isValid = false;
    }

    // Validate phone
    if (!phoneInput.value.trim()) {
      errors.push('Phone number is required');
      isValid = false;
    } else if (!validatePhone(phoneInput.value)) {
      errors.push('Please enter a valid phone number');
      isValid = false;
    }

    // Validate password
    if (!passwordInput.value) {
      errors.push('Password is required');
      isValid = false;
    } else if (!validatePassword(passwordInput.value)) {
      errors.push('Password must be at least 6 characters');
      isValid = false;
    }

    // Validate confirm password
    if (passwordInput.value !== confirmPasswordInput.value) {
      errors.push('Passwords do not match');
      isValid = false;
    }

    // Validate terms agreement
    if (!termsCheckbox.checked) {
      errors.push('You must agree to the Terms & Conditions');
      isValid = false;
    }

    if (isValid) {
      alert('Account created successfully! Redirecting to login...');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 500);
    } else {
      alert(errors.join('\n'));
    }
  });
}

// =============================
// ADD TO CART FUNCTIONALITY
// =============================

const addToCartBtns = document.querySelectorAll('.food-card-btn, .btn-add-cart');
addToCartBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const foodCard = btn.closest('.food-card');
    const foodTitle = foodCard ? foodCard.querySelector('.food-card-title')?.textContent : 'Item';
    
    // Show feedback
    const originalText = btn.textContent;
    btn.textContent = '✓ Added to cart';
    btn.style.backgroundColor = 'var(--success)';
    
    // Reset button after 2 seconds
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.backgroundColor = '';
    }, 2000);
  });
});

// =============================
// SEARCH FUNCTIONALITY
// =============================

const searchForm = document.querySelector('.search-box');
if (searchForm) {
  const searchInput = searchForm.querySelector('input');
  const searchBtn = searchForm.querySelector('button');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        console.log('Searching for:', searchTerm);
        // In a real app, this would filter items
        alert(`Searching for: ${searchTerm}`);
      }
    });
  }
}

// =============================
// SMOOTH SCROLL FOR ANCHORS
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// =============================
// PAGE LOAD ANIMATIONS
// =============================

window.addEventListener('load', () => {
  // Fade in elements
  document.querySelectorAll('.food-card, .category-btn').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `all 0.3s ease ${index * 50}ms`;
    
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 50);
  });
});

// =============================
// LOCAL STORAGE - Cart Management
// =============================

class CartManager {
  constructor() {
    this.cart = this.loadCart();
  }

  loadCart() {
    const saved = localStorage.getItem('chuksKitchenCart');
    return saved ? JSON.parse(saved) : [];
  }

  addItem(item) {
    const existingItem = this.cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
    } else {
      this.cart.push({ ...item, quantity: item.quantity || 1 });
    }
    this.save();
  }

  removeItem(itemId) {
    this.cart = this.cart.filter(i => i.id !== itemId);
    this.save();
  }

  updateQuantity(itemId, quantity) {
    const item = this.cart.find(i => i.id === itemId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeItem(itemId);
      } else {
        this.save();
      }
    }
  }

  clearCart() {
    this.cart = [];
    this.save();
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  save() {
    localStorage.setItem('chuksKitchenCart', JSON.stringify(this.cart));
  }

  getCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

// Initialize cart manager
const cartManager = new CartManager();

// =============================
// UTILITY FUNCTIONS
// =============================

// Format price
function formatPrice(price) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(price);
}

// Get current time of day greeting
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

// Log app initialization
console.log('Chuks Kitchen App - Initialized Successfully ✓');
