---
id: is_empty
title: is_empty(value)
sidebar_label: is_empty
slug: /stdlib/is_empty/
---

Signature: `is_empty(value: Any) -> bool`

Returns `true` if `value` is `null`/`None` or an empty container
(string/list/dict/set/tuple).

Example

```clyp
function example() returns null {
    print(is_empty("")); # true
    print(is_empty([]));   # true
}
```

Notes

- For non-container values, returns `false`.
