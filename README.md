<div align="center">

  <h1>The Editly Foundry Co.</h1>
  <p><strong>Enterprise Post-Production Infrastructure & High-Performance Web3D Creative Systems</strong></p>
  <p>Architected & Directed by <a href="https://github.com/walid-abdullah">Walid Abdullah</a> (Founder & Executive Producer)</p>

  <p>
    <a href="https://editlyfoundry.vercel.app"><img src="https://img.shields.io/badge/Production_Live-editlyfoundry.vercel.app-2563EB?style=flat-square" alt="Live URL" /></a>
    <img src="https://img.shields.io/badge/Architecture-Next.js_15_App_Router-0F172A?style=flat-square" alt="Next.js 15" />
    <img src="https://img.shields.io/badge/Frontend-React_19_%E2%80%A2_TailwindCSS-0284C7?style=flat-square" alt="React 19" />
    <img src="https://img.shields.io/badge/Graphics-Three.js_%E2%80%A2_WebGL_3D-1E293B?style=flat-square" alt="Three.js" />
    <img src="https://img.shields.io/badge/Automation-Meta_WhatsApp_Cloud_API-25D366?style=flat-square" alt="Meta API" />
  </p>

</div>

---

## 1. Executive Summary & Problem Domain

### 1.1 Business Context
**The Editly Foundry Co.** is a multi-national video post-production infrastructure firm operating across the **United States, Dubai, and Dhaka**. The platform bridges the gap between high-velocity creative asset generation and programmatic client conversion. 

### 1.2 The Industry Bottleneck
Traditional creative agencies suffer from three systemic failures:
- **Opaque Pricing & Friction-Heavy Onboarding:** Protracted email chains and manual quoting delay client conversion cycles.
- **Fragmented Delivery Pipelines:** Disconnected project handoffs cause turnaround delays, exceeding critical 48-hour content shelf-life windows.
- **Unscalable Lead Routing:** Inability to instantly verify and triage inbound enterprise leads into automated WhatsApp CRM dispatch workflows.

### 1.3 The Technical Solution
This repository contains the complete enterprise codebase for **The Editly Foundry Co.** platform — a unified web application engineered with **Next.js 15 App Router**, **React 19**, **Three.js WebGL**, and direct **Meta Cloud API (Graph API v20.0)** integration to automate client acquisition, real-time quote generation, and omnichannel notification pipelines.

---

## 2. Software Architecture & System Design

```
+---------------------------------------------------------------------------------------+
|                                    CLIENT LAYER                                       |
|  - React 19 Server & Client Components (SSR / CSR Hybrid)                              |
|  - Three.js Interactive 3D Canvas / WebGL Particle Systems                            |
|  - TailwindCSS Design System with Custom Glassmorphic Responsive Layouts              |
+-------------------------------------------+-------------------------------------------+
                                            |
                                            v
+---------------------------------------------------------------------------------------+
|                                 APPLICATION LAYER                                     |
|  - Next.js 15 App Router (Dynamic Route Handlers & Server Actions)                    |
|  - Edge Middleware (Header Inspection, Security Headers & Dynamic Rewrites)           |
|  - Interactive Quote Estimation Engine & Pricing Matrix Compute                       |
+---------------------+---------------------+---------------------+---------------------+
                      |                     |                     |
                      v                     v                     v
+---------------------------+ +---------------------------+ +---------------------------+
|    NOTIFICATION ENGINE    | |     METADATA & SEO        | |     MEDIA PIPELINE        |
|  - Meta WhatsApp API v20  | |  - XML Sitemap Engine     | |  - Frame.io Webhooks      |
|  - Nodemailer SMTP TLS    | |  - JSON-LD Structured Data| |  - Cloud Asset CDN        |
|  - Automated Lead Routing | |  - OpenGraph / Twitter V2 | |  - Sub-second LCP Cache   |
+---------------------------+ +---------------------------+ +---------------------------+
```

---

## 3. Comprehensive SDLC & Engineering Procedures

```
  Phase 1: Requirements & Domain Modeling
    ├── Define SLA Requirements (48-Hour Production Pod Model)
    ├── Establish WhatsApp Cloud API Direct Dispatch Protocols
    └── Map Dynamic Routes (/services/*, /pricing, /work, /blogs/*)
         │
         ▼
  Phase 2: Architectural Design & Prototyping
    ├── Three.js WebGL Scene Optimization for Mobile GPU Constraints
    ├── Glassmorphic Design Token Definitions (Tailwind System)
    └── Define Strict JSON Schema for Organization, FAQ & Service Rich Snippets
         │
         ▼
  Phase 3: Implementation & Core Engine Development
    ├── Next.js 15 App Router Architecture with Server Component Default
    ├── Interactive Quote Builder with Dynamic Cost Breakdown Logic
    ├── API Route Security (`/api/contact`) with Parameter Sanitization
    └── Meta Graph API Integration with Fallback Error Handlers
         │
         ▼
  Phase 4: Verification, Quality Assurance & Security
    ├── Google Search Console Ownership Verification & 17-Slug Index Audit
    ├── Mobile Viewport Flexbox & Matrix Collision Elimination
    ├── Performance Profiling (Largest Contentful Paint < 0.8s)
    └── SSL/TLS Enforced Transport with HSTS Headers
         │
         ▼
  Phase 5: Production Deployment & Observability
    ├── Vercel Global Edge Network Deployment
    ├── Dual Remote Syncing (Primary Repo + Production Backup)
    └── Real-time Meta WhatsApp Webhook & Lead Dispatch Monitoring
```

---

## 4. Technical Specifications & Stack Matrix

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js App Router | 15.x | Core Web Framework, Hybrid Rendering & Server Actions |
| **UI Library** | React | 19.x | Component Architecture & Optimistic State Transitions |
| **Styling** | TailwindCSS | 3.4.x | Utility-First Responsive Styling & Glassmorphic Tokens |
| **3D Engine** | Three.js / WebGL | Latest | High-Performance Interactive Viewport Graphics |
| **Icons** | Lucide React | Latest | Pixel-Perfect Minimalist Iconography |
| **Lead Engine** | Meta Graph API | v20.0 | WhatsApp Cloud API Automated Client Confirmation |
| **Mail Dispatch** | Nodemailer | 6.x | Authenticated SMTP Notification System |
| **Deployment** | Vercel Edge | Production | Global CDN Edge Distribution & Continuous Integration |

---

## 5. Domain Modules & Core Service Engines

### 5.1 Service Subsystems (`/services/*`)
- **Reels & Shorts Engine (`/services/reels-shorts`):** Engineered for retention-first short-form editing, 3-second hook mechanics, and cross-platform formatting.
- **Podcast Repurposing Suite (`/services/podcasts`):** Multi-cam studio audio cleanup, auto-caption extraction, and 15+ micro-asset batch processing.
- **Talking Head & YouTube System (`/services/talking-head`):** High-authority cinematic long-form post-production with 10-bit Rec.709 color management.
- **UGC & Performance Ads (`/services/ugc-ads`):** Direct-response conversion ad variants designed for paid social media ROAS optimization.
- **SaaS 3D Motion Demos (`/services/saas-motion`):** Pixel-perfect UI walkthroughs, 3D viewport product reveals, and kinetic typography.

### 5.2 Dynamic Lead Funnel & Interactive Quoting
- **Stateful Quote Engine:** Computes production tier, delivery turnaround SLA, and editor pod allocation in real-time.
- **Dual-Dispatch Verification:** Instantaneous WhatsApp message push to the client with founder-level SMTP notification dispatch.

---

## 6. Directory Structure

```
The-Editly-Foundry-Co/
├── public/                     # Static Assets, Verification HTML & Media
│   ├── google397bc2b4bbbb7f90.html # Google Search Console Ownership Token
│   └── calendly-card-final.jpg # High-Resolution Scheduling Preview
├── src/
│   ├── app/                    # Next.js 15 App Router Architecture
│   │   ├── api/                # Edge & Node Serverless API Endpoints
│   │   │   └── contact/        # Meta WhatsApp & SMTP Lead Dispatch Route
│   │   ├── blogs/              # Dynamic Strategic Playbooks & Articles
│   │   ├── services/           # 5 Specialized Service Domain Landing Pages
│   │   ├── book-a-call/        # Direct Client Consultation Route
│   │   ├── contact/            # Enterprise Project Brief Submission Route
│   │   ├── pricing/            # Dedicated Pricing & Retainer Breakdowns
│   │   ├── work/               # Production Showcase & Case Studies
│   │   ├── globals.css         # Global Styles & Responsive 2x2 Grid Rules
│   │   ├── layout.js           # Root Layout with JSON-LD Schema & Head Meta
│   │   ├── page.js             # Homepage Orchestration Architecture
│   │   └── sitemap.js          # Dynamic XML Sitemap Generator (17 Routes)
│   ├── components/             # Modular React 19 UI Components
│   └── lib/                    # Shared Libraries, Utilities & SEO Data
├── .env.example                # Sample Environment Configuration Template
├── next.config.mjs             # Next.js Engine Configuration & Headers
├── package.json                # Dependency Declarations & Build Scripts
└── tailwind.config.mjs         # Tailwind Design System & Color Configurations
```

---

## 7. Local Engineering & Development Setup

### 7.1 Prerequisites
- **Node.js:** v18.17.0 or later (v20+ recommended)
- **Package Manager:** npm (v9+) or pnpm (v8+)
- **Git:** v2.30+

### 7.2 Installation & Build Pipeline

```bash
# 1. Clone the production repository
git clone https://github.com/walid-abdullah/The-Editly-Foundry-Co.-Agency-Site-.git

# 2. Navigate to project root
cd The-Editly-Foundry-Co.-Agency-Site-

# 3. Install dependencies
npm install

# 4. Initialize environment variables
cp .env.example .env.local

# 5. Launch local development server with Turbopack
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### 7.3 Production Build Verification

```bash
# Execute static optimization & bundle compilation
npm run build

# Start production server locally
npm run start
```

---

## 8. Environment Variables Specification

Ensure all required production secrets are configured in `.env.local` or within your Vercel Project Settings:

```env
# Meta WhatsApp Cloud API (Graph API v20.0)
WHATSAPP_PHONE_NUMBER_ID=your_meta_phone_number_id
WHATSAPP_ACCESS_TOKEN=your_meta_system_user_token

# Authenticated SMTP Gateway (Google Workspace / Gmail TLS)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=theeditlyfoundry@gmail.com
SMTP_PASS=your_app_specific_password

# Public Canonical Host
NEXT_PUBLIC_SITE_URL=https://editlyfoundry.vercel.app
```

---

## 9. Security, SEO & Performance Auditing

- **Google Search Console:** Verified and indexed with 17 dynamic slugs with XML sitemap compliance.
- **Security Headers:** Strict Content Security Policies (CSP), HSTS, `X-Frame-Options: SAMEORIGIN`, and `X-Content-Type-Options: nosniff`.
- **Core Web Vitals:** Sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS) through SSR streaming.

---

## 10. License & Intellectual Property

```
Copyright (c) 2026 The Editly Foundry Co. & Md. Abdullah Walid.
All rights reserved. Proprietary software and visual pipeline architecture.
Unauthorized reproduction, reverse engineering, or redistribution is strictly prohibited.
```

<div align="center">
  <sub>Architected with Precision Systems by <strong>Walid Abdullah</strong> • Founder & Executive Producer</sub>
</div>
