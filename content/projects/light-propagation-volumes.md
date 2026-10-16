---
id: "light-propagation-volumes"
title: "Light Propagation Volumes"
description: "My MSc dissertation renderer, implementing Light Propagation Volumes alongside cascaded shadows, ambient occlusion and screen-space reflections."
legacyPath: "/projects/light-propagation-volumes/"
image: "/assets/img/projects/enriched/lpv.webp"
category: "work"
tags: ["C++","Global illumination","OpenGL","MSc"]
modes: ["academic","casual"]
order: 2
status: "MSc dissertation project"
links: [{"label":"Source","href":"https://github.com/zzxzzk115/Light-Propagation-Volumes","icon":"brands:github"}]
---
This renderer was developed for my MSc dissertation. It implements Light Propagation Volumes (LPV) for real-time global illumination on top of [VGFW](/projects/vgfw/).

![Light Propagation Volumes rendering result](/assets/img/projects/enriched/lpv.webp)

The rendering pipeline also includes cascaded shadow maps, horizon-based ambient occlusion, screen-space reflections, FXAA, ACES tone mapping and bloom. The repository contains the implementation and additional views of the LPV contribution.

The project credits [VGFW](https://github.com/zzxzzk115/vgfw), [FrameGraph-Example](https://github.com/skaarj1989/FrameGraph-Example), and the LPV implementation notes linked in its README.

