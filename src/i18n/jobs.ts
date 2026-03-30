export const jobsTranslations = {
    "es": {
        title: "Experiencia",
        jobs: [
            {
                title: "Software Engineer (Python & AWS)",
                company: "Distribuidora Espora",
                location: "Tandil, Buenos Aires",
                isRemote: true,
                duration: "Ene. 2026 - Feb. 2026",
                description: [
                    "Diseñé y desarrollé en Python un sistema que automatizó el procesamiento de documentos, eliminando ~5 horas diarias de carga manual de datos.",
                    "Arquitectura: Flujo asíncrono robusto con SQS, S3, Lambda y DynamoDB.",
                    "Integridad de Datos: Procesamiento idempotente multicapa (locks), escrituras condicionales y enfoque no-loss first con DLQs para evitar pérdida de información.",
                    "Seguridad e IaC: Webhook protegido con HMAC-SHA256, infraestructura 100% en Terraform (IAM Least Privilege) y gestión de secretos en SSM.",
                    "Extracción e IA: Integración de Amazon Textract con validación determinística para asegurar integridad transaccional.",
                    "Observabilidad: Monitoreo end-to-end con AWS Powertools y dashboards en CloudWatch calibrados al volumen real."
                ],
                technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
            },
            {
                title: "Backend & Data Engineer",
                company: "ISISTAN",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Abr. 2025 - Act.",
                description: "Actualmente formo parte de un grupo de trabajo en ISISTAN donde diseñamos, desarrollamos y operamos un sistema backend y de información orientado a la toma de decisiones. Mi rol abarca el ciclo de vida completo: desde la arquitectura y el procesamiento de grandes volúmenes de datos hasta la gestión de infraestructura y despliegue en entornos productivos. El sistema procesa información estructurada y vectorial (pgvector), integra bases de datos y motores de búsqueda, y expone APIs RESTful desarrolladas con Flask y SQLAlchemy. Incorpora técnicas de inteligencia artificial, todo validado mediante testing automatizado en GitLab CI. Colaboro con distintas áreas para traducir necesidades funcionales en soluciones técnicas eficientes.",
                technologies: ["Python", "Flask", "SQLAlchemy", "GitLab CI", "Apache Solr", "Docker", "PostgreSQL", "pgvector", "Bash", "Git", "Astro", "Node.js", "Flask"]
            },
            {
                title: "Fullstack Developer",
                company: "ISISTAN",
                location: "Tandil, Buenos Aires",
                isRemote: true,
                duration: "Ago. 2024 - Feb. 2025",
                description: "Desarrollé una plataforma web educativa Full Stack para facilitar la enseñanza mediante Recorridos de Estudio e Investigación (REIs). Implementé un backend robusto basado en APIs REST con Flask, funcionalidades de colaboración en tiempo real y análisis automático de datos mediante técnicas de IA. El sistema fue validado en aulas reales y el trabajo resultó en una publicación científica internacional. Colaboré estrechamente con los directores del proyecto en la investigación, definición de requerimientos y diseño de la arquitectura.",
                technologies: ["Astro.js", "Flask", "TypeScript", "Python", "Docker", "SQLite", "Redis", "Preact", "Sentence Transformers"]
            },
            {
                title: "Ingeniero de Sistemas",
                company: "Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN)",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Mar. 2020 - May. 2025",
                description: ["🪪 Título intermedio: Analista Programador Universitario", "🏅 Distinción: Recibido con honores académicos", "📊 Promedio: 8.75"],
                technologies: []
            },
            {
                title: "AWS Solutions Architect Associate (SAA-C03)",
                company: "Amazon Web Services (AWS)",
                location: "",
                isRemote: true,
                duration: "2026",
                description: ["Preparación completa — examen pendiente"],
                technologies: []
            },
            {
                title: "Fundamentos de Ingeniería de Software",
                company: "Instituto Tecnológico Superior de Teziutlán",
                location: "Puebla, México",
                isRemote: false,
                duration: "Ago. 2023 - Dic. 2023",
                description: ["🌎 Programa PILA Vitual 2023 (Intercambio académico)", "📊 Nota final: 9.4"],
                technologies: []
            }
        ]
    },
    "en": {
        title: "Experience",
        jobs: [
            {
                title: "Software Engineer (Python & AWS)",
                company: "Distribuidora Espora",
                location: "Tandil, Buenos Aires",
                isRemote: true,
                duration: "Jan. 2026 - Feb. 2026",
                description:
                    [
                        "Designed and developed a Python-based system that fully automated document processing, saving ~5 hours daily of manual data entry.",
                        "Architecture: Robust asynchronous flow using SQS, S3, Lambda, and DynamoDB.",
                        "Data Integrity: Multi-layer idempotent processing (locks), conditional writes, and a no-loss first approach with DLQs to prevent data loss.",
                        "Security & IaC: Webhook secured via HMAC-SHA256, 100% Terraform infrastructure (IAM Least Privilege), and SSM secret management.",
                        "Extraction & AI: Amazon Textract integration with deterministic validation logic for transactional integrity.",
                        "Observability: End-to-end monitoring using AWS Powertools and CloudWatch dashboards calibrated to operational volume."
                    ]

                ,
                technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
            },
            {
                title: "Backend & Data Engineer",
                company: "ISISTAN",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Apr. 2025 - Act.",
                description: "I am currently part of a working group at ISISTAN where we design, develop, and operate a backend and information system focused on decision-making. My role covers the entire lifecycle: from architecture design and large-scale data processing to infrastructure management and deployment in production environments. The system handles structured and vector data (pgvector), integrates databases and search engines, and exposes RESTful APIs developed with Flask and SQLAlchemy. It incorporates applied artificial intelligence techniques, with quality ensured by automated testing pipelines in GitLab CI. I collaborate with different areas to translate functional requirements into efficient technical solutions.",
                technologies: ["Python", "Flask", "SQLAlchemy", "GitLab CI", "Apache Solr", "Docker", "PostgreSQL", "pgvector", "Bash", "Git", "Astro", "Node.js", "Flask"]
            },
            {
                title: "Fullstack Developer",
                company: "ISISTAN",
                location: "Tandil, Buenos Aires",
                isRemote: true,
                duration: "Aug. 2024 - Feb. 2025",
                description: "I developed a Full Stack educational web platform to facilitate teaching through Study and Research Paths (SRP). I implemented a robust backend exposing REST APIs using Flask, built real-time collaboration features, and integrated automated data analysis using AI techniques. The system was validated in real-world classrooms, and the work resulted in an international scientific publication. I collaborated closely with project leadership on research, requirements definition, and architectural design.",
                technologies: ["Astro.js", "Flask", "TypeScript", "Python", "Docker", "SQLite", "Redis", "Preact", "Sentence Transformers"]
            },
            {
                title: "Systems Engineer",
                company: "Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN)",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Mar. 2020 - May. 2025",
                description: ["🪪 Intermediate degree: University Programmer Analyst", "🏅 Distinction: Graduated with academic honors", "📊 GPA: 8.75"],
                technologies: []
            },
            {
                title: "AWS Solutions Architect Associate (SAA-C03)",
                company: "Amazon Web Services (AWS)",
                location: "",
                isRemote: true,
                duration: "2026",
                description: ["Preparation completed — exam pending"],
                technologies: []
            },
            {
                title: "Fundamentals of Software Engineering",
                company: "Instituto Tecnológico Superior de Teziutlán",
                location: "Puebla, Mexico",
                isRemote: false,
                duration: "Aug. 2023 - Dec. 2023",
                description: ["🌎 PILA Virtual Program 2023 (Academic exchange)", "📊 Final grade: 9.4"],
                technologies: []
            }
        ]
    }
}
