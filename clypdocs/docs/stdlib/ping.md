---
id: ping
title: ping(host, timeout=1)
sidebar_label: ping
slug: /stdlib/ping/
---

Signature: `ping(host: str, timeout: int = 1) -> Union[float, bool]`

Ping a host and return the round-trip time in milliseconds if present,
`false` if unreachable. Raises `ClypRuntimeError` on command failures.

Notes

The implementation calls the system `ping` command; options vary
between OSes (the code uses Linux-style flags). On Windows the
behavior may differ — consider using a platform-aware wrapper in
production.
