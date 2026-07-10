---
layout: page
title: vasset
description: An offline-first asset pipeline — import once, optimize offline, load instantly at runtime.
importance: 6
category: work
related_publications: false
---

[![zzxzzk115/vasset - GitHub](https://gh-card.dev/repos/zzxzzk115/vasset.svg?fullname=)](https://github.com/zzxzzk115/vasset)

Part of the [Vultra Ecosystem](/projects/vultra_ecosystem/).

## Why This Exists

Loading source assets with Assimp at runtime simply doesn't meet my requirements. Data should be **compressed** — textures above all. Model data generally needs **post-processing**, such as meshoptimizer passes; doing that at runtime wrecks the user experience, while doing it at **import time (offline)** yields assets in an optimal internal format, so runtime loading pressure is minimal and efficiency is maximal. vasset is that import step, packaged as both a library and CLI tools.

## Design

- **Custom internal formats** — VMesh, VTexture, VMaterial — shaped for loading speed, not for interchange.
- **Importers + asset registry** with UUID-based identity management.
- **VPK packer** bundles processed assets into a single file.
- **Virtual-filesystem integration** via [vfilesystem](/projects/vfilesystem/), on the foundation of [vbase](/projects/vbase/).
- Cross-platform: Windows, Linux, macOS, Android, and WASM — including an in-browser import demo, built as a technical test for interactive paper pages I may need in my research.
