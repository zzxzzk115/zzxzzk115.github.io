---
layout: page
title: VRI
description: An extensible render hardware interface for Vulkan, D3D12, Metal, WebGPU, and the OpenGL family — plus CPU software rendering — with a stable C ABI core and a C++23 wrapper.
importance: 3
category: work
related_publications: false
---

[![zzxzzk115/VRI - GitHub](https://gh-card.dev/repos/zzxzzk115/VRI.svg?fullname=)](https://github.com/zzxzzk115/VRI)

Part of the [Vultra Ecosystem](/projects/vultra_ecosystem/).

## Why This Exists

VRI was born out of disappointment with every existing cross-platform RHI I tried:

- **bgfx** abstracts graphics through OpenGL state-machine thinking — a relic of an older era that forfeits the advanced features of modern explicit APIs.
- **Diligent Engine** and **The Forge** don't fully cover the backend matrix, and neither leverages Slang to compile a single shader source to every shading backend.
- **NRI** supports only Vulkan and DirectX.
- None of them consider **OpenXR** — a dealbreaker when your research is VR rendering.

So I wrote the RHI that satisfies my own requirements while pushing for the broadest platform coverage I can achieve: one explicit, modern API (command buffers, descriptor sets, explicit synchronization) over **Vulkan, D3D12, Metal, WebGPU, OpenGL / GLES / WebGL 2**, and even **CPU software rendering**.

## Design Decisions

**A C ABI core with a header-only C++23 wrapper.** The C ABI exists for two reasons: it makes P/Invoke bindings for C# — and bindings for any other language — straightforward, and it guarantees ABI stability across compilers and versions. Day-to-day ergonomics come from the modern C++23 wrapper on top.

**Software rendering is a feature, not a fallback.** Built-in SwiftShader / Mesa backends let the full test suite run on GPU-less CI machines, and cover the genuinely GPU-less edge cases I refuse to ignore.

**Single-source shaders.** Shaders are authored in Slang and compiled offline to each backend's bytecode — no per-API shader forks.

**OpenXR from day one.** XR support is already available as a VRI extension; the deeper integration (stereo swapchains, session plumbing) lives one layer up, in [VRI-Framework](/projects/vri_framework/).

A built-in validation layer and diagnostics sink keep multi-backend debugging sane.

## Proof It Works

[Lazy-100](/projects/lazy_100/), a complete fantasy game console with an in-console editor suite, runs entirely on VRI — on desktop and in the browser.

## Looking Ahead

VRI is the designated rendering foundation of the entire ecosystem: [libvultra](/projects/libvultra/) will migrate its rendering core onto VRI via VRI-Framework, and the stable C ABI is the on-ramp for the planned CoreCLR (C#) engine architecture.
