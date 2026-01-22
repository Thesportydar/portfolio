export const projectsTranslations = {
    "es": {
        "title": "Proyectos",
        "projects": [
            {
                "name": "wire-for-buckets",
                "description": "<p><strong>Solución serverless para transferencia efímera y segura de archivos sobre AWS.</strong> Incluye un CLI para generar enlaces temporales de carga y descarga con el uso de <strong>S3 Pre-Signed URLs</strong>, encapsulados en interfaces HTML desechables, sin backend persistente. La infraestructura está definida íntegramente con <strong>Terraform (IaC)</strong>, utilizando estado remoto y ejecución mediante IAM AssumeRole en un entorno <strong>multi-account</strong>, donde la <strong>Hosted Zone de Route53</strong>, el backend de Terraform y la <strong>validación de certificados ACM</strong> residen en la cuenta de management (<strong>AWS Organization</strong>). La seguridad perimetral se garantiza mediante <strong>CloudFront</strong> con <strong>Origin Access Control (OAC)</strong>, manteniendo los buckets estrictamente privados con terminación TLS/SSL.</p>",
                "tags": ["Terraform", "AWS", "S3", "CloudFront", "IAM", "Route53", "ACM"],
                "github": "https://github.com/thesportydar/wire-for-buckets",
                "image": "wire-for-buckets.webp"
            },
            {
                "name": "Fintwit Argy Bot",
                "description": "<p>Sistema automatizado que genera <strong>reportes financieros</strong> diarios e intra-diarios sobre el mercado argentino, a partir del análisis de posts en <strong>X (ex Twitter)</strong>. Utiliza <strong>IA generativa</strong> para resumir y contextualizar los tweets más relevantes, combinando scraping, filtrado y redacción automática. Los reportes se almacenan como archivos Markdown y se publican en un sitio web estático tipo <strong>CMS Git-based</strong>, con CI/CD desde GitHub. El scraper corre como un microservicio independiente, mientras que el flujo general está orquestado por <strong>N8N</strong>, incluye control de feriados y horarios del mercado, y es 100% automatizado.</p>",
                "tags": ["N8N", "Playwright", "Python", "CI/CD", "Docker", "Openai", "Astro"],
                "live": ["https://fintwit.com.ar", "/public/n8n-demo.png"],
                "image": "fintwit-argy-demo.webp"
            },
            {
                "name": "REIS",
                "description": "<p>Plataforma web tipo <strong>classroom</strong> diseñada para apoyar la enseñanza mediante <strong>Recorridos de Estudio e Investigacion (REIs)</strong>, organizando el aprendizaje en torno a preguntas y respuestas. Permite colaboración en tiempo real, seguimiento del progreso académico y análisis automático de datos educativos mediante técnicas de <strong>IA</strong>. Actualmente es utilizada por docentes y estudiantes en contextos reales de aula, y su desarrollo dio lugar a una publicación científica en el marco de una conferencia internacional de didáctica.</p><p><strong>Usuario: </strong>usuario@demo.com <strong>Contraseña: </strong>password</p>",
                "tags": ["Astro.js", "Preact", "HTMx", "TypeScript", "Bun.sh", "SQLite", "Redis", "Python", "Sentece Transformers", "Docker"],
                "live": "https://reis.apps.isistan.unicen.edu.ar",
                "image": "reis-demo.webp"
            },
            {
                "name": "Infraestructura personal en la nube",
                "description": "<p>Configuración y mantenimiento de una <strong>infraestructura autoalojada en la nube</strong> sobre un VPS (DigitalOcean), utilizada para el despliegue y monitoreo de múltiples apps personales mediante <strong>Coolify</strong>. Incluye una <strong>VPN privada (WireGuard)</strong> para comunicación segura entre dispositivos, un <strong>servidor S3 self-hosted (MinIO)</strong> con control de accesos y expiración de enlaces, y una instancia de <strong>N8N</strong> para orquestar flujos de trabajo complejos. También se implementó configuración avanzada de firewall, DNS, dominios personalizados, proxy inverso y certificados SSL.</p>",
                "tags": ["Linux", "Digital Ocean", "Coolify", "MinIO", "WireGuard", "Docker", "Traefik", "DNS", "SSL", "DevOps", "N8N"],
                "image": "infra-demo.webp"
            },
            {
                "name": "Compilador",
                "description": "<p>Proyecto desarrollado como parte de la cursada de Diseño de Compiladores 1 2023. Consiste en un compilador de un lenguaje de programación propio. El compilador fue desarrollado en <strong>Java</strong> utilizando la herramienta <strong>YACC</strong>, y el codigo de salida es ensamblador para la arquitectura <strong>x86 (pentium 32 bits)</strong>.</p>",
                "tags": ["Java", "YACC", "Assembly"],
                "github": "https://www.github.com/thesportydar/compilador",
                "image": "compiler-demo.webp"
            }
        ]
    },
    "en": {
        "title": "Projects",
        "projects": [
            {
                "name": "wire-for-buckets",
                "description": "<p><strong>Serverless solution for ephemeral and secure file transfer on AWS.</strong> It includes a CLI to generate temporary upload and download links using <strong>S3 Pre-Signed URLs</strong>, wrapped in disposable HTML interfaces, with no persistent backend. The infrastructure is fully defined using <strong>Terraform (IaC)</strong>, leveraging remote state and execution via IAM AssumeRole in a <strong>multi-account</strong> environment, where the <strong>Route53 Hosted Zone</strong>, the Terraform backend, and <strong>ACM certificate validation</strong> reside in the management account (<strong>AWS Organization</strong>). Perimeter security is ensured through <strong>CloudFront</strong> with <strong>Origin Access Control (OAC)</strong>, keeping the buckets strictly private with TLS/SSL termination.</p>",
                "tags": ["Terraform", "AWS", "S3", "CloudFront", "IAM", "Route53", "ACM"],
                "github": "https://github.com/thesportydar/wire-for-buckets",
                "image": "wire-for-buckets.webp"
            },
            {
                "name": "Fintwit Argy Bot",
                "description": "<p>Automated system that generates daily and intra-day <strong>financial reports</strong> on the Argentine market, by analyzing posts on <strong>X (formerly Twitter)</strong>. It uses <strong>generative AI</strong> to summarize and contextualize the most relevant tweets, combining scraping, filtering, and automated writing. Reports are stored as Markdown files and published on a static <strong>Git-based CMS</strong> with CI/CD via GitHub. The scraper runs as an independent microservice, while the entire flow is orchestrated by <strong>N8N</strong>, with built-in holiday and market schedule checks. The system is fully automated.</p>",
                "tags": ["N8N", "Playwright", "Python", "CI/CD", "Docker", "Openai", "Astro"],
                "live": ["https://fintwit.com.ar", "/public/n8n-demo.png"],
                "image": "fintwit-argy-demo.webp"
            },
            {
                "name": "REIS",
                "description": "<p>Web-based <strong>classroom-style</strong> platform designed to support teaching through <strong>Study and Research Paths (SRPs)</strong>, organizing learning around questions and answers. It enables real-time collaboration, academic progress tracking, and automatic analysis of educational data using <strong>AI</strong> techniques. It is currently used by teachers and students in real classroom contexts, and its development led to a scientific publication presented at an international conference on didactics.</p><p><strong>User: </strong>usuario@demo.com <strong>Password: </strong>password</p>",
                "tags": ["Astro.js", "Preact", "HTMx", "TypeScript", "Bun.sh", "SQLite", "Redis", "Python", "Sentece Transformers", "Docker"],
                "live": "https://reis.apps.isistan.unicen.edu.ar",
                "image": "reis-demo.webp"
            },
            {
                "name": "Personal Cloud Infrastructure",
                "description": "<p>Setup and maintenance of a <strong>self-hosted cloud infrastructure</strong> on a VPS (DigitalOcean), used to deploy and monitor multiple personal apps with <strong>Coolify</strong>. Includes a <strong>private VPN (WireGuard)</strong> for secure device communication, a <strong>self-hosted S3 server (MinIO)</strong> with access control and expiring links, and a <strong>N8N</strong> instance to orchestrate complex workflows. Also features advanced configuration of firewall, DNS, custom domains, reverse proxy, and SSL certificates.</p>",
                "tags": ["Linux", "Digital Ocean", "Coolify", "MinIO", "WireGuard", "Docker", "Traefik", "DNS", "SSL", "DevOps", "N8N"],
                "image": "infra-demo.webp"
            },
            {
                "name": "Compiler",
                "description": "<p>Project developed as part of the Compiler Design 1 2023 course. It consists of a compiler for a custom programming language. The compiler was developed in <strong>Java</strong> using the <strong>YACC</strong> tool, and the output code is assembler for the <strong>x86 architecture (pentium 32 bits)</strong>.</p>",
                "tags": ["Java", "YACC", "Assembly"],
                "github": "https://www.github.com/thesportydar/compilador",
                "image": "compiler-demo.webp"
            }
        ]
    }
}
