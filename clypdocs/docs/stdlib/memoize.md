---
id: memoize
title: memoize(func)
sidebar_label: memoize
slug: /stdlib/memoize/
---

Signature: `memoize(func: Callable[..., Any]) -> Callable[..., Any]`

A simple memoization decorator that caches results by arguments. Uses a
tuple of args and a frozenset of kwargs items as the cache key.

Example

```clyp
@memoize
function fib(n) returns int {
    return n if n < 2 else fib(n-1) + fib(n-2);
}
```
