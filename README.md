# 🚀 Nexora Digital — Modern Digital Agency Website

A modern, responsive, and interactive digital agency website built using **React, TypeScript, Vite, and Tailwind CSS**.

Nexora Digital is a portfolio demonstration project designed to showcase modern frontend development, reusable component architecture, responsive UI/UX design, client enquiry integration, and production deployment.

The website features a professional agency-style interface, animated sections, service presentations, portfolio case studies, and a fully integrated contact form.

## 🌐 Live Demo

**Live Website:** https://nexora-business-xi.vercel.app/

**GitHub Repository:** https://github.com/chanderkumar8/nexora-business

## ✨ Key Features

### 🏠 Modern Homepage
- Professional hero section with animated elements
- Responsive navigation bar
- Services overview
- Why Choose Us section
- Featured portfolio projects
- Call-to-action sections

### 🏢 About Page
- Professional agency introduction
- Mission and vision
- Core values
- Responsive layouts

### 💻 Services Page
- Business website development
- E-commerce website development
- Full-stack web applications
- UI/UX design
- Technical SEO
- AI API integration
- Development process overview
- Interactive frequently asked questions

### 🎨 Portfolio Showcase
- Project category filtering
- Individual project preview images
- Dedicated project details pages
- Technology information
- Responsive project cards
- Interactive View Project buttons

**Featured demonstration concepts:**
1. Modern E-Commerce Store
2. Business Analytics Dashboard
3. Real Estate Business Website

*Note: Featured portfolio projects are visual design concepts and demonstrations, not claims of completed client applications.*

### 📩 Contact Form
- Formspree integration for project enquiries
- Form validation with React Hook Form and Zod
- Service selection
- Estimated budget selection
- Project requirement submission
- Loading, success, and error states

### ⚡ Additional Features
- Fully responsive design
- Smooth animations with Motion for React
- React Router navigation
- Lazy-loaded routes
- Reusable React components
- Custom 404 page
- Production build with Vite
- Deployment on Vercel

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend library |
| TypeScript | Type-safe JavaScript |
| Vite | Build tool and development server |
| Tailwind CSS | Responsive styling |
| React Router | Client-side routing |
| Motion for React | Animations and transitions |
| Lucide React | Icons |
| React Hook Form | Form state management |
| Zod | Form validation |
| Formspree | Contact form submissions |
| Git & GitHub | Version control |
| Vercel | Production hosting |

## 📂 Project Structure

```text
nexora-business-website/
├── public/
│   └── images/
│       └── projects/
├── src/
│   ├── components/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── portfolio/
│   │   └── services/
│   ├── data/
│   │   └── projects.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ProjectDetails.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── package.json
├── vite.config.ts
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/chanderkumar8/nexora-business.git
```

### 2. Navigate to the Project

```bash
cd nexora-business
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Replace `YOUR_FORM_ID` with your own Formspree form ID.

The endpoint is a browser-visible configuration value, not a private credential. Do not expose secret API keys in variables prefixed with `VITE_`.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local address provided by Vite.

### 6. Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## 🚀 Deployment

The website is deployed using **Vercel**, with source code hosted on GitHub.

To deploy your own version:

1. Import the GitHub repository into Vercel.
2. Select the Vite framework preset.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Configure `VITE_FORMSPREE_ENDPOINT` under Vercel Environment Variables.
6. Deploy the project.

For client-side routes, configure a Vercel rewrite to `/index.html` if needed.

## 🎯 Project Objectives

This project was developed to demonstrate:

- Modern web development practices
- Professional business website design
- Responsive and accessible interfaces
- React component architecture
- TypeScript development
- Third-party service integration
- Client-side routing and performance optimization
- GitHub version control and production deployment

## 🔮 Future Improvements

- Expanded portfolio case studies
- Additional accessibility and performance audits
- SEO and social sharing enhancements
- Advanced spam protection for the contact form
- Conversion of selected visual concepts into fully functional applications

## 👨‍💻 Developer

Chander Kumar

Full Stack Developer

GitHub: https://github.com/chanderkumar8

Portfolio demonstration: https://nexora-business-xi.vercel.app/

---

⭐ If you find this project useful, consider giving the repository a star.

Nexora Digital — Building Modern Digital Experiences.