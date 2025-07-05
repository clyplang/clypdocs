# Clyp Functions

Functions are the primary way to organize and reuse code in Clyp. They are self-contained blocks of code that perform a specific task and can be called from other parts of your program.

## Defining Functions

You define a function using the `func` keyword. Every function must specify the types of its parameters and the type of the value it returns. This strictness helps prevent bugs and makes code easier to read.

**Syntax:**

```clyp
func function_name(param1_type param1_name, ...) returns return_type {
    // Code block
    return value
}
```

**Example: An `add` function**

This function takes two integers (`a` and `b`) and returns an integer.

```clyp
func add(int a, int b) returns int {
    return a + b
}
```

## Void Functions

If a function does not return a value, its return type should be declared as `void`. The `return` statement is optional in a void function.

**Example: A `greet` function**

```clyp
func greet(str name) returns void {
    print(f"Hello, {name}!")
}
```

## Parameters and Arguments

Clyp functions support both positional and named arguments, as well as default parameter values.

### Default Parameters

You can assign a default value to a parameter, making it optional when the function is called. Default parameters must come after required parameters.

**Example: A `power` function**

This function calculates `base` to the power of `exp`, with `exp` defaulting to 2.

```clyp
func power(int base, int exp = 2) returns int {
    let result = 1
    repeat [exp] times {
        result = result * base
    }
    return result
}
```

### Named Arguments

You can pass arguments by name, which can improve the readability of your function calls, especially for functions with many parameters.

```clyp
func describe_user(str name, int age, bool is_active) returns void {
    print(f"User: {name}, Age: {age}, Active: {is_active}")
}

// Calling with named arguments
describe_user(name: "Alex", age: 30, is_active: true)
describe_user(age: 45, name: "Beth", is_active: false) // Order doesn't matter
```

## Calling Functions

To execute a function, you call it by its name and provide the required arguments.

```clyp
// Calling the functions we defined
let sum = add(10, 5)
print(f"Sum: {sum}") // Output: Sum: 15

greet("Developer") // Output: Hello, Developer

let squared = power(10) // Uses default exp=2
print(f"10^2 is {squared}") // Output: 10^2 is 100

let cubed = power(3, 3) // Overrides default
print(f"3^3 is {cubed}") // Output: 3^3 is 27
```

## Recursive Functions

A function that calls itself is recursive. This is a powerful technique for solving problems that can be broken down into smaller, similar sub-problems.

**Example: Factorial**

```clyp
func factorial(int n) returns int {
    if (n <= 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

let fact_of_5 = factorial(5)
print(f"5! is {fact_of_5}") // Output: 5! is 120
```
