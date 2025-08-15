---
id: slugify
title: slugify(text)
sidebar_label: slugify
slug: /stdlib/slugify/
---

Signature: `slugify(text: str) -> str`

Converts text to a URL-friendly slug: lowercases, replaces whitespace
with `-`, removes non-alphanumerics (keeping `-`) and collapses repeated
`-`.

Example

```clyp
function example() returns null {
    print(slugify("Hello, World!")); # hello-world
}
```
