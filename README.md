# ⚡ Abila Khan Keya — Personal Portfolio Website

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

🌐 **Live Demo**: [https://portfolio-gamma-one-t8oc9ga60h.vercel.app/](https://portfolio-gamma-one-t8oc9ga60h.vercel.app/)

A modern, interactive, glassmorphic portfolio web application for **Abila Khan Keya** — Computer Science & Engineering student at **Independent University, Bangladesh**, specializing in **Deep Learning & Computer Vision**, **FastAPI REST Backends**, and **React 19 Frontends**.

---

## ✨ Key Features

- **📑 Tab-Based Single Page App**: Instant section switching across Home, About, Skills, Projects, AI Simulators, Education, and Contact.
- **🤖 Interactive AI Project Simulators**:
  - **Plant Disease Classifier**: Simulates inference on 3-branch feature concatenation ensemble (Xception + VGG19 + ResNet152V2) achieving **95.45% accuracy** and **99.93% ROC-AUC**.
  - **LifeFlow Emergency Blood Matcher**: Interactive donor-recipient compatibility matching simulation.
- **🎨 Premium UI & Motion Design**:
  - Modern dark slate aesthetic with neon accents (`#38bdf8` Cyan, `#c084fc` Purple, `#34d399` Emerald).
  - Ambient particle canvas background with mouse repulsion physics.
  - Scroll-triggered reveal animations & animated stat counters.
- **📄 Direct CV Access**: View formatted CV (`cv.html`) and export official PDF CV directly from the site.
- **📱 Fully Responsive**: Tailored layout for Desktop, Tablet, and Mobile devices.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core**: React 19, JavaScript (ES6+), HTML5
- **Styling & Aesthetics**: Custom CSS3 Tokens, Glassmorphism, CSS Grid/Flexbox
- **Build Tool**: Vite 8
- **Icons**: Lucide React
- **Utilities**: `canvas-confetti` (success animations), `jspdf` (PDF generation)

---

## 🚀 Quick Start (Local Development)

### Prerequisites
Make sure you have **Node.js** (v18+) and **npm** installed.

### 1. Clone the repository
```bash
git clone https://github.com/ke961/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### 4. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```text
Portfolio/
├── public/
│   ├── cv.html              # Formatted CV page
│   ├── favicon.svg          # Portfolio favicon
│   └── icons.svg            # Custom SVG icon set
├── src/
│   ├── assets/              # Images and graphics
│   ├── components/          # React UI Components
│   │   ├── About.jsx        # Professional profile & academic background
│   │   ├── AiShowcase.jsx   # Live model inference simulators
│   │   ├── Contact.jsx      # Interactive message form & direct info
│   │   ├── Education.jsx    # Higher education & CCNA certification
│   │   ├── Hero.jsx         # Dynamic greeting, typing title & ensemble code block
│   │   ├── Navbar.jsx       # Header with tab section switcher
│   │   ├── Projects.jsx     # Portfolio projects grid with filters & modal
│   │   └── Skills.jsx       # Technical capabilities & animated progress bars
│   ├── data/
│   │   └── profileData.js   # Personal profile information & project records
│   ├── utils/
│   │   ├── generatePdfCv.js # PDF generation utility
│   │   └── useScrollReveal.js # Scroll animation custom hooks
│   ├── App.jsx              # Main App layout & tab view router
│   ├── index.css            # Design system, variables & keyframe animations
│   └── main.jsx             # React entry point
└── package.json
```

---

## 📬 Contact & Links

- **GitHub**: [@ke961](https://github.com/ke961)
- **LinkedIn**: [in/abila-khan-keya](https://www.linkedin.com/in/abila-khan-keya)
- **Email**: [khankeya961@gmail.com](mailto:khankeya961@gmail.com)
- **Location**: Uttarkhan, Dhaka, Bangladesh

---

© 2026 **Abila Khan Keya**. Built with React 19, Vite, and CSS Glassmorphism.
