---
home: false
id: nw-unity
title: NW-Unity
description: A Python command-line tool that packages Unity WebGL output into NW.js applications, including a GameShell packaging mode.
legacyPath: /projects/nw-unity/
image: /assets/img/projects/nw-unity-gameshell.jpg
imageAlt: The Hello, NW-Unity sample running on a GameShell handheld.
category: fun
tags: [Python, Unity WebGL, NW.js, GameShell]
modes: [casual]
order: 22
status: Earlier tool project
links:
  - label: Source
    href: https://github.com/zzxzzk115/NW-Unity
    icon: brands:github
overview:
  purpose: Package a Unity WebGL export for use in a desktop application or on a GameShell handheld.
  contribution: I built a Python CLI that prepares the NW.js application folder and exposes window and platform settings.
  outcome: The repository documents the nwunity package and includes Windows and GameShell sample captures.
---
![The Hello, NW-Unity sample running on GameShell.](/assets/img/projects/nw-unity-gameshell.jpg)

NW-Unity packages an existing Unity WebGL output folder into an NW.js application folder. It is part of my earlier work bringing games and software to GameShell.

## Packaging workflow

The `nwunity` CLI accepts the WebGL export directory and application name, along with options for window size, fullscreen mode, resizing, icons and platform selection. A dedicated GameShell mode handles that target's packaging workflow.

The [repository README](https://github.com/zzxzzk115/NW-Unity#quick-usage) documents installation and example commands. Its Unity, NW.js and GameShell setup notes reflect the versions used for this earlier project.

## Handheld demonstration

The cover is the repository's [GameShell sample photograph](https://github.com/zzxzzk115/NW-Unity/blob/master/images/run_on_gameshell.JPG). The repository also includes a Windows sample capture and GameShell-specific setup notes.
