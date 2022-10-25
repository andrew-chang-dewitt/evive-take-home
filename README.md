# Menu Ordering System

&copy Andrew Chang-DeWitt

For the Evive Software Engineering Internship application take-home test.

## Summary

A TypeScript implementation of the menu ordering system with a simple web-application interface.
The ordering system is all located in `./src/lib` with the entry point being `./src/lib/main.ts`.
The simple web application has the markup at `./index.html` & logic in `./src/main.ts`.
All tests are in `./src/**/*.test.ts` files.

## Prereqs

You'll need `node` & `npm`. I've only tested this with versions `v16.15.0` for node & `8.19.2` for npm.

## Usage

1. Start by cloning this directory to your local machine.
2. Run `npm install` to install remaining dependencies.
3. Run `npm build` to build a production copy, then `npm preview` to serve it. Alternatively, run `npm dev` to host a dev server from the source code.
4. Go to the link output to stdout to view the application.

To run tests, including the sample input & output given in the instructions, run `npm test`.
