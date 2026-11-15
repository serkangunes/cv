---
title: Serkan Gunes
description: Principal software engineer building production APIs, cloud platforms and financial products in TypeScript, Kotlin and Go.
layout: ../layouts/Minimalist.astro
pdfLink: resume.pdf
headline: Principal software engineer
specialism: Backend systems, cloud platforms and product delivery
location: Milton Keynes, UK
workAuthorisation: No UK sponsorship required
email: gunesserkan@gmail.com
linkedin: https://www.linkedin.com/in/serkangunes/
website: https://www.techdesigner.co.uk/
coreSkills:
  - TypeScript, Kotlin, Node.js
  - Go, gRPC, PostgreSQL
  - AWS, Google Cloud, Kubernetes
  - Terraform, CDKTF, CI/CD
  - APIs, Kafka and event-driven systems
  - Observability and on-call support
  - React and Next.js
  - Payments and KYC integrations
positions:
  - companyName: CMC Markets
    companyUrl: https://www.cmcmarkets.com/en-gb/
    companyContext: Global trading and investing business. Reported 55,081 active trading clients in FY2026.
    positionTitle: Principal Software Engineer
    previousTitle: Previously Senior Systems Architect, same role
    startDate: Mar 2020
    endDate: Present
    description:
      summary: Design and build trading APIs and AWS infrastructure, guide technical decisions within my team and support production services.
      highlights:
        - Designed CMC Markets' first micro-frontend architecture using Module Federation as part of Kipling, its AWS lighthouse project.
        - Designed latency-aware cloud patterns for CMC's transition from on-premises-only infrastructure to AWS.
        - Led the design and implementation of ConnectAPI, a REST API exposing approximately 90% of CMC Markets' trading functionality to client applications.
        - Migrated the Orders service from serverless to Node.js containers, reducing typical production response times from 500-600 ms to below 80 ms. Proposed and helped design a similar Product service migration, cutting response times from seconds to hundreds of milliseconds.
        - Integrated a Kafka producer for account value updates, reducing update latency from seconds to 150 ms.
        - Helped create CAML, an AWS framework adopted by four to five teams. One configuration entry generates projects, CI/CD pipelines, linked resources, API conventions and alerts.
        - Built the TradingView integration and Kotlin pricing, product and charting APIs, plus AWS Lambda services for CMC Invest. Led Dynamic Trading's micro-frontend integration.
        - Built optimistic order updates for TradingView's positions window, helping reduce one-star reviews and raise CMC Markets' broker rating from about 4.0 to 4.3.
        - Built Orders and MCP observability with automatic tracing and request-duration metrics, plus shared error-handling, retry and SQS frameworks.
        - Used Effect in Orders and Securities, and built a containerised MCP server to make CMC APIs available to applications using large language models.
      skills:
        - TypeScript
        - Kotlin
        - Node.js
        - AWS Lambda
        - ECS/Fargate
        - Terraform/CDKTF
        - Effect
        - Kafka
  - companyName: CardAlpha Ltd
    companyUrl: https://cardalpha.com/
    positionTitle: CTO and co-founder
    startDate: Aug 2018
    endDate: Mar 2025
    description:
      summary: Co-founded CardAlpha alongside my CMC Markets role. As sole engineer, built and supported its payments and e-commerce platform, which reached approximately 200-300 users before the business closed.
      highlights:
        - Built Go services for payment processing, current accounts, onboarding, KYC, cash advances and reporting, with gRPC APIs, PostgreSQL storage and Google Pub/Sub messaging.
        - Integrated Stripe, GoCardless, Bambora, Onfido, Experian and Companies House. Built customer apps, back-office tools and payment-terminal integrations.
      skills:
        - Go
        - gRPC
        - PostgreSQL
        - Google Cloud
        - Kubernetes/GKE
        - React
        - Ionic/Capacitor
        - Swift
  - companyName: CMC Markets
    companyUrl: https://www.cmcmarkets.com/en-gb/
    positionTitle: Senior Software Consultant
    startDate: Oct 2018
    endDate: Mar 2020
    description:
      summary: Contract engineer on NextGen web and mobile trading applications. Built a progressive web app and shared React/TypeScript components, with Jest tests.
      highlights: []
      skills: []
  - companyName: CMC Markets
    companyUrl: https://www.cmcmarkets.com/en-gb/
    positionTitle: Technical Team Leader
    startDate: Apr 2013
    endDate: Oct 2018
    description:
      summary: Led 12 senior developers delivering NextGen trading applications in HTML5, JavaScript and Flex.
      highlights:
        - Led planning, development, code reviews and releases. Set frontend engineering standards and supported engineers working with React and Redux.
        - Worked with product and architecture teams on technical design and delivery.
      skills: []
earlierExperience:
  - companyName: CMC Markets
    dates: Jan 2007 - Apr 2013
    title: Java Developer, progressing to Senior Java / Flex Developer
    summary: Built back-office and trading systems in Java, Spring, Flex and ActionScript. Introduced integration tests and resolved server-side performance issues.
  - companyName: Empower Interactive
    dates: Oct 2004 - Dec 2006
    title: Senior Software Engineer / Technical Team Leader
    summary: Led the design and delivery of Java SMS and MMS gateways for telecoms clients.
  - companyName: Innova
    dates: 2003 - 2005
    title: Software Specialist
    summary: Developed client software using Java, C++, C#, ASP, JSP and relational databases.
projects:
  - name: Velora
    summary: Built a team retrospective tool in Next.js and Convex, with shared boards, analytics and Slack, Jira and Linear integrations.
  - name: TurboPR
    summary: Built a macOS pull request review app with Tauri, Rust and SQLite, including AI-assisted reviews and GitHub CLI authentication.
  - name: Paneshot
    url: https://paneshot.com/
    summary: Built a native Swift macOS capture app with annotations and on-device text recognition.
educations:
  - name: Ege University
    title: Bachelor of Computer Engineering
    startDate: 1999
    endDate: 2003
languages:
  - name: English
    level: Native or bilingual proficiency
  - name: Turkish
    level: Native or bilingual proficiency
  - name: Spanish
    level: Limited working proficiency
---
Principal software engineer with 23+ years building trading platforms, financial services and customer applications. I combine system design with hands-on development across web, mobile, backend services and cloud infrastructure. My work spans new products, system modernisation at CMC Markets and engineering team leadership. I diagnose complex problems, make practical technical decisions and take work through delivery and production support.
