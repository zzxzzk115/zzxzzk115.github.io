---
home: false
id: "vri-framework"
title: "VRI-Framework"
description: "Reusable C++23 rendering building blocks over VRI: RAII resources, framegraphs, profiling, multi-queue submission and OpenXR utilities."
legacyPath: "/projects/vri-framework/"
category: "work"
tags: ["C++23","VRI","Framegraph","OpenXR"]
modes: ["academic","casual"]
order: 5
status: "Public · in development"
links: [{"label":"Source","href":"https://github.com/zzxzzk115/VRI-Framework","icon":"brands:github"}]
image: "/assets/img/projects/enriched/vri-framework.webp"
imageAlt: "GPU Gaussian splatting of the hornedlizard SPZ fixture (786,233 splats)."
---
![GPU Gaussian splatting of the hornedlizard SPZ fixture (786,233 splats).](/assets/img/projects/enriched/vri-framework.webp)

VRI-Framework is a public library of rendering capabilities built over [VRI](/projects/vri/). It provides resource ownership, device and presentation helpers, framegraph construction, descriptor management, GPU profiling and OpenXR lifecycle support.

It is a toolkit for composing a renderer. Applications supply their own passes, scenes and shaders. The library includes an application loop for examples and a render module for host-driven integration.

It belongs to the [Vultra ecosystem](/projects/vultra_ecosystem/), but it is a separate project. The current libvultra `dev-VRI` branch uses VRI directly; this framework is not a mandatory layer between VRI and libvultra.

