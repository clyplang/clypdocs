---
id: tooling
title: Tooling and CLI
sidebar_label: Tooling
slug: /tooling/
---

Clyp ships with a CLI entry point (`clyp.cli`) supporting several
commands used during development and execution. The primary workflows
are:

- `clyp run <file>` — execute a `.clyp` file (interpreted mode)
- `clyp format <file>` — format a Clyp file using the internal
  transpile/format/transpile flow
- `py2clyp` — transpile Python to Clyp (reverse operation)

Internally the transpiler lives in `clyp/transpiler.py` and performs
source-level transformations; the formatter uses `black` on the
transpiled Python.

Tips

- For development use `pip install -e .[dev]` and the `uv` helper used
  by the repository.
- The project uses `typeguard` to enforce runtime type checks in
  generated Python code.
