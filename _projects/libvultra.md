---
layout: page
title: libvultra
description: A modern rendering engine for rapid prototyping, VR research, and — eventually — full games. The heart of the Vultra ecosystem.
img: assets/img/projects/libvultra.png
importance: 2
category: work
related_publications: false
---

[![zzxzzk115/libvultra - GitHub](https://gh-card.dev/repos/zzxzzk115/libvultra.svg?fullname=)](https://github.com/zzxzzk115/libvultra)

[Explore examples](https://zzxzzk115.github.io/libvultra)

Part of the [Vultra Ecosystem](/projects/vultra_ecosystem/).

## Why This Exists

libvultra is my answer to the regrets left behind by [Snow Leopard Engine](/projects/snow_leopard_engine/): a more modern, more complete engine — built on explicit graphics APIs instead of OpenGL — that serves two masters at once: **game development** and my **PhD research** in high-performance VR rendering.

## Design Decisions

**FrameGraph / RenderGraph, not hand-wired passes.** Without a frame-graph architecture, resource inputs, outputs, reads, and writes become ambiguous; you end up writing a zoo of tightly coupled OOP "Pass" classes, and nobody can see the shape of a frame at a glance. With a render graph, the entire rendering flow is declared explicitly and readable in one place. On the `dev-next` branch this goes further: pipelines are **data-driven**, described in declarative `.vrg.json` render-graph files with a live-preview editor.

**VR-first, via OpenXR.** Most engines still treat VR as a bolt-on, if they support it at all. My research is high-performance VR rendering, so OpenXR stereo rendering is a first-class citizen — scene-driven XR cameras, stereo render-graph templates, and editor/runtime mirror views — and the engine doubles as the vehicle for research on stereo novel-view synthesis.

**No editor required.** libvultra is deliberately usable the way raylib is: include the library, write code, get pixels. No engine project to create, no editor to learn. For research prototyping, this is the difference between an afternoon and a week.

## Highlights (dev-next)

The `master` branch is the stable Vulkan core; the `dev-next` branch — where the project is evolving under the name **VultraEngine** — is far ahead:

- Multi-backend RHI (Vulkan, WebGPU), OpenXR VR/XR runtime with stereo rendering
- Data-driven **RenderGraph** (`.vrg.json`) with a live-preview editor
- **Material Graph** node editor compiling to shader sources
- **3D Gaussian Splatting**, including OpenXR scenes, `.spz` compression, GPU radix-sort splat ordering, and foveated compositing
- Runtime-loadable **C++ and Lua plugins** with editor-extension APIs
- **AI-agent support**: MCP integration, an editor agent layer, per-project AI workspaces, headless simulation
- Slang shader toolchain via [vshadersystem](/projects/vshadersystem/), asset pipeline via [vasset](/projects/vasset/), EnTT ECS, Lua hot reload, Jolt Physics, ozz-animation, spatial audio, frame debugger and GPU/CPU profilers
- CI for Windows, Linux, macOS, Android, and WebAssembly

## Showcase

[Example: GLTF Viewer](https://github.com/zzxzzk115/libvultra/blob/master/examples/gltf_viewer/main.cpp)

![Example: GLTF Viewer](https://raw.githubusercontent.com/zzxzzk115/libvultra/refs/heads/master/media/images/example-gltf-viewer.png)

[Example: Sponza with Meshlet Debug View](https://github.com/zzxzzk115/libvultra/blob/master/examples/sponza/main.cpp)

![Example: Sponza](https://raw.githubusercontent.com/zzxzzk115/libvultra/refs/heads/master/media/images/example-sponza.png)

## Looking Ahead

The rendering core will migrate onto [VRI](/projects/vri/) via [VRI-Framework](/projects/vri_framework/), replacing the current in-tree Vulkan/WebGPU backends with the full cross-API stack. Above libvultra, a private **VultraEngine** repository is building the game-engine layer with **CoreCLR (C#) scripting** — Lua serves today, but C# opens the whole .NET ecosystem for gameplay code and middleware. To try libvultra yourself, start from the [starter template](https://github.com/zzxzzk115/libvultra-starter-template).
