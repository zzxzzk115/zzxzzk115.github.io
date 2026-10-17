---
home: true
id: a-little-secret-of-tracy-profiler
title: A Little Secret of Tracy Profiler
description: How Tracy buffers profiling events before connection, and what on-demand capture changes.
legacyPath: /featured-posts/2025/a-little-secret-of-tracy-profiler/
category: development
categories: [development, tools]
tags:
  - performance-analysis
  - tracy
modes:
  - academic
  - casual
order: 100
date: 2025-04-11T01:35:00.000Z
comments: true
---
Tracy's default client configuration collects profiling events before the profiler connects. In a heavily instrumented application, queued events can consume substantial memory while no profiler is attached. This buffering can explain growing memory use, but it does not rule out an unrelated memory leak.

Enable `TRACY_ON_DEMAND` to collect profiling events only while a profiler connection is established. The CMake option and vcpkg feature below enable that compile-time setting. On-demand capture omits earlier events, so it trades startup history for lower disconnected capture overhead.

This behaviour is documented in the [Tracy v0.11.1 manual, “On-demand profiling”](https://github.com/wolfpld/tracy/blob/v0.11.1/manual/tracy.tex). It is not a general guarantee that the application's memory use will stop growing or that previously allocated profiling storage will be returned to the operating system.

## Configuring with CMake

To enable `TRACY_ON_DEMAND` in a CMake project, you can use the following configuration:

```cmake
include(FetchContent)
FetchContent_Declare(Tracy
  GIT_REPOSITORY https://github.com/wolfpld/tracy
  GIT_TAG v0.11.1
)
set(TRACY_ON_DEMAND ON CACHE BOOL "" FORCE) # Enable on-demand mode
FetchContent_MakeAvailable(Tracy)
```

## Configuring with vcpkg

To enable the `on-demand` feature in vcpkg, add Tracy to your `vcpkg.json` dependencies as shown below. Retain your project’s existing registry baseline and other dependencies when using version constraints:

```json
{
  "dependencies": [
    {
      "name": "tracy",
      "features": ["on-demand"],
      "version>=": "0.11.1#2"
    }
  ]
}
```

While it might seem intuitive for `TRACY_ON_DEMAND` to be enabled by default, it is not. Hopefully, this blog post helps you configure Tracy Profiler effectively and avoid unnecessary memory usage.
