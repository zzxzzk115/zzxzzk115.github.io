---
home: false
id: vrendergraph
title: vrendergraph
description: A JSON render-pipeline description and runtime FrameGraph builder, with resource slots, schema versioning and editor helpers.
legacyPath: /projects/vrendergraph/
image: /assets/img/projects/vrendergraph-editor.png
imageAlt: The vrendergraph editor example connecting depth, G-buffer, SSAO, lighting, tone mapping and presentation passes.
imageFit: contain
category: library
tags: [C++, FrameGraph, JSON, Tools]
modes: [academic, casual]
order: 21
links:
  - label: Source
    href: https://github.com/zzxzzk115/vrendergraph
    icon: brands:github
  - label: Runtime integration
    href: https://github.com/zzxzzk115/vrendergraph/blob/master/docs/RUNTIME.md
    icon: solid:book-open
overview:
  purpose: Describe render-pipeline passes and connections as data that a host application can load and edit.
  contribution: I built a JSON schema and runtime builder, with versioned resource references and helpers for editor integration.
  outcome: The repository provides runtime and editor examples, including a node-based view of a deferred pipeline.
---
![The node-based vrendergraph editor example.](/assets/img/projects/vrendergraph-editor.png)

vrendergraph is a small data-driven layer that builds a runtime FrameGraph from JSON. Pass inputs and outputs describe slot connections; the host supplies the pass implementations and interprets engine-specific settings.

## Runtime and editor data

- The runtime builder executes passes in the order of the JSON `passes` array.
- The v0.3 schema adds resource descriptors, conditions, view modes and resource selectors while retaining support for v0.2 descriptions.
- Optional editor metadata stores node positions and other UI state, without affecting runtime execution.

The repository includes [runtime integration](https://github.com/zzxzzk115/vrendergraph/blob/master/docs/RUNTIME.md) and [editor integration](https://github.com/zzxzzk115/vrendergraph/blob/master/docs/EDITOR.md) guides.

## Place in the Vultra ecosystem

This standalone library belongs to the [Vultra ecosystem](/projects/vultra_ecosystem/). It was used in earlier data-driven pipeline experiments. Current libvultra `dev-VRI` documents its own RenderGraph interfaces and JSON construction separately; this page does not imply that vrendergraph is a dependency of that branch.

The image is the repository's [editor example screenshot](https://github.com/zzxzzk115/vrendergraph/blob/master/media/vrendergraph_editor_example.png).
