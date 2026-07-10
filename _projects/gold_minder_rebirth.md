---
layout: page
title: Gold Miner Rebirth
description: A faithful remake of the classic Flash game, built with LÖVE2D for GameShell, Trimui, and other retro gaming handhelds.
img: assets/img/projects/gold-miner-gameshell-project.jpg
importance: 2
category: fun
related_publications: false
---

[![zzxzzk115/GoldMiner-Rebirth - GitHub](https://gh-card.dev/repos/zzxzzk115/GoldMiner-Rebirth.svg?fullname=)](https://github.com/zzxzzk115/GoldMiner-Rebirth)

<iframe frameborder="0" src="https://itch.io/embed/1548293" width="552" height="167"><a href="https://lazy-v.itch.io/goldminer-rebirth">GoldMiner-Rebirth by Lazy_V</a></iframe>

## Why This Exists

My friends and I loved this Flash game as kids, so I decided to bring it back — not as a reinterpretation, but as a faithful recreation, running on the retro gaming handhelds I collect: GameShell, Trimui Smart Pro and Brick, and anything else that can run LÖVE2D.

## Design Notes

**Why LÖVE2D?** I originally started on raylib, but on the GameShell it was unstable — even texture loading could fail. LÖVE 11.1 ran reliably on the handheld, so I switched, and the game inherited LÖVE's portability across every device the runtime supports.

**Keeping it authentic.** The most fun part of the project was learning to **unpack the original `.swf` file** — extracting the ActionScript and the original asset files. That's what makes the remake taste like the original: same art, same feel, not a lookalike.
