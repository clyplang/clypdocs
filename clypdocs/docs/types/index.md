---
id: types
title: Types and Type System
sidebar_label: Types
slug: /types/
---

This page documents Clyp's type system, primitive types, annotations,
and how they map to Python types when transpiled.

## Type philosophy

Clyp supports optional static-looking type annotations that are
enforced at runtime by `typeguard` when the transpiled Python is
executed. Types are primarily documentation and runtime checks; they do
not currently power a separate static typechecker.

## Primitive types

- int — integer numbers
- float — floating point numbers
- string — text (alias `string`) mapped to Python `str`
- bool — boolean values
- null — null value (maps to Python `None`)
- any — a dynamic catch-all type

Examples:

```clyp
function add(int a, int b) returns int {
    return a + b;
}

function greet(string name) returns null {
    print("Hello " + name);
}
```

## Variable declarations

Clyp supports declaring variables with explicit types using the
`<type> <name> = <value>;` syntax. These declarations are translated by
the transpiler into Python variable annotations (PEP 526). Runtime type
checks provided by `typeguard` still apply when the transpiled code is
executed.

Examples:

```clyp
int counter = 8;
float ratio = 0.5;
string title = "Hello";
bool active = true;
any anything = [1, "two", null];
```

Transpiled Python equivalent (illustrative):

```python
# Transpiler output example
counter: int = 8
ratio: float = 0.5
title: str = "Hello"
active: bool = True
anything: typing.Any = [1, "two", None]
```

Notes:
- You may declare typed variables at top-level or within function scope.
- Uninitialized fields or variables can use `null` to indicate `None`.
- Use `any` when the value may hold multiple unrelated types.

## Collections

- list, dict, set, tuple — use Python-like literals and behaviors.
- Type annotations for generics are permitted in Clyp annotations and are
  passed through to the Python annotations (e.g., `list[int]`).

## Classes and fields

Class fields can be declared with types inline. The transpiler converts
`int count = 0` into `count: int = 0` on the Python side.

```clyp
class Point {
    float x = 0.0;
    float y = 0.0;
}
```

Methods may declare typed parameters and a return type. Inside classes,
method headers can omit the `function` keyword.

## Null and optionals

Use `null` for missing values. To express an optional type in annotations
use `Type | null` at present (the runtime checks are provided by
`typeguard`).

## Interop and runtime checks

Clyp-generated Python files include `typeguard.install_import_hook()` at
the top so imported modules have runtime type checking applied. This
makes type annotations useful for catching incorrect values at runtime.

## Best practices

- Prefer explicit annotations for public APIs.
- Use `any` when the value can be many things.
- Keep classes small and focused; rely on `typeguard` to validate
  boundary conditions.

---

Next: standard library documentation and examples.
