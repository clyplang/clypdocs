---
id: retry_with_cooldown
title: retry_with_cooldown(function, retries=3, cooldown=1)
sidebar_label: retry_with_cooldown
slug: /stdlib/retry_with_cooldown/
---

Signature: `retry_with_cooldown(function: Callable[..., Any], retries: int = 3, cooldown: int = 1, *args, **kwargs) -> Any`

Retry a function up to `retries` times with `cooldown` seconds between
attempts. Raises `RuntimeError` if all retries fail.

Example

```clyp
function fragile() returns int {
    # may fail intermittently
}

let result = retry_with_cooldown(fragile, 3, 2);
```
