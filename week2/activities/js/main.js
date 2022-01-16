function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        if (i % 3 == 0) output += "Fizz";
        if (i % 5 == 0) output += "Buzz";
        x = (output || i);
    }    
    document.getElementsByClassName("fizzy").innerHTML = x;
}