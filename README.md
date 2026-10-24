<div align="center">

# Fitness Planet

### *Transform • Conquer • Elevate*

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![EmailJS](https://img.shields.io/badge/EmailJS-FF6B35?style=for-the-badge&logo=mail.ru&logoColor=white)](https://www.emailjs.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**A premium, dark-themed fitness platform with an AI chatbot, BMI calculator, e-commerce store, and client-side email-based user registration via EmailJS — built as an SCM Project at Chitkara University.**

[Live Demo](https://fitness-planet-vans.vercel.app) · [Repository](https://github.com/Chet07-R/Fitness-Planet) · [Report Bug](https://github.com/Chet07-R/Fitness-Planet/issues)

</div>

---

## Table of Contents

- [Features](#features)
- [Pages Overview](#pages-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Gemini AI Chatbot Setup](#gemini-ai-chatbot-setup)
- [EmailJS Setup](#emailjs-setup)
- [Store Catalogue](#store-catalogue)
- [Team](#team)
- [License](#license)

---

## Features

| Feature | Description |
|---|---|
| **AI Fitness Assistant** | Gemini-powered chatbot for workout tips, meal ideas, and fitness advice |
| **Interactive BMI Calculator** | SVG semi-circle gauge with animated needle and health classification |
| **E-Commerce Store** | Add-to-cart functionality with a floating cart drawer and localStorage persistence |
| **EmailJS Registration** | Welcome emails sent directly from the browser on new user sign-up |
| **User Authentication** | Client-side login and registration with localStorage, duplicate detection, and session management |
| **Profile Display in Navbar** | User avatar with initials, username, and logout functionality |
| **Newsletter Subscription** | Footer email subscription form |
| **Video Background** | Full-screen looping ambient background video on the hero section |
| **Responsive Design** | Fully responsive across all screen sizes |
| **Glassmorphism UI** | Premium dark theme with electric yellow accents and glass-card components |
| **GSAP Animations** | Scroll-triggered animations and micro-interactions powered by GSAP & ScrollTrigger |
| **Password Toggle** | Show/hide password functionality on both login and registration forms |

---

## Pages Overview

### Home (`index.html`)
- **Hero Section** — Full-screen video background with CTA buttons ("Calculate BMI" and "Explore Programs")
- **AI Chatbot Widget** — Embedded Gemini-powered chat interface with quick-prompt chips
- **BMI Calculator** — Interactive input form with an SVG animated gauge and health status
- **Programs Section** — Stacked card layout showcasing Personal Training, Group Classes, Nutrition Counseling, and Yoga & Mindfulness

### About (`about.html`)
- Team mission and vision statement
- Animated flip profile cards for each team member with social links
- Live statistics counters (5+ Years, 1500+ Clients, 25 Programs, 98% Satisfaction)

### Store (`cart.html`)
- Product grid with glassmorphism item cards
- Floating shopping cart drawer with quantity controls and checkout button
- All cart data persisted in `localStorage`

### Sign In / Register (`signin.html`)
- Animated sliding panel between Login and Register forms
- EmailJS welcome email on successful registration
- Client-side authentication with localStorage session management

---

## Tech Stack

### Frontend & Core
- **HTML5** — Semantic page structure
- **CSS3** — Custom design system with CSS variables, glassmorphism, and animations
- **JavaScript (Vanilla)** — Interactivity, API calls, localStorage, DOM manipulation
- **Google Fonts** — `Outfit` (headings) + `Plus Jakarta Sans` (body)
- **Boxicons** — Icon library for UI elements
- **GSAP + ScrollTrigger** — High-performance scroll animations

### Services & Integrations
- **EmailJS** — Browser-side welcome email sending without any backend server
- **Google Gemini API** — Powers the AI fitness assistant chatbot
- **Vercel** — Static site deployment and hosting

---

## Project Structure

```
Fitness-Planet/
│
├── index.html              # Home page (Hero, Chatbot, BMI, Programs)
├── about.html              # About Us page (Team, Mission, Stats)
├── cart.html               # Store page (Products, Cart Drawer)
├── signin.html             # Sign In / Register page
├── navbar.html             # Shared navigation bar (loaded via fetch)
├── footer.html             # Shared footer (loaded via fetch)
├── .env                    # Optional config (EmailJS keys reference)
├── .gitignore              # Git ignore rules
│
├── css/
│   ├── style.css           # Global design system & tokens
│   ├── navbar.css          # Navigation bar & user profile styles
│   ├── footer.css          # Footer styles
│   ├── about.css           # About page styles
│   ├── cart.css            # Store and cart styles
│   └── signin.css          # Authentication page styles
│
├── js/
│   ├── script.js           # Home page logic (BMI, GSAP)
│   ├── navbar.js           # Navbar active links, mobile menu, and auth state
│   ├── chatbot.js          # Gemini AI chatbot widget logic
│   ├── about.js            # Animated counters and team cards
│   ├── cart.js             # E-commerce cart logic (add/remove, localStorage)
│   └── signin.js           # Registration, login, and EmailJS integration
│
├── Shop/                   # Product images (webp, avif, png)
│
└── pictures/               # Site assets (logo, team photos, background video)
```

---

## Getting Started

Because Fitness Planet runs entirely on static HTML, CSS, and JavaScript with EmailJS for email delivery, **no backend server or Node.js installation is required**.

### Running Locally

**1. Clone the repository:**
```bash
git clone https://github.com/Chet07-R/Fitness-Planet.git
cd Fitness-Planet
```

**2. Open the website:**
- Double-click `index.html` to open it directly in any web browser, OR
- Use the **Live Server** extension in VS Code (`Right Click index.html -> Open with Live Server`).

---

## Gemini AI Chatbot Setup

The floating chatbot widget is powered by the **Google Gemini API**.

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) and create an API key.
2. In `js/chatbot.js`, ensure your API key is configured.
3. The chatbot will respond with fitness advice, workout suggestions, and diet recommendations.

**Quick Prompts Available:**
- Suggest a Leg Workout
- Healthy Meal Ideas
- How to lose belly fat?

---

## EmailJS Setup

Fitness Planet sends a **branded welcome email** to every new user on registration — directly from the browser, completely serverless.

### Step 1: Create an EmailJS Account
Sign up at [emailjs.com](https://www.emailjs.com/) (free tier: 200 emails/month).

### Step 2: Create an Email Service
1. Go to **Email Services** → **Add New Service**
2. Connect your Gmail account
3. Note down your **Service ID** (e.g., `service_hnomdjb`)

### Step 3: Create an Email Template
1. Go to **Email Templates** → **Create New Template**
2. Configure the template settings:

| Field | Value |
|---|---|
| **To Email** | `{{to_email}}` |
| **Subject** | `Welcome to the Tribe, {{user_name}}! — Fitness Planet` |
| **From Name** | `Fitness Planet` |
| **Reply To** | `fitnessplanet568@gmail.com` |

3. Paste your branded HTML into the template body.
4. Note down your **Template ID** (e.g., `template_ca6astl`)

### Step 4: Get Your Public Key
Go to **Account** → **General** and copy your **Public Key**.

### Step 5: Update `js/signin.js`
In `js/signin.js`, verify your EmailJS keys:
```js
const EMAILJS_PUBLIC_KEY = "your_public_key";
const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
```

### Template Variables Reference

| Variable | Description |
|---|---|
| `{{user_name}}` | Registered username |
| `{{to_email}}` | Recipient's email address |
| `{{to_name}}` | Same as user_name |
| `{{reply_to}}` | Support email |
| `{{message}}` | Welcome message body |

---

## Team

<table>
  <tr>
    <td align="center">
      <b>Vansh Thakur</b><br>
      <sub>JavaScript Developer & Interactive Features Expert</sub><br>
      <a href="https://github.com/Chet07-R">GitHub</a> •
      <a href="https://www.linkedin.com/in/chetan-ajmani-679b51249/">LinkedIn</a>
    </td>
    <td align="center">
      <b>Tanish Mehta</b><br>
      <sub>Front-End Specialist & UI/UX Expert</sub><br>
      <a href="https://github.com/TanishMehta23">GitHub</a> •
      <a href="https://www.linkedin.com/in/tanish-mehta-43bb102b8/">LinkedIn</a>
    </td>
    <td align="center">
      <b>Chetan Ajmani</b><br>
      <sub>Content Strategist & Digital Optimization Specialist</sub><br>
      <a href="https://github.com/Vans30m">GitHub</a> •
      <a href="https://www.linkedin.com/in/vansh-thakur-b6bbbb33a/">LinkedIn</a>
    </td>
  </tr>
</table>

*Built at Chitkara University, Sem 2 — SCM Project.*

---

## License

This project is licensed under the **ISC License**.

---

<div align="center">

**If you found this project useful, please star the repository!**

Made by the Fitness Planet Team

</div>
