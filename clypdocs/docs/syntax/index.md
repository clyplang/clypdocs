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
- **New in 2.1.0**: String interpolation with `{expression}` syntax

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

## New Syntax Features (2.1.0)

### Arrow Functions

Arrow functions provide concise function syntax for functional programming:

```clyp
# Single parameter
let double = x => x * 2;

# Multiple parameters 
let add = (a, b) => a + b;

# Used with array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(x => x * 2);
let evens = numbers.filter(x => x % 2 == 0);
```

### Pipe Operator

The pipe operator (`|>`) enables elegant data transformation chains:

```clyp
# Basic usage
let result = value |> transform;

# Chaining operations
let processed = data
    |> validate
    |> normalize  
    |> analyze;

# With arrow functions
let result = numbers |> (arr => arr.filter(x => x > 0));
```

### Ternary Operator

Inline conditional expressions:

```clyp
let status = age >= 18 ? "adult" : "minor";
let message = user.isActive() ? "Welcome!" : "Please activate account";
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
```

### Optional Chaining

Safe navigation through object properties:

```clyp
# Safe property access
let name = user?.profile?.name;

# Safe method calls
let email = user?.getEmail?.();

# With arrays
let firstScore = user?.scores?.[0];
```

### Null Coalescing

Provide fallback values for null/undefined:

```clyp
let displayName = user.name ?? "Anonymous";
let config = userConfig ?? getDefaultConfig();
let theme = settings?.theme ?? "light";
```

### String Interpolation

Enhanced string interpolation with expressions:

```clyp
let name = "Alice";
let age = 30;

# Basic interpolation
let greeting = "Hello, {name}!";

# Expression interpolation
let message = "User {name} is {age >= 18 ? "an adult" : "a minor"}";

# Complex expressions
let summary = "Total: {items.map(i => i.price).sum()}";
```

### Compound Assignment Operators

Shorthand for common operations:

```clyp
let counter = 0;
counter += 5;    # counter = counter + 5
counter -= 2;    # counter = counter - 2
counter *= 3;    # counter = counter * 3
counter /= 2;    # counter = counter / 2
counter %= 3;    # counter = counter % 3

# Null coalescing assignment
let config = null;
config ||= getDefaultConfig();
```

### Increment/Decrement Operators

```clyp
let x = 5;
x++;    # Post-increment: x = x + 1
++x;    # Pre-increment: x = x + 1  
x--;    # Post-decrement: x = x - 1
--x;    # Pre-decrement: x = x - 1
```

### Constants

Immutable value declarations:

```clyp
const PI = 3.14159;
const MAX_RETRIES = 3;
const API_ENDPOINTS = {
    "users": "/api/users",
    "posts": "/api/posts"
};

# Constants cannot be reassigned
# PI = 3.14; # This would cause an error
```

### Range Expressions

Convenient range syntax for iteration:

```clyp
# Inclusive range (1 to 10)
for i in 1..10 {
    print("Number: {i}");
}

# Exclusive range (1 to 9)
for i in 1..<10 {
    print("Number: {i}");
}

# In array creation
let squares = [x * x for x in 1..5];
```

### Array Comprehensions

Concise array creation with filtering:

```clyp
# Basic comprehension
let squares = [x * x for x in numbers];

# With condition
let evenSquares = [x * x for x in numbers if x % 2 == 0];

# Complex expressions
let userSummary = [
    {"id": user.id, "name": user.name.upper()}
    for user in users
    if user.isActive()
];
```

### Destructuring Assignment

Unpack arrays and objects:

```clyp
# Array destructuring
let [first, second, third] = [1, 2, 3];

# Object destructuring  
let {name, age, email} = user;

# With defaults
let {theme = "light", lang = "en"} = config;

# In function parameters
function displayUser({name, age}) {
    print("User: {name}, Age: {age}");
}
```

### Pattern Matching

Powerful conditional logic:

```clyp
match value {
    when 1 => "one"
    when 2 => "two"
    when 3 => "three"
    _ => "other"
}

# With complex patterns
match response {
    when Success(data) => processData(data)
    when Error(message) => handleError(message)
    _ => handleUnknown()
}

# Guard patterns
match user {
    when {age} if age >= 18 => "adult"
    when {age} if age >= 13 => "teenager"
    _ => "child"
}
```

### Async/Await

Native asynchronous programming:

```clyp
# Async function declaration
async function fetchUserData(str userId) returns UserData? {
    try {
        let response = await httpGet("/users/{userId}");
        let data = await response.json();
        return data;
    } catch (Exception e) {
        print("Error: {e}");
        return null;
    }
}

# Using async functions
async function main() {
    let user = await fetchUserData("123");
    if (user != null) {
        print("User: {user.name}");
    }
}
```

### Enhanced Error Handling

Try/catch/finally blocks with specific exception types:

```clyp
try {
    let result = riskyOperation();
    processResult(result);
} catch (NetworkError e) {
    print("Network error: {e.message}");
    useOfflineMode();
} catch (ValidationError e) {
    print("Validation failed: {e.details}");
} catch (Exception e) {
    print("Unexpected error: {e}");
} finally {
    cleanup();
    print("Operation completed");
}
```

### Guard Clauses

Early returns with clear intent:

```clyp
function processUser(User? user) returns str {
    guard user != null else return "No user provided";
    guard user.isActive() else return "User is inactive"; 
    guard user.hasPermission() else return "Access denied";
    
    return "Processing user: {user.name}";
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
