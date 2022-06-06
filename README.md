## Project Name
Draw in the terminal with some basic commands


## Prerequisites

- Install [Node.js 16+](https://nodejs.dev/).

## Quick Start

```sh
# Install dependencies.
npm ci

# Build the app.
npm run build

# Start the app.
npm run start
```

## Testing

```sh
# Run unit tests.
npm run test
```

## Linting
```sh
# Run linting
npm run lint
```

## Notes

Wherever possible I have tried to follow single responsibility principle, and loose coupling as per SOLID principles.

## Assumptions / 
* Cannot create a canvas with a decimal
* Cannot create a canvas with number for width or height less than 3
* Cannot create a canvas with non numeric width and height
* Will need to handle lowercase commands
* There must be a canvas before any other drawing commands can be called

## Plan 
* I did not get to finish `Fill Area` method. Plan for `Fill Area` is as follows:

Fill area coords need to be:
* within canvas bounds
* not on a line (or anything that is an 'x' char)
* inside a rect || outside a rect

Fill area functions need to:
* accept `point: Point` and `color: string`
* paint canvas layer first 
* set a background color on canvas if brushed outside of a box
* fill canvas with color 
* draw lines on top of the canvas
* draw rectangles on top of the canvas
* fill rects with  color
