---
id: response
title: Response (HTTP wrapper)
sidebar_label: Response
slug: /stdlib/response/
---

Type: `Response`

A small wrapper around HTTP response content returned by `fetch()`.

Methods

- `json()` -> Dict[str, Any]
  - Parse JSON content and return a dictionary. Raises `ClypRuntimeError` on
    decoding errors.
- `content()` -> str
  - Return raw response content.
- `text()` -> str
  - Return content coerced to text.

Example

```clyp
function example() returns null {
    let resp = fetch("https://api.example.com/data");
    let data = resp.json();
    print(data);
}
```

Notes

This is intentionally small: it stores response text and exposes JSON
parsing with error translation into `ClypRuntimeError`.
