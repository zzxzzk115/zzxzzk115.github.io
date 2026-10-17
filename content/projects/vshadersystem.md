---
home: false
id: "vshadersystem"
title: "vshadersystem"
description: "A Slang-based shader compilation pipeline with material reflection, keyword variants and portable runtime shader libraries."
legacyPath: "/projects/vshadersystem/"
category: "library"
tags: ["C++","Slang","Shaders","Tools"]
modes: ["academic","casual"]
order: 9
links: [{"label":"Source","href":"https://github.com/zzxzzk115/vshadersystem","icon":"brands:github"}]
imageFit: contain
image: "/assets/img/projects/enriched/vshadersystem.svg"
imageAlt: "Expand Slang keyword variants, compile shader stages, and bundle bytecode with reflection."
---
![Expand Slang keyword variants, compile shader stages, and bundle bytecode with reflection.](/assets/img/projects/enriched/vshadersystem.svg)

vshadersystem separates offline shader compilation from runtime loading. Its `vshaderc` compiler processes Slang source, material attributes, reflection and keyword variants; the runtime consumes precompiled libraries without linking Slang.

Version 1.0 replaced the earlier INI-style GLSL language with Slang user-defined attributes. Slang emits SPIR-V and WGSL directly. Outputs include `.vshbin`, `.vshlib` and reusable `.vshslang` source packs.

The desktop compiler prepares assets for desktop, Android and WebAssembly consumers. The [repository documentation](https://github.com/zzxzzk115/vshadersystem#overview) describes the format change and authoring workflow.

