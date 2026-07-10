---
layout: page
title: vbase
description: The foundational core library of the Vultra ecosystem — minimal, engine-agnostic building blocks with no global state.
importance: 8
category: work
related_publications: false
---

[![zzxzzk115/vbase - GitHub](https://gh-card.dev/repos/zzxzzk115/vbase.svg?fullname=)](https://github.com/zzxzzk115/vbase)

Part of the [Vultra Ecosystem](/projects/vultra_ecosystem/).

## Why This Exists

Every project ends up re-implementing the same handful of things — IDs, error handling, module wiring, events. vbase encapsulates the functionality I use most, once, properly, so that every library and project in the ecosystem (and beyond it) can share the same foundation instead of growing its own.

## Design Philosophy

- **Minimal dependencies** — the foundation must not drag a dependency tree behind it.
- **No global runtime state** — libraries built on vbase stay embeddable and testable.
- **Clear ownership** — explicit lifetimes over hidden magic.
- **Header-first**, **engine-independent** — usable in any C++ project, not just Vultra.

## What's Inside

Utilities: UUID, StrongID, `Result<T, E>`, StringView, Span, BinaryReader/Writer, ScopeExit, Pimpl. Architectural primitives: `IModule` / ModuleRegistry, ServiceRegistry, Signal, EventBus, Singleton.

[vfilesystem](/projects/vfilesystem/) and [vasset](/projects/vasset/) build directly on it.
