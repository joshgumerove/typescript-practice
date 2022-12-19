// allow us to define reusable functions and classes that work with multiple types

function wrapInArry<T>(element: T): T[] {
  return [element];
}
