# Conley Quillen - Portfolio Site

A clean, Apple-inspired personal portfolio website built with React + Vite. Features smooth animations, responsive design, and an elegant project showcase.

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

Start the local dev server:

```bash
npm run dev
```

The site will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Adding Your Portrait

The hero section is designed to display your professional portrait with a subtle parallax effect. Here's how to add your image:

1. **Place your image in the `public/` folder**
   - Add your portrait as `public/portrait.jpg` (or `.png`)
   - The image should be in 3:4 aspect ratio (e.g., 400x533px or larger)
   - Keep file size under 500KB for optimal performance

2. **Update the filename in `src/components/Hero.jsx`** if needed
   - Currently references `/portrait.jpg`
   - Change the `src` prop if using a different filename

3. **Image specifications for best results:**
   - Dimensions: 400-600px wide, 3:4 aspect ratio
   - Format: JPG or PNG
   - Background: White or light gray (matches site design)
   - Quality: High resolution (at least 2x for retina displays)

## Site Structure

```
portfolio-site/
├── src/
│   ├── components/        # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectGrid.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── styles/           # CSS files
│   │   ├── global.css
│   │   ├── navigation.css
│   │   ├── hero.css
│   │   ├── project-grid.css
│   │   ├── project-card.css
│   │   ├── skills.css
│   │   └── contact.css
│   ├── data.js           # Projects, skills, and contact info
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static assets
│   └── portrait.jpg      # YOUR PORTRAIT IMAGE HERE
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies
```

## Customization

### Projects
Edit `src/data.js` to update project information:

```javascript
export const projects = [
  {
    id: 1,
    name: 'Project Name',
    category: 'Small Business',
    description: 'Project description...',
    tags: ['Tag1', 'Tag2'],
    tech: ['Tech1', 'Tech2'],
    link: 'https://...',
    featured: true,
  },
  // ... more projects
];
```

### Skills
Update the `skills` object in `src/data.js` to change your skill categories and items.

### Contact Info
Update the `contactInfo` object in `src/data.js` with your email, GitHub, and LinkedIn links.

### Colors & Styling
Global styles are in `src/styles/global.css`. Customize:
- `--bg-primary`, `--bg-secondary` - Background colors
- `--text-primary`, `--text-secondary` - Text colors
- `--border-color` - Border color
- `--shadow-sm`, `--shadow-md`, `--shadow-lg` - Shadow styles
- `--radius` - Border radius

## Features

✨ **Apple-Inspired Design**
- Clean white/off-white backgrounds
- Soft gray accents
- Professional typography
- Subtle shadows and borders

🎯 **Smooth Animations**
- Parallax scrolling on hero image
- Fade-in animations
- Subtle scale effects
- Smooth hover states

📱 **Fully Responsive**
- Mobile-first design
- Responsive grids and navigation
- Optimized performance on mobile

🔍 **Project Filtering**
- Interactive filter pills
- Real-time project filtering
- Organized by category

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize images**: Keep images under 200KB
2. **Lazy loading**: Vite automatically optimizes imports
3. **Mobile parallax**: The parallax effect is disabled on mobile for better performance

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Other Hosting
Build the site and upload the `dist/` folder to your hosting provider.

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, feel free to reach out via email at lifeofconls@gmail.com
