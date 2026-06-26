# 🚀 P-FOLIO - Priyanshu Bhati's Portfolio

A modern, responsive portfolio website showcasing the work and skills of **Priyanshu Bhati**, a Full-Stack Developer specializing in MERN Stack, React, Node.js, and Cybersecurity.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Sections](#sections)
- [File Descriptions](#file-descriptions)
- [Customization](#customization)

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek, professional dark interface with glassmorphic design
- ✍️ **Typing Animation** - Dynamic text animation showcasing different roles
- ✨ **Particle Background** - Interactive particle canvas for visual appeal
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🧭 **Smooth Navigation** - Mobile-friendly hamburger menu and smooth scrolling
- 🎯 **Hero Section** - Eye-catching introduction with profile photo
- 📚 **Skills Showcase** - Comprehensive display of technical skills
- 💼 **Projects Portfolio** - Grid layout for featured projects
- 📄 **Resume Section** - Easy access to downloadable resume
- 📧 **Contact CTA** - Clear call-to-action for reaching out
- 🎨 **Custom Color Scheme** - Purple, cyan, and rose gradient accents

## 📁 Project Structure

```
P-FOLIO/
├── index.html           # Main portfolio page
├── resume.html          # Dedicated resume page
├── script.js            # JavaScript functionality (animations, interactions)
├── style.css            # All styling (dark theme, responsive design)
├── README.md            # This file
└── assets/              # Media and additional files
    ├── profile-photo.jpg        # Profile picture
    ├── accredian.png            # Project screenshot
    ├── devcollab.png            # Project screenshot
    ├── golfdraw.png             # Project screenshot
    └── Priyanshu_resume.pdf     # Downloadable resume
```

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with:
  - CSS Custom Properties (variables)
  - Flexbox & CSS Grid
  - Animations and transitions
  - Glassmorphism effects
- **JavaScript (Vanilla)** - Pure JS without frameworks:
  - Typing animation effect
  - Particle system animation
  - Mobile menu toggle
  - Smooth interactions

### Design & UX
- **Color Scheme**: Dark theme with purple (#7c3aed), cyan (#06b6d4), and rose (#f43f5e) accents
- **Typography**: 
  - Inter (UI font)
  - JetBrains Mono (code/technical font)
- **Icons**: SVG favicon with lightning bolt

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Live Server or any HTTP server for local development

### Steps

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd P-FOLIO
   ```

2. **Open Locally**
   - Option A: Double-click `index.html` to open in default browser
   - Option B: Use VS Code Live Server extension
   - Option C: Run Python HTTP server
     ```bash
     python -m http.server 8000
     # Visit http://localhost:8000
     ```

3. **Deploy**
   - Upload all files to web hosting (Netlify, Vercel, GitHub Pages)
   - Ensure all asset paths are correct

## 📖 Usage

### Viewing the Portfolio
1. Open `index.html` in your web browser
2. Navigate through sections using the top navigation menu
3. Click "Let's Talk" for the contact section
4. Use hamburger menu on mobile devices

### Accessing Resume
- Click "Resume" in the navigation menu
- Opens `resume.html` page
- Download PDF from the page (Priyanshu_resume.pdf)

### Mobile Navigation
- Hamburger menu appears on smaller screens
- Tap menu icon to open mobile navigation overlay
- Tap close button (×) or any link to close

## 📑 Sections

### 1. **Navigation Bar**
- Logo "PB." - links to hero section
- Navigation links: About, Skills, Projects, Experience, Resume, Contact
- "Let's Talk" CTA button
- Responsive hamburger menu for mobile

### 2. **Hero Section**
- Particle background animation
- Profile photo with styling
- Typing animation cycling through:
  - Full-Stack Developer (MERN)
  - React & Next.js Enthusiast
  - Java & DSA Problem Solver
  - Cybersecurity Explorer
  - Building Scalable Web Apps

### 3. **About Section**
- Personal introduction
- Background and current focus

### 4. **Skills Section**
- Technical skills categorized by:
  - Frontend (React, Next.js, HTML, CSS, JavaScript)
  - Backend (Node.js, Express, MongoDB)
  - Other (Java, DSA, Cybersecurity)

### 5. **Projects Section**
- Featured projects with thumbnails:
  - Accredian
  - DevCollab
  - GolfDraw
- Project descriptions and links

### 6. **Experience Section**
- Work history and professional experience

### 7. **Contact Section**
- Call-to-action for getting in touch
- Contact information and links

## 📄 File Descriptions

### `index.html`
Main portfolio webpage containing:
- Semantic HTML structure
- Navigation with mobile support
- Hero section with particle canvas
- All major portfolio sections
- Link to external stylesheet and scripts

### `resume.html`
Dedicated resume page:
- Detailed work experience
- Education
- Certifications
- Professional summary

### `script.js`
JavaScript functionality:
- **Typing Animation**: Cycles through multiple role descriptions
- **Particle System**: 
  - Canvas-based particle animation
  - Responsive resizing
  - Smooth movement and connections
- **Mobile Menu**: Toggle functionality for hamburger menu
- **Smooth Interactions**: Event listeners and DOM manipulation

### `style.css`
Complete stylesheet featuring:
- CSS custom properties for theming
- Dark theme color palette
- Responsive breakpoints (mobile, tablet, desktop)
- Glassmorphism effects
- Animation keyframes
- Component-specific styles
- Typography and spacing system

### `assets/`
Resources folder containing:
- **profile-photo.jpg** - Profile picture for hero section
- **accredian.png** - Project screenshot
- **devcollab.png** - Project screenshot
- **golfdraw.png** - Project screenshot
- **Priyanshu_resume.pdf** - Downloadable resume file

## 🎨 Customization

### Change Colors
Edit CSS variables in `style.css` `:root` section:
```css
:root {
  --accent-1: #7c3aed;  /* Primary purple */
  --accent-2: #06b6d4;  /* Cyan */
  --accent-3: #f43f5e;  /* Rose */
  --bg-primary: #0a0a0f; /* Background */
  --text-primary: #f0f0f5; /* Text */
}
```

### Update Typing Animation
Modify `typingTexts` array in `script.js`:
```javascript
const typingTexts = [
  'Your custom title here',
  'Add more roles',
  'And they will cycle'
];
```

### Change Content
- Edit HTML sections directly in `index.html`
- Update resume in `resume.html`
- Replace images in `assets/` folder
- Update project details and thumbnails

### Fonts
Current fonts from Google Fonts:
- Replace in CSS `@import` URL to use different fonts
- Update font-family declarations in `:root`

## 📞 Contact & Links

- **Portfolio**: [View Live](https://yourportfolio.com)
- **GitHub**: [Priyanshu Bhati](#)
- **LinkedIn**: [Profile](#)
- **Email**: [Contact](#)

## 📝 License

This portfolio is personal work. Feel free to use as inspiration for your own portfolio, but please customize with your own content and design.

---

**Last Updated**: May 2026  
**Built with**: HTML • CSS • JavaScript
