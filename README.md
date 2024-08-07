## Command Line Canvas
Clean architected best practise typescript with help from Alexey K at EPAM. Draw in the terminal with some basic commands


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

## Methodology

Wherever possible I have maintained single responsibility, correct architecture layers and loose coupling as per SOLID principles.

The app is therefore divided up into separate maintainable testable modules and follows this sequence:

`app > handles input > parser input commmand > factory creates command passing canvas instance singleton > app executes the command > command creates canvas or throws if not yet available > drawing commands check if command is valid according to canvas principles and stores the command > app then generates the canvas picture from the stored commands > app renders the picture in the terminal`

## Assumptions

* Cannot create a canvas with a decimal
* Cannot create a canvas with number for width or height less than 3
* Cannot create a canvas with non numeric width and height
* Will need to handle lowercase commands
* There must be a canvas before any other drawing commands can be called
* Canvas command can not be called again
* Rectangles have a fill colour, and can overlap
* Fill color can only have one alphanumeric character
* Everything can overlap
* A line or rectangle drawn again with the same co-ordinates will replace the previous

## Finally, some ideas for expansion

* Add clear canvas command
* Ability to delete lines, rectangles
* Ability to transform the canvas - scale, flip, rotate etc
* Add actual colors
* Ability to save / export a drawing
