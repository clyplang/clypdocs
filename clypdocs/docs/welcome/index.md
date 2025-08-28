---
id: welcome
title: Welcome to Clyp
sidebar_label: Welcome
slug: /welcome/
---

Welcome to Clyp — a readable, modern, strongly-typed scripting
language designed for clarity and fast iteration.

This guide is a comprehensive starting point for learning Clyp. It
covers installation, first-time setup, language philosophy, and a quick
walkthrough of key concepts.

## What is Clyp?

Clyp is a high-level, human-centric language that blends familiar
imperative and object-oriented constructs with a concise syntax inspired
by modern scripting languages. It targets rapid prototyping and
educational use, and ships with a comprehensive standard library (`clyp.stdlib`)
and advanced tooling for transpiling and executing Clyp files.

Clyp files use the `.clyp` extension. The tooling in this repository
supports interpreted execution (`clyp run`) and conversion to Python
(`py2clyp`/`transpiler`).

### What's New in Clyp 2.1.0

Clyp 2.1.0 introduces comprehensive language enhancements that significantly improve developer experience:

**Modern Language Features:**
- 🚀 **Arrow Functions**: `x => x * 2` for concise function syntax
- 🔄 **Pipe Operator**: `value |> transform |> process` for data pipelines
- ❓ **Ternary Operator**: `condition ? value1 : value2` for inline conditionals
- 🛡️ **Optional Chaining**: `user?.profile?.name` for safe navigation
- 🔗 **Null Coalescing**: `value ?? "default"` for fallback values
- ⚡ **Compound Assignment**: `+=`, `-=`, `*=`, `/=` and more
- 📈 **String Interpolation**: `"Hello {name}!"` with expression support

**Enhanced Type System:**
- 🎯 **Optional Types**: `int?`, `str?` for null safety
- 🏷️ **Type Aliases**: `type UserId = int` for semantic clarity  
- 📋 **Enums**: `enum Status { Active, Inactive }` for constants
- 🎭 **Pattern Matching**: `match value { when ... => ... }` for complex logic

**Advanced Features:**
- ⚡ **Async/Await**: Native asynchronous programming support
- 🧩 **Destructuring**: `let {name, age} = user` for unpacking
- 🎨 **Array Comprehensions**: `[x*2 for x in items if x > 0]`
- 🔒 **Constants**: `const MAX_SIZE = 100` for immutable values
- 🛡️ **Guard Clauses**: `guard condition else return` for early exits

**Developer Experience:**
- 📦 **Project System**: `clyp.json` configuration with dependency management
- 🛠️ **Enhanced CLI**: `clyp init`, `clyp add`, `clyp script` commands
- 📚 **45+ New Stdlib Functions**: Enhanced utility library
- 🎯 **Better Error Messages**: Helpful tips and suggestions

See the [Language Enhancements](/language-enhancements/) guide for comprehensive coverage of all new features.

## Installation

Clyp is distributed as a Python package. You can install it either as a user (from PyPI) or as a developer (from source).

### User installation

To install the latest release from PyPI:

```powershell
pip install clyp
```

### Developer installation

To set up a local development environment:

1. Create a virtual environment (recommended):

    ```powershell
    python -m venv .venv
    .\.venv\Scripts\Activate.ps1
    ```

2. Clone the repository and install in editable mode:

    ```powershell
    git clone https://github.com/clyplang/clyp.git
    cd clyp
    pip install -e .
    ```

3. Run tests to verify your environment:

    ```powershell
    uv run -m pytest -q
    ```

Note: this project uses `uv` as a lightweight runner script used across
its CI and dev workflows; you can also use `python -m clyp` directly.

## Getting started — your first program

Create a file `hello_world.clyp`:

:::warning
Clyp does not explicitly require the `function` keyword, but using it can improve readability at the cost of some verbosity.
:::

```clyp
function main() returns null {
    print("Hello, Clyp!");
}
main();
```

Run it:

```powershell
clyp run hello_world.clyp
```

:::warning
If another program on your system uses the `clyp` command, you can run Clyp directly with `python -m clyp`, or with `uv run -m clyp` if you are using `uv`. This avoids conflicts with similarly named executables.
:::

You should see `Hello, Clyp!` printed to the console.

## Language philosophy

Clyp prioritizes:

- Readability: clean, minimal punctuation and a line-oriented layout.
- Safety: optional type annotations and runtime checks via `typeguard`.
- Interoperability: easy import/export with Python and a small stdlib.

## Core concepts (high level)

- Files end in `.clyp` and use a lightweight block syntax with `{ }` and
  semicolons to separate statements.
- `function` declares top-level functions; methods may omit the
  `function` keyword to decrease verbosity.
- `let` and `const` provide familiar declaration idioms (`let` for mutable variables,
  `const` for immutable constants that transpile to Python assignments).
- `import` loads other Clyp modules through the project's importer which
  falls back to Python `pyimport` when specified.
- **New in 2.1.0**: Arrow functions (`x => x * 2`), pipe operators (`value |> func`), 
  optional chaining (`obj?.prop`), string interpolation (`"Hello {name}"`), and much more.

## Enhanced CLI and Tooling (2.1.0)

- `clyp init <project>` — Create new projects with `clyp.json` configuration
- `clyp run <file-or-directory>` — Run Clyp files or directory projects
- `clyp format <file-or-directory>` — Format Clyp code with enhanced formatter
- `clyp check <file-or-directory>` — Validate syntax and types with helpful tips
- `clyp add <package>` / `clyp remove <package>` — Manage project dependencies
- `clyp script <name>` — Run scripts defined in `clyp.json`
- `clyp config --validate` — Validate project configuration

## Where to next

- **Language Enhancements** — New 2.1.0 features and syntax: see
  `/language-enhancements/`.
- **Syntax reference** — Detailed grammar and examples: see
  `/syntax/`.
- **Types** — Enhanced type system with optionals, aliases, and enums: see
  `/types/`.
- **Standard library** — 45+ new utility functions for enhanced productivity:
  see `/stdlib/`.

---

For more details, explore the sidebar. If you run into issues, please
check the `CONTRIBUTING.md` in the repository and open an issue with a
repro case.
