export interface Project {
  id: string;
  title: string;
  hook: string;
  description: string;
  images: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "whatsapp";
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  socials: SocialLink[];
  projects: Project[];
}

const portfolio: PortfolioData = {
  name: "Abdallah Elamin",
  title: "Full-Stack Developer & Designer",
  bio: "I'm a passionate full-stack developer dedicated to building high-performance, modern web applications. From intuitive user interfaces to scalable backends, I bring ideas to life with clean and efficient code.",
  avatar: "images/ProfilePic.jpg",
  socials: [
    { label: "GitHub", url: "https://github.com/AbdallahElamin", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/abdallah-elamin-8aab53142", icon: "linkedin" },
    { label: "WhatsApp", url: "https://wa.me/message/JSYVDGHYNTSWH1", icon: "whatsapp" },
    { label: "Email", url: "mailto:abdallah.i.elamin@gmail.com", icon: "mail" },
  ],
  projects: [
    {
      id: "yasma-contracting",
      title: "Yasma Contracting Web Platform",
      hook: "A high-performance modernization of a corporate contracting site, optimized for professional clarity and speed.",
      description: `## Overview

This project involved the comprehensive modernization of the digital presence for Yasma for Contracting Co. The goal was to transition a traditional corporate identity into a sleek, modern web application that clearly communicates service offerings and engineering expertise.

## Key Features

- **Service Architecture** — Detailed sections for Civil, Electrical, and Mechanical engineering services with high-visibility call-to-actions.
- **Dynamic Project Gallery** — A responsive showcase for construction milestones and completed contracts.
- **Mobile-First Design** — Fully fluid layout that ensures a professional experience across all devices, from smartphones to desktops.
- **Optimized Navigation** — A streamlined user journey designed to lead potential clients from service exploration to contact as quickly as possible.

## Technical Highlights

The application was built with a focus on performance and maintainability. By modernizing the codebase, the site achieved significantly faster load times and improved SEO rankings.

- **Clean Architecture** — Utilizes a modular structure for easy updates to service descriptions and project images.
- **Performance Optimization** — Implemented image optimization and minified assets to ensure the site runs smoothly even on lower-end hardware and limited bandwidth.
- **Modern UI/UX** — Leverages a professional color palette and typography that reflects the stability and precision of the contracting industry.`,
      images: [
        "images/project001/ProjectPic1.png",
        "images/project001/ProjectPic2.png",
        "images/project001/ProjectPic3.png",
        "images/project001/ProjectPic4.png",
        "images/project001/ProjectPic5.png",
        "images/project001/ProjectPic6.png",
      ],
      techStack: ["React.js", "JavaScript", "HTML", "CSS", "UI/UX Modernization"],
      githubUrl: "https://github.com/AbdallahElamin/yasma-web-app-Stitch",
      demoUrl: "https://abdallahelamin.github.io/yasma-web-app-Stitch/",
    },
    {
      id: "tailorvision",
      title: "TailorVision — Anthropometric Body Measurement Tool",
      hook: "A professional-grade Python pipeline that extracts 16 tailoring-ready body measurements from just two photos, powered by 3D body model fitting and computer vision.",
      description: `## Overview

TailorVision is a tailoring-grade anthropometric tool that reconstructs a client's body shape from a front and side photograph, then outputs 16 precise body measurements in centimetres — complete with per-measurement confidence scores and garment-specific ease allowances. It was built to bring the accuracy of a professional fitting session into an automated, reproducible pipeline.

## Key Features

- **Dual-View Measurement Extraction** — Accepts a front and side image of the client and produces 16 standard tailoring measurements, from chest and waist circumferences to arm length and inseam.
- **Garment-Type Ease Tables** — Automatically applies ease allowances tailored to the target garment: traditional, suit, shirt, or trousers.
- **Three Scale Modes** — Achieves best accuracy when the client's height is known, with intelligent fallbacks using pixel-heuristic estimation or SMPL-Anthropometry normalisation.
- **Monte-Carlo Uncertainty Estimates** — Each measurement is accompanied by a ±σ confidence value derived from multiple perturbed model runs.
- **CLI & Python API** — Fully usable from the command line via \`tailor-vision measure\` or programmatically through a clean Python interface.

## Technical Highlights

The pipeline is built on a PyTorch-based SMPL-X shape fitting engine and the SMPL-Anthropometry measurement library, orchestrated across 8 sequential stages from image validation to garment recommendations.

- **SMPL-X Shape Fitting** — A PyTorch Adam optimiser fits 10 body shape parameters by minimising reprojection loss against 2D keypoints from both views, reinforced with anthropometric soft constraints.
- **MediaPipe Pose Estimation** — Uses the heavy PoseLandmarker model to extract 33 skeletal keypoints per image, which are then fused into a unified bi-view pose representation.
- **Modular Architecture** — Each pipeline stage (input, vision, fit, scale, measure, tailor, quality) is independently structured and testable, with a full pytest suite covering all pure-logic components.
- **Structured JSON Output** — Results are serialised via Pydantic v2 models, capturing measurements, confidence levels, uncertainty values, scale metadata, quality scores, warnings, and tailoring recommendations in a single schema.`,
      images: [
        "images/project002/ProjectPic1.png",
        "images/project002/ProjectPic2.png",
        "images/project002/ProjectPic3.png",
        "images/project002/ProjectPic4.png",
        "images/project002/ProjectPic5.png",
        "images/project002/ProjectPic6.png",
        "images/project002/ProjectPic7.png",
        "images/project002/ProjectPic8.png",
      ],
      techStack: ["Python", "PyTorch", "SMPL-X", "MediaPipe", "Pydantic", "Click", "Computer Vision"],
      githubUrl: "https://github.com/AbdallahElamin/tailoring-grade_anthropometric_Python_tool",
      demoUrl: "https://abdallahelamin.github.io/anthropometric_tool/",
    },

    //     {
    //       id: "quantum-analytics",
    //       title: "Quantum Analytics",
    //       hook: "Real-time analytics dashboard processing 10M+ events daily with sub-second latency.",
    //       description: `## Overview

    // Quantum Analytics is a high-throughput analytics platform designed for SaaS companies that need real-time insights without the complexity of traditional data warehouses.

    // ## Architecture

    // The system uses an event-driven architecture with:

    // - **Apache Kafka** for event ingestion at scale
    // - **ClickHouse** for blazing-fast analytical queries
    // - **Redis** for real-time aggregation caches
    // - **React + D3.js** for interactive visualizations

    // ## Results

    // - **10M+ events/day** processed with p99 latency under 200ms
    // - **70% cost reduction** compared to the previous BigQuery-based solution
    // - **Real-time dashboards** updating every 2 seconds`,
    //       images: [
    //         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    //         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    //         "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
    //       ],
    //       techStack: ["React", "D3.js", "Node.js", "Kafka", "ClickHouse", "Redis"],
    //       githubUrl: "https://github.com",
    //       demoUrl: "https://example.com",
    //     },
    //     {
    //       id: "codeforge",
    //       title: "CodeForge",
    //       hook: "AI-powered code review tool that catches bugs before your team does.",
    //       description: `## Overview

    // CodeForge is an intelligent code review assistant that integrates directly into your Git workflow. It uses fine-tuned language models to detect bugs, security vulnerabilities, and code smell.

    // ## How It Works

    // 1. **PR is opened** → CodeForge analyzes the diff
    // 2. **AI reviews** the changes for common patterns and anti-patterns
    // 3. **Inline comments** are posted with suggestions and explanations
    // 4. **Learning loop** — the model improves from reviewer feedback

    // ## Impact

    // - **40% reduction** in code review turnaround time
    // - **25% fewer bugs** reaching production
    // - Adopted by **200+ engineering teams** across 15 countries`,
    //       images: [
    //         "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=800&fit=crop",
    //         "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&h=800&fit=crop",
    //         "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&h=800&fit=crop",
    //       ],
    //       techStack: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI", "Docker"],
    //       githubUrl: "https://github.com",
    //     },
    //     {
    //       id: "synthwave-music",
    //       title: "Synthwave Studio",
    //       hook: "Browser-based music production powered by the Web Audio API.",
    //       description: `## Overview

    // Synthwave Studio is a fully-featured digital audio workstation that runs entirely in the browser. No downloads, no plugins — just open and create.

    // ## Features

    // - **Multi-track sequencer** with drag-and-drop arrangement
    // - **Built-in synthesizers** — subtractive, FM, and wavetable
    // - **Effects rack** — reverb, delay, distortion, EQ, and compression
    // - **MIDI support** — connect your hardware controller
    // - **Cloud save** — your projects sync across devices

    // ## Technical Deep Dive

    // Built on the Web Audio API with custom DSP written in AudioWorklet processors for real-time audio processing without blocking the main thread. The UI renders at 60fps using Canvas 2D for the waveform displays and WebGL for the spectrum analyzer.`,
    //       images: [
    //         "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=800&fit=crop",
    //         "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop",
    //         "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop",
    //       ],
    //       techStack: ["TypeScript", "Web Audio API", "Canvas", "WebGL", "IndexedDB"],
    //       githubUrl: "https://github.com",
    //       demoUrl: "https://example.com",
    //     },
    //     {
    //       id: "terra-maps",
    //       title: "Terra Maps",
    //       hook: "Interactive 3D terrain visualization for environmental researchers.",
    //       description: `## Overview

    // Terra Maps enables environmental scientists to visualize and analyze terrain data in an interactive 3D environment directly in the browser.

    // ## Capabilities

    // - **3D terrain rendering** from DEM (Digital Elevation Model) data
    // - **Layer system** — overlay satellite imagery, vegetation indices, water flow
    // - **Time-series animation** — watch landscapes change over decades
    // - **Measurement tools** — distance, area, volume calculations
    // - **Export** — high-res renders and data exports for publications

    // ## Performance

    // Uses WebGPU (with WebGL fallback) for rendering millions of triangles at interactive frame rates. Terrain tiles are streamed progressively using a quadtree LOD system.`,
    //       images: [
    //         "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&h=800&fit=crop",
    //         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
    //         "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&h=800&fit=crop",
    //       ],
    //       techStack: ["Three.js", "React", "WebGPU", "GeoTIFF", "Mapbox GL"],
    //       githubUrl: "https://github.com",
    //       demoUrl: "https://example.com",
    //     },
    //     {
    //       id: "pulse-health",
    //       title: "Pulse Health",
    //       hook: "HIPAA-compliant telehealth platform connecting patients with providers in real-time.",
    //       description: `## Overview

    // Pulse Health is a modern telehealth platform that makes virtual healthcare accessible, secure, and seamless for both patients and healthcare providers.

    // ## Features

    // - **Video consultations** with HD quality and low-latency WebRTC
    // - **E-prescriptions** with pharmacy integration
    // - **Health records** — unified patient dashboard
    // - **Scheduling** — smart appointment booking with calendar sync
    // - **Chat** — encrypted messaging between visits

    // ## Security & Compliance

    // - **HIPAA compliant** with end-to-end encryption
    // - **SOC 2 Type II** certified infrastructure
    // - **99.99% uptime** SLA with multi-region failover`,
    //       images: [
    //         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
    //         "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop",
    //         "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&h=800&fit=crop",
    //       ],
    //       techStack: ["React", "Node.js", "WebRTC", "PostgreSQL", "AWS", "C#"],
    //       githubUrl: "https://github.com",
    //     },
  ],
};

export default portfolio;
