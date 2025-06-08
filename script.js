// Main Application Module
class DigitalMarketingApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeTheme();
        this.initializeNavigation();
        this.initializeAIChat();
        this.initializeProgressAnimations();
    }

    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle?.addEventListener('click', () => this.toggleTheme());

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        mobileMenuToggle?.addEventListener('click', () => this.toggleMobileMenu());

        // Navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });

        // AI Chat
        const sendButton = document.getElementById('sendMessage');
        const messageInput = document.getElementById('messageInput');
        
        sendButton?.addEventListener('click', () => this.sendMessage());
        messageInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Suggestion buttons
        const suggestionButtons = document.querySelectorAll('.suggestion-btn');
        suggestionButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleSuggestion(e));
        });

        // Quick action buttons
        const actionButtons = document.querySelectorAll('.action-btn');
        actionButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleQuickAction(e));
        });
    }

    // Theme Management
    initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeIcon(newTheme);
    }

    updateThemeIcon(theme) {
        const themeIcon = document.querySelector('#themeToggle i');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Navigation Management
    initializeNavigation() {
        // Set active navigation based on current section
        this.updateActiveNavigation();
        
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    handleNavigation(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        
        if (targetId && targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                this.setActiveNavLink(e.target);
            }
        }
    }

    setActiveNavLink(activeLink) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        activeLink.classList.add('active');
    }

    updateActiveNavigation() {
        // This would typically be enhanced with intersection observer
        // for automatic active state updates on scroll
    }

    toggleMobileMenu() {
        const nav = document.querySelector('.nav');
        const mobileToggle = document.getElementById('mobileMenuToggle');
        
        nav?.classList.toggle('mobile-open');
        mobileToggle?.classList.toggle('active');
    }

    // AI Chat Management
    initializeAIChat() {
        this.chatMessages = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        
        // Simulate AI responses for demo
        this.aiResponses = [
            "Pertanyaan yang bagus! SEO (Search Engine Optimization) adalah proses mengoptimalkan website agar lebih mudah ditemukan di mesin pencari seperti Google.",
            "Social media marketing yang efektif memerlukan strategi konten yang konsisten, engagement yang autentik, dan pemahaman mendalam tentang target audience.",
            "ROI (Return on Investment) dapat diukur dengan membandingkan revenue yang dihasilkan dengan biaya kampanye. Tools seperti Google Analytics sangat membantu.",
            "Content marketing yang engaging harus memberikan value kepada audience, menggunakan storytelling yang menarik, dan disesuaikan dengan platform yang digunakan.",
            "Saya siap membantu Anda memahami konsep Digital Marketing lebih dalam. Silakan tanyakan hal spesifik yang ingin Anda pelajari!"
        ];
    }

    sendMessage() {
        const message = this.messageInput?.value.trim();
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        
        // Clear input
        this.messageInput.value = '';

        // Simulate AI response with delay
        setTimeout(() => {
            const response = this.getAIResponse(message);
            this.addMessage(response, 'ai');
        }, 1000);
    }

    addMessage(content, sender) {
        if (!this.chatMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        avatarDiv.innerHTML = sender === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = `
            <p>${content}</p>
            <span class="message-time">${this.getCurrentTime()}</span>
        `;
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    getAIResponse(userMessage) {
        // Simple keyword-based responses for demo
        const message = userMessage.toLowerCase();
        
        if (message.includes('seo')) {
            return this.aiResponses[0];
        } else if (message.includes('social media')) {
            return this.aiResponses[1];
        } else if (message.includes('roi') || message.includes('analitik')) {
            return this.aiResponses[2];
        } else if (message.includes('content')) {
            return this.aiResponses[3];
        } else {
            return this.aiResponses[4];
        }
    }

    handleSuggestion(e) {
        const suggestion = e.target.textContent;
        this.messageInput.value = suggestion;
        this.sendMessage();
    }

    getCurrentTime() {
        return new Date().toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }

    // Progress Animations
    initializeProgressAnimations() {
        this.animateProgressBars();
        this.animateProgressCircle();
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                }
            });
        });

        progressBars.forEach(bar => observer.observe(bar));
    }

    animateProgressCircle() {
        const progressCircle = document.querySelector('.progress-ring-fill');
        if (!progressCircle) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate the circular progress
                    progressCircle.style.strokeDashoffset = '326.73';
                    
                    setTimeout(() => {
                        progressCircle.style.strokeDashoffset = '48.9';
                    }, 100);
                }
            });
        });

        observer.observe(progressCircle);
    }

    // Quick Actions Handler
    handleQuickAction(e) {
        const button = e.target.closest('.action-btn');
        const action = button.textContent.trim();

        switch (true) {
            case action.includes('Lanjutkan Pembelajaran'):
                this.navigateToSection('#materi');
                break;
            case action.includes('Tanya AI'):
                this.navigateToSection('#ai-assistant');
                this.messageInput?.focus();
                break;
            case action.includes('Lihat Progress'):
                this.showProgressModal();
                break;
            default:
                console.log('Unknown action:', action);
        }
    }

    navigateToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            
            // Update active nav link
            const navLink = document.querySelector(`a[href="${sectionId}"]`);
            if (navLink) {
                this.setActiveNavLink(navLink);
            }
        }
    }

    showProgressModal() {
        // This would show a detailed progress modal
        // For now, just scroll to progress section
        this.navigateToSection('#dashboard');
    }

    // Utility Methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Performance optimization for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Additional Modules

// Learning Progress Module
class LearningProgress {
    constructor() {
        this.progress = this.loadProgress();
        this.updateUI();
    }

    loadProgress() {
        const saved = localStorage.getItem('learningProgress');
        return saved ? JSON.parse(saved) : {
            completedModules: ['seo', 'social-media'],
            currentModule: 'email-marketing',
            overallProgress: 85,
            quizzesPassed: 8,
            assignmentsCompleted: 5
        };
    }

    saveProgress() {
        localStorage.setItem('learningProgress', JSON.stringify(this.progress));
    }

    updateProgress(moduleId, completed = true) {
        if (completed && !this.progress.completedModules.includes(moduleId)) {
            this.progress.completedModules.push(moduleId);
            this.calculateOverallProgress();
            this.saveProgress();
            this.updateUI();
        }
    }

    calculateOverallProgress() {
        const totalModules = 12; // Total number of modules
        const completedCount = this.progress.completedModules.length;
        this.progress.overallProgress = Math.round((completedCount / totalModules) * 100);
    }

    updateUI() {
        // Update progress displays in the UI
        const progressElements = document.querySelectorAll('[data-progress]');
        progressElements.forEach(element => {
            const progressType = element.dataset.progress;
            if (this.progress[progressType]) {
                element.textContent = this.progress[progressType];
            }
        });
    }
}

// Notification System
class NotificationSystem {
    constructor() {
        this.notifications = [];
        this.createNotificationContainer();
    }

    createNotificationContainer() {
        if (!document.getElementById('notification-container')) {
            const container = document.createElement('div');
            container.id = 'notification-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            document.body.appendChild(container);
        }
    }

    show(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            background: var(--surface-color);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 16px;
            box-shadow: var(--shadow-large);
            max-width: 300px;
            animation: slideIn 0.3s ease;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <i class="fas fa-${this.getIcon(type)}" style="color: var(--primary-color);"></i>
                <span style="color: var(--text-primary);">${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; margin-left: auto;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        document.getElementById('notification-container').appendChild(notification);

        if (duration > 0) {
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, duration);
        }
    }

    getIcon(type) {
        const icons = {
            info: 'info-circle',
            success: 'check-circle',
            warning: 'exclamation-triangle',
            error: 'exclamation-circle'
        };
        return icons[type] || icons.info;
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main application
    window.app = new DigitalMarketingApp();
    
    // Initialize additional modules
    window.learningProgress = new LearningProgress();
    window.notifications = new NotificationSystem();
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .mobile-open {
            display: block !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--surface-color);
            border: 1px solid var(--border-color);
            border-radius: 0 0 8px 8px;
            padding: 1rem;
        }
        
        .mobile-open .nav-list {
            flex-direction: column;
            gap: 1rem;
        }
        
        @media (max-width: 768px) {
            .nav {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Show welcome notification
    setTimeout(() => {
        window.notifications.show('Selamat datang di Platform Digital Marketing!', 'success');
    }, 1000);
});

// Analytics and Tracking Module
class AnalyticsTracker {
    constructor() {
        this.sessionData = {
            startTime: Date.now(),
            pageViews: 0,
            interactions: 0,
            timeSpent: {}
        };
        this.initTracking();
    }

    initTracking() {
        // Track page interactions
        document.addEventListener('click', () => {
            this.sessionData.interactions++;
        });

        // Track section time spent
        this.trackSectionTime();

        // Track before page unload
        window.addEventListener('beforeunload', () => {
            this.saveSession();
        });
    }

    trackSectionTime() {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;
                if (entry.isIntersecting) {
                    this.sessionData.timeSpent[sectionId] = Date.now();
                } else if (this.sessionData.timeSpent[sectionId]) {
                    const timeSpent = Date.now() - this.sessionData.timeSpent[sectionId];
                    this.logSectionTime(sectionId, timeSpent);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));
    }

    logSectionTime(sectionId, timeSpent) {
        console.log(`Time spent in ${sectionId}: ${Math.round(timeSpent / 1000)}s`);
        // In a real app, this would send data to analytics service
    }

    saveSession() {
        const sessionDuration = Date.now() - this.sessionData.startTime;
        const sessionSummary = {
            ...this.sessionData,
            duration: sessionDuration,
            timestamp: new Date().toISOString()
        };

        // Save to localStorage for demo purposes
        const sessions = JSON.parse(localStorage.getItem('userSessions') || '[]');
        sessions.push(sessionSummary);
        localStorage.setItem('userSessions', JSON.stringify(sessions.slice(-10))); // Keep last 10 sessions
    }
}

// Accessibility Enhancement Module
class AccessibilityEnhancer {
    constructor() {
        this.initAccessibility();
    }

    initAccessibility() {
        this.addKeyboardNavigation();
        this.addAriaLabels();
        this.addFocusManagement();
        this.addScreenReaderSupport();
    }

    addKeyboardNavigation() {
        // Add keyboard navigation for interactive elements
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                this.handleTabNavigation(e);
            } else if (e.key === 'Escape') {
                this.handleEscapeKey(e);
            } else if (e.key === 'Enter' || e.key === ' ') {
                this.handleActivation(e);
            }
        });
    }

    handleTabNavigation(e) {
        // Ensure proper tab order and focus visibility
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        focusableElements.forEach(el => {
            el.addEventListener('focus', () => {
                el.style.outline = '2px solid var(--primary-color)';
                el.style.outlineOffset = '2px';
            });

            el.addEventListener('blur', () => {
                el.style.outline = '';
                el.style.outlineOffset = '';
            });
        });
    }

    handleEscapeKey(e) {
        // Close modals or return to previous state
        const openModals = document.querySelectorAll('.modal.open');
        if (openModals.length > 0) {
            openModals.forEach(modal => modal.classList.remove('open'));
        }
    }

    handleActivation(e) {
        // Allow Enter/Space to activate buttons and links
        if (e.target.matches('button, [role="button"]') && e.key === ' ') {
            e.preventDefault();
            e.target.click();
        }
    }

    addAriaLabels() {
        // Add missing ARIA labels
        const elements = [
            { selector: '.theme-toggle', label: 'Toggle dark/light theme' },
            { selector: '.mobile-menu-toggle', label: 'Toggle mobile menu' },
            { selector: '.send-btn', label: 'Send message to AI assistant' },
            { selector: '.progress-circle', label: 'Learning progress indicator' }
        ];

        elements.forEach(({ selector, label }) => {
            const element = document.querySelector(selector);
            if (element && !element.getAttribute('aria-label')) {
                element.setAttribute('aria-label', label);
            }
        });
    }

    addFocusManagement() {
        // Manage focus for dynamic content
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                        // Announce new messages to screen readers
                        const newMessage = mutation.addedNodes[0];
                        if (newMessage.classList?.contains('ai-message')) {
                            this.announceToScreenReader('New message from AI assistant');
                        }
                    }
                });
            });

            observer.observe(chatMessages, { childList: true });
        }
    }

    addScreenReaderSupport() {
        // Create live region for announcements
        if (!document.getElementById('sr-announcements')) {
            const liveRegion = document.createElement('div');
            liveRegion.id = 'sr-announcements';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.style.cssText = `
                position: absolute;
                left: -10000px;
                width: 1px;
                height: 1px;
                overflow: hidden;
            `;
            document.body.appendChild(liveRegion);
        }
    }

    announceToScreenReader(message) {
        const announcer = document.getElementById('sr-announcements');
        if (announcer) {
            announcer.textContent = message;
            setTimeout(() => {
                announcer.textContent = '';
            }, 1000);
        }
    }
}

// Performance Monitor Module
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.initMonitoring();
    }

    initMonitoring() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            this.measurePageLoad();
        });

        // Monitor interaction performance
        this.monitorInteractions();

        // Monitor memory usage (if available)
        this.monitorMemory();
    }

    measurePageLoad() {
        if ('performance' in window) {
            const navigation = performance.getEntriesByType('navigation')[0];
            this.metrics.pageLoad = {
                domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
                totalTime: navigation.loadEventEnd - navigation.fetchStart
            };

            console.log('Page Load Metrics:', this.metrics.pageLoad);
        }
    }

    monitorInteractions() {
        // Monitor click response times
        document.addEventListener('click', (e) => {
            const startTime = performance.now();

            // Use requestAnimationFrame to measure when the interaction is visually complete
            requestAnimationFrame(() => {
                const endTime = performance.now();
                const interactionTime = endTime - startTime;

                if (interactionTime > 100) { // Log slow interactions
                    console.warn(`Slow interaction detected: ${interactionTime.toFixed(2)}ms`, e.target);
                }
            });
        });
    }

    monitorMemory() {
        if ('memory' in performance) {
            setInterval(() => {
                const memory = performance.memory;
                this.metrics.memory = {
                    used: Math.round(memory.usedJSHeapSize / 1048576), // MB
                    total: Math.round(memory.totalJSHeapSize / 1048576), // MB
                    limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
                };

                // Warn if memory usage is high
                if (this.metrics.memory.used > this.metrics.memory.limit * 0.8) {
                    console.warn('High memory usage detected:', this.metrics.memory);
                }
            }, 30000); // Check every 30 seconds
        }
    }

    getMetrics() {
        return this.metrics;
    }
}

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main application
    window.app = new DigitalMarketingApp();

    // Initialize additional modules
    window.learningProgress = new LearningProgress();
    window.notifications = new NotificationSystem();
    window.analytics = new AnalyticsTracker();
    window.accessibility = new AccessibilityEnhancer();
    window.performance = new PerformanceMonitor();

    // Add CSS animations and responsive styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .mobile-open {
            display: block !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--surface-color);
            border: 1px solid var(--border-color);
            border-radius: 0 0 8px 8px;
            padding: 1rem;
            animation: fadeIn 0.3s ease;
        }

        .mobile-open .nav-list {
            flex-direction: column;
            gap: 1rem;
        }

        /* Loading states */
        .loading {
            opacity: 0.6;
            pointer-events: none;
        }

        .loading::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin: -10px 0 0 -10px;
            border: 2px solid var(--primary-color);
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Enhanced focus styles */
        *:focus-visible {
            outline: 2px solid var(--primary-color) !important;
            outline-offset: 2px !important;
        }

        /* Smooth transitions for all interactive elements */
        button, .nav-link, .action-btn, .suggestion-btn {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Responsive improvements */
        @media (max-width: 768px) {
            .nav {
                display: none;
            }

            .hero-title {
                font-size: 2.5rem;
            }

            .dashboard-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .hero-title {
                font-size: 2rem;
            }

            .section-title {
                font-size: 1.75rem;
            }

            .dashboard-card {
                padding: 1rem;
            }
        }

        /* Print styles */
        @media print {
            .header, .footer, .ai-assistant {
                display: none;
            }

            .main {
                margin: 0;
                padding: 0;
            }

            .dashboard-card, .materi-card {
                break-inside: avoid;
                box-shadow: none;
                border: 1px solid #ccc;
            }
        }
    `;
    document.head.appendChild(style);

    // Show welcome notification
    setTimeout(() => {
        window.notifications.show('Selamat datang di Platform Digital Marketing!', 'success');
    }, 1000);

    // Add service worker for offline functionality (if needed)
    if ('serviceWorker' in navigator) {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js');
    }
});

// Export for potential module usage
export { DigitalMarketingApp, LearningProgress, NotificationSystem, AnalyticsTracker, AccessibilityEnhancer, PerformanceMonitor };
