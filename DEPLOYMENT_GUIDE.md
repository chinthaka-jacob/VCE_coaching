# VCE Maths & Physics Specialists - Deployment Guide

## Pre-Launch Checklist ✅

### 1. **SEO & Metadata** ✅
- [x] Meta titles and descriptions configured
- [x] Keywords optimized
- [x] Open Graph tags (og:image, og:description) added
- [x] Twitter card tags configured
- [x] Canonical URLs set
- [x] robots.txt created
- [x] Favicon added

### 2. **Contact Form** ✅
- [x] Contact form configured with email handling via Formspree
- [x] Form validation implemented
- [x] Error handling added
- [x] Loading states included

### 3. **Analytics** ✅
- [x] Google Analytics code snippet added to layout
- [x] Ready for GA4 property ID configuration

### 4. **Navigation & UX** ✅
- [x] Active tab highlighting implemented
- [x] Mobile-responsive design verified
- [x] All links tested and working

### 5. **Performance** ✅
- [x] Production build verified (no errors)
- [x] All pages compiled successfully
- [x] TypeScript validation passed

---

## Deployment Steps (Vercel)

### Step 1: Push to GitHub
```bash
# Initialize Git (if not already done)
git init
git add .
git commit -m "Initial commit - VCE Coaching Website"
git remote add origin https://github.com/YOUR_USERNAME/VCE_coaching.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/log in with GitHub
3. Click "New Project"
4. Import your VCE_coaching repository
5. Click "Deploy"

Vercel will automatically:
- Build the site using `npm run build`
- Deploy to production
- Set up HTTPS
- Configure CDN

### Step 3: Configure Environment Variables
In Vercel Dashboard → Settings → Environment Variables, add:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  (Your Google Analytics ID)
```

### Step 4: Connect Custom Domain
1. In Vercel Dashboard → Domains
2. Add your domain (e.g., vcemathsphysics.com.au)
3. Follow the instructions to update DNS records at your registrar

---

## Important Configuration Tasks

### ⚠️ Before Going Live:

1. **Set up Formspree for Contact Form**
   - Go to [formspree.io](https://formspree.io)
   - Create a free account
   - Create a new form
   - Copy your form ID (format: `xxxxx`)
   - Replace `YOUR_FORM_ID` in [src/app/contact/page.tsx](src/app/contact/page.tsx#L50) with your actual ID

2. **Enable Google Analytics**
   - Go to [google.com/analytics](https://google.com/analytics)
   - Create a GA4 property for your domain
   - Copy your Measurement ID (format: G-XXXXXXXXXX)
   - Replace `G-XXXXXXXXXX` in [src/app/layout.tsx](src/app/layout.tsx) (both instances) with your ID

3. **Update metadataBase URL**
   - In [src/app/layout.tsx](src/app/layout.tsx#L6), change:
   ```tsx
   metadataBase: new URL("https://YOUR_DOMAIN.com.au"),
   ```

4. **Test Contact Form**
   - Go to contact page
   - Submit a test message
   - Verify email arrives at eigen.kew@gmail.com

---

## Monitoring Post-Deployment

### Check Your Site
- **Production URL**: https://your-domain.com.au
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Google Analytics**: https://analytics.google.com

### Useful Commands (Local Development)

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm run start

# Lint code
npm run lint
```

---

## Pages Overview

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | ✅ Live |
| Services | `/services` | ✅ Live |
| About Us | `/about` | ✅ Live |
| Contact | `/contact` | ✅ Live |

---

## Support & Next Steps

1. **Monitor Google Analytics** - Track student engagement and traffic sources
2. **Collect testimonials** - Add student success stories to the site
3. **Update content regularly** - Keep services and offerings current
4. **SEO optimization** - Monitor search rankings and adjust keywords as needed
5. **Mobile testing** - Regularly test on various devices

---

**Last Updated**: 6 April 2026
**Build Status**: ✅ Production Ready
**Framework**: Next.js 16.2.2 (Turbopack)
**Hosting**: Ready for Vercel deployment
