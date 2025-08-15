---
id: chance
title: chance(percentage)
sidebar_label: chance
slug: /stdlib/chance/
---

Signature: `chance(percentage: Any) -> bool`

Return true with the given percentage probability. Accepts numeric
values or strings like `"25%"`.

Example

```clyp
function example() returns null {
    if chance("50%") {
        print("Heads")
    }
}
```
