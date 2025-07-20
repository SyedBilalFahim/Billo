# Syed Bilal Fahim - Product Manager Portfolio

A modern, responsive portfolio website showcasing strategic product management work across SaaS, Fintech, and AgriTech domains.

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Case Studies**: Detailed modal popups for each project
- **Smooth Navigation**: Fixed navigation with smooth scrolling
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with optimized assets

## 📁 Project Structure

```
bilal-portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Local Development
1. Download or clone this repository
2. Open `index.html` in your web browser
3. The website will load locally with all functionality

### Option 2: Live Server (Recommended)
If you have Node.js installed:
```bash
npx live-server
```

### Option 3: Python Simple Server
If you have Python installed:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #0D1B2A;      /* Deep navy */
    --accent-color: #3A86FF;       /* Blue accent */
    --accent-green: #2D6A4F;       /* Green accent */
    /* ... other colors */
}
```

### Content
- **Case Studies**: Edit the `caseStudies` object in `script.js`
- **Personal Info**: Update the HTML content in `index.html`
- **Contact Details**: Modify the contact section in `index.html`

### Fonts
The website uses Google Fonts (Inter and Space Grotesk). To change fonts:
1. Update the Google Fonts link in `index.html`
2. Modify font-family declarations in `styles.css`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📧 Contact Form

The contact form is currently set up to show a success message. To make it functional:

1. **EmailJS** (Recommended):
   ```javascript
   // Add EmailJS script to HTML
   // Configure email service
   // Update form submission handler
   ```

2. **Netlify Forms**:
   - Deploy to Netlify
   - Add `netlify` attribute to form
   - Configure form handling in Netlify dashboard

3. **Custom Backend**:
   - Set up a server endpoint
   - Update the form submission handler in `script.js`

## 🚀 Deployment Options

### Netlify (Recommended)
1. Push to GitHub
2. Connect repository to Netlify
3. Deploy automatically

### Vercel
1. Install Vercel CLI
2. Run `vercel` in project directory
3. Follow prompts

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch

### Traditional Hosting
Upload all files to your web server's public directory.

## 📊 Performance Tips

- Optimize images before adding them
- Consider using WebP format for better compression
- Minify CSS and JS for production
- Enable gzip compression on server
- Use a CDN for external resources

## 🔒 Security Considerations

- The contact form currently shows client-side validation
- Consider adding server-side validation for production
- Use HTTPS in production
- Sanitize user inputs

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ for showcasing strategic product management work** 