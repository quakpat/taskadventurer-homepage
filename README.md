# TaskAdventurer Homepage

A modern, responsive homepage for TaskAdventurer.com built with Next.js, TypeScript, and Tailwind CSS. Features animated screenshot carousel, comprehensive Privacy Policy and Terms of Use pages, and is optimized for deployment on Vercel.

## 🚀 Features

- **Modern Design**: Clean, family-friendly design with TaskAdventurer branding
- **Animated Screenshot Carousel**: App Store-style swipeable carousel with 8 app screenshots
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Legal Pages**: Comprehensive Privacy Policy and Terms of Use pages
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Vercel Ready**: Optimized for deployment on Vercel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd taskadventurer-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js` and matches the TaskAdventurer app theme:
- Primary: Orange (#cc730d)
- Secondary: Orange (#FF6B35)
- Tertiary: Yellow (#FFD93D)
- Premium: Purple (#9C27B0)

### Screenshots
The screenshot carousel uses images from `public/screenshots/`. To update:
1. Replace the PNG files in `public/screenshots/`
2. Ensure they are named `01.png` through `08.png`
3. The carousel will automatically update

### Content
- **Homepage content**: Edit `app/page.tsx`
- **Privacy Policy**: Edit `app/privacy-policy/page.tsx`
- **Terms of Use**: Edit `app/terms-of-use/page.tsx`
- **Navigation**: Edit `components/Header.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., taskadventurer.com)
   - Update DNS records as instructed

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📱 Screenshots

The homepage includes an animated carousel featuring 8 screenshots from the TaskAdventurer app:
- Screenshot 01: Start Screen
- Screenshot 02: Task Creation
- Screenshot 03: Task Management
- Screenshot 04: Rewards System
- Screenshot 05: Level Up
- Screenshot 06: Custom Rewards
- Screenshot 07: Avatar Customization
- Screenshot 08: Family Dashboard

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific variables:
```env
NEXT_PUBLIC_APP_URL=https://taskadventurer.com
NEXT_PUBLIC_CONTACT_EMAIL=support@taskadventurer.com
```

### SEO Settings
Update metadata in `app/layout.tsx`:
- Title and description
- Open Graph images
- Twitter Card settings
- Google verification code

## 📄 Legal Pages

### Privacy Policy
- Comprehensive privacy policy for family app
- COPPA compliance for children's data
- GDPR compliance for EU users
- Contact information for privacy inquiries

### Terms of Use
- Service description and user obligations
- Parental consent requirements
- Payment and subscription terms
- Intellectual property rights
- Limitation of liability

## 🎯 Performance

The homepage is optimized for performance:
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Caching**: Optimized caching headers for static assets

## 🔍 SEO

- **Meta Tags**: Complete meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling optimization

## 🛡️ Security

- **HTTPS**: Automatic HTTPS on Vercel
- **Security Headers**: Next.js security headers
- **Content Security Policy**: CSP implementation
- **XSS Protection**: Built-in XSS protection

## 📞 Support

For support or questions:
- **Email**: support@taskadventurer.com
- **Documentation**: This README
- **Issues**: GitHub Issues

## 📄 License

This project is proprietary to TaskAdventurer. All rights reserved.

---

**Made with ❤️ for families** - TaskAdventurer Team 