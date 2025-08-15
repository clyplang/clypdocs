---
id: time_it
title: time_it(func)
sidebar_label: time_it
slug: /stdlib/time_it/
---

Signature: `time_it(func: Callable[..., Any]) -> Callable[..., Any]`

Decorator that times execution of `func`, prints the elapsed time, and
returns the result.

Example

```clyp
@time_it
function work() returns null {
    # expensive work
}
```
