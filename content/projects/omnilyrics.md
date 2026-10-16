---
id: omnilyrics
title: OmniLyrics
description: Cross-platform desktop, terminal and status-bar lyrics with GUI,
  CLI/TUI, bilingual karaoke, .NET 10 and Avalonia.
legacyPath: /projects/omnilyrics/
image: /assets/img/projects/enriched/omnilyrics-current.webp
category: fun
tags:
  - .NET
  - Avalonia
modes:
  - casual
order: 4
comments: false
status: Desktop releases available
links:
  - label: Source
    href: https://github.com/zzxzzk115/OmniLyrics
    icon: brands:github
  - label: Downloads
    href: https://github.com/zzxzzk115/OmniLyrics/releases
    icon: solid:download
---
## Why This Exists

I wanted a lyric tool that worked as a desktop window, in a terminal and in a status bar on Windows, macOS and Linux. OmniLyrics shares a .NET core across an Avalonia GUI, a CLI and a TUI.

## Design

- Five GUI layouts, bilingual karaoke lyrics, shared preferences and queue caching.
- CLI/TUI interfaces, including single-line and JSON output for status bars and widgets.
- Platform playback integrations, including MPRIS on Linux, SMTC on Windows, and native Apple Music / Spotify integration on macOS.
- Playback control from scripts and keybindings.
- .NET 10 and Avalonia. I was already familiar with Avalonia from earlier projects.

## Showcase

Current Focus layout:

![OmniLyrics Focus layout](/assets/img/projects/enriched/omnilyrics-current.webp)

Earlier Windows GUI:

![GUI Windows](https://raw.githubusercontent.com/zzxzzk115/OmniLyrics/master/media/images/gui_windows.png)

Windows Terminal:

![CLI on Windows](https://raw.githubusercontent.com/zzxzzk115/OmniLyrics/master/media/images/cli_windows_terminal.png)

Linux Waybar:

![Waybar line mode](https://raw.githubusercontent.com/zzxzzk115/OmniLyrics/master/media/images/cli_linux_waybar.jpg)

## Status

The current README documents the 0.4.2 release, including signed and notarized macOS GUI applications. GUI and CLI/TUI downloads are separate and share preferences. Portable builds include the .NET runtime.

See the [user guide](https://github.com/zzxzzk115/OmniLyrics/blob/master/docs/user-guide.md) for playback integrations, layouts and settings.
