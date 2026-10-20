# Suvarnadhenu — Cinematic Jewellery Experience

<p align="center">
  <strong>A digital jewellery experience where traditional elegance meets immersive web design.</strong>
</p>

<p align="center">
  A cinematic, interactive website concept designed for Suvarnadhenu, a jewellery store in Balewadi, Pune, India.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-Enabled-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-Powered-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Three.js-3D_Experience-black?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/GSAP-Scroll_Animations-88CE02?style=for-the-badge&logo=greensock&logoColor=black" alt="GSAP" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [The Vision](#the-vision)
- [Experience Highlights](#experience-highlights)
- [Design Philosophy](#design-philosophy)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [The Cinematic Experience](#the-cinematic-experience)
- [3D Scene and Visual Composition](#3d-scene-and-visual-composition)
- [Scroll-Driven Animation System](#scroll-driven-animation-system)
- [Collections Experience](#collections-experience)
- [Store and Contact Experience](#store-and-contact-experience)
- [Responsive Design](#responsive-design)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration and Customization](#configuration-and-customization)
- [Performance and Accessibility](#performance-and-accessibility)
- [Future Improvements](#future-improvements)
- [Project Learnings](#project-learnings)
- [Business Information](#business-information)
- [Author](#author)
- [License](#license)

---

## Overview

**Suvarnadhenu** is a cinematic jewellery website concept built to explore how immersive 3D graphics, sophisticated typography, editorial layouts, and scroll-driven animation can transform a conventional business website into a memorable digital experience.

Designed around a luxury burgundy-and-gold visual identity, the experience introduces jewellery through a sculptural 3D composition before guiding visitors through curated collections and towards the physical store.

Rather than treating a website as a collection of static sections, this project approaches the interface as a continuous visual journey.

The goal is simple:

> Create an online experience that feels as considered, distinctive, and memorable as the jewellery it represents.

The project combines a React-based interface with a Three.js-powered visual scene and a GSAP-driven animation system. The result is an exploration of the intersection between creative frontend development, real-time 3D rendering, and luxury brand presentation.

### Project at a Glance

| Category | Details |
|---|---|
| Project | Suvarnadhenu |
| Project type | Business website concept |
| Industry | Jewellery and retail |
| Primary focus | Creative frontend development |
| Interface | React and TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 and custom CSS |
| 3D rendering | Three.js and React Three Fiber |
| Animation | GSAP and ScrollTrigger |
| Iconography | Lucide React |
| Typography | Cormorant Garamond and Manrope |
| Design direction | Cinematic, editorial, luxury |
| Location represented | Balewadi, Pune, Maharashtra, India |

---

## The Vision

Traditional jewellery websites often rely on conventional product grids, static banners, and predictable navigation patterns.

While these approaches can be effective, they do not always communicate the emotion, craftsmanship, and visual character associated with jewellery.

Suvarnadhenu explores a different direction.

Instead of immediately presenting a grid of products, the website opens with an atmospheric visual experience. Sculptural golden forms, interlocking rings, gemstone-inspired details, and subtle particles establish the visual identity before the visitor reaches the collection.

The transition from the cinematic introduction to the collection and store information is designed to feel connected rather than abrupt.

### The experience follows three ideas

**01 — Introduce**

Establish the brand's identity through atmosphere, material, lighting, and motion.

**02 — Explore**

Present the collections through an editorial layout that emphasizes imagery, typography, and carefully considered spacing.

**03 — Connect**

Guide visitors towards the physical store with practical contact information and directions.

The result is a concept that combines immersive presentation with the usability expected from a real business website.

---

## Experience Highlights

### 1. Cinematic 3D Introduction

The opening experience features a custom procedural 3D composition built around abstract golden forms.

The visual language incorporates:

- Sculptural gold ribbons.
- Interlocking and orbiting rings.
- Ruby-inspired gemstone accents.
- Beaded circular arrangements.
- Reflective metallic materials.
- Atmospheric particle fields.
- Fine golden trails.
- Layered lighting and depth.

These elements create a distinctive visual identity without relying entirely on conventional product photography.

The composition is designed to establish a sense of luxury before the visitor begins exploring the website.

### 2. Scroll-Driven Visual Progression

Scrolling is treated as part of the presentation rather than simply a way to move between sections.

GSAP and ScrollTrigger coordinate the introductory transition, connecting scroll position to animation progress.

This creates an opportunity for the visual scene to evolve as the visitor moves through the page.

### 3. Editorial Jewellery Collections

The collections section moves away from a generic e-commerce grid and towards an editorial presentation.

It includes:

- Large-format imagery.
- Numbered collection cards.
- Category labels.
- Elegant serif typography.
- Subtle image scaling on hover.
- Directional interaction indicators.
- Descriptive collection copy.
- Category filtering.
- Links towards store enquiries.

The design prioritizes visual hierarchy and allows each collection to have its own identity.

### 4. Luxury-Inspired Visual Identity

The interface uses a restrained palette of deep burgundy, antique gold, champagne, and warm ivory.

Typography combines the expressive character of Cormorant Garamond with the clarity of Manrope.

The combination creates contrast between editorial headlines and functional interface elements.

### 5. Physical Store Integration

The final section connects the digital experience to the real business.

Visitors can find:

- Store address.
- Telephone contact.
- Google Maps directions.
- Business branding.
- Footer navigation.
- A return-to-top interaction.

### 6. Responsive Interface

The layout adapts across desktop and mobile viewport sizes.

Responsive behavior includes adjustments to navigation, typography, collection layouts, spacing, and contact information.

### 7. Component-Based Architecture

The project separates the primary interface, 3D scene, animation logic, collection data, and styling into dedicated modules.

This makes the codebase easier to understand, maintain, and extend.

---

## Design Philosophy

The design direction is built around the relationship between material, light, typography, and negative space.

Jewellery is highly visual. Its perceived character changes with reflections, surrounding colors, contrast, and presentation.

The interface therefore uses a restrained visual language that gives the primary composition room to breathe.

### Color Palette

| Color | Hex | Purpose |
|---|---|---|
| Deep Burgundy | `#1C0509` | Primary background |
| Burgundy | `#380810` | Secondary brand tone |
| Antique Gold | `#C8A45D` | Interactive accents and details |
| Champagne | `#E8D5A3` | Highlight text and decorative elements |
| Warm Ivory | `#F7F0E5` | Primary typography |
| Charcoal | `#171413` | Supporting dark surfaces |

### Deep Burgundy

The background establishes depth and warmth without relying on pure black.

Subtle radial gradients introduce tonal variation and reinforce the cinematic atmosphere.

### Antique Gold

Gold is used for borders, controls, decorative lines, icons, and selected typography.

Its use is intentionally restrained so that important elements remain visually distinct.

### Champagne

Champagne tones create a softer contrast than bright yellow gold, supporting the overall editorial aesthetic.

### Warm Ivory

Ivory provides readable contrast against the dark background while maintaining a warmer appearance than pure white.

### Typography

**Cormorant Garamond**

Used for expressive headlines and collection titles. Its high contrast and elegant forms reinforce the editorial character of the experience.

**Manrope**

Used for navigation, descriptions, labels, buttons, and supporting interface text. Its clean geometric forms balance the more expressive serif typography.

### Design Principles

The interface follows several consistent principles:

- Use contrast to establish hierarchy.
- Keep decorative elements purposeful.
- Let typography carry part of the visual identity.
- Use motion to connect states rather than distract from content.
- Favor subtle interaction feedback over excessive effects.
- Maintain a consistent color and spacing system.
- Preserve the practical information customers need.

---

## Technology Stack

### Core Interface

| Technology | Role |
|---|---|
| React | Component-based UI development |
| TypeScript | Type safety and clearer interfaces |
| Vite | Development server and production build |
| Tailwind CSS v4 | Utility-first styling infrastructure |
| Custom CSS | Layout, responsive behavior, visual effects |
| Lucide React | Interface icons |

### 3D and Animation

| Technology | Role |
|---|---|
| Three.js | Real-time 3D rendering |
| React Three Fiber | React renderer for Three.js |
| React Three Drei | Helpers and abstractions for 3D scenes |
| GSAP | Timeline-based animation |
| GSAP ScrollTrigger | Scroll-linked animation and pinning |
| `@gsap/react` | GSAP lifecycle integration with React |

### Typography

Google Fonts provides the Cormorant Garamond and Manrope typefaces used throughout the interface.

### Why This Stack?

**React** provides a modular architecture for building the website from reusable components.

**TypeScript** makes component interfaces and shared animation state easier to reason about.

**Vite** provides a fast development workflow and a streamlined production build.

**React Three Fiber** allows the 3D experience to be composed using React components while retaining the capabilities of Three.js.

**GSAP** provides precise control over animation timelines and scroll-linked transitions.

**Custom CSS** provides direct control over the project's visual identity, layout, responsiveness, and interaction states.

Together, these tools make it possible to combine a conventional React interface with a more experimental, graphics-driven presentation.

---

## Project Architecture

The project uses a modular structure to separate presentation, rendering, animation, and content.

```text
suvarnadhenu/
│
├── public/
│   └── images/
│       ├── collection-traditional.jpg
│       ├── collection-everyday.jpg
│       └── collection-statement.jpg
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── cinematic/
│   │   │   ├── CinematicExperience.tsx
│   │   │   ├── CinematicCanvas.tsx
│   │   │   ├── IntroSequence.tsx
│   │   │   └── ParticleField.tsx
│   │   │
│   │   ├── three/
│   │   │   ├── JewelleryModel.tsx
│   │   │   ├── JewelleryAssembly.tsx
│   │   │   ├── StorefrontScene.tsx
│   │   │   └── LightingRig.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CollectionSection.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   └── layout/
│   │       └── Navbar.tsx
│   │
│   ├── hooks/
│   │   └── useCinematicTransition.ts
│   │
│   ├── data/
│   │   └── collections.ts
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
