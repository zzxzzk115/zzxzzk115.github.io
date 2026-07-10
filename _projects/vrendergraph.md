---
layout: page
title: vrendergraph
description: A tiny data-driven render pipeline layer that builds a runtime FrameGraph from JSON — the schema behind libvultra's RenderGraph.
img: assets/img/projects/vrendergraph.png
importance: 6
category: work
related_publications: false
---

[![zzxzzk115/vrendergraph - GitHub](https://gh-card.dev/repos/zzxzzk115/vrendergraph.svg?fullname=)](https://github.com/zzxzzk115/vrendergraph)

Part of the [Vultra Ecosystem](/projects/vultra_ecosystem/).

## Why This Exists

vrendergraph is the **schema layer** of the render graph: it defines the JSON format that describes a whole rendering pipeline — resources, passes, and their connections — and builds a runtime FrameGraph from it. [libvultra](/projects/libvultra/)'s data-driven RenderGraph (`.vrg.json`) speaks exactly this format, but the schema itself is deliberately a standalone library: a pipeline description format shouldn't be locked inside one engine, and following the ecosystem's [modularity principle](/projects/vultra_ecosystem/), anything reusable gets its own package.

## Design

- **Minimal and deterministic runtime.** The builder executes passes in `passes[]` order; pass IO is described via explicit `inputs` / `outputs` slot maps — no hidden magic.
- **One file for tools and runtime.** An optional `meta` field stores editor/tool UI state (node positions, zoom/pan) and is completely ignored by the runtime, so the same JSON is both the shipping pipeline and the editable document.
- **Opaque selectors.** Resource references can carry fields like `view`, `time`, `mip`, `layer`, or `access` — vrendergraph doesn't interpret them; the consuming engine does. The library stays tiny while engines stay free.
- **Schema evolution driven by real pipelines.** v0.3 added explicit versioning, resource descriptors, pass conditions, and view modes — pushed by concrete needs like **per-view resources for VR stereo rendering** and **history frames for TAA** (`"history": { "frames": 2 }`), with flexibility as the guiding principle.

## Showcase

The repository ships its own example node editor for the format:

![Editor Example](https://raw.githubusercontent.com/zzxzzk115/vrendergraph/master/media/vrendergraph_editor_example.png)

![Output](https://raw.githubusercontent.com/zzxzzk115/vrendergraph/master/media/out.svg)
