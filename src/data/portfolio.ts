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
  name: "Alex Chen",
  title: "Full-Stack Developer & Designer",
  bio: "I craft high-performance web applications with meticulous attention to detail. Passionate about clean architecture, stunning interfaces, and shipping products that make a difference.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  socials: [
    { label: "GitHub", url: "https://github.com", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { label: "WhatsApp", url: "https://wa.me/1234567890", icon: "whatsapp" },
    { label: "Email", url: "mailto:hello@example.com", icon: "mail" },
  ],
  projects: [
    {
      id: "nebula-ui",
      title: "Nebula UI",
      hook: "A design system built for speed — 40+ components, dark-first, fully accessible.",
      description: `## Overview

Nebula UI is a comprehensive design system and component library built from the ground up with performance and accessibility as first-class concerns.

## Key Features

- **40+ production-ready components** with full TypeScript support
- **Dark-first theming** with automatic light mode generation
- **WCAG 2.1 AA compliant** — every component tested with screen readers
- **Tree-shakable** — only ship what you use
- **Storybook documentation** with interactive examples

## Technical Highlights

The library uses a custom CSS-in-JS solution that generates atomic classes at build time, resulting in near-zero runtime overhead. Each component is built with compound component patterns for maximum flexibility.

Performance benchmarks show **60% smaller bundle size** compared to Material UI and **3x faster** initial render times.`,
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Vitest"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
    },
    {
      id: "quantum-analytics",
      title: "Quantum Analytics",
      hook: "Real-time analytics dashboard processing 10M+ events daily with sub-second latency.",
      description: `## Overview

Quantum Analytics is a high-throughput analytics platform designed for SaaS companies that need real-time insights without the complexity of traditional data warehouses.

## Architecture

The system uses an event-driven architecture with:

- **Apache Kafka** for event ingestion at scale
- **ClickHouse** for blazing-fast analytical queries
- **Redis** for real-time aggregation caches
- **React + D3.js** for interactive visualizations

## Results

- **10M+ events/day** processed with p99 latency under 200ms
- **70% cost reduction** compared to the previous BigQuery-based solution
- **Real-time dashboards** updating every 2 seconds`,
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
      ],
      techStack: ["React", "D3.js", "Node.js", "Kafka", "ClickHouse", "Redis"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
    },
    {
      id: "codeforge",
      title: "CodeForge",
      hook: "AI-powered code review tool that catches bugs before your team does.",
      description: `## Overview

CodeForge is an intelligent code review assistant that integrates directly into your Git workflow. It uses fine-tuned language models to detect bugs, security vulnerabilities, and code smell.

## How It Works

1. **PR is opened** → CodeForge analyzes the diff
2. **AI reviews** the changes for common patterns and anti-patterns
3. **Inline comments** are posted with suggestions and explanations
4. **Learning loop** — the model improves from reviewer feedback

## Impact

- **40% reduction** in code review turnaround time
- **25% fewer bugs** reaching production
- Adopted by **200+ engineering teams** across 15 countries`,
      images: [
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&h=800&fit=crop",
      ],
      techStack: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI", "Docker"],
      githubUrl: "https://github.com",
    },
    {
      id: "synthwave-music",
      title: "Synthwave Studio",
      hook: "Browser-based music production powered by the Web Audio API.",
      description: `## Overview

Synthwave Studio is a fully-featured digital audio workstation that runs entirely in the browser. No downloads, no plugins — just open and create.

## Features

- **Multi-track sequencer** with drag-and-drop arrangement
- **Built-in synthesizers** — subtractive, FM, and wavetable
- **Effects rack** — reverb, delay, distortion, EQ, and compression
- **MIDI support** — connect your hardware controller
- **Cloud save** — your projects sync across devices

## Technical Deep Dive

Built on the Web Audio API with custom DSP written in AudioWorklet processors for real-time audio processing without blocking the main thread. The UI renders at 60fps using Canvas 2D for the waveform displays and WebGL for the spectrum analyzer.`,
      images: [
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop",
      ],
      techStack: ["TypeScript", "Web Audio API", "Canvas", "WebGL", "IndexedDB"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
    },
    {
      id: "terra-maps",
      title: "Terra Maps",
      hook: "Interactive 3D terrain visualization for environmental researchers.",
      description: `## Overview

Terra Maps enables environmental scientists to visualize and analyze terrain data in an interactive 3D environment directly in the browser.

## Capabilities

- **3D terrain rendering** from DEM (Digital Elevation Model) data
- **Layer system** — overlay satellite imagery, vegetation indices, water flow
- **Time-series animation** — watch landscapes change over decades
- **Measurement tools** — distance, area, volume calculations
- **Export** — high-res renders and data exports for publications

## Performance

Uses WebGPU (with WebGL fallback) for rendering millions of triangles at interactive frame rates. Terrain tiles are streamed progressively using a quadtree LOD system.`,
      images: [
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&h=800&fit=crop",
      ],
      techStack: ["Three.js", "React", "WebGPU", "GeoTIFF", "Mapbox GL"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
    },
    {
      id: "pulse-health",
      title: "Pulse Health",
      hook: "HIPAA-compliant telehealth platform connecting patients with providers in real-time.",
      description: `## Overview

Pulse Health is a modern telehealth platform that makes virtual healthcare accessible, secure, and seamless for both patients and healthcare providers.

## Features

- **Video consultations** with HD quality and low-latency WebRTC
- **E-prescriptions** with pharmacy integration
- **Health records** — unified patient dashboard
- **Scheduling** — smart appointment booking with calendar sync
- **Chat** — encrypted messaging between visits

## Security & Compliance

- **HIPAA compliant** with end-to-end encryption
- **SOC 2 Type II** certified infrastructure
- **99.99% uptime** SLA with multi-region failover`,
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&h=800&fit=crop",
      ],
      techStack: ["React", "Node.js", "WebRTC", "PostgreSQL", "AWS", "C#"],
      githubUrl: "https://github.com",
    },
  ],
};

export default portfolio;
