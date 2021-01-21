var arr = [1,2,3]
// var is short for variable, so here they're creating a variable called arr and setting it equal to an array (when you see [x,y,z...] that's an array) with the values 1, 2 and 3.

function sumArray(arr){
  let sum = 0
  // sum is also a variable, but you have to use the 'let' keyword because you're going to overwrite it several times in the forloop below.

  for(let i = 0; i < arr.length; i++){
    // think of i as your counter, later you're going to use it to access the numbers inside the arr array
    // The middle section tells the foor loop how long to run. In this example, it's telling the for loop to run so long as i is less than the length of the arr array (3 - so keep running till i = 2. )
    // i++ means that we're adding 1 to I each time the for loop runs


    // just ignore these for now. This will print when you run this code to help visualize the for loop.
    console.log('for this run of the loop:')
    console.log('i = ', i)
    console.log('arr[i] = ', arr[i])
    console.log('sum = ', sum)
    console.log('----------------------------------------')

    sum += arr[i]
    // this is where we actually add up the numbers in the array.
    // += operator lets us access sum, and add the value of arr[i] to it
    // arr[i] is accessing the values within the arr array. Arrays are based off a zero index
        // arr[0] = 1
        // arr[1] = 2
        // arr[2] = 3
  }
  return sum;
//   here we're just returning that sum variable we were keeping track of
}

console.log(sumArray(arr))
// this is how you print the code you just wrote. Open up a terminal and use the debug console. Press the play button on the top right of your screen and you should see this code run in your terminal.