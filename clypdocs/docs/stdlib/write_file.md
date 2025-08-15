---
id: write_file
title: write_file(path, content)
sidebar_label: write_file
slug: /stdlib/write_file/
---

Signature: `write_file(file_path: str, content: str, *args, **kwargs) -> None`

Writes `content` to the given path. Raises `ClypRuntimeError` on I/O
errors.

Example

```clyp
function example() returns null {
    write_file("out.txt", "Hello\n");
}
```
