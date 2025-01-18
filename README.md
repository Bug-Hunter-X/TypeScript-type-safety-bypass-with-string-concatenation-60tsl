# TypeScript Type Safety Bypass with String Concatenation

This example demonstrates a subtle type safety bypass in TypeScript when using the + operator to concatenate strings and numbers.  TypeScript's type system does not detect the implicit type conversion and allows the concatenation to occur, which could lead to runtime issues or unexpected behavior if not properly handled.

## Bug

The `combine` function is declared to accept a string and a number, but the return type is string. When called with a string and a number, it implicitly converts the number to a string and concatenates them. This behavior is not caught by the compiler, potentially leading to unexpected side effects in a larger codebase.

## Solution

To resolve this issue, explicitly handle type conversion and ensure the code adheres to the defined types. Type guards, conditional checks, or utility functions can be employed to improve type safety and prevent unexpected behavior.
