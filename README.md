# Calculator

A javascript based calculator.

[Click here to view in broswer.](https://chargrilledchook.github.io/calculator/)

## Project Summary

The penultimate project for the Web Development 101 module of The Odin Project. The original spec can be found [here](https://www.theodinproject.com/courses/web-development-101/lessons/calculator). Showcases both DOM manuipulation and parsing complex user input with Javascript.

## Features

* Correct order of operations
* Nifty old school gameboy theme
* Rounds decimals to 2 places if number is a float
* Display doesn't overflow
* Snarky error message for zero division
* Clear button
* Impossible to input multiple operators in a row

## TODO

### Known Bugs:

* Can put a single 0 in the front of a number ie 0251

### Bonus / Extra features:

#### My Updates

* Add a small text blurb on page with a link to README and some flavour text - Odintendo Mathboy
* Improve equals functionality - currently cannot chain operations with the results of the previous one (without manually re-entering)
* Add a footer with my name and link to github
* Polish visually / improve CSS
* Improve display (see google calc for reference - secondary display with operation details)
* Currently only supports 2 decimal places - increase? (Easy change)
* Improve text wrapping / overflow to fit more in display
* Code refactor - currently very long / not very DRY. Find ways to reduce code repetition - especially event listeners for digits etc

#### Odin Extra Credit:

* Add backspace button (function)
* Add keyboard support
* Add float support (. button function)

## Version History

Version 1 completed on 21/5/2020. All majors features are implemented per spec, and extra features from the spec plus my own desired additions are detailed above.

## Reflections

### Successes

While probably far from pretty, the overarching logic for this program was entirely my own. While I did do a lot of googling to complete this project, the entirety was for implementation details rather than bigger picture logic. Being able to work through reasonably complicated logic for a task like this is a good win.

### Challenges

Largest block with this one was mental. Put it on the backburner for too long, but was able to finish it in a surprisingly short amount of time after forcing myself to sit in front of it for only 2 - 3 hours total, broken up in 25 minute blocks. Lesson, sometimes just forcing yourself in front of the problem is enough.

On the implementation front the code is very WET. I need to find a way to not rely on so many individual event listeners for individual digits etc and find a more programmatic method.

## Follow Up

* Seek feedback online (Odin / CS50 discords are a good start)
* Look through other student solutions for alternative ideas and approaches