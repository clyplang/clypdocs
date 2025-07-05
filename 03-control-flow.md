# Clyp Control Flow

Control flow statements are the backbone of any program, allowing you to direct the execution path of your code. Clyp provides clear and intuitive constructs for conditional logic and looping.

## Conditional Statements: `if`, `elif`, `else`

Conditional statements allow you to execute blocks of code only if certain conditions are met. Clyp uses a familiar `if`, `elif` (else if), and `else` structure.

**Syntax:**

```clyp
if (condition) {
    // Code to run if the condition is true
} elif (another_condition) {
    // Code to run if the first condition is false and this one is true
} else {
    // Code to run if all preceding conditions are false
}
```

**Example:**

```clyp
int score = 85

if (score >= 90) {
    print("Grade: A")
} elif (score >= 80) {
    print("Grade: B")
} elif (score >= 70) {
    print("Grade: C")
} else {
    print("Grade: Needs Improvement")
}
// Output: Grade: B
```

## Looping Constructs

Loops are used to execute a block of code repeatedly.

### The `while` Loop

A `while` loop executes as long as its condition remains `true`. It is ideal when you don't know in advance how many times you need to loop.

**Example:**

```clyp
let countdown = 3
while (countdown > 0) {
    print(f"{countdown}...")
    countdown = countdown - 1
}
print("Go!")
```

### The `for` Loop

A `for` loop is used to iterate over a sequence, such as a `list` or a `dict`.

**Example (List):**

```clyp
list[str] fruits = ["Apple", "Banana", "Cherry"]
for fruit in fruits {
    print(f"I love {fruit}s!")
}
```

**Example (Dict):**

```clyp
// Note: Dictionary iteration order is not guaranteed
dict[str, str] capitals = {"USA": "Washington D.C.", "France": "Paris"}
for country in capitals {
    print(f"The capital of {country} is {capitals[country]}.")
}
```

### The `repeat` Loop

The `repeat` loop is a simple, readable way to execute a block of code a fixed number of times. It is a Clyp-specific feature designed for clarity.

**Syntax:**

```clyp
repeat [number] times {
    // Code to execute
}
```

**Example:**

```clyp
repeat [3] times {
    print("Hello, Clyp!")
}
```

This is conceptually similar to a `for` loop using a range in Python.

## Loop Control Statements

Clyp provides `break` and `continue` to manage loop execution dynamically.

*   `break`: Immediately terminates the innermost loop.
*   `continue`: Skips the remainder of the current iteration and proceeds to the next one.

**Example (`break`):**

```clyp
# Find the first number divisible by 5
list[int] numbers = [2, 8, 15, 11, 20]
for num in numbers {
    if (num % 5 == 0) {
        print(f"Found it! {num}")
        break // Exit the loop
    }
    print(f"Checking {num}...")
}
// Output:
// Checking 2...
// Checking 8...
// Found it! 15
```

**Example (`continue`):**

```clyp
# Print only the even numbers
list[int] numbers = [1, 2, 3, 4, 5, 6]
for num in numbers {
    if (num % 2 != 0) {
        continue // Skip odd numbers
    }
    print(f"Even number: {num}")
}
// Output:
// Even number: 2
// Even number: 4
// Even number: 6
```
