---
layout: page
title: vshadersystem
description: A standalone shader compilation and material reflection pipeline built on Slang — one shader source, every backend.
importance: 5
category: work
related_publications: false
---

[![zzxzzk115/vshadersystem - GitHub](https://gh-card.dev/repos/zzxzzk115/vshadersystem.svg?fullname=)](https://github.com/zzxzzk115/vshadersystem)

Part of the [Vultra Ecosystem](/projects/vultra_ecosystem/).

## Why This Exists

Single-source multi-backend shaders, keyword-permutation variants, and material parameter reflection are table stakes for a game engine — and exactly the piece that advanced graphics research tools need but routinely neglect. I want this layer to be _perfect and stable_, because everything above it depends on it.

## The v1.0 Rewrite

The first generation used an INI-style DSL around GLSL. That was fine when the only consumer was [libvultra](/projects/libvultra/) and GLSL → SPIR-V/WGSL covered every target. But libvultra's WebGPU backend proved unstable and feature-poor, and once [VRI](/projects/vri/) was designed to support _every_ graphics backend, the DSL had no future. If you want one shader source feeding many shading backends, **Slang is the obvious choice** — paired with SPIRV-Cross, it is a perfect match. v1.0 threw away the DSL and rebuilt the system on Slang with user-defined attributes carrying the metadata the DSL used to hold.

## Design

- **Offline / runtime split**: `vshaderc` compiles ahead of time; the lean `vshadersystem` runtime just loads.
- **`.vshbin`** binaries carry SPIR-V and WGSL; **`.vshlib`** shader libraries hold keyword-permutation variants.
- **Material parameter reflection** feeds editor UIs and material systems.
- Cross-backend bytecode targets Vulkan, WebGPU, D3D12, OpenGL, and Metal, against a pinned Slang release for reproducibility.
- Full toolchain on desktop; runtime-only on Android and WASM — consistent with the ecosystem's offline-first principle.
