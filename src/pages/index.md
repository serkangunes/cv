---
title: Serkan Gunes
description: Senior systems architect with 23+ years of experience designing and building trading and payments systems, cloud infrastructure and APIs.
layout: ../layouts/Minimalist.astro
pdfLink: resume.pdf
headline: Senior systems architect
specialism: Cloud architecture and hands-on engineering
location: Milton Keynes, England, UK
email: gunesserkan@gmail.com
linkedin: https://www.linkedin.com/in/serkangunes/
website: https://www.techdesigner.co.uk/
coreSkills:
  - Systems architecture
  - Technical leadership
  - AWS and Google Cloud
  - Infrastructure as code
  - Event-driven systems
  - Performance optimisation
  - Trading and payments
  - API and integration design
  - Observability and metrics
  - Go, TypeScript and Kotlin
  - React and Svelte
  - Rust, Tauri and Swift
  - Production operations
positions:
  - companyName: CMC Markets
    companyUrl: https://www.cmcmarkets.com/en-gb/
    positionTitle: Senior Systems Architect
    startDate: Mar 2020
    endDate: Present
    description:
      summary: Design trading APIs and AWS infrastructure, help shape architecture decisions within my team, and provide on-call support.
      highlights:
        - Migrated Orders from serverless to Node.js containers, cutting typical end-to-end production response times from 500-600 ms to below 80 ms. Proposed and helped design Product's container migration. After discussing trade-offs, my team adopted it and cut Product's response times from seconds to hundreds of milliseconds.
        - Built an optimistic order-update service for TradingView's positions window. It helped reduce one-star reviews and raise CMC Markets' broker rating from about 4.0 to 4.3.
        - Helped create CAML, used by my team and three to four others. One config.yaml entry replaces manual setup of four or five linked AWS resources. It also generates monorepos and CI/CD pipelines, standardises API/error handling and configures alerts.
        - Created an observability framework for Orders and MCP with automatic tracing and consistently named request-duration metrics. Also built reusable frameworks for error handling, retries and SQS messaging.
        - Used Effect in Orders and Securities, and built a containerised MCP server with Effect to connect CMC APIs to large language model applications.
        - Built the TradingView integration and pricing, product and charting APIs in Kotlin, plus CMC Invest services in TypeScript on Lambda. Led Dynamic Trading integration using micro-frontends.
      skills:
        - AWS
        - CDKTF
        - Terraform
        - TypeScript
        - Effect
        - Kotlin
        - Node.js
        - Go
        - Lambda
        - ECS and Fargate
  - companyName: Independent product work
    companyUrl: https://github.com/serkangunes
    positionTitle: Independent Product Engineer
    startDate: 2024
    endDate: Present
    description:
      summary: Design and build developer tools, team collaboration software and native macOS apps.
      highlights:
        - Built TurboPR, a macOS app for reviewing pull requests, using Tauri and Rust. It supports AI-assisted reviews, authenticates through GitHub CLI and stores data locally in SQLite.
        - Built Velora, a team retrospective tool with shared boards, analytics and Slack, Jira and Linear integrations, using Next.js and Convex.
        - Built Karecik, a macOS capture app with annotations and on-device text recognition. Used Swift and native capture APIs to keep the app's architecture simple and avoid a separate web interface.
      skills:
        - Rust
        - Tauri
        - Swift
        - macOS
        - Next.js
        - React
        - TypeScript
        - Convex
        - SQLite
        - GitHub CLI
        - AI product features
  - companyName: CardAlpha Ltd
    companyUrl: https://cardalpha.com/
    positionTitle: CTO and co-founder
    startDate: Aug 2018
    endDate: Mar 2025
    description:
      summary: Co-founded CardAlpha alongside my role at CMC Markets. As CTO and sole engineer, designed and built its card-processing and e-commerce platform.
      highlights:
        - Owned product design, architecture and development through beta launch, then supported customers using the platform.
        - Built Go services for payment processing, current accounts, onboarding, KYC, cash advances and reporting.
        - Designed APIs using gRPC and Protocol Buffers, with PostgreSQL for storage and Google Pub/Sub for event messaging. Integrated Stripe, GoCardless, Bambora, Onfido, Experian and Companies House.
        - Built mobile and web apps with Ionic, React, TypeScript, Capacitor and Swift. Also developed back-office tools and payment-terminal integrations.
      skills:
        - Go
        - gRPC
        - Protocol Buffers
        - PostgreSQL
        - CockroachDB
        - GORM
        - WebSockets
        - Kubernetes
        - GKE
        - Google Pub/Sub
        - Ionic
        - React
        - Capacitor
        - Swift
  - companyName: CMC Markets
    companyUrl: https://www.cmcmarkets.com/en-gb/
    positionTitle: Senior Software Consultant
    startDate: Oct 2018
    endDate: Mar 2020
    description:
      summary: Built NextGen web and mobile trading applications as a contract engineer.
      highlights:
        - Developed a progressive web app for the NextGen mobile trading platform.
        - Built shared React and TypeScript components and tested them with Jest.
      skills:
        - React
        - Redux
        - TypeScript
        - Progressive Web Apps
        - Styled Components
        - Webpack
        - Jest
  - companyName: CMC Markets
    companyUrl: https://www.cmcmarkets.com/en-gb/
    positionTitle: Technical Team Leader, HTML5/JS/Flex
    startDate: Apr 2013
    endDate: Oct 2018
    description:
      summary: Led a team of 12 senior developers building trading applications in HTML5, JavaScript and Flex.
      highlights:
        - Led planning, development, code reviews and releases for NextGen trading applications.
        - Set frontend development standards and supported engineers using React, Redux and JavaScript.
        - Worked with product and architecture teams on technical design and delivery.
      skills:
        - React
        - Redux
        - JavaScript
        - HTML
        - SASS
        - PostCSS
        - Webpack
        - Jest
        - Jasmine
        - Karma
  - companyName: CMC Markets
    companyUrl: https://www.cmcmarkets.com/en-gb/
    positionTitle: Senior Java Developer / Flex Developer
    startDate: Jun 2010
    endDate: Apr 2013
    description:
      summary: Developed the NextGen trading application's backend in Java and Spring and its frontend in Flex and ActionScript.
      highlights: []
      skills:
        - Java
        - Spring
        - Flex
        - ActionScript
        - RobotLegs
        - Glue
  - companyName: CMC Markets
    companyUrl: https://www.cmcmarkets.com/en-gb/
    positionTitle: Senior Java Developer
    startDate: Nov 2008
    endDate: Jun 2010
    description:
      summary: Improved CMC Markets' back-office systems and reporting workflows.
      highlights:
        - Built end-of-day reports and supported reconciliation workflows for operations teams.
        - Created the system's first end-to-end integration tests and migrated the back-office UI from AWT to JSF.
        - Diagnosed and fixed server-side performance issues using profiling and database analysis.
      skills: []
  - companyName: CMC Markets
    companyUrl: https://www.cmcmarkets.com/en-gb/
    positionTitle: Java Developer
    startDate: Jan 2007
    endDate: Nov 2008
    description:
      summary: Built and maintained back-office services and end-of-day reports to support operations teams with reconciliation and reporting.
      highlights: []
      skills: []
  - companyName: Empower Interactive
    companyUrl: https://www.linkedin.com/company/11176/
    positionTitle: Senior Software Engineer / Technical Team Leader
    startDate: Oct 2004
    endDate: Dec 2006
    description:
      summary: Led a software team through the design, development and release of MMS and SMS gateways built in Java for telecoms clients.
      highlights: []
      skills: []
  - companyName: Innova
    companyUrl: https://www.linkedin.com/company/14586/
    positionTitle: Software Specialist
    startDate: 2003
    endDate: 2005
    description:
      summary: Developed client software using Java, C++, C#, ASP, JSP and relational databases.
      highlights: []
      skills: []
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
I am a systems architect with 23+ years in software engineering and a focus on trading and payments. I lead technical decisions and build cloud services in Go, TypeScript and Kotlin.

At CMC Markets, I cut typical end-to-end production response times for order placement from 500-600 ms to below 80 ms and helped create CAML, an AWS infrastructure framework used by several teams. As CardAlpha's CTO and co-founder, I built and supported its payments platform as sole engineer.
