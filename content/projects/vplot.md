---
home:
  academic:
    order: 4
  casual:
    order: 7
id: "vplot"
title: "vplot"
description: "C++23 plotting through a C ABI, with PNG, SVG and PDF export, ImGui integration and a WebAssembly demo."
legacyPath: "/projects/vplot/"
image: "/assets/img/projects/enriched/vplot.webp"
category: "library"
tags: ["C++23","Plotting","C ABI","WebAssembly"]
modes: ["academic","casual"]
order: 6
status: "Early development · API evolving"
links: [{"label":"Source","href":"https://github.com/zzxzzk115/vplot","icon":"brands:github"},{"label":"Browser demo","href":"https://zzxzzk115.github.io/vplot/","icon":"solid:arrow-up-right-from-square"}]
overview:
  purpose: "Export figures and embed plots in C++ applications without requiring a Python runtime."
  contribution: "I adapt Matplotlib’s C++ rendering core into a standalone C++23 library, with a C ABI, figure export and Dear ImGui integration."
  outcome: "A WebAssembly demo is available, with PNG, SVG and PDF output. The API is still evolving and plotting coverage varies by method."
---
vplot adapts Matplotlib's C++ rendering core into a standalone C++23 library and exposes it through a C ABI. It can export figures for papers or draw plots inside a renderer’s Dear ImGui interface without a Python runtime.

![Plots rendered by vplot](/assets/img/projects/enriched/vplot.webp)

It supports line and scatter plots, histograms, box and violin plots, image and contour plots, vector fields, annotations, axes and subplot layouts. Output includes RGBA buffers, PNG, SVG and PDF.

The API is still evolving and coverage varies by plotting method. The [coverage document](https://github.com/zzxzzk115/vplot/blob/main/docs/API-COVERAGE.md) describes the current limits. The browser demo runs through WebGPU or WebGL 2.

