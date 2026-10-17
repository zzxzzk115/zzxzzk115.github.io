---
home:
  academic:
    order: 2
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
overview:
  purpose: "Explore real-time global illumination with Light Propagation Volumes for my MSc dissertation."
  contribution: "I implemented an LPV renderer on VGFW, alongside cascaded shadows, ambient occlusion and screen-space reflections."
  outcome: "The repository includes the renderer and views of the LPV contribution; the image below shows its rendering output."
---
This renderer was developed for my MSc dissertation. It implements Light Propagation Volumes (LPV) for real-time global illumination on top of [VGFW](/projects/vgfw/).

![Light Propagation Volumes rendering result](/assets/img/projects/enriched/lpv.webp)

The rendering pipeline also includes cascaded shadow maps, horizon-based ambient occlusion, screen-space reflections, FXAA, an ACES filmic tone-mapping approximation and bloom. The repository contains the implementation and additional views of the LPV contribution.

The tone-mapping shader uses the fitted curve described by [Krzysztof Narkowicz](https://knarkowicz.wordpress.com/2016/01/06/aces-filmic-tone-mapping-curve/). This is an approximation, rather than a complete ACES colour-management pipeline.

The project credits [VGFW](https://github.com/zzxzzk115/vgfw), [FrameGraph-Example](https://github.com/skaarj1989/FrameGraph-Example), and the LPV implementation notes linked in its README.

