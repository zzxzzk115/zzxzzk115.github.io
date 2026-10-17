---
home: false
id: chip8-cpp
title: chip8-cpp
description: A C++23 CHIP-8 interpreter with SDL2 graphics, input and sound — the beginning of my emulator development journey.
legacyPath: /projects/chip8-cpp/
image: /assets/img/projects/chip8-showcase.png
imageAlt: The CHIP-8 interpreter displaying the IBM logo test ROM.
imageFit: contain
category: retro
tags: [C++23, SDL2, Emulation]
modes: [casual]
order: 20
status: Earlier emulator project
links:
  - label: Source
    href: https://github.com/zzxzzk115/chip8-cpp
    icon: brands:github
overview:
  purpose: Learn how an interpreter turns machine instructions into graphics, input and sound.
  contribution: I implemented a CHIP-8 interpreter in C++ with SDL2 handling the display, input and audio.
  outcome: The repository includes a ROM-loading application, an IBM logo demonstration and CMake build instructions.
---
![The CHIP-8 interpreter displaying the IBM logo test ROM.](/assets/img/projects/chip8-showcase.png)

chip8-cpp is my first step into writing an emulator. It implements the CHIP-8 instruction set and uses SDL2 for the display, input handling and sound.

## Running a ROM

The application accepts a CHIP-8 ROM path. The repository documents a CMake build with a C++23 compiler:

```sh
cmake -S . -B build
cmake --build build
```

Run the resulting `chip8cpp-app` executable with the path to a ROM. Its location depends on the build generator and configuration.

## Scope and source

This is a small learning project focused on CHIP-8. It is separate from my handheld adaptations of existing emulators, such as [WQX on GameShell](/projects/wqx-gameshell/) and [Mini vMac on PocketCHIP](/projects/pocketchip-macos/).

The screenshot is the repository's [IBM logo showcase](https://github.com/zzxzzk115/chip8-cpp/blob/master/media/ibm_logo_showcase.png). Source code and build instructions are available in the [MIT-licensed repository](https://github.com/zzxzzk115/chip8-cpp).
