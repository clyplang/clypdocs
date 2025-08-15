---
id: to_roman_numerals
title: to_roman_numerals(num)
sidebar_label: to_roman_numerals
slug: /stdlib/to_roman_numerals/
---

Signature: `to_roman_numerals(num: int) -> str`

Convert integers (1–3999) to Roman numerals. Raises `ClypRuntimeError`
if out of range.

Example

```clyp
function example() returns null {
    print(to_roman_numerals(1999)); # MCMXCIX
}
```
