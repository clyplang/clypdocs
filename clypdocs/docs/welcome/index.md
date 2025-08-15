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
educational use, and ships with a small standard library (`clyp.stdlib`)
and tooling for transpiling and executing Clyp files.

Clyp files use the `.clyp` extension. The tooling in this repository
supports interpreted execution (`clyp run`) and conversion to Python
(`py2clyp`/`transpiler`).

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
- `let` provides a familiar declaration idiom (transpiles to assignment
  in Python).
- `import` loads other Clyp modules through the project's importer which
  falls back to Python `pyimport` when specified.

## Where to next

- Syntax reference — detailed grammar and examples: see
  `/docs/syntax/`.
- Types — primitives, structs/classes, and annotations: see
  `/docs/types/`.
- Standard library — writable I/O, networking helpers, random utilities:
  see `/docs/stdlib/`.

---

For more details, explore the sidebar. If you run into issues, please
check the `CONTRIBUTING.md` in the repository and open an issue with a
repro case.
