function reverseNumber() {
    let number = Number(document.getElementById("input_number").value);
    let reverse = Number(String(number).split('').reverse().join(''));

    document.getElementById("reverse").innerHTML = "Reverse : "+reverse;
}
reverseNumber();