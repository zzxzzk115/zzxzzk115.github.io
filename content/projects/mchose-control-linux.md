---
id: "mchose-control-linux"
title: "MCHOSE Control Linux"
description: "A Linux GUI and CLI for MCHOSE mice, with DPI and sensor settings, per-application presets and KDE desktop integration."
legacyPath: "/projects/mchose-control-linux/"
image: "/assets/img/projects/enriched/mchose-control.webp"
category: "fun"
tags: ["Rust","Linux","KDE","Desktop"]
modes: ["casual"]
order: 7
links: [{"label":"Source","href":"https://github.com/zzxzzk115/mchose-control-linux","icon":"brands:github"}]
overview:
  purpose: "Configure MCHOSE mouse hardware and desktop presets from Linux."
  contribution: "I extended Alexandre Frih’s mchose-linux with a GUI, CLI, per-application presets and KDE desktop integration, retaining its HID protocol implementation."
  outcome: "The tool includes tray operation, automatic preset switching and Chinese/English interfaces. It is an independent project."
---
This Linux desktop tool configures MCHOSE mouse DPI, polling rate, sensor rotation and other hardware settings. It includes a GUI, a CLI, editable presets and automatic switching based on the foreground application.

![MCHOSE Control Linux running on KDE Plasma](/assets/img/projects/enriched/mchose-control.webp)

Desktop integration covers tray operation, single-instance activation and KDE mouse settings. The interface supports Chinese and English.

This is an independent derivative of [Alexandre Frih's mchose-linux](https://github.com/alexfrih/mchose-linux), retaining its HID protocol implementation and extending the interface and desktop integration. It is not official MCHOSE software.

