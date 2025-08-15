---
id: random_choice_weighted
title: random_choice_weighted(choices)
sidebar_label: random_choice_weighted
slug: /stdlib/random_choice_weighted/
---

Signature: `random_choice_weighted(choices: List[Tuple[Any, float]]) -> Any`

Select an item at random from `choices`, a list of `(item, weight)`
pairs.

Example

```clyp
let pick = random_choice_weighted([("a", 1.0), ("b", 2.0)]);
print(pick);
```
