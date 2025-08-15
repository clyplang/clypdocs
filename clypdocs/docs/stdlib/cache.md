---
id: cache
title: cache(ttl)
sidebar_label: cache
slug: /stdlib/cache/
---

Signature: `cache(ttl: Union[int,str,float]) -> Callable[[Callable[..., Any]], Callable[..., Any]]`

Decorator that caches results for the given TTL. `ttl` may be a number
(in seconds) or a string like `"5s"`, `"2m"`, `"1h"`.

Example

```clyp
@cache("5m")
function compute() returns int { ... }
```
