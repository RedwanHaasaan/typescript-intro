# TypeScript Interview Notes

## 1. Why Use TypeScript Over JavaScript?

TypeScript extends JavaScript by adding **static typing** and **compile-time error checking**. This helps developers identify bugs before the code runs and makes applications easier to maintain as they grow.

### Benefits

* Early error detection
* Better code maintainability
* Improved scalability
* Enhanced IDE support
* Safer refactoring

---

## 2. What Problems Does TypeScript Solve?

TypeScript addresses several limitations of JavaScript:

* Lack of type safety
* Difficulties maintaining large codebases
* Runtime type-related bugs
* Reduced code readability in complex projects

By enforcing clear type definitions, TypeScript makes applications more predictable and easier to manage.

---

## 3. Benefits of Static Typing

Static typing provides several advantages:

* Improves code reliability
* Detects errors during development
* Enhances IDE auto-completion
* Makes refactoring safer
* Improves team collaboration

Example:

```ts
let username: string = "DataCamper";
let age: number = 25;
let isAdmin: boolean = true;
```

Attempting to assign a value of the wrong type will result in a compile-time error.

---

## 4. What Are Type Annotations?

Type annotations explicitly define the type of a variable, function parameter, or return value.

Example:

```ts
let username: string = "DataCamper";
let age: number = 25;
let isAdmin: boolean = true;
```

### Why Use Type Annotations?

* Improve readability
* Prevent type-related bugs
* Document developer intent
* Create clear API contracts

---

## 5. What Is Type Inference?

TypeScript can automatically determine a variable's type based on its initial value.

Example:

```ts
let count = 10; // inferred as number

count = "hello"; // Error
```

### Best Practices

* Use explicit types for public APIs and exported functions
* Allow inference for local variables when the type is obvious
* Avoid using `any` whenever possible

---

## 6. Arrays, Tuples, and Enums

### Arrays

```ts
let scores: number[] = [95, 80, 85];

scores.push(100); // ✅
scores.push("A+"); // ❌
```

### Tuples

```ts
let user: [string, number] = ["Don", 25];
```

Tuples provide fixed-length arrays with predefined types for each position.

### Enums

```ts
enum Status {
  Active,
  Inactive,
  Pending,
}

let currentStatus: Status = Status.Active;
```

Enums provide readable named constants and prevent invalid values.

---

## 7. Difference Between `any`, `unknown`, and `never`

| Type      | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `any`     | Disables type checking entirely                                 |
| `unknown` | Safer alternative to `any`; requires type checking before usage |
| `never`   | Represents values that never occur                              |

### Example

```ts
function fail(): never {
  throw new Error("Something went wrong");
}
```

### Recommendation

Prefer `unknown` over `any` whenever possible.

---

## 8. Difference Between `null` and `undefined`

### `undefined`

A variable has been declared but not assigned a value.

### `null`

Represents an intentional absence of a value.

Example:

```ts
let a: string | null = null;
let b: string | undefined = undefined;
```

When `strictNullChecks` is enabled, TypeScript treats them as separate types.

---

## 9. What Does the `strict` Compiler Option Do?

The `strict` flag enables all strict type-checking options.

### Common Strict Checks

#### strictNullChecks

Prevents accidental assignment of `null` and `undefined`.

#### noImplicitAny

Prevents variables from implicitly becoming `any`.

#### strictFunctionTypes

Ensures function parameter and return type compatibility.

#### strictBindCallApply

Validates correct usage of `bind`, `call`, and `apply`.

### Benefits

* Safer code
* Better type checking
* Reduced runtime bugs
* Improved maintainability

---

## 10. Interfaces vs Type Aliases

Both define data structures, but they have different use cases.

### Interface

```ts
interface Person {
  name: string;
  age: number;
}
```

Interfaces are best for:

* Object shapes
* Class contracts
* Inheritance using `extends`

Example:

```ts
interface Employee extends Person {
  department: string;
}
```

### Type Alias

```ts
type Employee = {
  name: string;
  department: string;
};
```

Type aliases are best for:

* Unions
* Intersections
* Primitive aliases
* Complex type compositions

Example:

```ts
type Status = "active" | "inactive" | "pending";
```

### Quick Comparison

| Feature             | Interface | Type    |
| ------------------- | --------- | ------- |
| Object Shapes       | ✅         | ✅       |
| Extends             | ✅         | Via `&` |
| Union Types         | ❌         | ✅       |
| Primitive Types     | ❌         | ✅       |
| Declaration Merging | ✅         | ❌       |

### Rule of Thumb

* Use **Interface** for object-oriented designs and contracts.
* Use **Type Alias** for unions, intersections, and advanced type compositions.

```

Happy Coding 🚀
```
