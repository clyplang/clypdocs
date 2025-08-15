---
id: stdlib-modules-random
title: random — Random utilities
sidebar_label: random
slug: /stdlib/modules/random/
---

Small convenience wrappers around Python's `random` module.

Exports

- `random() -> float` — uniform 0.0–1.0
- `seed(seed: int) -> None` — seed RNG
- `randint(a: int, b: int) -> int` — inclusive random integer
- `choice(seq: list) -> Any` — pick random element
- `shuffle(seq: list) -> None` — in-place shuffle
- `uniform(a: float, b: float) -> float` — float in [a, b)
- `randfloat(a: float, b: float) -> float` — alias for `uniform`
- `sample(seq: list, k: int) -> list` — k unique elements

Examples

```clyp
function example() returns null {
    random.seed(42);
    print(random.randint(1, 6));
    let items = [1,2,3,4];
    random.shuffle(items);
    print(items);
}
```

Notes

- These functions directly call Python's `random` module and behave the
  same way; see Python docs for details on determinism and seeding.
