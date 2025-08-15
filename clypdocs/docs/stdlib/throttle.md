---
id: throttle
title: throttle(function, limit=1, period=1)
sidebar_label: throttle
slug: /stdlib/throttle/
---

Signature: `throttle(function: Callable[..., Any], limit: int = 1, period: int = 1) -> Callable[..., Any]`

Return a throttled wrapper that allows at most `limit` calls per
`period` seconds and raises `RuntimeError` when exceeded.

Example

```clyp
function ping() returns null { ... }
let safe_ping = throttle(ping, 5, 60); # 5 calls per 60s
```
