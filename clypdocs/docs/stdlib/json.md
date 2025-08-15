---
id: json
title: json — JSON helpers
sidebar_label: json
slug: /stdlib/json/
---

The `json` submodule wraps Python's `json` for convenience.

Functions

- `loads(s)` — parse JSON string to native structures
- `dumps(o, pretty=false)` — serialize to JSON; `pretty` formats with
  indentation

Example:

```clyp
pyimport json as pyjson
function example() returns null {
    let data = json.loads('{"a": 1}');
    print(json.dumps(data, true));
}
```
