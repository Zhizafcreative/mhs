# Deployment Guide - Platform Digital Marketing

Panduan lengkap untuk deploy Platform Pembelajaran Digital Marketing ke GitHub Pages.

## 🚀 Quick Deployment

### 1. Persiapan Repository
```bash
# Clone atau fork repository
git clone https://github.com/your-username/mhs.git
cd mhs

# Pastikan semua file ada
ls -la
# Harus ada: index.html, style.css, script.js, manifest.json
```

### 2. GitHub Pages Setup
1. **Push ke GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit: Platform Digital Marketing"
   git push origin main
   ```

2. **Aktifkan GitHub Pages**:
   - Buka repository di GitHub
   - Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `(root)`
   - Save

3. **Akses Website**:
   - URL: `https://your-username.github.io/mhs`
   - Tunggu 5-10 menit untuk deployment pertama

## 🔧 Configuration Files

### GitHub Actions (Otomatis)
File `.github/workflows/deploy.yml` sudah dikonfigurasi untuk:
- Auto-deploy saat push ke main branch
- Build dengan Jekyll
- Deploy ke GitHub Pages

### Jekyll Configuration
File `_config.yml` berisi:
- Site metadata
- Build settings
- Security headers
- Plugin configuration

### PWA Manifest
File `manifest.json` untuk:
- Progressive Web App support
- Install prompt di mobile
- App icons dan shortcuts

## 🌐 Custom Domain (Opsional)

### 1. Setup Domain
```bash
# Buat file CNAME
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

### 2. DNS Configuration
Tambah DNS records di domain provider:
```
Type: CNAME
Name: www
Value: your-username.github.io

Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### 3. GitHub Settings
- Settings > Pages > Custom domain
- Masukkan domain: `yourdomain.com`
- Centang "Enforce HTTPS"

## 🔒 Security & Performance

### Security Headers
File `_headers` (untuk Netlify) atau konfigurasi di `_config.yml`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'
```

### Performance Optimization
- **Minification**: CSS dan JS sudah optimized
- **Compression**: GitHub Pages otomatis gzip
- **Caching**: Browser caching headers
- **CDN**: GitHub Pages menggunakan CDN global

## 📊 Monitoring & Analytics

### 1. Google Analytics (Opsional)
```html
<!-- Tambah di <head> index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. GitHub Pages Analytics
- Repository > Insights > Traffic
- Monitor page views dan referrers

### 3. Performance Monitoring
- Gunakan `test.html` untuk automated testing
- Google PageSpeed Insights
- Lighthouse audit

## 🐛 Troubleshooting

### Common Issues

#### 1. 404 Error
```bash
# Pastikan file index.html ada di root
ls -la index.html

# Check GitHub Pages settings
# Settings > Pages > Source harus "main branch"
```

#### 2. CSS/JS Not Loading
```bash
# Pastikan path relatif, bukan absolut
# ✅ Good: href="style.css"
# ❌ Bad: href="/style.css"
```

#### 3. HTTPS Mixed Content
```bash
# Pastikan semua resources menggunakan HTTPS
# ✅ Good: https://cdnjs.cloudflare.com/...
# ❌ Bad: http://cdnjs.cloudflare.com/...
```

#### 4. Build Failures
```bash
# Check GitHub Actions logs
# Repository > Actions > Latest workflow run

# Common fixes:
git add .
git commit -m "Fix build issues"
git push origin main
```

### Debug Steps
1. **Check Repository Settings**:
   - Settings > Pages > Source
   - Branch harus `main`
   - Folder harus `/ (root)`

2. **Validate Files**:
   ```bash
   # HTML validation
   curl -s "https://validator.w3.org/nu/?doc=https://your-username.github.io/mhs"
   
   # Check file accessibility
   curl -I https://your-username.github.io/mhs/style.css
   curl -I https://your-username.github.io/mhs/script.js
   ```

3. **Browser DevTools**:
   - Console untuk JavaScript errors
   - Network tab untuk failed requests
   - Lighthouse untuk performance audit

## 🔄 Updates & Maintenance

### Regular Updates
```bash
# Pull latest changes
git pull origin main

# Make changes
# Edit files...

# Deploy updates
git add .
git commit -m "Update: description of changes"
git push origin main

# GitHub Pages akan auto-deploy dalam 5-10 menit
```

### Version Control
```bash
# Tag releases
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# Create release on GitHub
# Repository > Releases > Create a new release
```

### Backup Strategy
- Repository sudah di GitHub (backup otomatis)
- Export settings dan data secara berkala
- Document semua customizations

## 📱 Mobile & PWA

### PWA Installation
1. Buka website di mobile browser
2. "Add to Home Screen" prompt akan muncul
3. Install sebagai app

### Testing PWA
```bash
# Lighthouse PWA audit
# Chrome DevTools > Lighthouse > Progressive Web App

# Manifest validation
# Chrome DevTools > Application > Manifest
```

## 🎯 Production Checklist

### Pre-Deployment
- [ ] All files committed dan pushed
- [ ] Test locally dengan `python -m http.server`
- [ ] Run automated tests (`test.html`)
- [ ] Validate HTML/CSS
- [ ] Check responsive design
- [ ] Test accessibility

### Post-Deployment
- [ ] Verify website loads correctly
- [ ] Test all navigation links
- [ ] Check AI chat functionality
- [ ] Verify theme toggle works
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Check PWA installation

### Monitoring
- [ ] Setup Google Analytics (opsional)
- [ ] Monitor GitHub Pages status
- [ ] Check performance metrics
- [ ] Monitor user feedback

## 📞 Support

Jika mengalami masalah deployment:
1. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review GitHub Actions logs
3. Open issue di repository
4. Contact: info@bisnisdigital.ac.id

---

**Happy Deploying! 🚀**
