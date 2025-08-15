---
id: reference
title: Language Reference
sidebar_label: Reference
slug: /reference/
---

The language reference documents the complete Clyp language semantics,
lexical structure, operators, statements, types, and interoperability
notes. This page is authoritative: it describes the exact shape of
valid programs, operator precedence and associativity, and the
translation expectations for the Python transpiler.

## Quick orientation

- Target audience: compiler authors, transpiler maintainers, advanced
	language users, and documentation consumers who need deterministic
	rules rather than examples.
- Notation: code examples show Clyp source on the left and the
	equivalent Python-transpiled intent under "Notes" where useful.

## Table of contents

- Lexical grammar (tokens)
- Identifiers and keywords
- Literals (numbers, strings, null/true/false)
- Types (static annotations and runtime types)
- Operators and precedence
- Statements and control flow
- Functions and methods
- Classes and member declarations
- Modules, imports and includes
- Standard library overview
- Error handling and exceptions
- Interoperability with Python
- Style notes and tooling

## Lexical grammar (tokens)

- Whitespace: spaces and tabs are treated only as separators; Clyp is
	block-structured using braces (`{` / `}`) and optionally supports
	semicolons as statement separators. The transpiler normalizes `;`
	and `{}` into Python indentation.
- Comments: `#` begins a line comment and continues to end-of-line.
	There is no built-in block comment token; triple-quoted strings can
	act as documentation strings when used as standalone expressions.
- String literals: single (`'...'`) and double (`"..."`) quotes are
	supported. Triple-quoted strings `'''...'''` and `"""..."""` are
	supported for multiline text. Escape sequences follow Python-like
	rules (for portability through the transpiler).
- Identifiers: match regex `[A-Za-z_][A-Za-z0-9_]*`.

## Identifiers and keywords

Clyp reserves a set of keywords (case-sensitive) used by the
transpiler and runtime. Common keywords include:

- `class`, `function`, `if`, `else`,
	`elif`, `unless` (sugar for `if not`), `for`, `while`, `repeat`,
	`return`, `break`, `continue`, `import`, `from`, `include`, `let`,
	`true`, `false`, `null`, `try`, `except`, `raise`, `pass`.

Reserved words cannot be used as identifiers. The transpiler maps
`true/false/null` to Python `True/False/None` when generating Python
code.

## Literals

- Integer literals: decimal sequences, e.g. `0`, `42`, `-7`.
- Float literals: include decimal point or exponent, e.g. `3.14`,
	`1e-3`.
- String literals: single, double, or triple-quoted.
- Boolean / null: `true`, `false`, `null`.
- Collections: list and map literal syntax mirrors Python where
	practical; e.g. `[1, 2, 3]`, `{ "k": "v" }` are accepted and
	passed through to Python semantics.

## Types and annotations

Clyp supports optional static type annotations on function headers,
method headers, and class member declarations. Types are primarily
informational and used by tooling and the transpiler to emit Python
type hints where practical.

Syntax examples:

- Function: `function foo(x int, y str) returns int { ... }`
- Method header shorthand: `increment(self) returns null:` (shorthand
	style accepted inside class blocks)
- Class field: `int count = 0` becomes `count: int = 0` in generated
	Python.

Notes on semantics:

- The transpiler converts Clyp types to Python annotations when a
	reasonable mapping exists; unknown types are emitted as-is.
- `null` return types map to `None` in Python (`-> None`).

## Operators and precedence

Operators follow familiar C/Python-like precedence. The precedence
table (high to low):

1. Parentheses `()`
2. Unary `+ - ~ not` (logical `not`)
3. Multiplicative `* / %` 
4. Additive `+ -`
5. Shift `<< >>`
6. Bitwise `& ^ |`
7. Comparisons `< <= > >= == != is is not in` (note `is`/`is not`
	 are mapped carefully by the transpiler)
8. Logical `and`
9. Logical `or`
10. Conditional / assignment `?:` (not a core feature; use `if/else`)

Associativity: most binary operators are left-associative. Assignment
is right-associative when used in chained assignments.

Notes about `unless`: `unless <cond>` is syntactic sugar for `if not
<cond>` and is transformed by the transpiler outside of strings.

## Statements and control flow

Block structure: Clyp uses `{` ... `}` to delimit blocks. The
transpiler converts these to Python indentation and adds `pass` where
blocks are empty.

Common statements:

- Expression statements: `foo();` or `foo()` (semicolon optional).
- Variable declaration: `let x = 42` — `let` is a convenience token
	that becomes a normal assignment (`x = 42`). Type annotations may
	appear: `let x int = 0`.
- If/else:

```clyp
if cond {
	...
} else {
	...
}
```

The transpiler supports `else if` and transforms it to Python
`elif`.

- Unless (sugar):

```clyp
unless cond {
	...
}
```

is equivalent to `if not cond { ... }`.

- For loops:

```clyp
for i in collection {
	...
}
```

A classical `for` with an iterator.

- Repeat loops (sugar):

```clyp
repeat 5 {
	...
}
```

becomes `for _ in range(5):` in Python.

- While loops:

```clyp
while cond {
	...
}
```

- Break / continue: behave as expected inside loops.

## Functions and methods

There are two styles for function-like declarations:

1. Explicit `function` declarations:

```clyp
function add(a int, b int) returns int {
	return a + b;
}
```

2. Method-style headers (shorthand):

```clyp
increment(self) returns null:
	# body lines indented inside class block
```

Rules and notes:

- Argument syntax: arguments may include an optional type. e.g.
	`x int`, `y`.
- Default arguments and varargs are supported with `=` and `*`.
- When a method header is declared inside a `class` block, the
	transpiler will insert `self` as the first argument if it is not
	provided.
- Return types are optional; `returns null` translates to `-> None`
	in Python.

## Classes and members

Class declaration example:

```clyp
class Counter {
	int count = 0

	increment(self) returns null: {
		self.count = self.count + 1;
	}
}
```

Notes:

- Class fields declared inside the class body are converted into
	Python annotations (`name: Type = default`) by the transpiler.
- Methods can be declared using method-style headers (no `function`
	keyword) or explicit `function` keyword; both are supported.

## Modules, imports and includes

- `import <module>` imports a Clyp module by name. The transpiler
	resolves Clyp modules by searching the current script directory and
	`clypPackages` directories. If the module is a standard clyp std
	module, the transpiler may rewrite it as a Python import.
- `pyimport <package>` forces a Python import of the named package
	(bypasses Clyp module resolution).
- `from <module> import a, b` imports specific members; when used for
	Clyp std modules the transpiler may map that to `from clyp.stdlib
	import ...`.

Resolution rules:

- Dotted module names map to files or package directories. A package
	requires `__init__.clyp` in each component directory.
- If resolution fails, the transpiler raises a static import error
	(see Error Handling below).

## Standard library (stdlib)

The Clyp distribution ships a `clyp.stdlib` Python package which
exposes common language-provided functions and classes. The transpiler
can import members directly from this package so that user code can
call into the standard runtime.

Refer to the `clyp.stdlib` module for the definitive list of
functions and their runtime contracts.

## Error handling and exceptions

Clyp programs use exception semantics compatible with Python when
transpiled. The transpiler emits Python `try`/`except` blocks for
Clyp `try`/`except` statements.

Compile-time (transpiler) errors are represented by
`clyp.ErrorHandling.ClypSyntaxError` with a structured error code such
as `E100` and a message. The transpiler reports file/line numbers
when available.

## Interoperability with Python

- Generated Python code is designed to be PEP8-friendly and to
	preserve runtime semantics where possible.
- The transpiler inserts a small bootstrap at the top of generated
	Python files to install import hooks used by `clyp_import` and to
	enable runtime support.
- `pyimport` and explicit Python imports allow mixing Python packages
	and Clyp modules in the same program.

## Style notes and tooling

- Use braces for clarity when editing or when targeting both the Clyp
	and Python form. The transpiler tolerates both semicolon-terminated
	statements and newline-terminated statements.
- Keep method headers inside `class` blocks consistent: the transpiler
	will add `self` if missing, but explicit `self` improves clarity.
- Linters and typecheckers can be run on the transpiled Python; the
	project includes `typeguard` and encourages runtime checking in
	debug builds.

## Examples

- Class and method:

```clyp
class Point {
	float x = 0.0
	float y = 0.0

	distance(self, other) returns float: {
		return ((self.x - other.x)**2 + (self.y - other.y)**2)**0.5;
	}
}
```

- Importing a Clyp module named `mathlib` found in `clypPackages`:

```clyp
import mathlib
```

```text
# Transpiler emits: mathlib = clyp_import('mathlib', r"<source>")
```

## Grammar excerpts (informal)

- Identifier: `[A-Za-z_][A-Za-z0-9_]*`
- Function header: `function NAME ( arg[, ...] ) returns TYPE { ... }`
- Method shorthand: `NAME(arg[, ...]) returns TYPE :` inside a class

This page intentionally uses prose and examples rather than a full
BNF grammar. For machine-readable grammar, see the `transpiler.py`
implementation in the repository.

## Troubleshooting and common pitfalls

- Missing `__init__.clyp` in a package path yields an import error:
	ensure each package directory contains `__init__.clyp`.
- Strings containing keywords may be affected by keyword replacement
	passes if not correctly quoted; prefer triple-quoted strings for
	long text.
- Empty blocks must not be omitted entirely; the transpiler inserts
	`pass` where required but keeping explicit `pass` improves
	readability.

## Where to go next

- See the syntax guide for more examples (`/syntax/`).
- See `/api/` for standard library function docs.

---

If you want, I can split this page into smaller operator- and
statement-specific documents and wire them into the sidebar. Let me
know which sections you want expanded first.
