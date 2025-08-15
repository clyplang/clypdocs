---
id: stdlib-modules-time
title: time — Time utilities
sidebar_label: time
slug: /stdlib/modules/time/
---

A small time module exposing convenience types and functions. This
module provides lightweight wrappers over Python's `time` and
`datetime` functionality and introduces `TimeDelta`, `Time`, `Date`,
`DateTime`, and `Timezone` helper classes.

Constants

- `MINYEAR`, `MAXYEAR`, `UTC`

Types

- `TimeDelta` — duration wrapper (days, seconds, microseconds)
- `Time` — time-of-day helper with `now()` and properties
- `Date` — date helper with `today()`, `fromtimestamp()`, `fromisoformat()`
- `DateTime` — full datetime wrapper with `now()`, `utcnow()`, `fromtimestamp()`
- `Timezone` — simple timezone object with `utcoffset()`

Functions

- `sleep(seconds: float) -> None`
- `time() -> float` — epoch seconds
- `monotonic() -> float`
- `perf_counter() -> float`
- `strftime(format: str, timestamp: float) -> str`
- `strptime(date_string: str, format: str) -> struct_time`
- `now() -> float` — timestamp now
- `format(timestamp: float) -> str` — ISO-formatted string (UTC)
- `today() -> date`
- `fromtimestamp(timestamp: float) -> DateTime`
- `utcnow() -> DateTime`
- `isoformat(dt_obj: DateTime) -> str`

Examples

```clyp
function example() returns null {
    print(time.time());
    print(time.strftime("%Y-%m-%d", time.time()));
    let dt = time.now();
    print(time.isoformat(dt));
}
```

Notes & compatibility

- This module is marked experimental in-source — for production-grade
  date/time handling prefer using `pyimport datetime` directly.
- `ping`-style behavior and timezone handling can vary between OSes and
  Python versions.
