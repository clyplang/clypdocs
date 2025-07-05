# Clyp Syntax and Basics

This guide introduces the fundamental syntax and concepts of the Clyp language. Understanding these building blocks is key to writing effective Clyp code.

## Comments

Comments are notes in your code that are ignored by the transpiler. They are essential for documenting your logic.

```clyp
# This is a single-line comment.
# Use comments to explain complex parts of your code.
```

## Variables and Data Types

Variables are used to store and manage data. Clyp is a statically-typed language, which means you must declare the type of a variable when you create it. This helps catch errors early and improves code clarity.

### Variable Declaration

You declare a variable by specifying its type, followed by its name and an initial value.

```clyp
# Syntax: type variable_name = value
str language = "Clyp"
int version = 1
bool is_production = false
```

### Type Inference with `let`

For convenience, you can use the `let` keyword to declare a variable without explicitly stating its type. The Clyp transpiler will infer the type from the assigned value.

```clyp
let language = "Clyp"  # Inferred as str
let version = 1        # Inferred as int
```

While `let` is convenient, using explicit types is often clearer for complex applications. Type declaration may increase performance when built.

### Core Data Types

Clyp supports a range of built-in data types:

| Type      | Description                               | Example                               |
| :-------- | :---------------------------------------- | :------------------------------------ |
| `int`     | Integers (whole numbers)                  | `42`, `-100`                          |
| `float`   | Floating-point numbers (decimals)         | `3.14`, `-0.01`                       |
| `str`     | Strings of text                           | `"Hello, Clyp!"`, `'Single quotes'`   |
| `bool`    | Boolean values, representing `true` or `false` | `true`, `false`                       |
| `list`    | Ordered, mutable collections of items     | `list[int] nums = [1, 2, 3]`          |
| `dict`    | Collections of key-value pairs            | `dict[str, int] ages = {"a": 30}` |
| `any`     | Can hold a value of any type              | `any data = "mixed"`                  |
| `null`    | Represents the absence of a value         | `let user = null`                     |

### Collections: Lists and Dictionaries

**Lists** are ordered collections. You must specify the type of elements the list will hold.

```clyp
# A list of strings
list[str] fruits = ["apple", "banana", "cherry"]
print(fruits[0]) # Access elements by index -> "apple"
```

**Dictionaries** store data in key-value pairs. You must specify the types for both keys and values.

```clyp
# A dictionary mapping strings to integers
dict[str, int] scores = {"math": 95, "science": 88}
print(scores["math"]) # Access values by key -> 95
```

## Operators

Clyp includes a standard set of operators for performing operations.

### Arithmetic Operators

| Operator | Description    | Example     |
| :------- | :------------- | :---------- |
| `+`      | Addition       | `10 + 5`    |
| `-`      | Subtraction    | `10 - 5`    |
| `*`      | Multiplication | `10 * 5`    |
| `/`      | Division       | `10 / 5`    |
| `%`      | Modulo         | `10 % 3`    |

### Comparison Operators

| Operator | Description              | Example      |
| :------- | :----------------------- | :----------- |
| `==`     | Equal to                 | `a == b`     |
| `!=`     | Not equal to             | `a != b`     |
| `<`      | Less than                | `a < b`      |
| `>`      | Greater than             | `a > b`      |
| `<=`     | Less than or equal to    | `a <= b`     |
| `>=`     | Greater than or equal to | `a >= b`     |

### Logical Operators

| Operator | Description   | Example         |
| :------- | :------------ | :-------------- |
| `and`    | Logical AND   | `a > 0 and b > 0` |
| `or`     | Logical OR    | `a > 0 or b > 0`  |
| `not`    | Logical NOT   | `not is_ready`  |

## Keywords

Clyp reserves a set of keywords that have special meaning in the language. You cannot use these as variable or function names.

**Common Keywords:** `str`, `int`, `float`, `bool`, `list`, `dict`, `let`, `if`, `else`, `for`, `while`, `func`, `class`, `return`, `import`, `true`, `false`, `null`.
