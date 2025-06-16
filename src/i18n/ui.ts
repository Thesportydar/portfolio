export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'es';

export const ui = {
    en: {
        'nav.about': { text: 'About', href: 'about' },
        'nav.experience': { text: 'Experience', href: 'experience' },
        'nav.technologies': { text: 'Technologies', href: 'technologies' },
        'nav.projects': { text: 'Projects', href: 'projects' },
    },
    es: {
        'nav.about': { text: 'Acerca de Mí', href: 'acerca' },
        'nav.experience': { text: 'Experiencia', href: 'experiencia' },
        'nav.technologies': { text: 'Tecnologías', href: 'tecnologias' },
        'nav.projects': { text: 'Proyectos', href: 'proyectos' },
    },
} as const;
