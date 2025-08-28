---
id: tooling
title: Clyp Tooling and CLI
sidebar_label: Tooling  
slug: /tooling/
---

This page documents the Clyp command-line interface and tooling ecosystem.

## Enhanced CLI (2.1.0)

Clyp 2.1.0 introduces a comprehensive CLI with project management, dependency handling, and enhanced development tools.

### Project Management

#### `clyp init <project-name>`

Initialize a new Clyp project with comprehensive structure:

```bash
clyp init my-project
```

Creates:
- `clyp.json` with metadata, scripts, and build configuration
- `src/main.clyp` with example code and getting started comments  
- `tests/test_main.clyp` with example test structure
- `README.md` with project documentation
- `.gitignore` with Clyp-specific ignore patterns

#### `clyp.json` Configuration

The project configuration file supports:

```json
{
  "name": "my-project",
  "version": "1.0.0", 
  "description": "A Clyp project",
  "entry": "src/main.clyp",
  "author": {
    "name": "Your Name",
    "email": "you@example.com"
  },
  "license": "MIT",
  "keywords": ["clyp", "project"],
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "build": "clyp check .",
    "test": "clyp run tests/test_main.clyp",
    "format": "clyp format src/",
    "clean": "rm -rf build/ dist/ .clyp-cache/"
  },
  "build": {
    "outputDir": "build",
    "transpileOnly": false,
    "sourceMap": true
  },
  "imports": {
    "paths": {
      "@src/*": ["src/*"],
      "@lib/*": ["lib/*"],
      "@tests/*": ["tests/*"]
    }
  },
  "tools": {
    "formatter": {
      "lineLength": 88,
      "indentSize": 4,
      "useTabs": false
    },
    "linter": {
      "strict": false,
      "rules": {
        "requireReturnTypes": true,
        "enforceNamingConventions": true
      }
    }
  }
}
```

### Running Code

#### `clyp run <file-or-directory>`

Run Clyp files or directory projects:

```bash
# Run a single file
clyp run hello.clyp

# Run a directory project (uses entry point from clyp.json)
clyp run my-project/

# Pass arguments to the script
clyp run script.clyp arg1 arg2
```

Enhanced features:
- Automatic project detection via `clyp.json`
- Improved error messages with file/line information
- Better handling of imports and dependencies

### Code Formatting

#### `clyp format <file-or-directory>`

Format Clyp code with enhanced formatter:

```bash
# Format a single file
clyp format main.clyp

# Format entire project
clyp format src/

# Preview formatting without writing
clyp format --print main.clyp

# Alternative: don't write to file
clyp format --no-write main.clyp
```

Enhanced formatting features:
- Direct syntax normalization for better performance
- Improved handling of string content preservation
- Support for complex code structures
- Consistent spacing and indentation

### Code Validation

#### `clyp check <file-or-directory>`

Validate syntax and types with helpful tips:

```bash
# Check a single file
clyp check main.clyp

# Check entire project
clyp check .

# Check specific directory
clyp check src/
```

Enhanced validation features:
- Comprehensive error reporting with error codes
- Helpful tips and suggestions for fixes
- Better type checking with optional type support
- Project-wide validation

### Code Conversion

#### `clyp py2clyp <python-file>`

Transpile Python code to Clyp with advanced options:

```bash
# Basic conversion
clyp py2clyp script.py

# Convert with output file
clyp py2clyp script.py -o converted.clyp

# Print to stdout
clyp py2clyp script.py --print

# Convert with formatting
clyp py2clyp script.py --format

# Recursive conversion
clyp py2clyp src/ -r

# Show statistics
clyp py2clyp script.py --stats
```

### Dependency Management

#### `clyp add <package>`

Add dependencies to your project:

```bash
# Add a regular dependency
clyp add math@1.0.0

# Add without specific version
clyp add utils

# Add as development dependency
clyp add --dev pytest
```

#### `clyp remove <package>`

Remove dependencies from your project:

```bash
# Remove regular dependency
clyp remove math

# Remove development dependency
clyp remove --dev pytest
```

### Script Execution

#### `clyp script <script-name>`

Run scripts defined in `clyp.json`:

```bash
# Run build script
clyp script build

# Run tests
clyp script test

# Run custom script
clyp script deploy
```

### Configuration Management

#### `clyp config`

Manage and validate project configuration:

```bash
# Show current configuration
clyp config

# Validate configuration
clyp config --validate

# Show and validate
clyp config --show --validate
```

## Examples

### Creating and Running a New Project

```bash
# Initialize project
clyp init my-awesome-app
cd my-awesome-app

# Run the default app
clyp run .

# Add some dependencies
clyp add http-client@2.1.0
clyp add --dev test-framework

# Format the code
clyp format src/

# Check for errors
clyp check .

# Run tests
clyp script test
```

### Working with Existing Projects

```bash
# Check project health
clyp check .

# Format all source code
clyp format src/

# Run specific scripts
clyp script build
clyp script test
clyp script deploy

# Update dependencies
clyp add new-package@1.5.0
clyp remove old-package
```

## Global Options

All commands support these global options:

- `-v, --verbose` — Enable verbose output for debugging
- `--version` — Display the version of Clyp

## Error Handling

The enhanced CLI provides:
- Descriptive error codes (e.g., `[F100]`, `[A101]`, `[V200]`)
- Helpful tips with 💡 symbols
- Context-aware suggestions
- Clear file and line number references

## Integration

The CLI integrates well with:
- **IDEs**: Error output compatible with VS Code, IntelliJ, etc.
- **CI/CD**: Exit codes and structured output for automation
- **Build Systems**: Can be integrated into larger build pipelines
- **Package Managers**: Works alongside npm, pip, etc.
