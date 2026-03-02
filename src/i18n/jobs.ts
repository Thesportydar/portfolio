export const jobsTranslations = {
    "es": {
        title: "Experiencia",
        jobs: [
            {
                title: "Freelance Cloud Engineer",
                company: "Distribuidora Espora",
                location: "Tandil, Buenos Aires",
                isRemote: true,
                duration: "Ene. 2026 - Feb. 2026",
                description: "Diseñé y desplegué un pipeline serverless en AWS que automatizó por completo el procesamiento de documentos del cliente, eliminando ~5 horas diarias de carga manual de datos. La arquitectura es event-driven: un webhook seguro (HMAC-SHA256) recibe los documentos, que pasan por un flujo asíncrono con SQS, Lambda y DynamoDB con procesamiento idempotente y recuperación automática de fallos mediante DLQ. Para la extracción de datos utilicé Amazon Textract (OCR) con validación determinística que garantiza integridad transaccional. Toda la infraestructura está provisionada con Terraform, aplicando principios de mínimo privilegio en IAM y gestión de secretos con SSM. Implementé observabilidad completa con logging estructurado y métricas custom en CloudWatch para detección proactiva de errores.",
                technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
            },
            {
                title: "Data & Backend Engineer",
                company: "Instituto Superior de Ingeniería de Software de Tandil",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Abr. 2025 - Act.",
                description: "Actualmente formo parte de un grupo de trabajo en ISISTAN donde diseñamos, desarrollamos y operamos un sistema backend y de información orientado a la toma de decisiones. Mi rol abarca el ciclo de vida completo: desde la arquitectura y el procesamiento de grandes volúmenes de datos hasta la gestión de infraestructura y despliegue en entornos productivos. El sistema procesa grandes volúmenes de datos, integra bases de datos y motores de búsqueda, e incorpora técnicas de inteligencia artificial aplicada para apoyar decisiones en contextos reales. Colaboro con distintas áreas del equipo para traducir necesidades funcionales en soluciones técnicas eficientes.",
                technologies: ["Python", "Apache Solr", "Docker", "Docker Compose", "MySQL", "PostgreSQL", "Bash", "Git", "Gitlab", "Astro", "JavaScript"]
            },
            {
                title: "Fullstack Developer",
                company: "Instituto Superior de Ingeniería de Software de Tandil",
                location: "Tandil, Buenos Aires",
                isRemote: true,
                duration: "Ago. 2024 - Feb. 2025",
                description: "Desarrollé una plataforma web educativa Full Stack para facilitar la enseñanza mediante Recorridos de Estudio e Investigación (REIs). Implementé funcionalidades de colaboración en tiempo real y análisis automático de datos mediante técnicas de IA. El sistema fue validado en aulas reales y el trabajo resultó en una publicación científica internacional. Colaboré estrechamente con los directores del proyecto en la investigación, definición de requerimientos y diseño de la arquitectura.",
                technologies: ["Astro.js", "TypeScript", "Python", "Docker", "SQLite", "Redis", "Bun.sh", "Preact", "Sentence Transformers"]
            },
            {
                title: "Ingeniero de Sistemas",
                company: "Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN)",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Mar. 2020 - May. 2025",
                description: ["🪪 Título intermedio: Analista Programador Universitario", "🏅 Distinción: Recibido con honores académicos", "📊 Promedio general: 8.75"],
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
                title: "Freelance Cloud Engineer",
                company: "Distribuidora Espora",
                location: "Tandil, Buenos Aires",
                isRemote: true,
                duration: "Jan. 2026 - Feb. 2026",
                description: "Autonomously designed and deployed a serverless pipeline on AWS that fully automated the client's document processing workflow, eliminating ~5 hours of daily manual data entry. The architecture is event-driven: a secure webhook (HMAC-SHA256) receives documents, which flow through an asynchronous pipeline built with SQS, Lambda, and DynamoDB featuring idempotent processing and automatic failure recovery via DLQ. For data extraction, I integrated Amazon Textract (OCR) with deterministic validation logic to ensure transactional integrity. All infrastructure is provisioned with Terraform, enforcing least-privilege IAM policies and secrets management with SSM. I implemented full observability with structured logging and custom CloudWatch metrics for proactive error detection.",
                technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
            },
            {
                title: "Data & Backend Engineer",
                company: "Instituto Superior de Ingeniería de Software de Tandil",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Apr. 2025 - Act.",
                description: "I am currently part of a working group at ISISTAN where we design, develop, and operate a backend and information system focused on decision-making. My role covers the entire lifecycle: from architecture design and large-scale data processing to infrastructure management and deployment in production environments. The system handles large volumes of data, integrates databases and search engines, and incorporates applied artificial intelligence techniques to support decision-making in real-world contexts. I collaborate with different areas of the team to translate functional requirements into efficient technical solutions.",
                technologies: ["Python", "Apache Solr", "Docker", "Docker Compose", "MySQL", "PostgreSQL", "Bash", "Git", "Gitlab", "Astro", "JavaScript"]
            },
            {
                title: "Fullstack Developer",
                company: "Instituto Superior de Ingeniería de Software de Tandil",
                location: "Tandil, Buenos Aires",
                isRemote: true,
                duration: "Aug. 2024 - Feb. 2025",
                description: "I developed a Full Stack educational web platform to facilitate teaching through Study and Research Paths (SRP). I implemented real-time collaboration features and automated data analysis using AI techniques. The system was validated in real-world classrooms, and the work resulted in an international scientific publication. I collaborated closely with project leadership on research, requirements definition, and architectural design.",
                technologies: ["Astro.js", "TypeScript", "Python", "Docker", "SQLite", "Redis", "Bun.sh", "Preact", "Sentence Transformers"]
            },
            {
                title: "Systems Engineer",
                company: "Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN)",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Mar. 2020 - May. 2025",
                description: ["🪪 Intermediate degree: University Programmer Analyst", "🏅 Distinction: Graduated with academic honors", "📊 Overall average: 8.75"],
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
