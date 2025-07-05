# Python to Clyp Transpilation and Formatting

Clyp provides robust tools to convert Python code into Clyp code and to format Clyp code for readability and consistency. This guide explains how the transpilation and formatting processes work, how to use them, and best practices for getting the best results.

---

## 1. What is Python to Clyp Transpilation?

**Transpilation** is the process of converting code from one programming language to another. In Clyp, you can convert ("transpile") Python code into Clyp code using the built-in CLI tool. This is useful for:

- Migrating existing Python projects to Clyp
- Learning Clyp by comparing it to familiar Python code
- Rapidly prototyping in Python, then converting to Clyp

The transpiler attempts to preserve logic, structure, and type annotations where possible, but some manual adjustment may be needed for advanced Python features.

---

## 2. Using the CLI: `py2clyp` Command

The main way to transpile Python to Clyp is via the command line interface (CLI):

```
clyp py2clyp <python_file.py> [options]
```

### Common Options

- `-o, --output <file>`: Write the transpiled Clyp code to a file.
- `--print`: Print the transpiled Clyp code to the terminal.
- `--format`: Format the output Clyp code for readability.
- `--diff`: Show a diff between the original Python and the transpiled Clyp code.
- `--overwrite`: Overwrite the input Python file with the transpiled Clyp code.
- `--check`: Check if the file can be transpiled (dry run, no output).
- `--quiet`: Suppress non-error output.
- `--no-format`: Do not format the output.
- `--stats`: Show statistics about the transpilation (lines, tokens, etc.).

### Example Usage

**Transpile and print to terminal:**
```
clyp py2clyp myscript.py --print
```

**Transpile and write to a file:**
```
clyp py2clyp myscript.py -o myscript.clyp
```

**Transpile, format, and overwrite the original file:**
```
clyp py2clyp myscript.py --format --overwrite
```

**Show a diff between Python and Clyp code:**
```
clyp py2clyp myscript.py --diff
```

**Check if a file can be transpiled (no output):**
```
clyp py2clyp myscript.py --check
```

---

## 3. How Transpilation Works

The transpiler reads your Python code and attempts to convert it to equivalent Clyp code. It handles:

- Function and class definitions
- Type annotations (where possible)
- Control flow (if, for, while, etc.)
- Variable declarations
- Standard library mappings
- Comments and docstrings

**Limitations:**
- Some advanced Python features (e.g., metaclasses, decorators, dynamic imports) may not be fully supported.
- Manual review and adjustment of the output is recommended for complex code.

---

## 4. Formatting Clyp Code

Clyp includes a formatter that ensures your code is clean, consistent, and easy to read. The formatter works by:

1. Transpiling Clyp code to Python
2. Formatting the Python code using [Black](https://black.readthedocs.io/)
3. Transpiling the formatted Python code back to Clyp

### Formatting via CLI

To format a Clyp file:
```
clyp format <file.clyp>
```

**Options:**
- `--print`: Print the formatted code instead of overwriting the file.
- `--no-write`: Alias for `--print`.

**Example:**
```
clyp format myscript.clyp --print
```

---

## 5. Example Workflow

1. **Write or obtain Python code:**
   ```python
   def add(a: int, b: int) -> int:
       return a + b
   ```
2. **Transpile to Clyp:**
   ```
   clyp py2clyp add.py --print
   ```
3. **Format the Clyp code:**
   ```
   clyp format add.clyp
   ```
4. **Review and adjust as needed.**

---

## 6. Troubleshooting & Tips

- **Syntax errors:** If transpilation fails, check for unsupported Python features or syntax errors in the original file.
- **Formatting errors:** Ensure Black is installed and compatible with your Python environment.
- **Manual review:** Always review transpiled code, especially for complex logic or advanced Python features.
- **Incremental migration:** For large projects, transpile and test modules one at a time.

---

## 7. Advanced Usage

- Use `--stats` to compare code size and structure before and after transpilation.
- Use `--diff` to see exactly what changed between Python and Clyp code.
- Combine `--format` and `--output` for clean, ready-to-use Clyp files.

---

## 8. References

- [Black Python Formatter](https://black.readthedocs.io/)

---

For further help, see the rest of the Clyp documentation or open an issue on the project repository.
