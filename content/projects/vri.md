---
home:
  academic:
    order: 3
id: "vri"
title: "VRI"
description: "A cross-platform render hardware interface with a C ABI and a C++23 wrapper for Vulkan, D3D12, Metal, WebGPU and OpenGL-family backends."
legacyPath: "/projects/vri/"
category: "work"
tags: ["C++23","RHI","Vulkan","OpenXR"]
modes: ["academic","casual"]
order: 3
status: "In development"
links:
  - label: Path tracer · WebGPU
    href: https://zzxzzk115.github.io/VRI/examples/example-pathtracer.html?backend=webgpu
    icon: solid:play
  - label: Browser examples
    href: https://zzxzzk115.github.io/VRI/examples/
    icon: solid:arrow-up-right-from-square
  - label: Source
    href: https://github.com/zzxzzk115/VRI
    icon: brands:github
overview:
  purpose: "Give graphics applications a common explicit rendering interface across multiple backends."
  contribution: "I develop the C ABI, header-only C++23 wrapper and backend implementations, with capability queries for optional features."
  outcome: "Browser examples are available, and Lazy-100 uses VRI. Backend feature coverage is documented in the capability matrix and remains in development."
image: "/assets/img/projects/enriched/vri.webp"
imageAlt: "Vulkan path tracer rendering the FlightHelmet glTF model at 128 samples and four bounces."
---
![Vulkan path tracer rendering the FlightHelmet glTF model at 128 samples and four bounces.](/assets/img/projects/enriched/vri.webp)

## Try it in your browser

Start with the [WebGPU path tracer](https://zzxzzk115.github.io/VRI/examples/example-pathtracer.html?backend=webgpu): it loads the FlightHelmet glTF model and progressively accumulates samples. Adjust the camera orbit, sample target, bounce count and lighting to see the renderer respond. On WebGPU, traversal uses a software BVH in compute shaders.

The [example gallery](https://zzxzzk115.github.io/VRI/examples/) offers separate WebGPU and WebGL 2 launch buttons. For a lighter WebGL 2 example, try the [textured cube](https://zzxzzk115.github.io/VRI/examples/example-cube.html?backend=webgl). Optional capabilities vary by backend: the WebGL 2 path-tracer entry runs a reduced fallback, rather than the WebGPU path-tracing implementation. The cover image above was rendered with the native Vulkan backend.

## What I built

VRI provides an explicit rendering API with command buffers, descriptor sets and synchronization. Applications can query optional capabilities and receive diagnostics from VRI and the native backend.

The C ABI is paired with a header-only C++23 wrapper. Shaders are authored in Slang and compiled for each target. Backends cover Vulkan, Direct3D 12, Metal, WebGPU, OpenGL, OpenGL ES and WebGL 2; feature availability varies by backend. Software Vulkan implementations can also run the Vulkan path without a hardware GPU.

[Lazy-100](/projects/lazy_100/) uses VRI. [VRI-Framework](/projects/vri-framework/) supplies reusable higher-level rendering capabilities, while the current [libvultra development branch](/projects/vultra_ecosystem/#libvultra) builds directly on VRI.

The repository's [capability matrix](https://github.com/zzxzzk115/VRI#feature-support) records native, emulated, planned and unavailable features.

