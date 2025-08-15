---
id: fetch
title: fetch(url, timeout=10)
sidebar_label: fetch
slug: /stdlib/fetch/
---

Signature: `fetch(url: str, timeout: int = 10) -> Response`

Fetches the given URL using `requests.get` and returns a `Response`
wrapper. Raises `ClypRuntimeError` on network errors or non-2xx status
codes.

Example

```clyp
function example() returns null {
    let r = fetch("https://httpbin.org/get");
    print(r.text());
}
```

Notes

- Uses `requests` under the hood; ensure `requests` is available in the
  environment.
- `timeout` is in seconds.
