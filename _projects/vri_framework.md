---
layout: page
title: VRI-Framework
description: A minimal, embeddable rendering framework on top of VRI — the future rendering core of libvultra. (Private, WIP)
importance: 4
category: work
related_publications: false
---

Part of the [Vultra Ecosystem](/projects/vultra_ecosystem/). _This repository is currently private and under early development._

## Why This Exists

There is a wide gap between a raw RHI and a full engine. [VRI](/projects/vri/) gives you devices, command buffers, and pipelines — but every renderer built on it still needs a window, a swapchain loop, mesh and material data structures, and a way to get assets onto the GPU. VRI-Framework fills exactly that gap, and deliberately nothing more: it is **not a game engine**, but a thin, reusable toolset that a renderer or engine can stand on.

## Design Decisions

**Embeddable by design.** The framework can be used two ways: `Application`, a batteries-included window + present loop for quick experiments; or `RenderModule`, an embeddable render layer that is driven by a _host engine's_ own window and loop — it owns neither. That second mode is the whole point: it is how the framework will slot into libvultra as its render core.

**Loader-agnostic data, developer-owned shading.** Meshes, materials (spanning Unlit / PBR / Phong shading models), textures, lights, and Gaussian splats are pure data structures, decoupled from any file format. The framework ships no built-in uber-shader — you bring your own pipelines and interpret materials however your renderer wants. A framework that dictated shading would stop being a framework.

**Minimal on purpose.** Raw file-to-struct loaders, a CPU→GPU upload bridge, and fluent C++23 builders over VRI's descriptor structs — with backend-agnostic shader variants so pipelines are never locked to one API. Third-party dependencies stay confined to implementation files.

## Status & Looking Ahead

VRI-Framework currently renders models end-to-end and is evolving quickly. Its destiny is to **replace the rendering core inside [libvultra](/projects/libvultra/)**, existing as the framework / embeddable layer between VRI and the engine — with the deeper OpenXR integration for VR research living here as well.
