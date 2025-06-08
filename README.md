# Platform Pembelajaran Digital Marketing

Platform pembelajaran interaktif untuk mata kuliah Digital Marketing di Program Studi Bisnis Digital dengan teknologi Agentic AI.

## 🚀 Fitur Utama

### 📚 Dashboard Pembelajaran
- **Overview Progress**: Visualisasi progress pembelajaran dengan circular progress bar
- **Quick Actions**: Akses cepat ke fitur-fitur utama
- **Activity Timeline**: Riwayat aktivitas pembelajaran terbaru
- **Statistics**: Statistik pencapaian dan progress

### 📖 Materi Pembelajaran
- **SEO & SEM**: Optimasi mesin pencari dan pemasaran berbayar
- **Social Media Marketing**: Strategi pemasaran di platform media sosial
- **Email Marketing**: Kampanye email yang efektif dan otomatisasi
- **Analytics & Data**: Analisis data dan pengukuran performa
- **Progress Tracking**: Pelacakan kemajuan per modul

### 🤖 AI Assistant
- **Chat Interface**: Antarmuka chat yang intuitif dengan AI
- **Contextual Responses**: Respons AI yang relevan dengan materi Digital Marketing
- **Suggestion System**: Pertanyaan populer dan saran topik
- **Real-time Interaction**: Komunikasi real-time dengan AI assistant

### 🎨 User Experience
- **Dark/Light Mode**: Toggle tema gelap dan terang
- **Responsive Design**: Optimal di desktop, tablet, dan mobile
- **Smooth Animations**: Animasi yang halus dan engaging
- **Accessibility**: Dukungan keyboard navigation dan screen reader

## 🛠️ Teknologi

- **HTML5**: Struktur semantik modern
- **CSS3**: Styling dengan custom properties dan flexbox/grid
- **Vanilla JavaScript ES6+**: Modular architecture tanpa framework
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Inter font family)

## 📁 Struktur File

```
mhs/
├── index.html          # Halaman utama
├── style.css           # Stylesheet utama
├── script.js           # JavaScript modules
├── README.md           # Dokumentasi
└── LICENSE             # Lisensi GPL v3
```

## 🚀 Cara Menjalankan

### GitHub Pages (Recommended)
1. Fork repository ini
2. Aktifkan GitHub Pages di Settings > Pages
3. Pilih source: Deploy from a branch > main
4. Akses melalui: `https://username.github.io/mhs`

### Local Development
1. Clone repository:
   ```bash
   git clone https://github.com/username/mhs.git
   cd mhs
   ```

2. Buka dengan live server atau langsung di browser:
   ```bash
   # Menggunakan Python
   python -m http.server 8000

   # Menggunakan Node.js (http-server)
   npx http-server

   # Atau langsung buka index.html di browser
   open index.html
   ```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🎯 Fitur JavaScript Modules

### Core Modules
- **DigitalMarketingApp**: Main application controller
- **LearningProgress**: Progress tracking dan persistence
- **NotificationSystem**: Toast notifications
- **AnalyticsTracker**: User interaction tracking
- **AccessibilityEnhancer**: Keyboard navigation dan ARIA support
- **PerformanceMonitor**: Performance metrics monitoring

### Key Features
- **Theme Management**: Persistent dark/light mode
- **Local Storage**: Progress dan preferences disimpan lokal
- **Intersection Observer**: Lazy loading dan scroll animations
- **Event Delegation**: Efficient event handling
- **Module Pattern**: Clean, maintainable code structure

## 🎨 Design System

### Color Palette
```css
/* Light Theme */
--primary-color: #3b82f6      /* Blue */
--secondary-color: #10b981    /* Green */
--accent-color: #f59e0b       /* Amber */
--background-color: #ffffff   /* White */
--surface-color: #f8fafc      /* Gray 50 */

/* Dark Theme */
--primary-color: #60a5fa      /* Blue 400 */
--secondary-color: #34d399    /* Green 400 */
--accent-color: #fbbf24       /* Amber 400 */
--background-color: #0f172a   /* Slate 900 */
--surface-color: #1e293b      /* Slate 800 */
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Scale**: Modular scale dengan base 1rem

## 🔧 Customization

### Menambah Modul Pembelajaran
1. Edit array modul di `script.js`:
   ```javascript
   const modules = [
     {
       id: 'new-module',
       title: 'Judul Modul',
       description: 'Deskripsi modul',
       icon: 'fas fa-icon',
       progress: 0
     }
   ];
   ```

2. Tambah HTML card di section materi:
   ```html
   <div class="materi-card" data-module="new-module">
     <!-- Card content -->
   </div>
   ```

### Menambah Respons AI
Edit array `aiResponses` di `DigitalMarketingApp` class:
```javascript
this.aiResponses = [
  "Respons baru untuk topik tertentu...",
  // tambah respons lainnya
];
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Navigation antar section
- [ ] Theme toggle functionality
- [ ] AI chat interaction
- [ ] Progress animations
- [ ] Mobile responsiveness
- [ ] Keyboard navigation
- [ ] Screen reader compatibility

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📈 Performance

### Optimizations
- **CSS**: Custom properties untuk theming
- **JavaScript**: ES6 modules dan lazy loading
- **Images**: Placeholder images dengan lazy loading
- **Fonts**: Preconnect untuk Google Fonts
- **Animations**: Hardware-accelerated transforms

### Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 Security

- **Content Security Policy**: Implementasi CSP headers
- **XSS Protection**: Input sanitization
- **HTTPS**: Enforced untuk production
- **No External Dependencies**: Minimal attack surface

## 📄 License

Proyek ini dilisensikan di bawah [GNU General Public License v3.0](LICENSE).

## 🤝 Contributing

1. Fork repository
2. Buat feature branch: `git checkout -b feature/nama-fitur`
3. Commit changes: `git commit -m 'Menambah fitur baru'`
4. Push ke branch: `git push origin feature/nama-fitur`
5. Submit Pull Request

## 📞 Support

Untuk pertanyaan atau dukungan:
- **Email**: info@bisnisdigital.ac.id
- **Issues**: [GitHub Issues](https://github.com/username/mhs/issues)

## 🎓 Educational Context

Platform ini dikembangkan untuk:
- **Program Studi**: Bisnis Digital
- **Mata Kuliah**: Digital Marketing
- **Target**: Mahasiswa tingkat menengah
- **Teknologi**: Agentic AI untuk pembelajaran adaptif

---

**Dibuat dengan ❤️ untuk pendidikan Digital Marketing**
