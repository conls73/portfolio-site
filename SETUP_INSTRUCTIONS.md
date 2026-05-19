# Portfolio Site - Quick Setup

Your portfolio site is **ready to go**! Here's what's been built:

## ✅ What's Included

- **Apple-inspired design** with clean whites, soft grays, and professional typography
- **Responsive layout** that works perfectly on mobile, tablet, and desktop
- **Smooth animations** including parallax scrolling on the hero image
- **Project filtering system** with interactive pills
- **Organized project sections** for Small Business, Apps, and Games
- **Skills showcase** organized by category
- **Contact section** with direct links to email, GitHub, and LinkedIn

## 🎯 One More Step: Add Your Portrait Photo

The site is running, but it needs your professional portrait image to look complete.

### How to Add Your Portrait:

1. **Find your portrait image** (the one you provided)
   - It should be professional and clean
   - Ideally in 3:4 aspect ratio (portrait orientation)

2. **Save it to the public folder:**
   ```
   portfolio-site/public/portrait.jpg
   ```
   (Or use `portrait.png` if you prefer PNG)

3. **That's it!** 
   - The site will automatically display your image with the parallax effect
   - No code changes needed

### Image Guidelines:

- **Size**: 400-600px wide (keep aspect ratio 3:4)
- **Format**: JPG or PNG
- **File size**: Keep under 500KB for fast loading
- **Background**: White or soft gray works best with the design
- **Style**: Professional headshot (like the one you showed)

## 🚀 Project Management

Your projects are defined in `src/data.js`:

```javascript
export const projects = [
  {
    id: 1,
    name: 'Project Name',
    category: 'Small Business', // or 'App', 'Game'
    description: 'Your description',
    tags: ['Tag1', 'Tag2'],
    tech: ['Tech used'],
    link: 'https://project-url.com',
    featured: true,
  },
];
```

**Currently included projects:**
- ✅ Craftsman Drywall (Small Business)
- ✅ Mobile Blood Draw (Small Business)
- ✅ PokeScrape (App)
- ✅ Agent Link (App)
- ✅ Study Forge (Game)

## 📝 Update Your Info

Edit `src/data.js` to change:
- **Contact email**: Currently `lifeofconls@gmail.com`
- **GitHub link**: Currently `https://github.com/conls73`
- **LinkedIn link**: Currently `https://www.linkedin.com/in/conley-quillen-77a81a1a5/`
- **Skills**: Organized by category (Web Design, Apps & Development, Automation & CRM, AI Tools)

## 🎨 Customization

The design is clean and minimal. To customize:

- **Colors**: Edit `src/styles/global.css` (change CSS variables at the top)
- **Fonts**: Already using system fonts (Apple San Francisco font stack)
- **Animations**: Smooth fade-ins and parallax on scroll—all in the CSS files
- **Spacing**: Generous white space throughout—adjust in component CSS files

## 🌐 Local Development

Your dev server is already running at:
```
http://localhost:5173
```

Changes you make to files will hot-reload automatically. Just save and see updates in real-time.

## 📦 Ready to Deploy

When you're ready to publish:

```bash
npm run build
```

This creates a `dist/` folder with production-ready files.

### Deploy to:
- **Vercel** (recommended): Connect your GitHub repo
- **Netlify**: Connect your GitHub repo or upload `dist/` folder
- **Any web host**: Upload the `dist/` folder contents

## ❓ Next Steps

1. **Add your portrait** → Save to `public/portrait.jpg`
2. **Open the site** → Visit `http://localhost:5173`
3. **Review and test** → Check all sections on desktop and mobile
4. **Customize as needed** → Update projects, skills, links in `src/data.js`
5. **Deploy** → Run `npm run build` and upload

## Need Help?

- **Portfolio README**: See `README.md` for detailed documentation
- **Portrait info**: See `public/PORTRAIT_README.md` for image specifications
- **Questions?**: Email lifeofconls@gmail.com or check GitHub

---

**Everything is set up and ready.** Just add your portrait and you're good to go! 🚀
