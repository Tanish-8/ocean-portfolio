# Scene Architecture Overview

This directory contains the individual scene components that make up the ocean depth journey.

## Architectural Principles

- **Section-Based Navigation**: UI navigation targets functional portfolio sections (Home, About, Skills, Projects, Experience, Achievements, Contact).
- **Scene-Based Rendering**: Visual rendering is organized around environment scenes (Surface, Dive, Reef, Temple, Deep Ocean, Submarine, Ancient City, Return).
- **Depth-Driven Transitions**: Scrolling mutates the global ocean scene depth coordinate (`depth`), causing the Ocean Engine and shaders to dynamically adapt environment lighting, fog, camera angle, and background layers.
- **Ocean Engine Decoupling**: The Ocean Engine listens and reacts to continuous depth values rather than static DOM page sections.
- **Cinematic Separation**: Decoupling section navigation from rendering layers allows fluid, cinematic transitions and parallax depth effects while maintaining semantic web page accessibility.
