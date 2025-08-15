---
id: benchmark
title: benchmark(func, iterations=1000)
sidebar_label: benchmark
slug: /stdlib/benchmark/
---

Signature: `benchmark(func: Callable[[], Any], iterations: int = 1000) -> float`

Measure average execution time of `func` over `iterations` runs and
return the average seconds per run.

Example

```clyp
function work() returns null { ... }
print(benchmark(work, 100));
```
