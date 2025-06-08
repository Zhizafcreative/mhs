# Contributing to Platform Digital Marketing

Terima kasih atas minat Anda untuk berkontribusi pada Platform Pembelajaran Digital Marketing! 

## 🚀 Cara Berkontribusi

### 1. Fork Repository
```bash
# Fork repository di GitHub, kemudian clone
git clone https://github.com/your-username/mhs.git
cd mhs
```

### 2. Setup Development Environment
```bash
# Jalankan local server
python3 -m http.server 8000

# Atau menggunakan Node.js
npx http-server

# Akses di browser: http://localhost:8000
```

### 3. Buat Branch Baru
```bash
git checkout -b feature/nama-fitur
# atau
git checkout -b fix/nama-bug
```

### 4. Development Guidelines

#### HTML
- Gunakan HTML5 semantic elements
- Pastikan accessibility dengan ARIA labels
- Validasi dengan W3C HTML Validator

#### CSS
- Gunakan CSS custom properties untuk theming
- Mobile-first responsive design
- Konsisten dengan design system yang ada
- Gunakan BEM methodology untuk naming

#### JavaScript
- ES6+ modules dan modern syntax
- Dokumentasi JSDoc untuk functions
- Error handling yang proper
- Performance optimization

### 5. Code Style

#### CSS Formatting
```css
/* Good */
.component {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--surface-color);
    border-radius: 0.5rem;
}

/* Avoid */
.component{display:flex;align-items:center;gap:1rem;}
```

#### JavaScript Formatting
```javascript
// Good
class ComponentName {
    constructor(options = {}) {
        this.options = {
            ...this.defaultOptions,
            ...options
        };
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.render();
    }
}

// Avoid
class componentname{
constructor(options){
this.options=options;
}
}
```

### 6. Testing

#### Manual Testing Checklist
- [ ] Functionality works in Chrome, Firefox, Safari
- [ ] Responsive design di mobile, tablet, desktop
- [ ] Dark/light theme toggle
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Performance (Lighthouse score > 90)

#### Browser Testing
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 7. Commit Guidelines

#### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

#### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semicolons, etc
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

#### Examples
```bash
git commit -m "feat(ai): add new AI response categories"
git commit -m "fix(mobile): resolve navigation menu overflow"
git commit -m "docs(readme): update installation instructions"
```

### 8. Pull Request Process

1. **Update Documentation**: Pastikan README.md dan dokumentasi lain up-to-date
2. **Test Thoroughly**: Jalankan semua test dan manual testing
3. **Screenshots**: Sertakan screenshots untuk perubahan UI
4. **Description**: Jelaskan perubahan dengan detail

#### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Manual testing completed
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Accessibility testing

## Screenshots
[Add screenshots if applicable]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

### 9. Issue Guidelines

#### Bug Reports
```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
Add screenshots if applicable

**Environment:**
- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]
```

#### Feature Requests
```markdown
**Is your feature request related to a problem?**
Clear description of the problem

**Describe the solution you'd like**
Clear description of what you want to happen

**Describe alternatives you've considered**
Alternative solutions or features

**Additional context**
Add any other context or screenshots
```

### 10. Code Review Process

#### For Reviewers
- Check code quality and style
- Test functionality locally
- Verify accessibility compliance
- Check performance impact
- Ensure documentation is updated

#### For Contributors
- Respond to feedback promptly
- Make requested changes
- Update PR description if needed
- Rebase if necessary

### 11. Development Tips

#### Performance
- Optimize images and assets
- Minimize JavaScript bundle size
- Use efficient CSS selectors
- Implement lazy loading where appropriate

#### Accessibility
- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Test with screen readers
- Maintain color contrast ratios

#### SEO
- Use proper heading hierarchy
- Add meta descriptions
- Implement structured data
- Optimize page load speed

### 12. Resources

#### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [A11y Project](https://www.a11yproject.com/)

#### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [W3C Markup Validator](https://validator.w3.org/)

## 📞 Questions?

Jika ada pertanyaan, silakan:
- Buka issue di GitHub
- Email: info@bisnisdigital.ac.id

Terima kasih atas kontribusi Anda! 🎉
