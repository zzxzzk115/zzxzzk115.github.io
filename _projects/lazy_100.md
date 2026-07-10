---
layout: page
title: Lazy-100
description: A fantasy game console in the spirit of PICO-8 / TIC-80 — built to prove VRI can carry a complete product, and because retro games are great.
img: assets/img/projects/lazy-100.gif
importance: 1
category: fun
related_publications: false
---

[![zzxzzk115/Lazy-100 - GitHub](https://gh-card.dev/repos/zzxzzk115/Lazy-100.svg?fullname=)](https://github.com/zzxzzk115/Lazy-100)

**Play it in your browser:** [zzxzzk115.github.io/Lazy-100](https://zzxzzk115.github.io/Lazy-100/)

![Lazy-100 showcase](https://raw.githubusercontent.com/zzxzzk115/Lazy-100/master/media/showcase.gif)

## Why This Exists

Two reasons. First, the serious one: Lazy-100 is the proof that [VRI](/projects/vultra_ecosystem/#vri) can carry a _mature, complete product_ — a real application exercising cross-backend rendering and web deployment end to end, not just triangle demos. Second, the honest one: I have always loved retro games, and building a fantasy console in the spirit of PICO-8 / TIC-80 / BASIC8 is its own reward.

(The name? **Lazy_V** is my online handle; **100** just sounds nice.)

## What It Is

- A **320×240** indexed-color screen with a 256-color palette, 16×16 sprites, and 4-channel audio.
- A complete **in-console editor suite**: shell, code, sprite, map, sfx, and music editors — you make games _inside_ the console.
- Scripting in **Lua 5.4** (via sol2), with a bold twist: a **dual-VM architecture** that routes PICO-8 carts to a vendored z8lua VM, so PICO-8 games run natively. Purely for fun — but it works.
- Carts are `.lz100` text files or shareable **`.lz100.png`** images with the cart embedded in the picture.
- Built on [VRI](/projects/vultra_ecosystem/#vri) for rendering, SDL3, and miniaudio; runs on desktop and in the browser.

## Looking Ahead

Editor polish and more advanced creative tools are on the wishlist — including [strudel](https://strudel.cc/)-style live-coded music making. A companion catalog repo, [Lazy-100-games](https://github.com/zzxzzk115/Lazy-100-games), collects carts.
