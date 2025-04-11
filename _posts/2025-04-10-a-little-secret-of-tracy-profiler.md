---
layout: post
title: A Little Secret of Tracy Profiler
date: 2025-04-10 21:35:00-0400
description: Possible Memory Leak of Tracy? Not exactly...
tags: performance-analysis tracy
categories: development tools
giscus_comments: true
related_posts: false
---

If you're using Tracy Profiler to analyze your program but haven't configured it yet, you might notice a steady increase in memory usage, which could eventually lead to an out-of-memory error.

This behavior might appear to be a memory leak caused by Tracy, but it's not. By default, Tracy stores all frame data captured from your running program until the profiler is connected. This can result in significant memory consumption. Thankfully, you can adjust this behavior by enabling the `TRACY_ON_DEMAND` CMake option or the `on-demand` feature in vcpkg. When enabled, Tracy will only store frame data after the profiler is connected to your program.

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

## Configuring with VCPKG

To enable the `on-demand` feature in vcpkg, update your `vcpkg.json` file as shown below:

```json
{
    "name": "tracy",
    "features": ["on-demand"],
    "version>=": "0.11.1#2"
}
```

While it might seem intuitive for `TRACY_ON_DEMAND` to be enabled by default, it is not. Hopefully, this blog post helps you configure Tracy Profiler effectively and avoid unnecessary memory usage.