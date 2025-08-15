---
id: fs
title: fs — Filesystem helpers
sidebar_label: fs
slug: /stdlib/fs/
---

The `fs` module provides simple file I/O helpers and small convenience
functions.

Functions

- `read(path)` — returns file contents as string
- `write(path, content)` — writes a string to a file
- `exists(path)` — boolean if path exists
- `join(*parts)` — join path parts

Examples:

```clyp
pyimport os
function read_example() returns null {
    let content = fs.read("./README.md");
    print(content[:200]);
}
```

Notes

This module delegates to Python's `pathlib` and `open` for the heavy
lifting.
