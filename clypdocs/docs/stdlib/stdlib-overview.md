---
id: stdlib-overview
title: Standard Library Overview
sidebar_label: Overview
slug: /stdlib/overview/
---

This page summarizes the helpers exposed by `clyp.stdlib` and how they
are intended to be used. Each helper is documented in its own page
(see Helpers category in the sidebar).

`clyp.stdlib` focuses on small, well-tested utilities: file I/O,
string helpers, simple network helpers (lightweight wrappers), timing
and caching helpers, and small algorithms.

## Notes

The implementations are thin wrappers over the Python standard
library and provide consistent `ClypRuntimeError` exceptions for
error conditions.
