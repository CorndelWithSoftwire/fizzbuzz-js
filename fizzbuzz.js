

// Here, we create our main function.
function fizzbuzz() {

    console.log('Welcome to FizzBuzz!');

    // Put your code here...

    for (let x = 1; x <= 100; x++) {
        arr = [];
        if (x % 3 == 0) {
            arr.push("Fizz")
        }
        if (x % 5 == 0) {
            arr.push("Buzz")
        }
        if (arr.length == 0) {
            console.log(x)
        }
        else {
            console.log(arr.join(""))
        }
    }
}
// Now we run the main function...
fizzbuzz();
