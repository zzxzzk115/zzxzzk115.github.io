---
layout: page
title: vfilesystem
description: A lightweight, composable filesystem abstraction — normalized paths, virtual mounts, and platform-aware backends for desktop, Android, and WASM.
importance: 9
category: work
related_publications: false
---

[![zzxzzk115/vfilesystem - GitHub](https://gh-card.dev/repos/zzxzzk115/vfilesystem.svg?fullname=)](https://github.com/zzxzzk115/vfilesystem)

Part of the [Vultra Ecosystem](/projects/vultra_ecosystem/).

## Why This Exists

File access is one of those things every project needs and every platform does differently. vfilesystem encapsulates it once — normalized UTF-8 forward-slash paths, uniform `IFile` / `IFileSystem` interfaces — so the rest of the stack never touches platform quirks.

## Design

- **Backends**: PhysicalFileSystem, MemoryFileSystem, and a platform-aware factory covering desktop, Android, and WASM/Emscripten.
- **VirtualFileSystem** with a mount table for composing filesystems — the mechanism behind `res://`-style URIs in the engine.
- **Strict non-goals**: no asset loading, no streaming IO, no task scheduling, no global locking. Keeping the boundary tight is what keeps the library composable — higher-level concerns belong to [vasset](/projects/vasset/) and friends.

Built on [vbase](/projects/vbase/); consumed by [vasset](/projects/vasset/).
