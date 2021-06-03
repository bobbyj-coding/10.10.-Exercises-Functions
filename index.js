// 10.10.1 Rectangles
// Write a function makeLine(size) that returns a line with exactly size hashes

function makeLine(size) {
  let emptySpace = "";
  for (let i = 1; i <= size; i++) {
      emptySpace += "#";  // emptySpace = emptySpace + #
  }
  return emptySpace;
}

console.log(makeLine(9));

console.log("\n");

/* Write a function called makeSquare(size) that returns a size by size string of hashes. The function should NOT print each row of the square. Instead, it must return a single string that contains the entire shape
*/

function makeSquare(size) {
  let row = [];  // create an empty array
  for (let j = 0; j < size; j++) { // loop through
    let fullLine = makeLine(size); // create a variable to store the value of a line of hashes (row) from my makeLine function... reuse your function
    row.push(fullLine); // for each cycle of the loop (from number in size argument), a row of hashes will be added
  }
  return row.join("\n");  // use join method to separate array into strings (at each comma) and use a new line to stack them - SYNTAX - array.join(separator) - The elements of the string will be separated by a specified separator and its default value is a comma(, )... but in this case, we used "\n" to separate them into lines or rows and stack each string
}

/* almost made a triangle layout accidentally here

function makeSquare(size) {
  let hashes = "";
  let row = ("\n");
  for (let j = 0; j <= size; j++) {
    hashes += "#";
    for (let k = 0; k <= size; k++) {
      row = hashes + row;
      console.log(row);
    }
  }
  return hashes + "\n";
}

*/

/*  for (let i = 1; i <= size; i++) {
    hashes += hashes + "#";
  }
  for (let j = 1; j <= size; j++) {
    row = hashes + row;
    console.log(size);
  }
*/
/*
  for (let i = 1; i < size; i++) {
    for (let j = 1; j < size; j++) {
      hashes += hashes + "#";
    }
  } 
  return hashes + row;
}
*/


console.log(makeSquare(16));

console.log("\n"); 



/* Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. Use your makeLine function to do this.

*/

// 10.10.2 Triangles

/* Write a function makeDownwardStairs(height) that prints the staircase pattern shown 

*/