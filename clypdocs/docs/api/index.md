---
id: api
title: API Reference
sidebar_label: API Reference
slug: /api/
---

This section documents public Python API surfaces provided by the
Clyp runtime and tooling, intended for plugin authors and advanced
users.

- `clyp.importer` — functions: `clyp_import(module_name, current_file_path)` and `clyp_include(clb_path, calling_file)` — load Clyp modules and binary
  bundles.
- `clyp.transpiler` — `parse_clyp`, `transpile_to_clyp` — core parsing and
  reverse-transpilation helpers.
- `clyp.cli` — command-line interface utilities.

Each module is documented with function signatures and examples. The API
documentation covers the core runtime interfaces for advanced users and
plugin developers.
