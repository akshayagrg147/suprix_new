# Mesa School Website

A modern, responsive website for Mesa School's PGP in Startup Leadership & Entrepreneurship program, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO-friendly structure
- ♿ Accessible components

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Routing

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd mesa-school-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
mesa-school-website/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Supporters.tsx
│   │   ├── ProgramDetails.tsx
│   │   ├── Academics.tsx
│   │   ├── AIFocus.tsx
│   │   ├── CareerOutcomes.tsx
│   │   ├── Admissions.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   └── Home.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies
```

## Sections

1. **Hero** - Main landing section with program overview
2. **Supporters** - Showcase of investors and advisors
3. **Program Details** - Key features and highlights
4. **Academics** - Curriculum and learning approach
5. **AI Focus** - AI and product building focus
6. **Career Outcomes** - Placement statistics
7. **Admissions** - Application process and form
8. **Footer** - Contact and navigation links

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    // Your color palette
  }
}
```

### Content

Update component files in `src/components/` to modify content and sections.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms

Build the project and deploy the `dist` folder to any static hosting service.

## License

MIT






