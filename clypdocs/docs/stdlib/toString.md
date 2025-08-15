---
id: tostring
title: toString(value)
sidebar_label: toString
slug: /stdlib/toString/
---

Signature: `toString(value: Any) -> str`

Simple helper that calls `str()` on the value and returns it. Useful in
templates or quick logging.

Example

```clyp
function example() returns null {
    print(toString(123)); # "123"
}
```
