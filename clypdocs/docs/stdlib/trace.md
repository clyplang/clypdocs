---
id: trace
title: trace(func)
sidebar_label: trace
slug: /stdlib/trace/
---

Signature: `trace(func: Callable[..., Any]) -> Callable[..., Any]`

Decorator that prints arguments and return value for each call. Useful
for debugging small functions.

Example

```clyp
@trace
function add(a,b) returns int { return a + b }
```
