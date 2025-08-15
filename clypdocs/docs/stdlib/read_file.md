---
id: read_file
title: read_file(path)
sidebar_label: read_file
slug: /stdlib/read_file/
---

Signature: `read_file(file_path: str, *args, **kwargs) -> str`

Reads and returns file contents. On error raises `ClypRuntimeError` with a
helpful message.

Example

```clyp
function example() returns null {
    let s = read_file("README.md");
    print(s[:200]);
}
```

Notes

Uses Python's `open()`; call with encoding keyword if needed.
