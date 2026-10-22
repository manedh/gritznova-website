# GritzNova Website

A modern, responsive and professional corporate website developed for **GritzNova** using React and Vite.

The website presents GritzNova's solutions, products, services, technology capabilities, industries served, security approach and company information through a clean and modern interface.

---

## 🚀 Tech Stack

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* Lucide React Icons
* Responsive Web Design

---

## 📁 Project Structure

```text
gritznova-website/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── logo.png
│   │
│   ├── components/
│   │   ├── ArchitectureVisual.jsx
│   │   ├── BackToTop.jsx
│   │   ├── DashboardVisual.jsx
│   │   ├── Footer.jsx
│   │   ├── IconLink.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   └── SectionLabel.jsx
│   │
│   ├── data/
│   │   └── content.js
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## ✨ Website Features

* Modern corporate website design
* Fully responsive layout
* Mobile-friendly navigation
* Hero section with clear call-to-action
* Solutions section
* Products section
* Services section
* Technology section
* Industries section
* Security section
* About section
* Company statistics
* Contact / enquiry section
* Back-to-top functionality
* Reusable React components
* Centralized website content
* Smooth animations and transitions

---

## 🧩 Main Sections

### Hero

Introduces GritzNova with the main message, supporting content and call-to-action.

### Solutions

Displays the major technology and business solutions offered by GritzNova.

### Products

Highlights the products and platforms provided by the company.

### Services

Provides information about the professional services offered.

### Technology

Showcases the technologies and technical capabilities used by the company.

### Industries

Displays the industries and business domains supported by GritzNova.

### Security

Highlights the security-focused approach used across the solutions.

### About

Provides information about GritzNova, its capabilities and business approach.

### Contact / Enquiry

Allows visitors to submit an enquiry through the website contact form.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Sawai-Associates-Dev/gritznova-website.git
```

### 2. Navigate to the project

```bash
cd gritznova-website
```

### 3. Install dependencies

```bash
npm install
```

If PowerShell blocks `npm.ps1`, use:

```bash
npm.cmd install
```

### 4. Start the development server

```bash
npm run dev
```

If required:

```bash
npm.cmd run dev
```

The website will be available at the local URL provided by Vite, usually:

```text
http://localhost:5173/
```

---

## 🛠️ Development

To start the development environment:

```bash
npm run dev
```

The Vite development server provides fast hot-reloading while making changes to the project.

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📝 Updating Website Content

Most website content is maintained in:

```text
src/data/content.js
```

This file can be used to update:

* Services
* Products
* Solutions
* Technologies
* Industries
* Company information
* Other website content

Updating the centralized content file makes it easier to maintain the website without changing multiple components.

---

## 🎨 Updating Website Design

The main stylesheet is:

```text
src/styles.css
```

Use this file to modify:

* Colors
* Typography
* Font sizes
* Spacing
* Buttons
* Cards
* Sections
* Responsive layouts
* Animations
* Hover effects

---

## 🧱 React Components

Reusable components are located inside:

```text
src/components/
```

Important components include:

* `Navbar.jsx` — Website navigation
* `Footer.jsx` — Website footer
* `Logo.jsx` — GritzNova logo
* `BackToTop.jsx` — Back-to-top functionality
* `ArchitectureVisual.jsx` — Architecture visual
* `DashboardVisual.jsx` — Dashboard visual
* `SectionLabel.jsx` — Section heading label
* `IconLink.jsx` — Reusable icon link component

---

## 🖼️ Assets

Website assets are stored inside:

```text
src/assets/
```

The main logo is:

```text
src/assets/logo.png
```

Additional images and assets can be added to the assets folder and imported into the required React component.

---

## 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

Responsive styling is handled through CSS media queries in:

```text
src/styles.css
```

---

## 📩 Enquiry Form

The website currently includes a frontend enquiry/contact form.

The form provides a user interface for collecting:

* Name
* Email
* Contact information
* Enquiry details

Backend/email/database integration can be added separately depending on the required deployment architecture.

---

## 🌐 Deployment

The project can be deployed using modern frontend hosting platforms such as:

* Vercel
* Netlify
* GitHub Pages
* Other static hosting platforms

Before deployment, create the production build:

```bash
npm run build
```

Then deploy the generated `dist` folder according to the hosting provider's requirements.

---

## 🔧 Customization

To customize the website:

1. Update content in `src/data/content.js`
2. Update page-level content in `src/pages/Home.jsx`
3. Update reusable components in `src/components/`
4. Modify styling in `src/styles.css`
5. Add or replace assets in `src/assets/`
6. Run the development server and verify the changes

---

## 📌 Important Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Create production build
npm run build

# Preview production build
npm run preview
```

For PowerShell environments where `npm` is blocked:

```bash
npm.cmd install
npm.cmd run dev
npm.cmd run build
```

---

## 📄 License

This project is developed for GritzNova.

All website content, branding, designs and assets are subject to the applicable ownership and usage rights of the project/company.
