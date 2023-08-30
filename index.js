//Assignment for the week is:
//Question no 01:
//- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
console.log("Question No 01: ");
var array1 = function (myArray, index, value) {
    myArray.splice(index, 0, value);
    console.log("Modified Array:", myArray);
};
array1([1, 5, 6, 74, 128], 2, 45);
//------------------
// Qustion no 02
// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation.
console.log("Question No 02: ");
var shoppingCart = ["book", "pencil", "pen", "grammer book"];
function addItem(a) {
    shoppingCart.splice(0, 0, a);
    console.log("Add item:", shoppingCart);
}
addItem("rubber");
function removeItem() {
    shoppingCart.splice(0, 1);
    console.log("Remove item:", shoppingCart);
}
removeItem();
function updateItem(a) {
    shoppingCart.splice(0, 1, a);
    console.log("Update item:", shoppingCart);
}
updateItem("shopner");
//------------------
//Question no 03
//- Write a program that uses a while loop to print the first 25 integers.
console.log("Question No 03: ");
var num = 0;
while (num < 25) {
    num++;
    console.log("While Loop:", num);
}
//------------------
// Question no 04
//- Write a program that uses a while loop to print the first 10 even numbers.
console.log("Question No 04: ");
var num = 0;
while (num <= 10) {
    if (num % 2 == 0) {
        console.log("First 10 num: ", num);
    }
    num++;
}
//------------------
//Question no 05
// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
console.log("Question No 05: ");
var fact1 = function (useri) {
    var iii = 1;
    var resulti = 1;
    while (iii < useri) {
        resulti = resulti * iii;
        iii++;
    }
    var gg = resulti * useri;
    return gg;
};
console.log("Factorial of the number:", fact1(4));
//------------------
//Question no 06
// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
console.log("Question No 06: ");
var nums = [1, 2, 3, 5, 5, -5, 23, -56];
for (var i = nums.length; i >= 0; i--) {
    nums[i];
    if (nums[i] <= -1) {
        nums.splice(i, 1);
    }
}
console.log("Remove Negative no from array:", nums);
//------------------
//Question no 07
// - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
console.log("Question No 07: ");
function arr(index) {
    var sum = 0;
    var i = 0;
    while (i <= index.length - 1) {
        sum += index[i];
        index[i];
        i++;
    }
    console.log("Sum of all the numbers:", sum);
}
arr([1, 5, 3]);
//------------------
//Question no 08
//- Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
console.log("Question No 08: ");
var tempInFah = [];
// function 
var tempInCel = function (input) {
    // input[i]
    var i = 0;
    while (i < input.length) {
        if (input[i] > 0) {
            var F = (input[i] * 9 / 5) + 32;
            tempInFah.push(F);
        }
        i++;
    }
    console.log("Converted temps", tempInFah);
};
tempInCel([45, 56]);
//------------------
