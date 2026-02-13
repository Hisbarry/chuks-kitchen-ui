# chuks-kitchen-ui
# 📘 Chuks Kitchen – Frontend UI Documentation

## 1. Project Overview

**Project Name:** Chuks Kitchen – Food Ordering Web Interface

**Client:** Mr. Chukwudi Okorie (Chuks Kitchen)

**Company:** TrueMinds Innovations Ltd

This project is a frontend-only implementation of the Chuks Kitchen food ordering and customer management interface. The UI was designed by the product design team using Figma and converted into a functional webpage using plain HTML, CSS, and JavaScript.

### Project Goals

The interface allows users to:
- 🏠 View the landing page with brand introduction
- 🔐 Access login and signup pages
- 🍽️ Browse food items and menu
- 🧭 Navigate seamlessly between pages
- 🛒 Add items to cart (UI interactions)
- 🔍 Search for dishes

> **⚠️ Note:** This project does not include backend logic, authentication, or API integration. All interactions are UI-only demonstrations and for development purposes.

---

## 2. Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Styling, layout, animations, and responsiveness |
| **JavaScript (Vanilla)** | UI interactions, form validation, navigation |

**No external frameworks or libraries** were used to keep the project lightweight and easy to extend.

---

## 3. Project Structure

```
chuks-kitchen-ui/
│
├── index.html              # Landing page
├── login.html              # Login page UI
├── signup.html             # Signup page UI
├── home.html               # Main home/dashboard page
├── explore.html            # Food listing / menu page
│
├── css/
│   └── style.css           # Global and page-specific styles
│
├── js/
│   └── app.js              # JavaScript interactions
│
├── assets/
│   └── images/             # All image assets (food, banners, etc.)
│
└── README.md               # This file
```

### Folder Responsibilities

#### **HTML Files** (`/*.html`)
Each page has its own HTML file for clarity and maintainability:
- `index.html` - Landing page with hero section and features
- `login.html` - Dual-panel login form layout
- `signup.html` - Registration form with validation
- `home.html` - Dashboard with categories and featured meals
- `explore.html` - Full menu with filtering options

#### **CSS** (`/css/style.css`)
Contains:
- ✅ Global styles (colors, typography, buttons)
- ✅ Layout systems (grid, flexbox, containers)
- ✅ Reusable components (cards, forms, buttons)
- ✅ Page-specific styles (auth layout, hero sections)
- ✅ Responsive design (mobile-first approach)
- ✅ Animation and transitions

#### **JavaScript** (`/js/app.js`)
Handles:
- ✅ Mobile menu toggle
- ✅ Form validation (login, signup)
- ✅ Password visibility toggle
- ✅ Category filtering
- ✅ Search functionality
- ✅ Add to cart interactions
- ✅ Scroll-to-top button
- ✅ Local storage cart management
- ✅ Smooth scrolling animations

#### **Assets** (`/assets/images/`)
Stores all image files used across the UI:
- Food images
- Hero/banner images
- Logo variations
- Background images

---

## 4. Pages Overview

### 4.1 Landing Page (`index.html`)

**Purpose:** Introduces Chuks Kitchen brand and converts visitors to users

**Main Components:**
- 🎯 Hero section with headline and CTA buttons
- ✨ Feature highlights (freshly prepared, fast delivery, local support)
- 📋 About section describing the brand
- 🔗 Navigation to other pages
- 📞 Complete footer with contact info

**Key Features:**
```html
<!-- Hero CTA buttons -->
<a href="home.html" class="btn btn-primary">Start Your Order</a>
<a href="#about" class="btn btn-outline">Learn More About Us</a>
```

---

### 4.2 Login Page (`login.html`)

**Purpose:** User authentication interface (UI only)

**Main Components:**
- 📧 Email/Phone input field
- 🔒 Password input with visibility toggle
- 🔑 "Forgot Password?" link
- 🟠 Primary continue button
- 🔍 Google & Apple OAuth buttons
- 🔗 Link to signup page

**Layout:**
- Left side (50%): Image/branding section
- Right side (50%): Form section

**Key Features:**
```javascript
// Password visibility toggle
const passwordToggle = document.querySelector('.password-toggle');
passwordToggle.addEventListener('click', function() {
  const input = this.previousElementSibling;
  input.type = input.type === 'password' ? 'text' : 'password';
});
```

---

### 4.3 Signup Page (`signup.html`)

**Purpose:** New user registration form (UI only)

**Main Components:**
- 📧 Email input
- 📱 Phone number input
- 🔒 Password input with toggle
- 🔐 Confirm password input
- ✅ Terms & Conditions checkbox
- 🟠 Primary continue button
- 🔍 OAuth options
- 🔗 Link back to login

**Validations Implemented:**
- ✓ Email format validation
- ✓ Phone number validation
- ✓ Password length check (min 6 chars)
- ✓ Password match check
- ✓ Terms agreement required

---

### 4.4 Home Page (`home.html`)

**Purpose:** Main dashboard after "login"

**Main Components:**
- 🔍 Search bar for finding dishes
- 📢 Promotional banner with offer code
- 🏷️ Category navigation buttons (All, Rice, Soups, Proteins, etc.)
- ⭐ Chef's Specials grid (6 featured items)
- 🔗 Quick links section
- 📞 Complete footer

**Interactive Features:**
```javascript
// Category button filtering
const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
```

**Featured Items Example:**
- Jollof Rice - ₦2,500
- Efo Riro - ₦3,200
- Pepper Soup - ₦2,800
- Moi Moi - ₦1,800
- Suya - ₦3,500
- Egusi Soup - ₦3,800

---

### 4.5 Explore Page (`explore.html`)

**Purpose:** Full menu with advanced filtering

**Main Components:**
- 🔍 Page heading and description
- 🎯 Left sidebar with filters:
  - Category checkboxes
  - Price range filters
  - Special diet options
- 📊 Main grid (3-column layout) with all menu items
- 📍 Complete footer

**Filter Sections:**
```html
<!-- Categories -->
<input type="checkbox" id="cat-all" checked>
<label for="cat-all">All Items</label>

<!-- Price Range -->
<input type="checkbox" id="price-1">
<label for="price-1">₦1,000 - ₦2,000</label>

<!-- Special Diets -->
<input type="checkbox" id="diet-vegan">
<label for="diet-vegan">Vegan</label>
```

**Menu Grid:**
- 12+ food items with descriptions
- Color-coded placeholder images
- Pricing in Nigerian Naira (₦)
- Add to cart buttons

---

## 5. Styling Conventions

### 5.1 CSS Variables

Global design system defined in `:root`:

```css
:root {
  --primary: #ff7a00;           /* Orange/Primary action */
  --primary-dark: #e66a00;      /* Darker orange for hover */
  --dark: #1f1f1f;              /* Dark text */
  --light: #f7f7f7;             /* Light backgrounds */
  --border: #d0d0d0;            /* Border color */
  --text-primary: #1f1f1f;      /* Main text */
  --text-secondary: #666666;    /* Secondary text */
  --success: #28a745;           /* Success states */
  --brown: #5c4a47;             /* Footer background */
}
```

### 5.2 Reusable Components

#### **Buttons**
```css
.btn-primary          /* Orange background, white text */
.btn-outline          /* Transparent with orange border */
.btn-secondary        /* Light gray background */
.btn-google           /* White with Google styling */
.btn-apple            /* White with Apple styling */
```

#### **Cards**
```css
.food-card            /* Food item display with image, title, price */
.food-card:hover      /* Shadow and lift effect */
```

#### **Forms**
```css
.form-group           /* Form container with spacing */
.auth-layout          /* Split layout for auth pages */
input:focus           /* Orange border and subtle shadow */
```

#### **Grid Systems**
```css
.grid-2               /* 2-column responsive grid */
.grid-3               /* 3-column responsive grid */
.grid-4               /* 4-column responsive grid */
```

---

## 6. JavaScript Responsibilities (`js/app.js`)

### 6.1 Navigation & Menu
- Mobile hamburger menu toggle
- Close menu on link click
- Sticky header behavior

### 6.2 Form Handling
**Login Form:**
- Email/phone validation
- Password validation (min 6 chars)
- Submit to home page redirect

**Signup Form:**
- Email format validation
- Phone number validation
- Password match check
- Terms agreement validation
- Submit to login page redirect

### 6.3 UI Interactions
- Password visibility toggle (👁️ icon)
- Add to cart button feedback
- Category filter active state
- Smooth scroll animations

### 6.4 Scroll Features
- Scroll-to-top button (visible after 300px scroll)
- Smooth scroll for anchor links

### 6.5 Local Storage (Cart Manager)
```javascript
class CartManager {
  addItem(item)         // Add item to cart
  removeItem(itemId)    // Remove item from cart
  updateQuantity()      // Update item quantity
  clearCart()           // Empty entire cart
  getTotal()            // Calculate cart total
  getCount()            // Get item count
}
```

---

## 7. Responsive Design

### Breakpoints

```css
/* Desktop: 769px+ (default) */
- Full navigation menu visible
- Multi-column grids
- Split auth layout (login/signup)

/* Tablet: 769px and below */
- Mobile hamburger menu
- 2-column grid layouts
- Single-column auth (image hidden)

/* Mobile: 480px and below */
- Single-column layouts
- Full-width buttons
- Optimized touch targets (44px+ height)
- Adjusted font sizes for readability
```

### Mobile Optimization
- ✅ Touch-friendly buttons (44px minimum)
- ✅ Readable font sizes (14px minimum)
- ✅ Fast-loading images with proper sizing
- ✅ Optimized form inputs for mobile keyboards
- ✅ Hide secondary navigation on small screens

---

## 8. How to Use

### 8.1 Opening the Project

1. **Extract the project folder** to your desired location
2. **Open with Live Server:**
   - VS Code: Right-click `index.html` → "Open with Live Server"
   - Or open the HTML file directly in any web browser

3. **Start from home page:**
   - Open `index.html` (landing page)
   - Or go directly to `home.html` (dashboard)

### 8.2 Navigation Flow

```
Landing Page (index.html)
    ↓
    ├─→ Login Page (login.html) ──→ Home Page (home.html)
    ├─→ Signup Page (signup.html) ──→ Login ──→ Home
    └─→ Home Page (home.html)
              ↓
          Explore Page (explore.html)
              ↓
          Filter & Search Menu
```

### 8.3 Testing Features

**Login Page:**
- Enter any email and password (min 6 chars)
- Click "Continue" to navigate to home page

**Signup Page:**
- Fill all fields with valid data
- Agree to terms & conditions
- Click "Continue" to redirect to login

**Home Page:**
- Click category buttons to see active state
- Click "Add to Cart" to see feedback
- Use search bar (UI only)

**Explore Page:**
- Check/uncheck filter options
- Click "Add to Cart" on any item
- Responsive sidebar on mobile

---

## 9. Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Orange** | `#ff7a00` | Buttons, links, highlights |
| **Dark Orange** | `#e66a00` | Hover states, active elements |
| **Dark Gray** | `#1f1f1f` | Main text, headings |
| **Light Gray** | `#f7f7f7` | Backgrounds, sections |
| **Border Gray** | `#d0d0d0` | Form borders, dividers |
| **Brown** | `#5c4a47` | Footer background |
| **Success Green** | `#28a745` | Success states, confirmations |

---

## 10. Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body | System Font Stack | 1rem (16px) | 400 |
| Headings | System Font Stack | 1.25rem - 3.5rem | 600-700 |
| Labels | System Font Stack | 0.95rem | 500 |
| Small Text | System Font Stack | 0.875rem | 400 |
| Links | System Font Stack | 1rem | 500-600 |

**Font Stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

---

## 11. Future Enhancements

These features can be added to make the project fully functional:

### Backend Integration
- [ ] Connect to REST API for authentication
- [ ] Implement real user registration/login
- [ ] Fetch menu items from database
- [ ] Real order processing

### Advanced Features
- [ ] Shopping cart page with checkout
- [ ] Order history and tracking
- [ ] User profile management
- [ ] Payment gateway integration
- [ ] Review and ratings system
- [ ] Customer support chat

### Optimizations
- [ ] Image optimization and lazy loading
- [ ] PWA (Progressive Web App) setup
- [ ] Performance metrics optimization
- [ ] SEO enhancements
- [ ] Analytics integration

---

## 12. File Locations & References

| File | Purpose | Lines |
|------|---------|-------|
| [index.html](index.html) | Landing page | 1-100+ |
| [login.html](login.html) | User login | 1-80+ |
| [signup.html](signup.html) | User registration | 1-100+ |
| [home.html](home.html) | Main dashboard | 1-150+ |
| [explore.html](explore.html) | Full menu | 1-250+ |
| [css/style.css](css/style.css) | All styling | 1-700+ |
| [js/app.js](js/app.js) | Interactions | 1-350+ |

---

## 13. Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Mobile Safari | 14+ | ✅ Fully Supported |
| Chrome Android | 90+ | ✅ Fully Supported |

---

## 14. Performance Tips

- 🚀 Minimize CSS/JS files for production
- 🖼️ Optimize images (use WebP format when possible)
- 📦 Lazy load images below the fold
- ⚡ Enable GZIP compression on server
- 🔄 Use CSS Grid/Flexbox instead of floats
- 📱 Test on real mobile devices

---

## 15. Support & Contact

**For questions or support:**
- Client: Mr. Chukwudi Okorie (Chuks Kitchen)
- Company: TrueMinds Innovations Ltd
- Phone: +234 (0) 801-234-5678
- Email: hello@chukskitchen.com

---

## 16. License

This project is custom-developed for Chuks Kitchen by TrueMinds Innovations Ltd. All rights reserved.

---

**Project Status:** ✅ Complete & Functional

**Last Updated:** February 2024

**Version:** 1.0.0

---

### Quick Start Checklist

- [ ] Extract project files
- [ ] Open `index.html` in web browser
- [ ] Test all pages (landing, login, signup, home, explore)
- [ ] Test mobile responsiveness
- [ ] Test form interactions
- [ ] Test category filters
- [ ] Check all links working
- [ ] Ready for deployment/handover


