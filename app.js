/**
 * Generator functions - Core Engine
 */
const Generators = {
    generateResume(data, format = 'html') {
        const { name, email, phone, location, target_role, summary, skills, experience, education, projects } = data;

        // HTML Format (Clean, ATS friendly, Professional)
        return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>${name} - Resume</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="margin: 0; padding: 40px; background: #f0f0f0; font-family: Arial, sans-serif;">
    <div style="background: white; padding: 40px; max-width: 800px; margin: 0 auto; color: #333; line-height: 1.6; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <!-- Header -->
        <header style="border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 32px; text-transform: uppercase; letter-spacing: 1px;">${name || 'Your Name'}</h1>
            <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold;">${target_role || 'Target Role'}</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">${email || ''} | ${phone || ''} | ${location || ''}</p>
        </header>

        <!-- Summary -->
        ${summary ? `
        <section style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Professional Summary</h2>
            <p>${summary}</p>
        </section>
        ` : ''}

        <!-- Skills -->
        ${skills && skills.length ? `
        <section style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Skills</h2>
            <p>${skills.join(' • ')}</p>
        </section>
        ` : ''}

        <!-- Experience -->
        ${experience && experience.length ? `
        <section style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Experience</h2>
            ${experience.map(exp => `
                <div style="margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between;">
                        <h3 style="margin: 0; font-size: 16px;">${exp.role}</h3>
                        <span style="font-weight: bold;">${exp.duration}</span>
                    </div>
                    <div style="font-style: italic;">${exp.company}</div>
                    <p style="margin-top: 5px;">${exp.description}</p>
                </div>
            `).join('')}
        </section>
        ` : ''}

        <!-- Projects -->
        ${projects && projects.length ? `
         <section style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Projects</h2>
             ${projects.map(proj => `
                <div style="margin-bottom: 10px;">
                    <h3 style="margin: 0; font-size: 16px;">${proj.title}</h3>
                    <p style="margin: 5px 0 0 0;">${proj.description}</p>
                </div>
            `).join('')}
        </section>
        ` : ''}

        <!-- Education -->
        ${education && education.length ? `
        <section>
            <h2 style="font-size: 16px; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Education</h2>
            ${education.map(edu => `
                <div style="margin-bottom: 10px;">
                    <strong>${edu.school}</strong>
                    <div>${edu.degree} - ${edu.year}</div>
                </div>
            `).join('')}
        </section>
        ` : ''}
    </div>
</body>
</html>`;
    },

    generateCoverLetter(data) {

        const { name, email, target_role, company_name } = data;
        return `
Dear Hiring Manager${company_name ? ' at ' + company_name : ''},

I am writing to express my enthusiastic interest in the ${target_role || 'open'} position. With my background and passion for this industry, I am confident in my ability to contribute effectively to your team.

Throughout my career, I have developed a strong skill set that aligns well with the requirements of this role. I thrive in dynamic environments and am eager to bring my problem-solving abilities and dedication to the team.

I would welcome the opportunity to discuss how my experience and skills can benefit your organization. Thank you for your time and consideration.

Sincerely,

${name || 'Your Name'}
${email || ''}
        `.trim();
    },

    generatePortfolio(data) {
        const { name, summary, skills, experience, projects, email, phone, location, target_role } = data;

        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name || 'Portfolio'} - ${target_role || 'Professional'}</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root { 
            --primary: #4f46e5; 
            --primary-dark: #4338ca;
            --text: #1e293b; 
            --text-light: #64748b;
            --bg: #f8fafc; 
            --card-bg: #ffffff;
            --accent: #ec4899;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Inter', sans-serif; 
            line-height: 1.6; 
            color: var(--text); 
            background: var(--bg); 
        }
        
        h1, h2, h3 { font-family: 'Outfit', sans-serif; }
        
        .container { max-width: 1000px; margin: 0 auto; padding: 2rem; }
        
        header { 
            background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
            color: white;
            padding: 6rem 2rem;
            text-align: center;
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
            margin-bottom: 2rem;
        }
        
        h1 { font-size: 3.5rem; line-height: 1.1; margin-bottom: 0.5rem; font-weight: 700; }
        header p { font-size: 1.25rem; color: #a5b4fc; max-width: 600px; margin: 0.5rem auto 2rem; }
        
        .btn-contact {
            display: inline-block;
            background: var(--accent);
            color: white;
            padding: 0.8rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.2s;
            box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
        }
        .btn-contact:hover { transform: translateY(-2px); }
        
        .section { margin-bottom: 4rem; }
        h2 { font-size: 2rem; margin-bottom: 1.5rem; position: relative; display: inline-block; }
        h2::after { content: ''; display: block; width: 40px; height: 4px; background: var(--primary); margin-top: 0.5rem; border-radius: 2px; }
        
        .grid { display: grid; gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
        
        .card { 
            background: var(--card-bg); 
            border-radius: 12px; 
            overflow: hidden; 
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); 
            transition: transform 0.2s; 
            border: 1px solid #e2e8f0;
        }
        .card:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
        
        .card-body { padding: 1.5rem; }
        .card h3 { font-size: 1.25rem; margin-bottom: 0.5rem; margin-top: 0; }
        
        .tag-container { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tag { 
            background: #e0e7ff; 
            color: var(--primary-dark); 
            padding: 0.4rem 1rem; 
            border-radius: 999px; 
            font-size: 0.875rem; 
            font-weight: 500; 
        }
        
        .experience-item { 
            border-left: 3px solid var(--primary); 
            padding-left: 1.5rem; 
            margin-bottom: 2rem; 
            position: relative;
        }
        .experience-item::before {
            content: '';
            position: absolute;
            left: -8px;
            top: 0;
            width: 13px;
            height: 13px;
            background: var(--primary);
            border-radius: 50%;
        }
        .meta { color: var(--text-light); margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 500; }
        
        footer { text-align: center; color: var(--text-light); padding: 2rem; border-top: 1px solid #e2e8f0; margin-top: 4rem;}
        
        @media (max-width: 600px) {
            h1 { font-size: 2.5rem; }
            header { padding: 4rem 1rem; }
        }
    </style>
</head>
<body>
    <header>
        <div class="container" style="padding:0; margin:0 auto;">
            <h1>${name || 'Your Name'}</h1>
            <p>${target_role || 'Professional Role'}</p>
            <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 1rem;">
                ${location || 'Location'} &bull; ${email || 'email@example.com'}
            </div>
            <a href="mailto:${email}" class="btn-contact">Contact Me</a>
        </div>
    </header>

    <main class="container">
        ${summary ? `
        <section class="section">
            <h2>About</h2>
            <p style="font-size: 1.1rem; color: var(--text-light); max-width: 800px;">${summary}</p>
        </section>
        ` : ''}
        
        ${skills && skills.length ? `
        <section class="section">
            <h2>Skills</h2>
            <div class="tag-container">
                ${skills.map(s => `<span class="tag">${s}</span>`).join('')}
            </div>
        </section>
        ` : ''}

        ${projects && projects.length ? `
        <section class="section">
            <h2>Featured Projects</h2>
            <div class="grid">
                ${projects.map(p => `
                    <div class="card">
                        <div class="card-body">
                            <h3>${p.title}</h3>
                            <p style="color: var(--text-light); margin-bottom: 1rem;">${p.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
        ` : ''}
        
        ${experience && experience.length ? `
        <section class="section">
            <h2>Experience</h2>
             ${experience.map(e => `
                <div class="experience-item">
                    <h3>${e.role}</h3>
                    <div class="meta">${e.company} &bull; ${e.duration}</div>
                    <p>${e.description}</p>
                </div>
            `).join('')}
        </section>
        ` : ''}
    </main>

    <footer>
        <p>&copy; ${new Date().getFullYear()} ${name || 'You'}. Made with ResumeHub.</p>
    </footer>
</body>
</html>`;
    },

    generateLinkedIn(data) {
        const { name, target_role, summary, skills, industry } = data;
        return `HEADLINE:
${target_role || 'Role'} | ${(skills || []).slice(0, 3).join(' | ')} | Aspiring Professional

ABOUT:
${summary || ''}

I am passionate about ${industry || 'technology'} and skilled in ${(skills || []).join(', ')}. Open to new opportunities in ${target_role || 'this field'}.
`;
    }
};

const WRITING_ENHANCEMENTS = {
    "made": "engineered",
    "created": "spearheaded",
    "worked on": "collaborated on",
    "did": "executed",
    "managed": "orchestrated",
    "helped": "facilitated",
    "changed": "transformed",
    "fast": "high-performance",
    "good": "exceptional",
    "fixed": "resolved",
    "built": "architected",
    "led": "directed",
    "responsible for": "accountable for"
};

class ResumeHubApp {
    constructor() {
        this.userData = {
            name: '',
            email: '',
            phone: '',
            location: '',
            career_level: 'Entry Level',
            industry: '',
            target_role: '',
            summary: '',
            skills: [],
            experience: [],
            education: [],
            projects: [],
            documents_created: []
        };

        this.currentStep = 0;
        this.selectedDocType = null;

        this.loadLocalData();

        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    loadLocalData() {
        try {
            const saved = localStorage.getItem('resumehub_user_data');
            if (saved) {
                const parsed = JSON.parse(saved);
                this.userData = { ...this.userData, ...parsed };
                // Ensure arrays are initialized
                if (!this.userData.skills) this.userData.skills = [];
                if (!this.userData.experience) this.userData.experience = [];
                if (!this.userData.projects) this.userData.projects = [];
                if (!this.userData.documents_created) this.userData.documents_created = [];
            }
        } catch (e) {
            console.error("Error loading local data", e);
        }
    }

    init() {
        // Navigation Logic
        const navHome = document.getElementById('nav-home');
        const navAbout = document.getElementById('nav-about');
        const btnBack = document.getElementById('back-home-btn');

        const setActiveNav = (navId) => {
            document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
            if (navId && document.getElementById(navId)) document.getElementById(navId).classList.add('active');
        };

        if (navHome) {
            navHome.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchView('hero-view');
                setActiveNav('nav-home');
            });
        }

        if (navAbout) {
            navAbout.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchView('about-view');
                setActiveNav('nav-about');
            });
        }

        if (btnBack) {
            btnBack.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchView('hero-view');
                setActiveNav('nav-home');
            });
        }

        // Direct binding with safety check
        const startBtn = document.getElementById('start-btn');
        if (startBtn) {
            // Remove any existing listeners by cloning (optional but safe)
            const newBtn = startBtn.cloneNode(true);
            startBtn.parentNode.replaceChild(newBtn, startBtn);

            newBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log("Starting...");
                this.showSelectionScreen();
                setActiveNav(null); // Deselect navs when in wizard
            });
        }
    }

    saveData() {
        try {
            localStorage.setItem('resumehub_user_data', JSON.stringify(this.userData));
        } catch (e) {
            console.error("Save failed", e);
        }
    }

    enhanceText(text) {
        if (!text) return { original: text, enhanced: text };
        let enhancedText = text;
        Object.keys(WRITING_ENHANCEMENTS).forEach(weak => {
            const regex = new RegExp(`\\b${weak}\\b`, 'gi');
            const strong = WRITING_ENHANCEMENTS[weak];
            enhancedText = enhancedText.replace(regex, strong);
        });
        return { original: text, enhanced: enhancedText };
    }

    showSelectionScreen() {
        this.switchView('selection-view');

        const container = document.getElementById('main-content');

        // Always recreate view to ensure clean state
        let section = document.getElementById('selection-view');
        if (section) section.remove();

        section = document.createElement('section');
        section.id = 'selection-view';
        section.className = 'view active';
        section.innerHTML = `
            <div class="header-center" style="text-align: center; margin-bottom: 2rem; animation: fadeIn 0.5s;">
                <h2>What would you like to create?</h2>
                <p>Select a document type to get started</p>
            </div>
            <div class="selection-grid">
                <div class="selection-card" data-type="resume">
                    <span class="selection-icon">📄</span>
                    <h3>Resume</h3>
                    <p>ATS-friendly professional resume</p>
                </div>
                <div class="selection-card" data-type="portfolio">
                    <span class="selection-icon">🌐</span>
                    <h3>Portfolio Website</h3>
                    <p>Personal website to showcase your work</p>
                </div>
                <div class="selection-card" data-type="cover_letter">
                    <span class="selection-icon">✉️</span>
                    <h3>Cover Letter</h3>
                    <p>Tailored cover letter for job applications</p>
                </div>
                <div class="selection-card" data-type="linkedin">
                    <span class="selection-icon">💼</span>
                    <h3>LinkedIn Profile</h3>
                    <p>Optimized headline and about section</p>
                </div>
            </div>
        `;
        container.appendChild(section);

        section.querySelectorAll('.selection-card').forEach(card => {
            card.addEventListener('click', () => {
                this.selectedDocType = card.dataset.type;
                this.startWizard();
            });
        });
    }

    startWizard() {
        this.currentStep = 0;
        this.renderWizardStep(); // Create view first
        this.switchView('wizard-view'); // Then show it
    }

    getWizardSteps() {
        return [
            {
                id: 'basics',
                title: 'Personal Details',
                fields: [
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'e.g. John Doe' },
                    { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' },
                    { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 234 567 890' },
                    { name: 'location', label: 'City, Country', type: 'text', placeholder: 'New York, US' }
                ]
            },
            {
                id: 'role',
                title: 'Professional Goal',
                fields: [
                    { name: 'target_role', label: 'Target Role', type: 'text', placeholder: 'e.g. Frontend Developer' },
                    { name: 'industry', label: 'Industry', type: 'text', placeholder: 'e.g. Technology' },
                    { name: 'career_level', label: 'Experience Level', type: 'select', options: ['Student', 'Fresher', 'Experienced', 'Freelancer'] }
                ]
            },
            {
                id: 'skills_summary',
                title: 'Skills & Summary',
                fields: [
                    { name: 'skills', label: 'Top Skills (comma separated)', type: 'text', placeholder: 'Javascript, React, Leadership', ai: true },
                    { name: 'summary', label: 'Professional Summary', type: 'textarea', placeholder: 'Briefly describe your experience and goals...', ai: true }
                ]
            },
            {
                id: 'experience_latest',
                title: 'Latest Experience (Optional)',
                fields: [
                    { name: 'exp_role', label: 'Job Role', type: 'text', placeholder: 'Senior Engineer' },
                    { name: 'exp_company', label: 'Company', type: 'text', placeholder: 'Tech Corp' },
                    { name: 'exp_duration', label: 'Duration', type: 'text', placeholder: '2020 - Present' },
                    { name: 'exp_desc', label: 'Description', type: 'textarea', placeholder: 'Achievements and responsibilities...', ai: true }
                ]
            },
            {
                id: 'project_latest',
                title: 'Key Project (Optional)',
                fields: [
                    { name: 'proj_title', label: 'Project Title', type: 'text', placeholder: 'E-commerce App' },
                    { name: 'proj_desc', label: 'Description', type: 'textarea', placeholder: 'Project details and tech stack...', ai: true }
                ]
            }
        ];
    }

    renderWizardStep() {
        const steps = this.getWizardSteps();
        const step = steps[this.currentStep];
        const container = document.getElementById('main-content');

        let wizardView = document.getElementById('wizard-view');
        if (!wizardView) {
            wizardView = document.createElement('section');
            wizardView.id = 'wizard-view';
            wizardView.className = 'view';
            container.appendChild(wizardView);
        }

        const progressPercent = ((this.currentStep + 1) / steps.length) * 100;

        let fieldsHtml = step.fields.map(field => {
            const aiBtn = field.ai
                ? `<button type="button" class="btn-ai-enhance" data-field="${field.name}">✨ Enhance with AI</button>`
                : '';

            let inputHtml = '';
            const val = this.userData[field.name];
            const displayVal = (Array.isArray(val) ? val.join(', ') : val) || '';

            if (field.type === 'textarea') {
                inputHtml = `<textarea class="form-control" name="${field.name}" rows="4">${displayVal}</textarea>`;
            } else if (field.type === 'select') {
                inputHtml = `<select class="form-control" name="${field.name}">
                            ${field.options.map(opt => `<option ${this.userData[field.name] === opt ? 'selected' : ''}>${opt}</option>`).join('')}
                        </select>`;
            } else {
                inputHtml = `<input type="${field.type}" class="form-control" name="${field.name}" value="${displayVal}" placeholder="${field.placeholder || ''}">`;
            }

            return `
                <div class="form-group">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.5rem;">
                        <label style="margin-bottom:0;">${field.label}</label>
                        ${aiBtn}
                    </div>
                    ${inputHtml}
                </div>
            `;
        }).join('');

        wizardView.innerHTML = `
            <div class="wizard-container">
                <div style="margin-bottom: 2rem;">
                    <div style="height: 4px; background: #334155; width: 100%; border-radius: 2px;">
                        <div style="height: 100%; width: ${progressPercent}%; background: var(--accent-gradient); border-radius: 2px; transition: width 0.3s;"></div>
                    </div>
                    <p style="text-align: right; margin-top: 0.5rem; color: var(--text-muted); font-size: 0.8rem;">Step ${this.currentStep + 1} of ${steps.length}</p>
                </div>

                <h2>${step.title}</h2>
                <form id="wizard-form">
                    ${fieldsHtml}
                </form>
                
                <div class="wizard-actions">
                    <button id="prev-btn" class="btn btn-secondary" style="visibility: ${this.currentStep === 0 ? 'hidden' : 'visible'}">Back</button>
                    <button id="next-btn" class="btn btn-primary">${this.currentStep === steps.length - 1 ? 'Generate' : 'Next'}</button>
                </div>
            </div>
        `;

        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleNext(steps);
            });
        }

        const prevBtn = document.getElementById('prev-btn');
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleBack();
            });
        }

        // Re-bind AI buttons
        document.querySelectorAll('.btn-ai-enhance').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const fieldName = e.target.dataset.field;
                const form = document.getElementById('wizard-form');
                const field = form.querySelector(`[name="${fieldName}"]`);
                const originalText = field.value;

                if (!originalText) {
                    alert("Please enter some text first for AI to enhance!");
                    return;
                }

                const btnText = e.target.innerText;
                e.target.innerText = "✨ Enhancing...";

                setTimeout(() => {
                    const result = this.enhanceText(originalText);
                    field.value = result.enhanced;
                    e.target.innerText = btnText;
                    field.style.borderColor = "#ec4899";
                    setTimeout(() => field.style.borderColor = "#334155", 1000);
                }, 500);
            });
        });
    }

    handleNext(steps) {
        try {
            const form = document.getElementById('wizard-form');
            if (!form) return;

            stepFields(steps[this.currentStep]).forEach(name => {
                const input = form.querySelector(`[name="${name}"]`);
                if (input) {
                    this.userData[name] = input.value;
                }
            });

            // Mapping Logic (Robust check)
            const currentStepId = steps[this.currentStep].id;
            if (currentStepId === 'experience_latest') {
                const role = this.userData['exp_role'];
                if (role) {
                    this.userData.experience = [{
                        role: this.userData['exp_role'],
                        company: this.userData['exp_company'],
                        duration: this.userData['exp_duration'],
                        description: this.userData['exp_desc']
                    }];
                }
            } else if (currentStepId === 'project_latest') {
                const title = this.userData['proj_title'];
                if (title) {
                    this.userData.projects = [{
                        title: this.userData['proj_title'],
                        description: this.userData['proj_desc']
                    }];
                }
            } else if (currentStepId === 'skills_summary') {
                const skillsStr = this.userData['skills'];
                if (typeof skillsStr === 'string') {
                    this.userData.skills = skillsStr.split(',').map(s => s.trim()).filter(s => s);
                }
            }

            this.saveData();

            if (this.currentStep < steps.length - 1) {
                this.currentStep++;
                this.renderWizardStep();
            } else {
                this.generateResult();
            }
        } catch (e) {
            console.error("Error in handleNext", e);
            alert("Something went wrong saving your data. Please try again.");
        }
    }

    handleBack() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.renderWizardStep();
        }
    }

    generateResult() {
        try {
            this.switchView('result-view');
            const container = document.getElementById('main-content');

            // Recreate result view to ensure fresh state
            let resultView = document.getElementById('result-view');
            if (resultView) resultView.remove();

            resultView = document.createElement('section');
            resultView.id = 'result-view';
            resultView.className = 'view active';
            container.appendChild(resultView);

            let output = '';
            let fileExt = 'txt';
            let mimeType = 'text/plain';

            // Generate Content
            if (this.selectedDocType === 'resume') {
                output = Generators.generateResume(this.userData);
                fileExt = 'html'; mimeType = 'text/html';
            } else if (this.selectedDocType === 'portfolio') {
                output = Generators.generatePortfolio(this.userData);
                fileExt = 'html'; mimeType = 'text/html';
            } else if (this.selectedDocType === 'cover_letter') {
                output = Generators.generateCoverLetter(this.userData);
                fileExt = 'txt';
            } else {
                output = Generators.generateLinkedIn(this.userData);
                fileExt = 'txt';
            }

            // Save History
            if (this.userData.documents_created) {
                this.userData.documents_created.push({
                    type: this.selectedDocType,
                    date: new Date().toISOString()
                });
                this.saveData();
            }

            // Render UI
            resultView.innerHTML = `
                <div class="wizard-container" style="max-width: 1000px;">
                    <h2 style="text-align: center;">Your Document is Ready!</h2>
                    
                    <div style="margin: 2rem 0; height: 600px; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); background: white;">
                        <iframe id="preview-frame" style="width: 100%; height: 100%; border: none; display: block;"></iframe>
                    </div>

                    <div class="wizard-actions" style="justify-content: center;">
                        <button class="btn btn-secondary" onclick="location.reload()">Start Over</button>
                        <button id="download-btn" class="btn btn-primary">Download File</button>
                    </div>
                </div>
            `;

            // Populate Iframe
            const frame = document.getElementById('preview-frame');
            const doc = frame.contentWindow.document;
            doc.open();

            if (this.selectedDocType === 'resume' || this.selectedDocType === 'portfolio') {
                doc.write(output);
            } else {
                // Text formats need basic styling for preview
                doc.write(`
                    <html>
                        <head><style>body { font-family: 'Inter', sans-serif; line-height: 1.6; padding: 40px; white-space: pre-wrap; color: #333; }</style></head>
                        <body>${output}</body>
                    </html>
                `);
            }
            doc.close();

            // Handle Download
            document.getElementById('download-btn').addEventListener('click', () => {
                const blob = new Blob([output], { type: mimeType });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                const safeName = (this.userData.name || 'document').replace(/[^a-z0-9]/gi, '_').toLowerCase();
                a.download = `${safeName}_${this.selectedDocType}.${fileExt}`;
                a.click();
            });
        } catch (e) {
            console.error("Values missing for generation", e);
            alert("Error generating document. Please ensure all fields are filled correctly.");
        }
    }

    switchView(viewId) {
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        const view = document.getElementById(viewId);
        if (view) view.classList.add('active');

        const hero = document.getElementById('hero-view');
        if (viewId === 'hero-view') {
            if (hero) hero.classList.add('active');
        } else {
            if (hero) hero.classList.remove('active');
        }
    }
}

// Helpers
function stepFields(step) {
    return step.fields.map(f => f.name);
}

// Initialize App
new ResumeHubApp();
