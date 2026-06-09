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
                    "Diseñé e implementé un pipeline serverless y event-driven en AWS para procesamiento de documentos, eliminando ~5 horas diarias de carga manual y asegurando integridad end-to-end en un entorno productivo.",
                    "Implementé un flujo asíncrono con SQS, S3, Lambda y DynamoDB con procesamiento idempotente multicapa (locks), escrituras condicionales, correlación de estado y reintentos vía DLQ, evitando duplicados y pérdida de datos bajo concurrencia.",
                    "Adopté un enfoque no-loss-first con trade-offs explícitos entre falsos negativos y positivos, reforzado por validaciones determinísticas y reglas de negocio, priorizando integridad contable en un sistema crítico.",
                    "Integré Amazon Textract (OCR) con lógica de extracción y validación determinística, con reglas de negocio para garantizar integridad transaccional y extracción estructurada de datos.",
                    "Aseguré endpoints públicos con verificación de firma HMAC-SHA256 y gestioné toda la infraestructura como código con Terraform (remote state, IAM least privilege, SSM, parametrización por entorno).",
                    "Implementé observabilidad end-to-end con AWS Powertools + CloudWatch (métricas, alarmas y dashboards calibrados al volumen real)."
                ],
                technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
            },
            {
                title: "AI & Backend Engineer",
                company: "ISISTAN",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Abr. 2025 - Act.",
                description: [
                    "Desarollo del motor de análisis semántico de CONICET/SIGEVA: indexa +27k personas y millones de producciones científicas para búsqueda semántica, profiling automático y asignación de postulantes e ingresantes mediante NLP multi-idioma.",
                    "Implementé un pipeline de matching de dos etapas (bi-encoder + cross-encoder) para asignar revisores a perfiles de investigación respetando restricciones institucionales y maximizando afinidad semántica.",
                    "Optimicé el reranker cross-encoder reemplazando APIs de alto nivel por forward passes manuales con precisión mixta (FP16 + autocast), logrando ~9x de speedup al aprovechar Tensor Cores y habilitando el procesamiento paralelo multi-GPU.",
                    "Desarrollo de una PoC de buscador de investigadores para demandas industriales (Globant, Mercado Libre, Vaca Muerta): identifica en segundos a los expertos más relevantes para un problema técnico dado.",
                    "Diseño de pipelines ETL concurrentes para la unificación de repositorios legados heterogéneos (Data Fusion), desarrollando algoritmos de Entity Resolution y deduplicación determinística para consolidar millones de registros sin colisiones.",
                    "Orquestación de infraestructura MLOps con detección de idioma en tiempo real, estrategias de caché, y despliegue de modelos y bases de datos mediante Docker y pipelines de CI/CD."
                ],
                technologies: ["Python", "Apache Solr", "PostgreSQL", "pgvector", "PyTorch", "Docker", "Bash", "Gitlab", "NLP", "Transformers"]
            },
            {
                title: "Software Developer",
                company: "ISISTAN",
                location: "Tandil, Buenos Aires",
                isRemote: true,
                duration: "Ago. 2024 - Mar. 2025",
                description: [
                    "Diseñé, desarrollé e implementé una plataforma web educativa fullstack para soportar Recorridos de Estudio e Investigación (REIs), un enfoque didáctico orientado a preguntas generadoras que promueve el aprendizaje colaborativo y significativo en matemática.",
                    "Construí el núcleo de la aplicación (Astro SSR con Bun) junto con un worker asíncrono en Python para procesar automáticamente preguntas y respuestas de estudiantes, generando reportes de progreso e identificación de patrones.",
                    "Implementé autenticación con roles diferenciados (docentes y alumnos), almacenamiento de archivos y funcionalidades de colaboración y seguimiento.",
                    "Desarrollé análisis automático de datos educativos mediante embeddings y técnicas de NLP para agrupar respuestas y evaluar avances.",
                    "Desplegué la plataforma en un piloto real con docentes y estudiantes, validando su adopción en contexto de aula.",
                    "Coautoricé una publicación científica con los resultados del piloto, presentada en una conferencia internacional de didáctica en Barcelona."
                ],
                technologies: ["Astro.js", "TypeScript", "Tailwind CSS", "HTMX", "Python", "SQLite", "Redis", "Bun.sh", "Preact", "Sentence-Transformers", "Flask"]
            },
            {
                title: "Ingeniero de Sistemas",
                company: "Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN)",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Mar. 2020 - Jun. 2025",
                description: ["🪪 Título intermedio: Analista Programador Universitario", "🏅 Distinción: Recibido con honores académicos", "📊 Promedio: 8.75"],
                technologies: []
            },
            {
                title: "AWS Solutions Architect Associate (SAA-C03)",
                company: "Amazon Web Services (AWS)",
                location: "",
                isRemote: true,
                duration: "Jun. 2026 - Jun. 2029",
                description: [
                    "Certificación oficial de AWS que valida la capacidad para diseñar arquitecturas escalables, resilientes y costo-eficientes en la nube.",
                    "📊 Puntaje: 915/1000",
                    "🔗 <a href='https://www.credly.com/badges/4d791ba4-2cdc-47fe-910b-aedc3f348fd0/public_url' target='_blank' rel='noopener noreferrer' class='underline hover:text-pink-500'>Ver credencial en Credly</a>"
                ],
                technologies: ["Cloud Architecture", "AWS", "Serverless", "Security", "IaC"]
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
                description: [
                    "Designed the semantic analysis engine for CONICET/SIGEVA: indexes 27k+ profiles and millions of scientific publications for semantic search, automatic profiling, and reviewer assignment across fellowship and researcher intake processes via multilingual NLP.",
                    "Implemented a two-stage matching pipeline (bi-encoder + cross-encoder) to assign reviewers to research profiles while enforcing institutional constraints (conflicts of interest, quotas) and maximizing semantic affinity.",
                    "Optimized the cross-encoder reranker by replacing high-level APIs with manual forward passes and mixed precision (FP16 + autocast), achieving ~9x GPU speedup by leveraging Tensor Cores and enabling multi-GPU parallel processing.",
                    "Built a PoC expert search engine for industrial demands (Globant, Mercado Libre, Vaca Muerta): identifies the most relevant researchers for a given technical problem in seconds.",
                    "Orchestrated concurrent hybrid ETL pipelines with real-time language detection, caching strategies, and infrastructure management (MLOps) via Docker and CI/CD."
                ],
                technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
            },
            {
                title: "AI & Backend Engineer",
                company: "ISISTAN",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Apr. 2025 - Act.",
                description: [
                    "Developed an AI-driven semantic analysis engine for the country's second largest public database (CONICET/SIGEVA), processing and structuring decades of national scientific production.",
                    "Designed a two-stage NLP pipeline (bi-encoders + cross-encoders) for semantic matching and assignment across thousands of profiles.",
                    "Implemented a cross-encoder reranking system, accelerating GPU inference (~9x speedup) by replacing high-level APIs with manual forward passes and utilizing mixed precision (FP16 + autocast), leveraging Tensor Cores and multi-GPU parallelism for scale.",
                    "Developed applied AI algorithms for complex matching, expert search, and the formation of technical committees.",
                    "Orchestrated concurrent and hybrid ETL pipelines (Python, Solr, PostgreSQL/pgvector) featuring real-time language detection and caching strategies.",
                    "Architected a technological bridge to connect experts with innovation demands from leading industries (Vaca Muerta, Globant, Mercado Libre, Meta) through precise technical capability identification.",
                    "Designed concurrent ETL pipelines to unify heterogeneous legacy repositories (Data Fusion), developing Entity Resolution and deterministic deduplication algorithms to consolidate millions of records without collisions.",
                    "Orchestrated MLOps infrastructure with real-time language detection, caching strategies, and containerized deployment of models and databases using Docker and CI/CD pipelines."
                ],
                technologies: ["Python", "Apache Solr", "PostgreSQL", "pgvector", "PyTorch", "Docker", "Bash", "Gitlab", "NLP", "Transformers"]
            },
            {
                title: "Software Developer",
                company: "ISISTAN",
                location: "Tandil, Buenos Aires",
                isRemote: true,
                duration: "Aug. 2024 - Mar. 2025",
                description: [
                    "Designed, developed, and implemented a fullstack educational web platform to support Study and Research Paths (SRP), an inquiry-based didactic approach that promotes collaborative and meaningful learning in mathematics.",
                    "Built the core application (Astro SSR with Bun) alongside an asynchronous Python worker to automatically process student questions and answers, generating progress reports and identifying patterns.",
                    "Implemented role-based authentication (teachers and students), file storage, and real-time collaboration and tracking capabilities.",
                    "Developed automated educational data analysis utilizing embeddings and NLP techniques to cluster responses and evaluate progress.",
                    "Deployed the platform in a real-world classroom pilot with teachers and students, validating its adoption in context.",
                    "Co-authored a scientific paper presenting the pilot results at an international didactics conference in Barcelona."
                ],
                technologies: ["Astro.js", "TypeScript", "Tailwind CSS", "HTMX", "Python", "SQLite", "Redis", "Bun.sh", "Preact", "Sentence-Transformers", "Flask"]
            },
            {
                title: "Systems Engineer",
                company: "Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN)",
                location: "Tandil, Buenos Aires",
                isRemote: false,
                duration: "Mar. 2020 - Jun. 2025",
                description: ["🪪 Intermediate degree: University Programmer Analyst", "🏅 Distinction: Graduated with academic honors", "📊 GPA: 8.75"],
                technologies: []
            },
            {
                title: "AWS Solutions Architect Associate (SAA-C03)",
                company: "Amazon Web Services (AWS)",
                location: "",
                isRemote: true,
                duration: "Jun. 2026 - Jun. 2029",
                description: [
                    "Official AWS certification validating the ability to design scalable, resilient, and cost-efficient cloud architectures.",
                    "📊 Score: 915/1000",
                    "🔗 <a href='https://www.credly.com/badges/4d791ba4-2cdc-47fe-910b-aedc3f348fd0/public_url' target='_blank' rel='noopener noreferrer' class='underline hover:text-pink-500'>View credential on Credly</a>"
                ],
                technologies: ["Cloud Architecture", "AWS", "Serverless", "Security", "IaC"]
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
