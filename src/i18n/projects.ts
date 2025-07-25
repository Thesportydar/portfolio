export const projectsTranslations = {
    "es": {
        "title": "Proyectos",
        "projects": [
            {
              "name": "Fintwit Argy Bot",
              "description": "<p>Sistema automatizado que genera <strong>reportes financieros</strong> diarios e intra-diarios sobre el mercado argentino, a partir del análisis de posts en <strong>X (ex Twitter)</strong>. Utiliza <strong>IA generativa</strong> para resumir y contextualizar los tweets más relevantes, combinando scraping, filtrado y redacción automática. Los reportes se almacenan como archivos Markdown y se publican en un sitio web estático tipo <strong>CMS Git-based</strong>, con CI/CD desde GitHub. El scraper corre como un microservicio independiente, mientras que el flujo general está orquestado por <strong>N8N</strong>, incluye control de feriados y horarios del mercado, y es 100% automatizado.</p>",
              "tags": ["N8N", "Playwright", "Python", "CI/CD", "Docker", "Openai", "Astro"],
              "live": ["https://fintwit.inaqui.me", "https://cdn.apps.inaqui.me/portfolio/n8n-demo.png"],
              "image": "fintwit-argy-demo.webp"
            },
            {
                "name": "REIS",
                "description": "<p>Plataforma web tipo <strong>classroom</strong> diseñada para apoyar la enseñanza mediante <strong>Recorridos de Estudio e Investigacion(REIs)</strong>, organizando el aprendizaje en torno a preguntas y respuestas. Permite colaboración en tiempo real, seguimiento del progreso académico y análisis automático de datos educativos mediante técnicas de <strong>IA</strong>.</p><p><strong>Usuario: </strong>usuario@demo.com <strong>Contraseña: </strong>password</p>",
                "tags": ["Astro.js", "Preact", "HTMx", "TypeScript", "Bun.sh", "SQLite", "Redis", "Python", "Sentece Transformers", "Docker"],
                "live": "https://rei.apps.inaqui.me",
                "image": "reis-demo.webp"
            },
            {
                "name": "Infraestructura personal en la nube",
                "description": "<p>Configuración y mantenimiento de una <strong>infraestructura autoalojada en la nube</strong> sobre un VPS (DigitalOcean), utilizada para el despliegue y monitoreo de múltiples apps personales mediante <strong>Coolify</strong>. Incluye una <strong>VPN privada (WireGuard)</strong> para comunicación segura entre dispositivos, un <strong>servidor S3 self-hosted (MinIO)</strong> con control de accesos y expiración de enlaces, y una instancia de <strong>N8N</strong> para orquestar flujos de trabajo complejos. También se implementó configuración avanzada de firewall, DNS, dominios personalizados, proxy inverso y certificados SSL.</p>",
                "tags": ["Linux", "Digital Ocean", "Coolify", "MinIO", "WireGuard", "Docker", "Traefik", "DNS", "SSL", "DevOps", "N8N"],
                "image": "infra-demo.webp"
            },
            {
                "name": "Estim Store",
                "description": "<p>Aplicación full-stack construida con el <strong>stack MEAN</strong> que presenta un extenso catálogo de más de 27,000 videojuegos basado en un dataset de juegos de Steam. La plataforma permite a los usuarios explorar, buscar y filtrar títulos con información detallada sobre cada juego, ofreciendo una experiencia interactiva e intuitiva.</p>",
                "tags": ["AngularJS", "Node.js", "Express", "MongoDB", "Mongoose"],
                "github": "https://www.github.com/thesportydar/estim/tree/dev",
                "live": "https://estim.onrender.com",
                "image": "estim-demo.webp"
            },
            {
                "name": "API REST",
                "description": "<p><strong>API REST</strong> diseñada para gestionar el flujo completo de un sistema de compras en línea. Permite a los usuarios registrarse, autenticarse y explorar productos, mientras ofrece funcionalidades para agregar y actualizar artículos en un carrito de compras y procesar pedidos. La API sigue principios de <strong>arquitectura limpia</strong>, con una clara separación de responsabilidades y documentación detallada, lo que facilita su integración con aplicaciones front-end o móviles.</p>",
                "tags": ["Spring Boot", "Spring Security", "Spring Data JPA", "JJWT", "PostgreSQL", "Swagger"],
                "github": "https://www.github.com/thesportydar/shopping-cart",
                "live": "https://thesportydar.github.io/shopping-cart-api-docs",
                "image": "api-rest-demo.webp"
            },
            {
                "name": "Acortador de URLs",
                "description": "<p>Aplicación web para acortar URLs de forma sencilla y rápida. Permite a los usuarios acortar enlaces largos y personalizar la URL corta. La aplicación fue desarrollada con <strong>Spring Boot</strong> y <strong>PostgreSQL</strong> en el backend, y <strong>Astro</strong> y <strong>Preact</strong> en el frontend. Ademas cuenta con un <strong>sistema de caching</strong> a traves de <strong>Redis</strong> para mejorar la velocidad de acceso a las URLs acortadas.</p>",
                "tags": ["Spring Boot", "PostgreSQL", "Astro", "Preact", "TailwindCSS", "Redis"],
                "github": "https://www.github.com/thesportydar/url-shortener-backend",
                "live": "https://link.inaqui.me/",
                "image": "shortener.webp"
            },
            {
                "name": "Compilador",
                "description": "<p>Proyecto desarrollado como parte de la cursada de Diseño de Compiladores 1 2023. Consiste en un compilador de un lenguaje de programación propio. El compilador fue desarrollado en <strong>Java</strong> utilizando la herramienta <strong>YACC</strong>, y el codigo de salida es ensamblador para la arquitectura <strong>x86 (pentium 32 bits)</strong>.</p>",
                "tags": ["Java", "YACC", "Assembly"],
                "github": "https://www.github.com/thesportydar/compilador",
                "image": "compiler-demo.webp"
            },
            {
                "name": "Corrector Ortográfico",
                "description": "<p>Este proyecto se creo en el marco del trabajo final del taller de programacion en Java. Consiste en la implementación de un <strong>corrector ortográfico en Java</strong>, que abarca diversas funcionalidades para el procesamiento de texto, la detección de errores y la sugerencia de correcciones. Implementa 4 tipos de correctores: Basado en Diccionario de correciones, basado en permutaciones adyacentes, y dos de <strong>Levenshtein</strong>, uno basado en map y otro en <strong>trie</strong>.</p>",
                "tags": ["Java", "Trie", "Levenshtein", "Junit", "Benchmark", "JMH"],
                "github": "https://www.github.com/thesportydar/spellchecker",
                "image": "spellchecker.webp"
            },
            {
                "name": "MRI Anomaly Detector",
                "description": "<p>Detector de tumores cerebrales en imagenes de resonancias mageneticas a partir de <strong>autoencoders</strong> usando <strong>aprendizaje no supervisado</strong>. Se utilizo una arquitectura sencialla para enfocarse en el entendimiento del proceso de detección de anomalias a partir de autoencoders. No se usaron bloques residuales ni técnicas de regularización como dropout o batch normalization.</p>",
                "tags": ["Python", "TensorFlow", "Keras", "Colab"],
                "live": "https://colab.research.google.com/drive/1m856pNYCyWsdoSDelg4UDoTKufmgVGNL?usp=sharing",
                "image": "autoencoder.webp"
            }
        ]
    },
    "en": {
        "title": "Projects",
        "projects": [
            {
                "name": "Fintwit Argy Bot",
                "description": "<p>Automated system that generates daily and intra-day <strong>financial reports</strong> on the Argentine market, by analyzing posts on <strong>X (formerly Twitter)</strong>. It uses <strong>generative AI</strong> to summarize and contextualize the most relevant tweets, combining scraping, filtering, and automated writing. Reports are stored as Markdown files and published on a static <strong>Git-based CMS</strong> with CI/CD via GitHub. The scraper runs as an independent microservice, while the entire flow is orchestrated by <strong>N8N</strong>, with built-in holiday and market schedule checks. The system is fully automated.</p>",
                "tags": ["N8N", "Playwright", "Python", "CI/CD", "Docker", "Openai", "Astro"],
                "live": ["https://fintwit.inaqui.me", "https://cdn.apps.inaqui.me/portfolio/n8n-demo.png"],
                "image": "fintwit-argy-demo.webp"
            },
            {
                "name": "REIS",
                "description": "<p><strong>Classroom-type</strong> web platform designed to support teaching through <strong>Study and Research Paths (SRP)</strong>, organizing learning around questions and answers.  Allows real-time collaboration, tracking of academic progress, and automatic analysis of educational data using <strong>AI</strong> techniques.</p><p><strong>User: </strong>usuario@demo.com <strong>Password: </strong>password</p>",
                "tags": ["Astro.js", "Preact", "HTMx", "TypeScript", "Bun.sh", "SQLite", "Redis", "Python", "Sentece Transformers", "Docker"],
                "live": "https://rei.apps.inaqui.me",
                "image": "reis-demo.webp"
            },
            {
                "name": "Personal Cloud Infrastructure",
                "description": "<p>Setup and maintenance of a <strong>self-hosted cloud infrastructure</strong> on a VPS (DigitalOcean), used to deploy and monitor multiple personal apps with <strong>Coolify</strong>. Includes a <strong>private VPN (WireGuard)</strong> for secure device communication, a <strong>self-hosted S3 server (MinIO)</strong> with access control and expiring links, and a <strong>N8N</strong> instance to orchestrate complex workflows. Also features advanced configuration of firewall, DNS, custom domains, reverse proxy, and SSL certificates.</p>",
                "tags": ["Linux", "Digital Ocean", "Coolify", "MinIO", "WireGuard", "Docker", "Traefik", "DNS", "SSL", "DevOps", "N8N"],
                "image": "infra-demo.webp"
            },
            {
                "name": "Estim Store",
                "description": "<p>Full-stack application built with the <strong>MEAN stack</strong> that features an extensive catalog of over 27,000 video games based on a dataset of Steam games. The platform allows users to explore, search and filter titles with detailed information about each game, offering an interactive and intuitive experience.</p>",
                "tags": ["AngularJS", "Node.js", "Express", "MongoDB", "Mongoose"],
                "github": "https://www.github.com/thesportydar/estim/tree/dev",
                "live": "https://estim.onrender.com",
                "image": "estim-demo.webp"
            },
            {
                "name": "API REST",
                "description": "<p><strong>REST API</strong> designed to manage the complete flow of an online shopping system. Allows users to register, authenticate and explore products, while offering functionalities to add and update items in a shopping cart and process orders. The API follows <strong>clean architecture</strong> principles, with a clear separation of responsibilities and detailed documentation, making it easy to integrate with front-end or mobile applications.</p>",
                "tags": ["Spring Boot", "Spring Security", "Spring Data JPA", "JJWT", "PostgreSQL", "Swagger"],
                "github": "https://www.github.com/thesportydar/shopping-cart",
                "live": "https://thesportydar.github.io/shopping-cart-api-docs",
                "image": "api-rest-demo.webp"
            },
            {
                "name": "URL Shortener",
                "description": "<p>Web application to shorten URLs quickly and easily. Allows users to shorten long links and customize the short URL. The application was developed with <strong>Spring Boot</strong> and <strong>PostgreSQL</strong> in the backend, and <strong>Astro</strong> and <strong>Preact</strong> in the frontend. It also has a <strong>caching system</strong> through <strong>Redis</strong> to improve the speed of access to shortened URLs.</p>",
                "tags": ["Spring Boot", "PostgreSQL", "Astro", "Preact", "TailwindCSS", "Redis"],
                "github": "https://www.github.com/thesportydar/url-shortener-backend",
                "live": "https://link.inaqui.me/",
                "image": "shortener.webp"
            },
            {
                "name": "Compiler",
                "description": "<p>Project developed as part of the Compiler Design 1 2023 course. It consists of a compiler for a custom programming language. The compiler was developed in <strong>Java</strong> using the <strong>YACC</strong> tool, and the output code is assembler for the <strong>x86 architecture (pentium 32 bits)</strong>.</p>",
                "tags": ["Java", "YACC", "Assembly"],
                "github": "https://www.github.com/thesportydar/compilador",
                "image": "compiler-demo.webp"
            },
            {
                "name": "Spell Checker",
                "description": "<p>This project was created as part of the final work of the Java programming workshop. It consists of the implementation of a <strong>Java spell checker</strong>, which covers various functionalities for text processing, error detection and suggestions of corrections. Implements 4 types of correctors: Based on dictionary of corrections, based on adjacent permutations, and two of <strong>Levenshtein</strong>, one based on map and another on <strong>trie</strong>.</p>",
                "tags": ["Java", "Trie", "Levenshtein", "Junit", "Benchmark", "JMH"],
                "github": "https://www.github.com/thesportydar/spellchecker",
                "image": "spellchecker.webp"
            },
            {
                "name": "MRI Anomaly Detector",
                "description": "<p>Brain tumor detector in magnetic resonance images using <strong>autoencoders</strong> with <strong>unsupervised learning</strong>. A simple architecture was used to focus on understanding the anomaly detection process from autoencoders. No residual blocks or regularization techniques such as dropout or batch normalization were used.</p>",
                "tags": ["Python", "TensorFlow", "Keras", "Colab"],
                "live": "https://colab.research.google.com/drive/1m856pNYCyWsdoSDelg4UDoTKufmgVGNL?usp=sharing",
                "image": "autoencoder.webp"
            }
        ]
    }
}
