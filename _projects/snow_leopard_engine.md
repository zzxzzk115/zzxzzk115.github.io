---
layout: page
title: Snow Leopard Engine
description: A C++ / OpenGL 4.6 game engine built by a 7-person MSc team at Leeds — where the Vultra story began.
img: assets/img/projects/snow-leopard-engine.jpg
importance: 11
category: work
related_publications: false
---

[![SnowLeopardEngine/SnowLeopardEngine - GitHub](https://gh-card.dev/repos/SnowLeopardEngine/SnowLeopardEngine.svg?fullname=)](https://github.com/SnowLeopardEngine/SnowLeopardEngine)

<iframe width="100%" height="600" src="https://www.youtube.com/embed/z9oA2pugC6s?si=rY38cth64wPILTV_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Why This Exists

Snow Leopard Engine was the group project (COMP5530M, 2023/24) of the **High-Performance Graphics and Games Engineering** MSc programme at the University of Leeds: build a game engine from scratch, then prove it by shipping a game demo on top of it — the demo you can see in the video above.

## The Team

| Name                                             | Responsibility                                                       |
| ------------------------------------------------ | -------------------------------------------------------------------- |
| [Kexuan Zhang](https://zzxzzk115.github.io/)     | Leader. Architecture, Core Systems, Rendering, Editor, Audio, Report |
| Ziyu Min                                         | Associate Leader. Rendering, Shaders, Report                         |
| Jubiao Lin                                       | Physics, In-Game GUI, Poster                                         |
| [Simiao Wang](https://wangsimiao2000.github.io/) | Physics, Poster, Showcase Video                                      |
| Ruofan He                                        | GamePlay (Path-Finding)                                              |
| [Haodong Lin](https://leolanger.github.io/)      | Animation                                                            |
| Yanni Ma                                         | Editor                                                               |

## What We Built

- Modern OpenGL 4.6 renderer with PBR and post-processing effects
- **DzShader** — a Unity-like, data-driven shader format. This was my first experiment with data-driven shading, an idea that later matured into [vshadersystem](/projects/vshadersystem/).
- PhysX physics simulation, skeletal animation, simple in-game GUI, and an editor
- An attempted **C# scripting integration** (the .NET SDK was already in the build requirements) — we never finished the API bindings, but the idea survived: the private VultraEngine is now built around CoreCLR C# scripting.

## Retrospective

The biggest gain was the people: seven teammates, each with their own strengths. The biggest regret was time — coursework and exams competed hard for everyone's hours, and as the leader I absorbed a lot of pressure holding the project together. We didn't reach the polish I had hoped for, though what we shipped was still respectable.

Those regrets didn't go to waste. The shortcomings of a monolithic, OpenGL-era engine — and the wish to do it properly — are exactly what seeded the [Vultra Ecosystem](/projects/vultra_ecosystem/).

## License

MIT — see the [repository](https://github.com/SnowLeopardEngine/SnowLeopardEngine/blob/main/LICENSE).
