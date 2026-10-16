---
id: "vri"
title: "VRI"
description: "A cross-platform render hardware interface with a C ABI and a C++23 wrapper for Vulkan, D3D12, Metal, WebGPU and OpenGL-family backends."
legacyPath: "/projects/vri/"
category: "work"
tags: ["C++23","RHI","Vulkan","OpenXR"]
modes: ["academic","casual"]
order: 3
status: "In development"
links: [{"label":"Source","href":"https://github.com/zzxzzk115/VRI","icon":"brands:github"},{"label":"Browser demo","href":"https://zzxzzk115.github.io/VRI/","icon":"solid:arrow-up-right-from-square"}]
---
VRI provides an explicit rendering API with command buffers, descriptor sets and synchronization. Applications can query optional capabilities and receive diagnostics from VRI and the native backend.

The C ABI is paired with a header-only C++23 wrapper. Shaders are authored in Slang and compiled for each target. Backends cover Vulkan, Direct3D 12, Metal, WebGPU, OpenGL, OpenGL ES and WebGL 2; feature availability varies by backend. Software Vulkan implementations can also run the Vulkan path without a hardware GPU.

[Lazy-100](/projects/lazy_100/) uses VRI. [VRI-Framework](/projects/vri-framework/) supplies reusable higher-level rendering capabilities, while the current [libvultra development branch](/projects/vultra_ecosystem/#libvultra) builds directly on VRI.

The repository's [capability matrix](https://github.com/zzxzzk115/VRI#feature-support) records native, emulated, planned and unavailable features.

