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

**New in 2.1.0**: Enhanced type system with optional types (`int?`), type aliases (`type UserId = int`), and enums for improved type safety and expressiveness.

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

## New Type Features (2.1.0)

### Optional Types

Optional types explicitly handle nullable values with `?` syntax:

```clyp
# Optional parameters with defaults
function greet(str name, str? title = null) returns str {
    let prefix = title ?? "Mr./Ms.";
    return "{prefix} {name}";
}

# Optional return types
function findUser(int id) returns User? {
    return id > 0 ? getUser(id) : null;
}

# Optional properties in classes
class User {
    int id;
    str name;
    str? email = null;  # Optional email field
    int? age = null;    # Optional age field
}
```

### Type Aliases

Type aliases create meaningful names for complex types:

```clyp
# Basic type aliases
type UserId = int;
type UserName = str;
type Timestamp = int;

# Complex type aliases
type UserData = Dict[str, Any];
type ApiResponse = Dict[str, Union[str, int, List[Any]]];
type EventHandler = Function[List[Any], null];

# Using type aliases in functions
function createUser(UserId id, UserName name) returns UserData {
    return {
        "id": id,
        "name": name,
        "created": getCurrentTimestamp()
    };
}

function processUsers(List[UserData] users) returns List[UserId] {
    return [user["id"] for user in users if user["active"]];
}
```

### Enums

Enums provide named constants with better type safety:

```clyp
# Simple enum
enum Status {
    Active,
    Inactive,
    Pending,
    Suspended
}

# Using enums
let userStatus = Status.Active;

# Enums in pattern matching
match userStatus {
    when Status.Active => print("User is active")
    when Status.Pending => print("Activation required")  
    when Status.Inactive => print("Account deactivated")
    when Status.Suspended => print("Account suspended")
}

# Enums in function parameters
function updateUserStatus(User user, Status newStatus) returns bool {
    user.status = newStatus;
    return true;
}

# Multiple enums
enum Priority {
    Low,
    Medium, 
    High,
    Critical
}

enum TaskType {
    Bug,
    Feature,
    Enhancement,
    Documentation
}

class Task {
    int id;
    str title;
    Priority priority = Priority.Medium;
    TaskType type = TaskType.Feature;
    Status status = Status.Pending;
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
