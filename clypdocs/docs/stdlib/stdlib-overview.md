---
id: stdlib-overview
title: Standard Library Overview
sidebar_label: Overview
slug: /stdlib/overview/
---

This page summarizes the helpers exposed by `clyp.stdlib` and how they
are intended to be used. Each helper is documented in its own page
(see Helpers category in the sidebar).

`clyp.stdlib` focuses on small, well-tested utilities: file I/O,
string helpers, simple network helpers (lightweight wrappers), timing
and caching helpers, and small algorithms.

## Enhanced Standard Library (2.1.0)

Clyp 2.1.0 significantly expands the standard library with **45+ new utility functions** across 9 major categories:

### 1. Debug and Development Tools
- `debug(value, label?)` — Enhanced debugging with stack traces and formatting
- `profile(func)` — Function decorator for performance profiling with memory tracking
- `trace(func)` — Function call tracing for debugging

### 2. JSON Operations
- `json_parse(jsonStr)` — Enhanced JSON parsing with detailed error reporting
- `json_stringify(obj, pretty?)` — JSON serialization with pretty printing option

### 3. Math Utilities
- `clamp(value, min, max)` — Constrain values to a range
- `lerp(start, end, t)` — Linear interpolation between values
- `distance_2d(x1, y1, x2, y2)` — Calculate 2D distance

### 4. Collection Utilities
- `unique(items)` — Remove duplicates while preserving order
- `partition(items, predicate)` — Split collection by predicate function
- `group_by(items, keyFunc)` — Group items by function result
- `take(n, iterable)` — Take first n elements
- `drop(n, iterable)` — Drop first n elements  
- `take_while(predicate, iterable)` — Take elements while condition is true
- `drop_while(predicate, iterable)` — Drop elements while condition is true
- `chain(*iterables)` — Combine multiple collections
- `find_index(predicate, iterable)` — Find index of first matching element
- `count_by(predicate, iterable)` — Count elements matching predicate

### 5. Functional Programming
- `pipe(*functions)` — Create function composition pipeline (left to right)
- `compose(*functions)` — Create function composition (right to left)
- `curry(func)` — Convert function to accept arguments one at a time
- `tap(func)` — Apply side effect and return original value
- `when(condition, action)` — Conditionally apply function
- `unless(condition, action)` — Apply function unless condition is true

### 6. Formatting Utilities
- `format_bytes(size)` — Human-readable file sizes (e.g., "1.5 MB")
- `format_duration(seconds)` — Human-readable time durations (e.g., "2h 30m 15s")
- `format_timestamp(timestamp, format?)` — Date/time formatting

### 7. Dictionary Utilities
- `deep_merge(dict1, dict2)` — Recursively merge dictionaries
- `get_nested(obj, path, default?)` — Get nested property using dot notation
- `set_nested(obj, path, value)` — Set nested property using dot notation
- `pick(obj, keys)` — Create new object with only specified keys
- `omit(obj, keys)` — Create new object excluding specified keys
- `zip_dict(keys, values)` — Create dictionary from key/value arrays

### 8. Safe Operations
- `safe_get(obj, key, default?)` — Exception-safe property access
- `safe_call(func, *args, default?, **kwargs)` — Exception-safe function calls

### 9. Advanced Caching
- `memoize_with_ttl(ttlSeconds?)` — Function memoization with time-to-live expiration

## Usage Examples

### Debug and Development
```clyp
# Enhanced debugging
let userData = debug(fetchUser(123), "user data");

# Performance profiling
@profile
function complexCalculation(data) {
    return processLargeDataset(data);
}
```

### Functional Programming Pipeline
```clyp
let result = data
    |> (items => partition(items, x => x.active))
    |> ([active, inactive] => active)
    |> (users => group_by(users, u => u.department))
    |> (grouped => pick(grouped, ["engineering", "design"]))
    |> (depts => debug(depts, "filtered departments"));
```

### Collection Processing
```clyp
let numbers = [1, 2, 3, 2, 4, 5, 4, 6];

# Remove duplicates and process
let processed = unique(numbers)
    |> (arr => take(5, arr))
    |> (arr => arr.map(x => x * x));

# Partition into evens and odds
let [evens, odds] = partition(numbers, x => x % 2 == 0);
```

### Safe Operations
```clyp
# Safe property access
let email = safe_get(user, "contact.email", "no-email@example.com");

# Safe function calls
let result = safe_call(riskyFunction, param1, param2, default: "fallback");
```

### Formatting
```clyp
let fileSize = 1024 * 1024 * 2.5;  # 2.5 MB
let duration = 3665;  # 1 hour, 1 minute, 5 seconds

print("File: {format_bytes(fileSize)}");  # "File: 2.5 MB"
print("Time: {format_duration(duration)}");  # "Time: 1h 1m 5s"
```

## Notes

The implementations are thin wrappers over the Python standard
library and provide consistent `ClypRuntimeError` exceptions for
error conditions. All new functions are fully typed and include
comprehensive error handling with helpful error messages.
