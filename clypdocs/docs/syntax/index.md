---
id: syntax
title: Clyp Syntax Reference
sidebar_label: Syntax
slug: /syntax/
---

This reference documents the Clyp language syntax in detail with
examples and notes on how constructs map to Python in the transpiler.

## Overview and tokens

- File format: `.clyp`
- Blocks: `{ ... }` or indentation-style converted to Python
- Statements may end with `;` but the parser normalizes semicolons to
  newlines
- Comments: `#` for single-line comments
- Strings: single, double, and triple quoted strings like Python

## Whitespace and blocks

Clyp uses braces for blocks but the transpiler supports line/indentation
analysis. Opening `{` is normalized into a `:` and an indentation
increase in the generated Python. Closing `}` reduces indentation.

Example:

```clyp
function greet(name) returns null {
    print("Hello " + name);
}
```

transpiles to (roughly):

```python
def greet(name) -> None:
    print("Hello " + name)
```

## Declarations: function, method, let, class

- function — declares a top-level function. Syntax:

```clyp
function name(arg1, arg2) returns Type {
    ...
}
```

- let — a lightweight declaration that becomes assignment in Python:

```clyp
let x = 10;
```

is equivalent to `x = 10` in the generated Python.

- class — similar to Python `class` but supports inline field type
  annotations like `int count = 0` which is translated to `count: int = 0`.

Example:

```clyp
class Counter {
    int count = 0;
    increment(self) returns null {
        self.count = self.count + 1;
    }
}
```

## Control flow

- if / else if / else: `else if` is normalized to `elif` in Python.
- for loops: `for x in collection { ... }` maps to Python `for`.
- repeat — a convenience construct for fixed-count loops.
- range x to y — sugar for `range(x, y + 1)`.

## Imports and modules

Clyp supports:

- `pyimport` — raw Python import
- `import module` — Clyp import handled by `clyp_import(...)` which can
  resolve `.clyp` files or packages with `__init__.clyp`.
- `from module import x` — maps to module member extraction via
  `clyp_import(...)` when module is a Clyp module

Std modules that are part of `clyp.std` are detected and emitted as
regular Python imports so they interoperate well with Python runtime.

## Expressions and operators

- `unless` — sugar for `if not`.
- `is not` -> `!=`, `is` -> `==` when used outside strings.

Function calls may end with `;` which is stripped if parentheses balance.

## Strings and comments

Strings behave like Python strings. The transpiler takes care to avoid
replacing tokens inside strings by using a pre-pass that isolates string
literals.

## Examples

Hello world:

```clyp
function main() returns null {
    print("Hello, world!");
}
```

Class and methods example (showing implicit self injection):

```clyp
class Greeter {
    string message = "Hello";

    greet(name) returns null {
        print(self.message + ", " + name);
    }
}
```

## Edge cases & notes

- The transpiler normalizes semicolons and braces before parsing to
  Python; odd combinations can still produce surprising mappings—write
  clear, idiomatic Clyp for best results.
- Module resolution consults `clypPackages` and the installed wheel
  `clyp` package for bundled packages.
- If you need to import Python modules directly, use `pyimport`.

---

Next: types, stdlib and API docs.
