---
id: duration
title: duration(seconds)
sidebar_label: duration
slug: /stdlib/duration/
---

Signature: `duration(seconds: int) -> Callable[[Callable[[], None]], None]`

Returns a callable which runs the supplied function repeatedly for the
specified number of seconds.

Example

```clyp
function tick() returns null {
    print("tick")
}

# run tick for 2 seconds
let run = duration(2);
run(tick);
```
