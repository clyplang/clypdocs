---
id: is_prime
title: is_prime(n)
sidebar_label: is_prime
slug: /stdlib/is_prime/
---

Signature: `is_prime(n: int) -> bool`

Determines primality for positive integers using a straightforward
trial method optimized by checking 2 and 3 and then stepping by 6.

Example

```clyp
function example() returns null {
    print(is_prime(17)); # true
}
```
