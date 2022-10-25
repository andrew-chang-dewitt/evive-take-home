# Things to include in solution:

- OOP
- DB backed/driven solution
- REST API
- TS
- Platform agnostic (mostly?) build scripting
- Unit testing

And maybe if possible:

- event driven
- Live hosted solution
- CI/CD

# Stack

- PostgreSQL
- Python w/
  - DB Wrapper
  - FastAPI

# Maybe rethink the above

The problem is really simple:

Take a string, parse it for the two meaningful parts, and process those parts according to the rules before returning a result as a string.

This feels more like a CLI than anything else.
A DB is way overkill and the prompt doesn't call for any sort of extensibility or anything that leads me to think it needs future-proofed.

Instead, maybe the solution should be something like this:

## Stack

- TS maybe? It's in their stack & I could throw it on the frontend to show off

## Build system

- Vite
- Vitest

## Design

- TDD
- OOP
- Probably a Builder pattern to consume the strings cleanly
- Encapsulate Results as discriminated unions a-la Rust

_**Bonus points:**_

- Wrap the whole thing in a Svelte component & throw it on a subdomain
- Make it event driven somehow??

### UML

_**type MenuName**_

```
"Breakfast" | "Lunch" | "Dinner"
```

_**type OrderItem**_

```
1 | 2 | 3 | 4
```

_**module Parser**_

```
# parse(string) -> [MenuName, OrderItem[]]
```

_**obj MenuABC**_

```
- items: string[]
---
# build_order() -> MenuABC
+ add_item(number) -> MenuABC
+ place_order() -> string
```

_**obj Breakfast extends MenuABC**_

```

```

_**obj Lunch extends MenuABC**_

```

```

_**obj Dinner extends MenuABC**_

```

```
