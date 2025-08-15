---
id: chunk
title: chunk(items, size)
sidebar_label: chunk
slug: /stdlib/chunk/
---

Signature: `chunk(items: List[Any], size: int) -> List[List[Any]]`

Split a list into chunks of the specified size. Validates inputs and
raises `ValueError` on bad inputs.

Example

```clyp
print(chunk([1,2,3,4,5], 2)); # [[1,2],[3,4],[5]]
```
