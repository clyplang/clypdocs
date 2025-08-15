---
id: stdlib-modules-math
title: math — Math utilities
sidebar_label: math
slug: /stdlib/modules/math/
---

This module provides small math utilities and constants built on top of
Python's `math` module.

Exports

- Constants: `E`, `PI`, `TAU`
- Functions:
  - `sqrt(x: float) -> float`
  - `add(a, b)`
  - `sub(a, b)`
  - `mul(a, b)`
  - `div(a, b)`
  - `sin(x: float) -> float`
  - `cos(x: float) -> float`
  - `tan(x: float) -> float`
  - `log(x: float, base: float = math.e) -> float`
  - `factorial(n: int) -> int`
  - `exp(x: float) -> float`
  - `pow(base: float, exp: float) -> float`
  - `floor(x: float) -> int`
  - `ceil(x: float) -> int`
  - `hypot(x: float, y: float) -> float`
  - `radians(degrees: float) -> float`
  - `degrees(radians: float) -> float`

Examples

```clyp
function example() returns null {
    print(math.PI);
    print(math.sqrt(2));
    print(math.radians(180)); # pi
}
```

Notes

- This module is intentionally small and mirrors Python's math API for
  predictable behavior.
- `factorial()` validates `n` is non-negative and raises a Python
  `ValueError` for invalid input.
