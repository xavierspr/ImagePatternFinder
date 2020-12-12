# ImagePatternFinder
A simple algorithm exercise in javascript to find a text pattern in an array of strings

## Purpose
My girlfriend got this exercise (see [PDF](https://github.com/xavierspr/ImagePatternFinder/blob/main/Recherche%20de%20pattern.pdf) in french) for a job interview and I wanted to solve it, for fun.
Basically, in an "image" in the form of an array of strings and a pattern, in the same form, your function must be able to return the coordinates of the pattern if it is present in the image or [-1,-1] if not.

## Assumptions
Assuming a rectangular image, meaning every string has the same length. Also assuming the number of elements in the array is the height and the string length the width.

## Proposed solution
Loop through the array from the 1st element to the last minus the height of pattern. Search for the first line of the pattern in each line of the image. If found, in a new loop, for each following line of the pattern, check if the next pattern element can be found in the image and if it is at the same relative position in the string.

## How to run
Simplest is to copy and paste the code into a console in your browser and to run it. Note that running successively may lead to errors because the browser may remember variable definitions so refreshing (F5) between two runs may be necessary.
