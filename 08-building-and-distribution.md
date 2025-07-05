# Building and Distributing Clyp Projects

This guide covers how to build, package, and distribute your Clyp applications. Clyp's build process is designed to be efficient, leveraging Cython to compile your code into high-performance native modules.

## The Build Process: From Clyp to Native Code

Clyp features a sophisticated build pipeline that transforms your `.clyp` source files into a distributable package. Here’s a step-by-step overview of what happens when you run `clyp build`:

1.  **Dependency Resolution**: The builder starts at your project's entry point (specified in `clyp.json`) and traverses all `import` statements to create a complete dependency graph of your project.

2.  **Transpilation to Cython**: Each `.clyp` file is transpiled into Python code (`.pyx`), which is a Cython-specific file format. This is a crucial step, as it bridges the high-level syntax of Clyp with the performance of C.

3.  **Compilation with Cython**: The generated `.pyx` files are then compiled by Cython into C code.

4.  **Native Code Compilation**: The C code is compiled into platform-specific shared objects (`.so` on Linux, `.pyd` on Windows). These are native machine code modules that can be executed directly by the processor, offering significant performance gains.

5.  **Caching**: To speed up subsequent builds, Clyp maintains a cache in the `.clyp-cache` directory. It stores checksums of your source files and the compiled artifacts. If a source file hasn't changed, Clyp reuses the previously compiled module, making incremental builds much faster.

6.  **Packaging**: All compiled modules are packaged into a single, self-contained `.clb` (Clyp Bundle) file. This file is a zip archive containing all the compiled modules and a `metadata.json` file that describes the bundle.

### Cython Compatibility

Because Clyp's build process relies on Cython, all your Clyp code must be compatible with Cython's semantics. While Clyp's transpiler handles most of the conversion, it's important to remember that the code will ultimately be executed as a compiled Python module. This means that language features that are valid in Clyp must have a valid and performant representation in Python and Cython. For most use cases, this is a seamless process, but for advanced, low-level programming, it's a good practice to be mindful of the underlying compilation target.

## Project Configuration: `clyp.json`

A `clyp.json` file at the root of your project is required to tell the build system how to handle your project.

**Example `clyp.json`:**
```json
{
    "name": "my-awesome-app",
    "version": "0.1.0",
    "entry": "src/main.clyp",
    "build_dir": "dist"
}
```

-   `name`: The name of your project. This determines the name of the final `.clb` file.
-   `version`: Your project's version. This is stored in the package metadata.
-   `entry`: The path to the main `.clyp` file that serves as the entry point for your application.
-   `build_dir`: The directory where the final `.clb` file will be saved. Defaults to `build`.

You can quickly scaffold a new project with a `clyp.json` file using the `clyp init <project-name>` command.

## Building Your Project

The `clyp build` command orchestrates the entire build process.

```bash
# Build the project in the current directory
clyp build

# Force a rebuild, ignoring the cache
clyp build --force

# Use multiple cores for a parallel build
clyp build -j 4

# Clean the build and cache directories before building
clyp build --clean
```

-   `--force`: Ignores the cache and rebuilds all modules from scratch.
-   `-j, --jobs`: Specifies the number of parallel jobs to use for building. This can significantly speed up builds on multi-core systems.
-   `--clean`: Deletes the `build_dir` and `.clyp-cache` directories before starting the build.

## The `.clb` Bundle

The output of the build is a `.clb` file. This is a zip archive containing:
-   All compiled modules (`.so` or `.pyd` files).
-   A `metadata.json` file with information about the build, including the Clyp version, entry module, and checksums for all included modules.

This format makes distribution easy, as you only need to share a single file.

## Running a Built Project

To run a packaged Clyp application, use the `clyp run` command:

```bash
clyp run ./dist/my-awesome-app.clb
```

The Clyp runtime will:
1.  Extract the contents of the `.clb` file to a temporary directory.
2.  Verify the integrity of each module using its checksum.
3.  Add the temporary directory to the system path.
4.  Import and execute the entry module.

This ensures that your application runs in a consistent and secure environment, regardless of where it's executed.
